<script setup>
import { ref } from 'vue';
import TheWheel from '@/components/TheWheel.vue';
import MediaPlayer from '@/components/MediaPlayer.vue';
import LowerThirds from '@/components/LowerThirds.vue';
const showPlayer = ref(false);
const showWheel = ref(true);
</script>

<template>
  <div class="play_field d-flex h-100 w-100 ma-0 pa-0 align-end">
    <div class="position-absolute d-flex top-0 left-0 w-100 align-center justify-center" style="height: 87vh">
      <TheWheel v-if="showWheel" />
      <MediaPlayer yt_id="YU92Ato4eq0" v-if="showPlayer" />
    </div>
    <LowerThirds />
  </div>
</template>
