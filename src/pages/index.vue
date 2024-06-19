<script setup>
import { ref } from 'vue';
const showPlayer = ref(true);
</script>

<template>
  <div class="play_field d-flex h-100 w-100 ma-0 pa-0 align-end">
    <div class="position-absolute d-flex top-0 left-0 w-100 align-center justify-center" style="height: 87vh" v-if="showPlayer">
      <!-- <TheWheel /> -->
      <!-- <MediaPlayer /> -->
    </div>
    <LowerThirds />
  </div>
</template>
