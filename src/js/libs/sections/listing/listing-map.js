export function initListingMap() {
  const token =
    "pk.eyJ1IjoiY3NzbmluamEiLCJhIjoiY2toZW1nYm0zMDAxODJycXFzZ3g4cnZ6diJ9.9ebfrGREuwkauRr_afDTgA";
  const markerOptions = {
    color: "red",
  };

  return {
    initMainMap() {
      mapboxgl.accessToken = token
      const longitude = parseFloat(document.getElementById('main-map').getAttribute('data-long'))
      const latitude = parseFloat(document.getElementById('main-map').getAttribute('data-lat'))
      const mainMap = new mapboxgl.Map({
        container: "main-map",
        style: "mapbox://styles/mapbox/light-v10",
        center: [longitude, latitude],
        zoom: 12,
      });

      const subMap = new mapboxgl.Map({
        container: "sub-map",
        style: "mapbox://styles/mapbox/light-v10",
        center: [longitude, latitude],
        zoom: 12,
      });

      mainMap.addControl(new mapboxgl.NavigationControl());
      subMap.addControl(new mapboxgl.NavigationControl());

      const marker1 = new mapboxgl.Marker(markerOptions)
        .setLngLat([longitude, latitude])
        .addTo(mainMap)

      const marker2 = new mapboxgl.Marker(markerOptions)
        .setLngLat([longitude, latitude])
        .addTo(subMap)
    },
  };
}
