import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, '../client/public/images/destinations');
const distDir = path.resolve(__dirname, '../client/dist/images/destinations');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

const destinationSources = {
  'jog-falls': { wiki: 'Jog_Falls' },
  'bandipur': { wiki: 'Bandipur_National_Park' },
  'nandi-hills': { wiki: 'Nandi_Hills,_India' },
  'shravanabelagola': { wiki: 'Shravanabelagola' },
  'murudeshwara': { wiki: 'Murdeshwar' },
  'dandeli': { wiki: 'Dandeli' },
  'srirangapatna': { wiki: 'Srirangapatna' },
  'aihole': { wiki: 'Aihole' },
  'bidar': { wiki: 'Bidar_Fort' },
  'bengaluru': { wiki: 'Lal_Bagh' },
  'somnathapura': { wiki: 'Chennakeshava_Temple,_Somanathapura' },
  'shivanasamudra': { wiki: 'Shivanasamudra_Falls' },
  'nagarhole': { wiki: 'Nagarhole_National_Park' },
  'agumbe': { wiki: 'Agumbe' },
  'kudremukh': { wiki: 'Kudremukha' },
  'sringeri': { wiki: 'Sringeri_Sharada_Peetham' },
  'yana-rocks': { wiki: 'Yana,_India' },
  'st-marys-island': { wiki: 'St._Mary%27s_Islands' },
  'dharmasthala': { wiki: 'Dharmasthala_Temple' },
  'kukke-subramanya': { wiki: 'Kukke_Subramanya_Temple' },
  'mangaluru': { wiki: 'Panambur_Beach' },
  'gokak-falls': { wiki: 'Gokak_Falls' },
  'belagavi-fort': { wiki: 'Belgaum_Fort' },
  'kittur': { wiki: 'Kittur' },
  'lakkundi': { wiki: 'Lakkundi' },
  'gadag-temples': { wiki: 'Trikuteshwara_Temple,_Gadag' },
  'davanagere': { wiki: 'Benne_dose' },
  'harihar': { wiki: 'Harihareshwara_Temple' },
  'madhugiri': { wiki: 'Madhugiri' },
  'devarayanadurga': { wiki: 'Devarayanadurga' },
  'kalaburagi-fort': { wiki: 'Gulbarga_Fort' },
  'sannati': { direct: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/3rd_century_BCE_to_7th_century_CE_Sannathi_Sannati_Sonti_ancient_city_archaeological_site%2C_Karnataka_India_-_97.jpg/1280px-3rd_century_BCE_to_7th_century_CE_Sannathi_Sannati_Sonti_ancient_city_archaeological_site%2C_Karnataka_India_-_97.jpg' },
  'raichur-fort': { wiki: 'Raichur_Fort' },
  'ballari-fort': { wiki: 'Bellary_Fort' },
  'sandur': { wiki: 'Krauncha_Giri' },
  'kaginele': { wiki: 'Kanaka_Dasa' },
  'itagi': { wiki: 'Mahadeva_Temple,_Itagi' },
  'anegundi': { wiki: 'Anegundi' },
  'tungabhadra-dam': { wiki: 'Tungabhadra_Dam' },
  'sakleshpur': { wiki: 'Manjarabad_Fort' },
  'kemmangundi': { wiki: 'Kemmangundi' },
  'kodachadri': { wiki: 'Kodachadri' },
  'kollur': { wiki: 'Kollur_Mookambika_Temple' },
  'kaup-beach': { wiki: 'Kapu,_Udupi' },
  'karwar': { wiki: 'Karwar' },
  'br-hills': { wiki: 'Biligiriranga_Hills' },
  'ramanagara': { wiki: 'Ramanagara' },
  'janapada-loka': { wiki: 'Janapada_Loka' },
  'skandagiri': { wiki: 'Skandagiri' },
  'kotilingeshwara': { wiki: 'Kolar_district' },
  'antaragange': { wiki: 'Antara_Gange' },
  'ranganathittu': { wiki: 'Ranganathittu_Bird_Sanctuary' },
  'nanjangud': { wiki: 'Nanjangud' },
  'talakaveri': { wiki: 'Talakaveri' },
  'bannerghatta': { wiki: 'Bannerghatta_National_Park' },
  'devanahalli-fort': { wiki: 'Devanahalli_Fort' },
  'makalidurga': { wiki: 'Makalidurga' },
  'siddaganaga': { wiki: 'Siddaganga_Matha' },
  'yadgir-fort': { wiki: 'Yadgir_district' },
  'almatti-dam': { wiki: 'Almatti_Dam' },
  'dharwad-cultural': { wiki: 'Dharwad' },
  'kinnal': { wiki: 'Koppal' },
  'ilkal': { wiki: 'Ilkal_sari' },
  'netrani-island': { wiki: 'Netrani_Island' }
};

async function downloadImages() {
  console.log(`Starting download of ${Object.keys(destinationSources).length} genuine destination images...`);
  let successCount = 0;

  for (const [id, src] of Object.entries(destinationSources)) {
    const pubDestPath = path.join(publicDir, `${id}.jpg`);
    const distDestPath = path.join(distDir, `${id}.jpg`);

    if (fs.existsSync(pubDestPath) && fs.statSync(pubDestPath).size > 2000) {
      console.log(`  [SKIP] ${id}.jpg already exists (${fs.statSync(pubDestPath).size} bytes)`);
      if (!fs.existsSync(distDestPath)) {
        fs.copyFileSync(pubDestPath, distDestPath);
      }
      successCount++;
      continue;
    }

    try {
      let imgUrl = src.direct;
      if (!imgUrl && src.wiki) {
        const queryUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${src.wiki}&prop=pageimages&format=json&pithumbsize=1000`;
        const apiRes = await fetch(queryUrl, {
          headers: { 'User-Agent': 'NammaTrip-Tourism-Platform/1.0 (contact@nammatrip.ai)' }
        });
        const apiData = await apiRes.json();
        const pages = apiData.query?.pages || {};
        const page = Object.values(pages)[0];
        imgUrl = page?.thumbnail?.source;
      }

      if (!imgUrl) {
        console.warn(`  [WARN] No image found for ${id}`);
        continue;
      }

      const imgRes = await fetch(imgUrl, {
        headers: { 'User-Agent': 'NammaTrip-Tourism-Platform/1.0 (contact@nammatrip.ai)' }
      });

      if (!imgRes.ok) {
        console.warn(`  [WARN] HTTP ${imgRes.status} fetching image for ${id}`);
        continue;
      }

      const buffer = Buffer.from(await imgRes.arrayBuffer());
      if (buffer.length < 500) {
        console.warn(`  [WARN] Image too small (${buffer.length} bytes) for ${id}`);
        continue;
      }

      fs.writeFileSync(pubDestPath, buffer);
      fs.writeFileSync(distDestPath, buffer);
      console.log(`  [DONE] ${id}.jpg saved (${buffer.length} bytes)`);
      successCount++;

      // Polite rate limit delay
      await new Promise(r => setTimeout(r, 200));
    } catch (err) {
      console.error(`  [ERROR] Failed ${id}:`, err.message);
    }
  }

  console.log(`\nSuccessfully downloaded and saved ${successCount} destination images.`);
}

downloadImages();

