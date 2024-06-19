<script setup>
import { computed } from 'vue';

const props = defineProps({
  side: String,
  currentTime: Number,
  duration: Number,
  song: String
});

// Compute the width percentage of the progress bar
const progressWidth = computed(() => {
  const progress = (props.currentTime / props.duration) * 100;
  return `${progress}%`;
});

// Function to format time in mm:ss format
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};

const formattedCurrentTime = computed(() => formatTime(props.currentTime));
const formattedDuration = computed(() => formatTime(props.duration));
</script>

<template>
  <div class="bg-deep-purple-darken-1 pa-1 px-2 rounded-t position-relative">
    <div class="player_song">
      <v-icon icon="mdi-play-circle" size="x-small"></v-icon> {{ props.song }}
    </div>
    <div class="progress_bar position-absolute top-0 left-0 h-100 bg-deep-purple-accent-1 rounded-e" :style="{ width: progressWidth }"></div>
    <div v-if="props.duration" class="time-info d-flex justify-space-between">
      <span>{{ formattedCurrentTime }} / {{ formattedDuration }}</span>
    </div>
  </div>
</template>

<style scoped>
.player_song {
  position: relative;
  z-index: 10;
}
.progress_bar {
  z-index: 1;
}

.time-info {
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-8px, 2px);
  z-index: 10;
  font-size: 12px;
  margin-top: 5px;
}
</style>
