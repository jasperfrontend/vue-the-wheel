<script setup>
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
  side: String,
  duration: Number,
  currentTime: Number,
  song: String
});

const currentTime = ref(props.currentTime);

// Update currentTime every second
onMounted(() => {
  setInterval(() => {
    if (currentTime.value < props.duration) {
      currentTime.value += 1;
    }
  }, 1000);
});

watch(() => props.currentTime, (newVal) => {
  currentTime.value = newVal;
});
</script>

<template>
  <div :class="side">
    <PlayerSong :duration="props.duration" :currentTime="currentTime" :song="props.song" />
    <div class="player_data d-flex align-center pa-1 px-2">
      <PlayerAvatar size="50" />
      <PlayerName class="pa-3 text-h6" />
    </div>
  </div>
</template>

<style scoped>
.right .player_data {
  display: flex;
  flex-flow: row-reverse;
}
</style>
