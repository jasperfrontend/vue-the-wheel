<script setup>
import { ref } from 'vue';
import { useRoundStore } from '@/stores/round';
import TheWheel from '@/components/TheWheel.vue';
import MediaPlayer from '@/components/MediaPlayer.vue';
import LowerThirds from '@/components/LowerThirds.vue';
const showPlayer = ref(false);
const showWheel = ref(true);

// Pinia Store
const store = useRoundStore();
store.$patch({
  player1Song: "apK2jCrfnsk",
  player2Song: "LlVI7ZNiFlI"
});
</script>

<template>
  <div class="play_field d-flex h-100 w-100 ma-0 pa-0 align-end">
    
    <div class="position-absolute d-flex top-0 left-0 w-100 align-center justify-center" style="height: 87vh">
      <TheWheel v-if="showWheel" />
      <MediaPlayer yt_id="YU92Ato4eq0" v-if="showPlayer" />
    </div>
    <div class="store_results position-absolute w-100 pa-2">
      <div class="d-flex">
        <div class="check p1" v-if="store.roundId">
         r <v-icon icon="mdi-check-circle" color="green"></v-icon>
        </div>
        <div class="check p1" v-if="store.categoryId">
         c <v-icon icon="mdi-check-circle" color="green"></v-icon>
        </div>
        <div class="check p2" v-if="store.player1Uid">
         p1 <v-icon icon="mdi-check-circle" color="green"></v-icon>
        </div>
        <div class="check s1" v-if="store.player1Song">
         p1s <v-icon icon="mdi-check-circle" color="green"></v-icon>
        </div>
        <div class="check s2" v-if="store.player2Uid">
         p2 <v-icon icon="mdi-check-circle" color="green"></v-icon>
        </div>
        <div class="check s2" v-if="store.player2Song">
         p2s <v-icon icon="mdi-check-circle" color="green"></v-icon>
        </div>
      </div>
    </div>
    <LowerThirds />

  </div>
</template>

<style scoped>
.store_results {
  bottom: 6em;
}
.check {
  padding: 3px;
}
</style>