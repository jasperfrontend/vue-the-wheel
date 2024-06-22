<script setup>
import { watch, onMounted, ref } from 'vue';
import { useRoundStore } from '@/stores/round';
import { supabase } from '@/lib/supabaseClient';
import PlayerAvatar from '@/components/PlayerAvatar.vue';
import PlayerName from '@/components/PlayerName.vue';

const props = defineProps({
  side: String,
  duration: Number,
  currentTime: Number,
  uid: String,
  song: String,
});

const isLoading = ref(false);
const playerModal = ref(false);
const playersData = ref([]);
const errorMessage = ref(null);
const errorShown = ref(false);
const store = useRoundStore();

async function getPlayers() {
  isLoading.value = true;
  const { data:getPlayersData, error:getPlayersError } = await supabase
    .from('players')
    .select('*')

  if (getPlayersError) {
    console.error(getPlayersError)
    isLoading.value = false;
  } else if (getPlayersData.length === 0) {
    errorMessage.value = "No players registered to spinge";
    errorShown.value = true;
    isLoading.value = false;
  } else {
    playersData.value = getPlayersData;
  }
}

async function setPlayer(pos, uid) {
  console.log(pos + ': ' + uid);

  if(pos === 1) {
    await store.setPlayer1Uid(uid).then(console.log('player 1 logged'))
  }
  if(pos === 2) {
    await store.setPlayer2Uid(uid).then(console.log('player 2 logged'));
  }
}


onMounted(() => {
  getPlayers();
});

</script>

<template>
  <div class="scroll-container">
    <div class="bg-deep-purple-darken-1 pa-1 rounded-t" style="position: relative; z-index: 10;">
      <p>
        <v-btn 
          @click="playerModal = true" 
          class="w-100 bg-deep-purple-darken-1 pa-1 h-auto" 
          elevation="0"
          >Player Queue
        </v-btn>
      </p>
    </div>
    <div class="scroll-content pa-1">
      <div 
        class="item" 
        v-for="player in playersData" :key="player.id"
        >
          <PlayerName :uid="player.uid" :name="player.name" />
        </div>
    </div>
  </div>
  <v-snackbar v-model="errorShown" duration="3000" color="red">{{ errorMessage }}
    <template v-slot:actions>
      <v-btn
        @click="errorShown = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
  <v-dialog
    v-model="playerModal"
    transition="dialog-bottom-transition"
    scrim="black"
    opacity="1"
  >
    <h2 
      class="text-center">Player Queue 
      <v-btn @click="getPlayers();" class="ml-3">Refresh</v-btn>
    </h2>
    <div class="d-flex flex-wrap text-center align-center justify-space-between">
      <div class="ma-5" v-for="player in playersData">
        <v-sheet class="pa-3 rounded" width="260">          
          <PlayerAvatar :uid="player.uid" :size="50" :src="player.avatar_url" />
          <PlayerName :uid="player.uid" :name="player.name" />
          <div class="d-flex justify-space-between">
            <div>
              <v-btn 
                @click="setPlayer(1, player.uid);" 
                class="bg-black w-100 my-2 pa-2"
                >Set P1
              </v-btn>
            </div>
            <div>
              <v-btn 
                @click="playerModal = false; setPlayer(2, player.uid);" 
                class="bg-black w-100 my-2 pa-2"
                >Set P2
              </v-btn>
            </div>
          </div>

          <!-- <div class="player_stats d-flex justify-space-between align-center">
            <span class="pa-1 text-blue-grey-lighten-1">
              <v-icon 
                size="small" 
                color="deep-purple-lighten-2" 
                icon="mdi-dice-multiple"
                >
              </v-icon> 52
            </span>
            <span class="pa-1 text-blue-grey-lighten-1">
              <v-icon 
                size="small" 
                color="deep-purple-lighten-2" 
                icon="mdi-plus-box"
                >
              </v-icon> 36
            </span>
            <span class="pa-1 text-blue-grey-lighten-1">
              <v-icon 
                size="small" 
                color="deep-purple-lighten-2" 
                icon="mdi-minus-box"
                >
              </v-icon> 12
            </span>
            <span class="pa-1 text-blue-grey-lighten-1">
              <v-icon 
                size="small" 
                color="deep-purple-lighten-2" 
                icon="mdi-equal-box"
                >
              </v-icon> 4
            </span>
          </div> -->
        </v-sheet>
      </div>  
      
    </div>
    
  </v-dialog>
</template>

<style scoped>
.scroll-container {
  height: 90px;
  overflow: hidden;
  position: relative;
}

.scroll-content {
  position: absolute;
  animation: scroll 60s linear infinite;
}

.item {
  height: 25px;
}

.player_stats .v-icon {
  position: relative;
  transform: translateY(-2px);
}

@keyframes scroll {
  0%, 10% {
    transform: translateY(0);
  }
  45%, 55% {
    transform: translateY(-100%); /* 3 * 40px (height of 3 items) */
  }
  90%, 100% {
    transform: translateY(0);
  }
}

</style>