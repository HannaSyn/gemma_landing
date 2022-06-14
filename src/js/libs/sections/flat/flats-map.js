export function initFlatsMap() {
  let map = "";

  const locations = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          name: "Cosy and classy house for your parties in Marbella",
          logo: "img/photo/content/events/carousel/19.jpg",
          location: "Marbella, Spain",
          price: 210,
          rating: 3.72,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.88670575899504, 36.50964517637638],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Outstanding beach house for your family vacations",
          logo: "img/photo/content/events/carousel/20.jpg",
          location: "Fuengirola, Spain",
          price: 140,
          rating: 4.69,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.617030185890998, 36.55385937954381],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Outstanding beach house for your family vacations",
          logo: "img/photo/content/events/carousel/21.jpg",
          location: "Torremolinos, Spain",
          price: 125,
          rating: 4.87,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.497416530048158, 36.62464985814558],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Lone beach house with barbecue and all conveniences",
          logo: "img/photo/content/events/carousel/22.jpg",
          location: "Malaga, Spain",
          price: 90,
          rating: 4.12,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.4226909, 36.7347491],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Personal palace located on the beach for a family trip",
          logo: "img/photo/content/events/carousel/23.jpg",
          location: "Malaga, Spain",
          price: 210,
          rating: 4.55,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.4376186, 36.7300552],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Piloti beach house for friends or family trips",
          logo: "img/photo/content/events/carousel/24.jpg",
          location: "Benalmadena, Spain",
          price: 150,
          rating: 4.61,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.5722935, 36.5939182],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Classy house on a cliff with all conveniences",
          logo: "img/photo/content/events/carousel/25.jpg",
          location: "Marbella, Spain",
          price: 260,
          rating: 4.97,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.888929, 36.5097577],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Incredible loft green house for a group of tourists",
          logo: "img/photo/content/events/carousel/26.jpg",
          location: "Torremolinos, Spain",
          price: 190,
          rating: 4.65,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.4940587, 36.6274412],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Modern ranch near the see for a friends or family trip",
          logo: "img/photo/content/events/carousel/27.jpg",
          location: "Malaga, Spain",
          price: 230,
          rating: 4.99,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.4266601, 36.7229522],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Outstanding beach side villa with swimming pool",
          logo: "img/photo/content/events/carousel/10.jpg",
          location: "Nazare, Portugal",
          price: 190,
          rating: 4.92,
        },
        geometry: {
          type: "Point",
          coordinates: [-9.0701572, 39.6029108],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Superb luxury house in the outskirts of New York",
          logo: "img/photo/content/events/carousel/11.jpg",
          location: "New York, NY",
          price: 240,
          rating: 4.38,
        },
        geometry: {
          type: "Point",
          coordinates: [-73.9612343, 41.9565822],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Cosy indoor for a perfect family weekend",
          logo: "img/photo/content/events/carousel/11.jpg",
          location: "Miami, FL",
          price: 95,
          rating: 4.87,
        },
        geometry: {
          type: "Point",
          coordinates: [-80.19362, 25.7741728],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Modern villa in the heart of Copacabana",
          logo: "img/photo/content/events/carousel/16.jpg",
          location: "Copacabana, Brazil",
          price: 165,
          rating: 4.26,
        },
        geometry: {
          type: "Point",
          coordinates: [-43.1843432, -22.9719642],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Multifunctionnal studio for a few days stay",
          logo: "img/photo/content/events/carousel/13.jpg",
          location: "Toronto, Canada",
          price: 105,
          rating: 4.89,
        },
        geometry: {
          type: "Point",
          coordinates: [-79.40578719642933, 43.66259741682194],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Very classy apartment in the heart of Paris XVIe",
          logo: "img/photo/content/events/carousel/14.jpg",
          location: "Paris, France",
          price: 245,
          rating: 4.88,
        },
        geometry: {
          type: "Point",
          coordinates: [2.3471571901870947, 48.85807197014847],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Nice and cosy apartment near the Prado Museum",
          logo: "img/photo/content/events/carousel/15.jpg",
          location: "Madrid, Spain",
          price: 190,
          rating: 4.55,
        },
        geometry: {
          type: "Point",
          coordinates: [-3.6910245, 40.4132156],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Ideal and perfectly decorated studio",
          logo: "img/photo/content/events/carousel/17.jpg",
          location: "Paris, France",
          price: 80,
          rating: 3.84,
        },
        geometry: {
          type: "Point",
          coordinates: [2.353487202152569, 48.832882708589736],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Nice and cosy beach house with all conveniences",
          logo: "img/photo/content/events/carousel/18.jpg",
          location: "Berlin, Germany",
          price: 220,
          rating: 4.99,
        },
        geometry: {
          type: "Point",
          coordinates: [13.424531132035366, 52.51791395654149],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Very classy residence, private pool and all conveniences",
          logo: "img/photo/content/events/carousel/28.jpg",
          location: "Torremolinos, Spain",
          price: 180,
          rating: 4.81,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.4978799, 36.6269517],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Incredible loft house with pool and conveniences",
          logo: "img/photo/content/events/carousel/29.jpg",
          location: "Benalmadena, Spain",
          price: 240,
          rating: 4.72,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.5764915, 36.59119],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Jet set beach house near Benalmadena puerto",
          logo: "img/photo/content/events/carousel/30.jpg",
          location: "Benalmadena, Spain",
          price: 310,
          rating: 4.81,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.5540789, 36.5832913],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Beautiful traditional house in the heart of Fuengirola",
          logo: "img/photo/content/events/carousel/31.jpg",
          location: "Fuengirola, Spain",
          price: 145,
          rating: 4.74,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.6244682, 36.5364203],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Modern duplex apartment in the center of Torremolinos",
          logo: "img/photo/content/events/carousel/32.jpg",
          location: "Torremolinos, Spain",
          price: 190,
          rating: 4.89,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.5005679, 36.6192463],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Nice and modern villa in the outskirts of Malaga",
          logo: "img/photo/content/events/carousel/33.jpg",
          location: "Malaga, Spain",
          price: 130,
          rating: 4.21,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.4367895, 36.7019358],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Incredible modern decorated apartment in the town center",
          logo: "img/photo/content/events/carousel/34.jpg",
          location: "Torremolinos, Spain",
          price: 160,
          rating: 4.97,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.4900123, 36.6340517],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Nice and cosy apartment in the center of Benalmadena",
          logo: "img/photo/content/events/carousel/35.jpg",
          location: "Benalmadena, Spain",
          price: 150,
          rating: 4.84,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.5642026, 36.581256],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Impressive beach house right in front of the sea",
          logo: "img/photo/content/events/carousel/36.jpg",
          location: "Fuengirola, Spain",
          price: 280,
          rating: 4.99,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.6239707, 36.5336136],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Great apartment in the center of the town",
          logo: "img/photo/content/events/carousel/37.jpg",
          location: "Torremolinos, Spain",
          price: 130,
          rating: 4.96,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.5027098, 36.6198327],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Luxuous apartment with all conveniences",
          logo: "img/photo/content/events/carousel/38.jpg",
          location: "Benalmadena, Spain",
          price: 210,
          rating: 4.67,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.568619, 36.579123],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Nice and cosy house in the center of the town",
          logo: "img/photo/content/events/carousel/39.jpg",
          location: "Benalmadena, Spain",
          price: 180,
          rating: 4.47,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.5654727, 36.5796826],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Nice studio for and ideal trip in Fuengirola",
          logo: "img/photo/content/events/carousel/40.jpg",
          location: "Fuengirola, Spain",
          price: 110,
          rating: 4.69,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.6262738, 36.5389143],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Vegetal house in the outskirts of Mijas",
          logo: "img/photo/content/events/carousel/41.jpg",
          location: "Mijas, Spain",
          price: 240,
          rating: 4.78,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.6388349, 36.5952274],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Incredible garden house in the center of Malaga",
          logo: "img/photo/content/events/carousel/42.jpg",
          location: "Malaga, Spain",
          price: 210,
          rating: 4.77,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.4163478, 36.7238185],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Sea facing villa with a private pool",
          logo: "img/photo/content/events/carousel/43.jpg",
          location: "Torremolinos, Spain",
          price: 160,
          rating: 4.21,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.5051925, 36.6181362],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Magnificent garden house in the outskirts of the city",
          logo: "img/photo/content/events/carousel/44.jpg",
          location: "Fuengirola, Spain",
          price: 130,
          rating: 4.22,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.6251984, 36.5334152],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Great post colonial house in the center of Malaga",
          logo: "img/photo/content/events/carousel/45.jpg",
          location: "Malaga, Spain",
          price: 310,
          rating: 4.87,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.4065624, 36.7258946],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Hobbit-like house in the outskirts of Mijas",
          logo: "img/photo/content/events/carousel/46.jpg",
          location: "Mijas, Spain",
          price: 175,
          rating: 4.92,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.6388349, 36.5952274],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Nice family house in the close suburbs",
          logo: "img/photo/content/events/carousel/47.jpg",
          location: "Benalmadena, Spain",
          price: 160,
          rating: 4.89,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.5654727, 36.5796826],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Cosy family house for an ideal nature trip",
          logo: "img/photo/content/events/carousel/48.jpg",
          location: "Malaga, Spain",
          price: 200,
          rating: 4.95,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.4065624, 36.7258946],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Very cute beach house with all conveniences",
          logo: "img/photo/content/events/carousel/49.jpg",
          location: "Torremolinos, Spain",
          price: 140,
          rating: 4.99,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.4988311, 36.6204633],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Nice residence in the center with private pool",
          logo: "img/photo/content/events/carousel/50.jpg",
          location: "Torremolinos, Spain",
          price: 110,
          rating: 4.49,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.5035089, 36.6202753],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Luxury house in the center of Fuengirola",
          logo: "img/photo/content/events/carousel/51.jpg",
          location: "Fuengirola, Spain",
          price: 280,
          rating: 4.94,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.6285352, 36.5315709],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Cosy house in the center of Fuengirola",
          logo: "img/photo/content/events/carousel/52.jpg",
          location: "Fuengirola, Spain",
          price: 240,
          rating: 4.87,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.6238834, 36.5371292],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Nice little house close to the beach and the center",
          logo: "img/photo/content/events/carousel/53.jpg",
          location: "Benalmadena, Spain",
          price: 160,
          rating: 4.38,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.561925, 36.5810589],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Garden villa with barbecue and private pool",
          logo: "img/photo/content/events/carousel/54.jpg",
          location: "Benalmadena, Spain",
          price: 190,
          rating: 4.59,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.5506613, 36.5824784],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Post colonial house with a private pool and tennis court",
          logo: "img/photo/content/events/carousel/55.jpg",
          location: "Torremolinos, Spain",
          price: 360,
          rating: 4.92,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.4979584, 36.6237396],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Downtown private residence near to the town center",
          logo: "img/photo/content/events/carousel/56.jpg",
          location: "Malaga, Spain",
          price: 160,
          rating: 4.43,
        },
        geometry: {
          type: "Point",
          coordinates: [-4.3996901, 36.7264069],
        },
      },
    ],
  };

  //Mapbox token
  const token =
    "pk.eyJ1IjoiY3NzbmluamEiLCJhIjoiY2toZW1nYm0zMDAxODJycXFzZ3g4cnZ6diJ9.9ebfrGREuwkauRr_afDTgA";

  return {
    init() {
      //Set token
      mapboxgl.accessToken = token;
      //Get longitude and latitude
      const longitude = parseFloat(
        document.getElementById("places-map").getAttribute("data-long")
      );
      const latitude = parseFloat(
        document.getElementById("places-map").getAttribute("data-lat")
      );
      //Create a new map instance
      map = new mapboxgl.Map({
        container: "places-map",
        style: "mapbox://styles/mapbox/light-v10",
        center: [longitude, latitude],
        zoom: 10,
      });

      //Add zoom control
      map.addControl(new mapboxgl.NavigationControl());

      //Add Styles
      map.on("styledata", () => {
        const loadingStyles = () => {
          if (!map.isStyleLoaded()) {
            setTimeout(loadingStyles, 1500);
            return;
          }

          this.loadLayers();
        };
        loadingStyles();
      });

      //Handle click events
      document.querySelectorAll(".map-popup-trigger").forEach((item) => {
        item.addEventListener("click", (event) => {
          const parent = item.closest(".map-popup-item");
          const index = parseInt(parent.getAttribute("data-location"));
          const coordinates = locations.features[index].geometry.coordinates;
          const name = locations.features[index].properties.name;
          const logo = locations.features[index].properties.logo;
          const location = locations.features[index].properties.location;
          const price = locations.features[index].properties.price;
          const rating = locations.features[index].properties.rating;

          this.displayPopup({
            coordinates,
            name,
            price,
            logo,
            location,
            rating,
          });
        });
      });
    },

    //Display map popup
    displayPopup(place) {
      const popup = document.getElementsByClassName("mapboxgl-popup");

      //Remove unneeded popups
      if (popup.length) {
        popup[0].remove();
      }

      //Fly to selected location
      map.flyTo({
        center: place.coordinates,
        zoom: 15,
        bearing: 0,
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });

      //Popup HTML template
      const template = `<div class="map-box-location">
        <div class="map-box-header">
          <div class="location-pic">
            <div class="rating-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <span>${place.rating}</span>
            </div>
            <img
              src="${place.logo}"
              alt=""
            />
          </div>
        </div>
        <div class="map-box-body">
          <div class="location-meta">
            <span>${place.name}</span>
            <span>${place.location}</span>
          </div>
          <p>Starting from <b>$${place.price}</b>/night</p>
        </div>
      </div>`;

      //Inject template
      new mapboxgl.Popup()
        .setLngLat(place.coordinates)
        .setHTML(template)
        .addTo(map);
    },

    //Load places layer
    loadLayers() {
      const _this = this;

      // Do nothing if source already added
      if (map.getSource("places")) {
        return;
      }

      //Add places
      map.addSource("places", {
        type: "geojson",
        data: locations,
      });

      // Add a layer showing the places.
      map.addLayer({
        id: "places",
        type: "circle",
        source: "places",
        paint: {
          "circle-color": "#671cc9",
          "circle-radius": 6,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#fff",
        },
      });

      //Init click event
      map.on("click", "places", function (e) {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const price = e.features[0].properties.price;
        const logo = e.features[0].properties.logo;
        const name = e.features[0].properties.name;
        const location = e.features[0].properties.location;
        const rating = e.features[0].properties.rating;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        //Call popup
        _this.displayPopup({
          coordinates,
          name,
          price,
          logo,
          location,
          rating,
        });
      });

      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on("mouseenter", "places", function () {
        map.getCanvas().style.cursor = "pointer";
      });

      // Change it back to a pointer when it leaves.
      map.on("mouseleave", "places", function () {
        map.getCanvas().style.cursor = "";
      });
    },
  };
}
