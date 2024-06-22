<script setup>
import PlayersQueue from './PlayersQueue.vue';
import Player from './Player.vue';
import { useRoundStore } from '@/stores/round';
import { storeToRefs } from 'pinia';

// Pinia Store
const store = useRoundStore();
const { player1Uid, player1Song, player2Uid, player2Song } = storeToRefs(store);

</script>

<template>
  <div class="lower_thirds w-100 d-flex justify-space-between">

    <!-- Player left -->
    <div class="column_left ma-1 mr-0 bg-blue-grey-darken-4 rounded">
      <Player :uid="player1Uid" :song="player1Song" side="left" :currentTime="0" /> <!-- :duration="<seconds>" to start countdown -->
    </div>

    <div class="column_center ma-1 bg-blue-grey-darken-3 rounded">
      <PlayersQueue />
    </div>

    <!-- Player right -->
    <div class="column_right ma-1 ml-0 bg-blue-grey-darken-4 rounded">
      <Player :uid="player2Uid" :song="player2Song" side="right" :currentTime="0" /> <!-- :duration="<seconds>" to start countdown -->
    </div>
    
  </div>
</template>

<style scoped>
.lower_thirds {
  position: relative;
  z-index: 22;
}
.column_left,
.column_right {
  width: 45%;
}
.column_center {
  width: 10%;
}

</style>