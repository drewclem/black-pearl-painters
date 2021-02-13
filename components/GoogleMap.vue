<template>
  <div>
    <g-map
      ref="gMap"
      :center="{lat: locations[0].lat, lng: locations[0].lng}"
      :options="{fullscreenControl: false}"
    >
      <g-map-marker
        v-for="location in locations"
        :key="location.id"
        :position="{lat: location.lat, lng: location.lng}"
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
      ],
    }
  },
}
</script>

<style scoped>
</style>