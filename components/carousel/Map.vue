<!-- <template>
    <div ref="mapContainer" style="height: 400px; width: 400px;"></div>
  </template>
  
  <script>
  export default {
    name: 'Map',
    props: {
      center: {
        type: Array,
        default: () => [51.505, -0.09]
      },
      zoom: {
        type: Number,
        default: 13
      },
      markerPosition: {
        type: Array,
        default: () => [51.5, -0.09]
      },
      popupContent: {
        type: String,
        default: 'A pretty CSS popup.<br> Easily customizable.'
      }
    },
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        if (typeof window !== 'undefined') { // Ensure this runs only on the client side
          const map = L.map(this.$refs.mapContainer).setView(this.center, this.zoom);
  
          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);
  
          L.marker(this.markerPosition).addTo(map)
            .bindPopup(this.popupContent)
            .openPopup();
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Ensure the map container has a defined height and width */
  </style>
   -->