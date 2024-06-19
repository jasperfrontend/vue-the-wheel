<script setup>
const props = defineProps({
  yt_id: String,
})
</script>

<template>
<iframe 
  width="1120" 
  height="630" 
  :src="`https://www.youtube-nocookie.com/embed/${props.yt_id}?autoplay=1`" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen
  >
</iframe>
</template>