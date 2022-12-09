<template>
  <div>
    <g-map
      ref="gMap"
      :center="{ lat: locations[0].lat, lng: locations[0].lng }"
      :options="{ fullscreenControl: false, zoom: 10 }"
    >
      <g-map-marker
        v-for="location in locations"
        :key="location.id"
        :position="{ lat: location.lat, lng: location.lng }"
      ></g-map-marker>
    </g-map>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',

  data() {
    return {
      locations: [
        {
          lat: 47.1854,
          lng: -122.2929,
        },
        {
          lat: 47.196463,
          lng: -122.31346,
        },
        {
          lat: 45.48728,
          lng: -122.63194,
        },
        {
          lat: 47.33763,
          lng: -122.2322,
        },
        {
          lat: 47.29255,
          lng: -122.26665,
        },
        {
          lat: 47.28497,
          lng: -122.28244,
        },
        {
          lat: 47.34072,
          lng: -122.25242,
        },
      ],
    }
  },
}
</script>

<style>
.GMap__Wrapper {
  height: 500px !important;
}
</style>
