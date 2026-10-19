// Automated comprehensive test suite for NammaTrip AI
import assert from 'node:assert';

const BASE_URL = 'http://localhost:5000';

async function runTests() {
  console.log('🚀 Starting NammaTrip AI End-to-End Test Suite...\n');
  let testsPassed = 0;
  let testsFailed = 0;
  let serverProcess = null;

  try {
    await fetch(`${BASE_URL}/api/health`);
  } catch (err) {
    console.log('  ℹ️ Server not detected on port 5000. Starting server for test suite...');
    const { spawn } = await import('node:child_process');
    serverProcess = spawn('node', ['server/server.js'], { stdio: 'pipe' });
    for (let i = 0; i < 30; i++) {
      await new Promise(r => setTimeout(r, 200));
      try {
        const res = await fetch(`${BASE_URL}/api/health`);
        if (res.ok) break;
      } catch (e) {}
    }
  }

  async function test(name, fn) {
    try {
      await fn();
      console.log(`  ✅ PASS: ${name}`);
      testsPassed++;
    } catch (err) {
      console.error(`  ❌ FAIL: ${name}`);
      console.error(`     Reason:`, err.message);
      testsFailed++;
    }
  }

  // 1. Health Check
  await test('Health check endpoint /api/health returns healthy', async () => {
    const res = await fetch(`${BASE_URL}/api/health`);
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.status, 'healthy');
    assert.strictEqual(data.database, 'connected (SQLite WAL)');
  });

  // 2. Explore Destinations & Local Image Assets
  await test('GET /api/destinations returns curated Karnataka destinations and valid local images', async () => {
    const res = await fetch(`${BASE_URL}/api/destinations`);
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.success, true);
    assert(data.destinations.length >= 10, 'Expected at least 10 curated destinations');
    
    const hampi = data.destinations.find(d => d.id === 'hampi');
    assert(hampi, 'Hampi destination must exist');
    assert.strictEqual(hampi.nameKn, 'ಹಂಪಿ');
    assert(hampi.heritageStoryKn, 'Hampi Kannada story must exist');
    assert(hampi.historicalSources, 'Historical sources must exist');

    // Verify all destinations map to local image assets that return HTTP 200 OK
    for (const d of data.destinations) {
      assert(d.heroImage.startsWith('/images/destinations/'), `Destination ${d.id} must use local image asset, got ${d.heroImage}`);
      const imgRes = await fetch(`${BASE_URL}${d.heroImage}`);
      assert.strictEqual(imgRes.status, 200, `Image for ${d.id} at ${d.heroImage} must return 200`);
      assert(imgRes.headers.get('content-type')?.includes('image'), `Image for ${d.id} must have image content-type`);
    }

    // Verify fallback image exists
    const fbRes = await fetch(`${BASE_URL}/images/destinations/fallback.jpg`);
    assert.strictEqual(fbRes.status, 200, 'Fallback image must return 200');
  });

  // 3. Category & Region Filtering
  await test('GET /api/destinations filters correctly by category and region', async () => {
    const resCat = await fetch(`${BASE_URL}/api/destinations?category=Heritage`);
    const dataCat = await resCat.json();
    assert(dataCat.destinations.every(d => d.category.includes('Heritage')));

    const resSearch = await fetch(`${BASE_URL}/api/destinations?q=ವಿಜಯನಗರ`);
    const dataSearch = await resSearch.json();
    assert(dataSearch.destinations.length > 0, 'Kannada search should find matching destinations');
  });

  // 4. Registration of a new user
  const testUserEmail = `traveler_${Date.now()}@nammatrip.test`;
  let userToken = '';
  let userId = null;

  await test('POST /api/auth/register creates a new user account and returns JWT', async () => {
    const res = await fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Darshan Gowda',
        email: testUserEmail,
        password: 'SecurePassword123!',
        confirmPassword: 'SecurePassword123!',
        language: 'kn'
      })
    });
    const data = await res.json();
    assert.strictEqual(res.status, 201);
    assert.strictEqual(data.success, true);
    assert(data.token, 'JWT token must be present');
    assert.strictEqual(data.user.email, testUserEmail);
    assert.strictEqual(data.user.language_pref, 'kn');
    userToken = data.token;
    userId = data.user.id;
  });

  // 5. Duplicate Email Rejection
  await test('POST /api/auth/register rejects duplicate email with 409', async () => {
    const res = await fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Darshan Copy',
        email: testUserEmail,
        password: 'SecurePassword123!'
      })
    });
    assert.strictEqual(res.status, 409);
  });

  // 6. User Login
  await test('POST /api/auth/login authenticates registered user', async () => {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: testUserEmail,
        password: 'SecurePassword123!'
      })
    });
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.success, true);
    assert(data.token, 'Token returned on login');
    assert.strictEqual(data.user.name, 'Darshan Gowda');
  });

  // 7. Profile & Session verification
  await test('GET /api/auth/me verifies session with Bearer token', async () => {
    const res = await fetch(`${BASE_URL}/api/auth/me`, {
      headers: { 'Authorization': `Bearer ${userToken}` }
    });
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.user.email, testUserEmail);
    assert(data.profile, 'Profile should be loaded');
  });

  // 8. Protected route unauthorized rejection
  await test('Protected routes reject requests without token with 401', async () => {
    const res = await fetch(`${BASE_URL}/api/trips`);
    assert.strictEqual(res.status, 401);
  });

  // 9. Forgot Password and Reset Flow
  let resetToken = '';
  await test('POST /api/auth/forgot-password generates valid reset token', async () => {
    const res = await fetch(`${BASE_URL}/api/auth/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: testUserEmail })
    });
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert(data.resetToken, 'Reset token must be provided in response');
    resetToken = data.resetToken;
  });

  await test('POST /api/auth/reset-password resets password using token', async () => {
    const res = await fetch(`${BASE_URL}/api/auth/reset-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: resetToken,
        newPassword: 'NewPassword999!',
        confirmPassword: 'NewPassword999!'
      })
    });
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.success, true);

    // Verify login with new password
    const loginRes = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: testUserEmail,
        password: 'NewPassword999!'
      })
    });
    const loginData = await loginRes.json();
    assert.strictEqual(loginRes.status, 200);
    userToken = loginData.token;
  });

  // 10. Planner Budget Feasibility Calculation
  await test('POST /api/planner/calculate-budget calculates accurate expenses and feasibility', async () => {
    const res = await fetch(`${BASE_URL}/api/planner/calculate-budget`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        startingCity: 'Bengaluru',
        destinationId: 'hampi',
        durationDays: 3,
        travelers: 2,
        budgetPerPerson: 6000,
        transportMode: 'ksrtc',
        stayTier: 'moderate'
      })
    });
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert(data.budget.estimatedTotalCost > 0);
    assert(data.budget.breakdown.transport.total > 0);
    assert(data.budget.breakdown.accommodation.total > 0);
    assert(data.budget.breakdown.food.total > 0);
    assert(data.budget.feasibilityStatus, 'Feasibility status must be determined');
  });

  // 11. Itinerary Generation
  let generatedPlanData = null;
  await test('POST /api/planner/generate produces day-by-day itinerary with cultural tips', async () => {
    const res = await fetch(`${BASE_URL}/api/planner/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        startingCity: 'Bengaluru',
        destinationId: 'hampi',
        durationDays: 3,
        travelers: 2,
        budgetPerPerson: 5000,
        transportMode: 'ksrtc',
        stayTier: 'moderate',
        interests: ['Heritage', 'Culture', 'Food']
      })
    });
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.success, true);
    assert.strictEqual(data.itinerary.length, 3, 'Must produce 3 days of activities');
    assert(data.itinerary[0].morning.title, 'Day 1 morning activity must exist');
    assert(data.itinerary[0].morning.titleKn, 'Day 1 morning Kannada title must exist');
    assert(data.itinerary[0].culturalTip, 'Day 1 cultural tip must exist');
    generatedPlanData = data;
  });

  // 12. Fix My Trip Feature
  await test('POST /api/planner/fix-trip adapts itinerary when constraints change', async () => {
    const res = await fetch(`${BASE_URL}/api/planner/fix-trip`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        currentPlan: generatedPlanData,
        newBudgetPerPerson: 3500, // Reduced budget
        newDurationDays: 2,        // Reduced duration
        newTransportMode: 'ksrtc',
        newStayTier: 'budget'
      })
    });
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.success, true);
    assert.strictEqual(data.revisedPlan.itinerary.length, 2, 'Revised itinerary should have 2 days');
    assert(data.revisedPlan.fixSummary.explanations.length > 0, 'Explanations must be provided');
    assert(data.revisedPlan.fixSummary.explanationsKn.length > 0, 'Kannada explanations must be provided');
    assert(data.revisedPlan.budget.estimatedTotalCost < generatedPlanData.budget.estimatedTotalCost, 'Cost must be reduced');
  });

  // 13. Save Trip to Database
  let savedTripId = null;
  await test('POST /api/trips saves itinerary to user account', async () => {
    const res = await fetch(`${BASE_URL}/api/trips`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`
      },
      body: JSON.stringify({
        title: 'Hampi Golden Empire 3-Day Tour',
        destination: 'hampi',
        startingCity: 'Bengaluru',
        durationDays: 3,
        travelersCount: 2,
        budgetPerPerson: 5000,
        totalBudget: 10000,
        estimatedTotalCost: generatedPlanData.budget.estimatedTotalCost,
        feasibilityStatus: generatedPlanData.budget.feasibilityStatus,
        preferences: { stayTier: 'moderate' },
        transportMode: 'ksrtc',
        itinerary: generatedPlanData.itinerary,
        budgetBreakdown: generatedPlanData.budget
      })
    });
    const data = await res.json();
    assert.strictEqual(res.status, 201);
    assert(data.trip.id, 'Saved trip ID must exist');
    assert.strictEqual(data.trip.userId, userId);
    savedTripId = data.trip.id;
  });

  // 14. Retrieve Saved Trip
  await test('GET /api/trips/:id retrieves saved trip for the owner', async () => {
    const res = await fetch(`${BASE_URL}/api/trips/${savedTripId}`, {
      headers: { 'Authorization': `Bearer ${userToken}` }
    });
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.trip.id, savedTripId);
    assert.strictEqual(data.trip.title, 'Hampi Golden Empire 3-Day Tour');
  });

  // 15. Cross-User Privacy & Authorization Enforced
  await test('Privacy enforcement: another user cannot access or delete private trip', async () => {
    // Register another user
    const otherRes = await fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Other Traveler',
        email: `intruder_${Date.now()}@nammatrip.test`,
        password: 'Password999!'
      })
    });
    const otherData = await otherRes.json();
    const otherToken = otherData.token;

    // Attempt to access user 1's trip
    const getRes = await fetch(`${BASE_URL}/api/trips/${savedTripId}`, {
      headers: { 'Authorization': `Bearer ${otherToken}` }
    });
    assert.strictEqual(getRes.status, 403, 'Should reject with 403 Forbidden');

    // Attempt to delete user 1's trip
    const delRes = await fetch(`${BASE_URL}/api/trips/${savedTripId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${otherToken}` }
    });
    assert.strictEqual(delRes.status, 403, 'Should reject with 403 Forbidden');
  });

  // 16. Delete Trip
  await test('DELETE /api/trips/:id removes trip for owner', async () => {
    const res = await fetch(`${BASE_URL}/api/trips/${savedTripId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${userToken}` }
    });
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.success, true);

    // Verify deletion
    const verifyRes = await fetch(`${BASE_URL}/api/trips/${savedTripId}`, {
      headers: { 'Authorization': `Bearer ${userToken}` }
    });
    assert.strictEqual(verifyRes.status, 404);
  });

  // 17. Bookmark / Favorites Management
  await test('POST /api/favorites/:id toggles favorite destinations', async () => {
    const addRes = await fetch(`${BASE_URL}/api/favorites/belur`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${userToken}` }
    });
    const addData = await addRes.json();
    assert.strictEqual(addData.action, 'added');

    const listRes = await fetch(`${BASE_URL}/api/favorites`, {
      headers: { 'Authorization': `Bearer ${userToken}` }
    });
    const listData = await listRes.json();
    assert(listData.favoriteIds.includes('belur'), 'Belur should be in favorites');

    const removeRes = await fetch(`${BASE_URL}/api/favorites/belur`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${userToken}` }
    });
    const removeData = await removeRes.json();
    assert.strictEqual(removeData.action, 'removed');
  });

  console.log(`\n========================================`);
  console.log(`Test Results: ${testsPassed} Passed, ${testsFailed} Failed`);
  console.log(`========================================\n`);

  if (serverProcess) {
    try {
      serverProcess.kill();
    } catch (e) {}
  }

  if (testsFailed > 0) {
    process.exit(1);
  }
}

runTests().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
