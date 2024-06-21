<script setup>
const props = defineProps({
  yt_id: String,
})
</script>

<template>
  <div class="position-relative w-100 h-100">

    <div class="top_left position-absolute top-0 left-0 ma-1">
      <v-card>
        <v-card-title>Artist Band - Song Title</v-card-title>
      </v-card>
    </div>
    
    <div class="top_right position-absolute top-0 right-0 ma-1">
      <v-card>
        <v-card-title>JasperDiscovers <span class="bg-deep-purple-darken-1 rounded-pill pa-2">VS</span> TicanUK</v-card-title>
      </v-card>
    </div>
    

    <iframe 
      width="1920" 
      height="1080" 
      :src="`https://www.youtube-nocookie.com/embed/${props.yt_id}?autoplay=1`" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen
      >
    </iframe>
  </div>
</template>

<style scoped>
iframe {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 20;
}
.top_left, .top_right {
  z-index: 22;
}
</style>