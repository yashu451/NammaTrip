import React, { useEffect, useRef, useState, useMemo } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useLanguage } from '../context/LanguageContext.jsx';
import '../styles/tripMap.css';
import {
  MapPin,
  Compass,
  AlertTriangle,
  RefreshCw,
  Navigation,
  Clock,
  Layers,
  ArrowRight
} from 'lucide-react';

// Day-based color accents matching forest-green and heritage palette
const DAY_COLORS = {
  1: '#1B4332', // Deep Forest Green
  2: '#2D6A4F', // Emerald Green
  3: '#B45309', // Amber Terracotta
  4: '#40916C', // Leaf Green
  5: '#9B2226', // Heritage Vermilion
  default: '#1B4332'
};

export default function TripMap({
  itinerary,
  destinationId,
  startingCity,
  activePlaceId,
  onSelectPlace,
  onSelectDay,
  controlledDay
}) {
  const { language, t } = useLanguage();
  const mapContainerRef = useRef(null);
  const leafletMapRef = useRef(null);
  const markersRef = useRef({});
  const polylinesRef = useRef([]);

  const [mapData, setMapData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDayFilter, setSelectedDayFilter] = useState('all');

  // Sync controlledDay if passed from parent
  useEffect(() => {
    if (controlledDay !== undefined && controlledDay !== null) {
      setSelectedDayFilter(controlledDay);
    }
  }, [controlledDay]);

  // Fetch map and routing data from backend
  const fetchMapData = async () => {
    if (!itinerary || !Array.isArray(itinerary) || itinerary.length === 0) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/map/trip-map', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          itinerary,
          destinationId,
          startingCity
        })
      });

      if (!res.ok) {
        throw new Error(`Failed to load trip map data (HTTP ${res.status})`);
      }

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message || 'Map data generation failed.');
      }

      setMapData(data);
    } catch (err) {
      console.error('TripMap fetch error:', err);
      setError(err.message || 'Error loading map');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMapData();
  }, [itinerary, destinationId, startingCity]);

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Destroy existing instance if container is reused
    if (leafletMapRef.current) {
      leafletMapRef.current.remove();
      leafletMapRef.current = null;
    }

    // Default Karnataka coordinates
    const defaultCenter = [15.3173, 75.7139];
    const defaultZoom = 7;

    const map = L.map(mapContainerRef.current, {
      center: defaultCenter,
      zoom: defaultZoom,
      zoomControl: true,
      scrollWheelZoom: false // Prevent unintentional page scrolling hijack
    });

    // High quality OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(map);

    leafletMapRef.current = map;

    // Invalidate size once DOM layout is settled
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 250);

    return () => {
      clearTimeout(timer);
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  // Update Markers & Route lines when mapData or selectedDayFilter changes
  useEffect(() => {
    const map = leafletMapRef.current;
    if (!map || !mapData) return;

    // Clear existing markers
    Object.values(markersRef.current).forEach(marker => marker.remove());
    markersRef.current = {};

    // Clear existing polylines
    polylinesRef.current.forEach(layer => layer.remove());
    polylinesRef.current = [];

    const { stops = [], routes = [] } = mapData;

    // Filter stops based on selected day
    const visibleStops = stops.filter(stop => {
      if (!stop.hasCoordinates || !stop.lat || !stop.lng) return false;
      if (selectedDayFilter === 'all') return true;
      return stop.day === Number(selectedDayFilter);
    });

    // 0. Add Origin / Starting Location Marker if present
    if (mapData.startLocation && mapData.startLocation.hasCoordinates && (selectedDayFilter === 'all' || selectedDayFilter === 1)) {
      const start = mapData.startLocation;
      const startIcon = L.divIcon({
        className: 'nt-custom-marker-wrapper',
        html: `
          <div class="nt-marker-pin nt-marker-origin" id="marker-${start.id}" title="${start.name}">
            <span>🚩</span>
          </div>
        `,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -18]
      });

      const startMarker = L.marker([start.lat, start.lng], {
        icon: startIcon,
        zIndexOffset: 600
      });

      const startTitleDisplay = language === 'kn' ? (start.nameKn || start.name) : start.name;
      const startRegionDisplay = language === 'kn' ? (start.regionKn || start.districtKn) : `${start.district}, Karnataka`;

      const startPopupHtml = `
        <div class="nt-popup-box">
          <div class="nt-popup-slot" style="background-color: #B45309; color: #FFFFFF; font-weight: 700;">
            🚩 ${language === 'kn' ? 'ಪ್ರಾರಂಭಿಸುವ ತಾಣ' : 'Trip Starting Point'}
          </div>
          <div class="nt-popup-title">${startTitleDisplay}</div>
          <div class="nt-popup-time" style="margin-top: 6px;">📍 ${startRegionDisplay}</div>
        </div>
      `;

      startMarker.bindPopup(startPopupHtml);
      startMarker.addTo(map);
      markersRef.current[start.id] = startMarker;
    }

    // 1. Add Numbered Markers for visible stops
    visibleStops.forEach(stop => {
      const dayColorClass = `nt-marker-day-${stop.day <= 5 ? stop.day : 'default'}`;
      const isActive = activePlaceId === stop.id;

      // Custom HTML Marker using DivIcon
      const icon = L.divIcon({
        className: 'nt-custom-marker-wrapper',
        html: `
          <div class="nt-marker-pin ${dayColorClass} ${isActive ? 'active-highlight' : ''}" id="marker-${stop.id}">
            <span>${stop.stopNumber}</span>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -18]
      });

      const marker = L.marker([stop.lat, stop.lng], {
        icon,
        title: language === 'kn' ? (stop.titleKn || stop.title) : stop.title,
        zIndexOffset: isActive ? 1000 : stop.stopNumber
      });

      // Construct Popup Content with Bilingual Support
      const titleDisplay = language === 'kn' ? (stop.titleKn || stop.title) : stop.title;
      const titleAlt = language === 'kn' ? stop.title : stop.titleKn;
      const descDisplay = language === 'kn' ? (stop.descriptionKn || stop.description) : stop.description;
      const slotLabel = language === 'kn' ? (stop.slotLabelKn || stop.slotLabel) : stop.slotLabel;
      const dayText = language === 'kn' ? `ದಿನ ${stop.day}` : `Day ${stop.day}`;

      const popupHtml = `
        <div class="nt-popup-box">
          <div class="nt-popup-badge-row">
            <span class="nt-popup-day-badge">${dayText} • ${slotLabel}</span>
            ${stop.fee !== undefined ? `<span class="nt-popup-fee">₹${stop.fee}</span>` : ''}
          </div>
          <h4 class="nt-popup-title">${titleDisplay}</h4>
          ${titleAlt && titleAlt !== titleDisplay ? `<div class="nt-popup-title-alt">${titleAlt}</div>` : ''}
          ${stop.time ? `<div class="nt-popup-time">🕒 ${stop.time}</div>` : ''}
          ${descDisplay ? `<p class="nt-popup-desc">${descDisplay}</p>` : ''}
          <button class="nt-popup-action-btn" id="btn-popup-${stop.id}">
            <span>${language === 'kn' ? 'ದಿನಚರಿಯಲ್ಲಿ ನೋಡಿ' : 'View in Itinerary'}</span>
            <span>&rarr;</span>
          </button>
        </div>
      `;

      marker.bindPopup(popupHtml);

      // Marker click interactions
      marker.on('click', () => {
        if (onSelectPlace) {
          onSelectPlace(stop.id, stop.day);
        }
      });

      // Listen for popup open to attach event to button inside HTML popup
      marker.on('popupopen', () => {
        const btn = document.getElementById(`btn-popup-${stop.id}`);
        if (btn) {
          btn.onclick = () => {
            if (onSelectPlace) {
              onSelectPlace(stop.id, stop.day);
            }
          };
        }
      });

      marker.addTo(map);
      markersRef.current[stop.id] = marker;
    });

    // 2. Add Route Geometry Lines
    // "Connect the stops in their actual visit order with a route line wherever routing data is available."
    // "A straight line between markers must not be presented as a real driving route."
    const visibleRoutes = routes.filter(r => {
      if (selectedDayFilter === 'all') return true;
      return r.day === Number(selectedDayFilter);
    });

    visibleRoutes.forEach(route => {
      // ONLY draw polyline if real road route geometry was computed
      if (route.routeAvailable && Array.isArray(route.geometry) && route.geometry.length > 0) {
        const routeColor = DAY_COLORS[route.day] || DAY_COLORS.default;
        const polyline = L.polyline(route.geometry, {
          color: routeColor,
          weight: 4,
          opacity: 0.85,
          dashArray: null, // Solid line for real driving route
          lineJoin: 'round',
          lineCap: 'round'
        }).addTo(map);

        polylinesRef.current.push(polyline);
      }
    });

    // 3. Auto Fit Map Bounds to visible stops
    if (visibleStops.length > 0) {
      const latLngs = visibleStops.map(s => [s.lat, s.lng]);
      const bounds = L.latLngBounds(latLngs);
      map.fitBounds(bounds, {
        padding: [45, 45],
        maxZoom: 14,
        animate: true,
        duration: 0.5
      });
    } else if (mapData.bounds) {
      map.fitBounds(mapData.bounds, { padding: [40, 40], maxZoom: 13 });
    }
  }, [mapData, selectedDayFilter, language]);

  // Handle external activePlaceId highlight
  useEffect(() => {
    if (!activePlaceId || !markersRef.current[activePlaceId]) return;

    const marker = markersRef.current[activePlaceId];
    const map = leafletMapRef.current;

    if (marker && map) {
      // Pan to marker and open popup smoothly
      const latLng = marker.getLatLng();
      if (!map.getBounds().contains(latLng)) {
        map.panTo(latLng, { animate: true, duration: 0.4 });
      }
      marker.openPopup();
    }
  }, [activePlaceId]);

  // Generate dynamic day filter list from itinerary
  const dayOptions = useMemo(() => {
    if (!itinerary || !Array.isArray(itinerary)) return [];
    return itinerary.map((dayPlan, idx) => dayPlan.day || idx + 1);
  }, [itinerary]);

  // Route statistics summary
  const routeStats = useMemo(() => {
    if (!mapData || !mapData.routes) return { totalKm: 0, totalMin: 0, hasRealRoutes: false };
    const relevant = mapData.routes.filter(r => {
      if (selectedDayFilter === 'all') return true;
      return r.day === Number(selectedDayFilter);
    });

    const totalKm = relevant.reduce((sum, r) => sum + (r.distanceKm || 0), 0);
    const totalMin = relevant.reduce((sum, r) => sum + (r.durationMin || 0), 0);
    const hasRealRoutes = relevant.some(r => r.routeAvailable);

    return {
      totalKm: parseFloat(totalKm.toFixed(1)),
      totalMin,
      hasRealRoutes
    };
  }, [mapData, selectedDayFilter]);

  const handleFilterClick = (dayVal) => {
    setSelectedDayFilter(dayVal);
    if (dayVal !== 'all' && onSelectDay) {
      onSelectDay(dayVal);
    }
  };

  if (error) {
    return (
      <div className="trip-map-error-card">
        <AlertTriangle size={32} color="#DC2626" />
        <div className="trip-map-error-title">{t('mapError')}</div>
        <p className="trip-map-error-desc">{error}</p>
        <button onClick={fetchMapData} className="btn btn-secondary btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <RefreshCw size={14} />
          <span>{t('mapRetry')}</span>
        </button>
      </div>
    );
  }

  const validStopsCount = mapData?.stops?.filter(s => s.hasCoordinates).length || 0;
  const missingCount = mapData?.missingLocations?.length || 0;

  return (
    <div className="trip-map-wrapper" id="trip-map-section">
      {/* Header with Title and Day Filters */}
      <div className="trip-map-header">
        <div className="trip-map-title-group">
          <h3 className="trip-map-title">
            <Compass size={20} color="var(--primary-700)" />
            <span>{t('tripMapTitle')}</span>
          </h3>
          <div className="trip-map-subtitle">
            {t('tripMapSubtitle')}
          </div>
        </div>

        {/* Dynamic Day Filter Buttons */}
        <div className="trip-map-filters">
          <button
            type="button"
            className={`trip-map-filter-btn ${selectedDayFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
          >
            <Layers size={14} />
            <span>{t('filterAllDays')}</span>
          </button>

          {dayOptions.map(dayNum => (
            <button
              key={dayNum}
              type="button"
              className={`trip-map-filter-btn ${selectedDayFilter === dayNum ? 'active' : ''}`}
              onClick={() => handleFilterClick(dayNum)}
            >
              <span>{t('dayFilter')} {dayNum}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Map Canvas */}
      <div className="trip-map-canvas-container">
        <div ref={mapContainerRef} className="trip-map-leaflet-instance" />

        {/* Loading Spinner Overlay */}
        {isLoading && (
          <div className="trip-map-loading-overlay">
            <div className="trip-map-spinner" />
            <div className="trip-map-loading-text">{t('mapLoading')}</div>
          </div>
        )}
      </div>

      {/* Footer Info / Status Bar */}
      <div className="trip-map-status-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          {/* Stops count badge */}
          <div className="trip-map-route-badge">
            <MapPin size={15} color="var(--primary-700)" />
            <span>
              {validStopsCount} {t('mapStopsCount')}
            </span>
          </div>

          {/* Route Distance Badge */}
          {routeStats.hasRealRoutes ? (
            <div className="trip-map-route-badge" style={{ color: 'var(--accent-gold-hover)' }}>
              <Navigation size={15} />
              <span>
                {t('mapRouteDetails')}: {routeStats.totalKm} km {routeStats.totalMin > 0 ? `(~${routeStats.totalMin} min drive)` : ''}
              </span>
            </div>
          ) : (
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              {t('mapRouteUnavailable')}
            </div>
          )}
        </div>

        {/* Missing Coordinates Notification if any */}
        {missingCount > 0 && (
          <div className="trip-map-missing-badge">
            <AlertTriangle size={14} />
            <span>
              {missingCount} {t('mapMissingNotice')}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
