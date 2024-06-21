<script setup>
import { ref } from 'vue';
import PlayerAvatar from './PlayerAvatar.vue';
const playerModal = ref(false);
</script>

<template>
  <div class="scroll-container">
    <div class="bg-deep-purple-darken-1 pa-1 rounded-t" style="position: relative; z-index: 10;">
      <p><v-btn @click="playerModal = true" class="w-100 bg-deep-purple-darken-1 pa-1 h-auto" elevation="0">Player Queue</v-btn></p>
    </div>
    <div class="scroll-content pa-1">
      <div class="item">ShadowGamer</div>
      <div class="item">PixelPioneer</div>
      <div class="item">VortexViking</div>
      <div class="item">NovaNinja</div>
      <div class="item">CyberCheetah</div>
      <div class="item">BlazeFalcon</div>
      <div class="item">MysticMage</div>
      <div class="item">QuantumQuokka</div>
      <div class="item">StellarStarlord</div>
      <div class="item">TurboTortoise</div>
      <div class="item">EchoElf</div>
      <div class="item">PhantomPhoenix</div>
      <div class="item">AstroArcher</div>
      <div class="item">LunarLion</div>
      <div class="item">PlasmaPanda</div>
      <div class="item">FrostyFox</div>
      <div class="item">TitanTiger</div>
      <div class="item">QuantumQuokka</div>
      <div class="item">RadiantRaven</div>
      <div class="item">ElectroEagle</div>
    </div>
  </div>
  <v-dialog
    v-model="playerModal"
    transition="dialog-bottom-transition"
    scrim="black"
    opacity="0.9"
  >
    <h2 class="text-center">Player Queue</h2>
    <div class="d-flex flex-wrap text-center align-center justify-space-between">

      <div class="ma-5">
        <v-sheet class="pa-3 rounded" width="260">          
          <PlayerAvatar />
          <v-btn @click="playerModal = false" class="bg-deep-purple-darken-1 w-100 my-2 pa-2">ShadowGamer</v-btn>
          <div class="d-flex justify-space-between align-center">
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-cards-playing-diamond-multiple"></v-icon> 52</span>
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-plus-box"></v-icon> 36</span>
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-minus-box"></v-icon> 12</span>
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-equal-box"></v-icon> 4</span>
          </div>
        </v-sheet>
      </div>  
          
      <div class="ma-5">
        <v-sheet class="pa-3 rounded" width="260">          
          <PlayerAvatar />
          <v-btn @click="playerModal = false" class="bg-deep-purple-darken-1 w-100 my-2 pa-2">ShadowGamer</v-btn>
          <div class="d-flex justify-space-between align-center">
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-ship-wheel"></v-icon> 52</span>
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-plus-box"></v-icon> 36</span>
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-minus-box"></v-icon> 12</span>
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-equal-box"></v-icon> 4</span>
          </div>
        </v-sheet>
      </div>  
      <div class="ma-5">
        <v-sheet class="pa-3 rounded" width="260">          
          <PlayerAvatar />
          <v-btn @click="playerModal = false" class="bg-deep-purple-darken-1 w-100 my-2 pa-2">ShadowGamer</v-btn>
          <div class="d-flex justify-space-between align-center">
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-ship-wheel"></v-icon> 52</span>
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-plus-box"></v-icon> 36</span>
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-minus-box"></v-icon> 12</span>
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-equal-box"></v-icon> 4</span>
          </div>
        </v-sheet>
      </div>  
      <div class="ma-5">
        <v-sheet class="pa-3 rounded" width="260">          
          <PlayerAvatar />
          <v-btn @click="playerModal = false" class="bg-deep-purple-darken-1 w-100 my-2 pa-2">ShadowGamer</v-btn>
          <div class="d-flex justify-space-between align-center">
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-ship-wheel"></v-icon> 52</span>
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-plus-box"></v-icon> 36</span>
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-minus-box"></v-icon> 12</span>
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-equal-box"></v-icon> 4</span>
          </div>
        </v-sheet>
      </div>  
      <div class="ma-5">
        <v-sheet class="pa-3 rounded" width="260">          
          <PlayerAvatar />
          <v-btn @click="playerModal = false" class="bg-deep-purple-darken-1 w-100 my-2 pa-2">ShadowGamer</v-btn>
          <div class="d-flex justify-space-between align-center">
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-ship-wheel"></v-icon> 52</span>
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-plus-box"></v-icon> 36</span>
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-minus-box"></v-icon> 12</span>
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-equal-box"></v-icon> 4</span>
          </div>
        </v-sheet>
      </div>  
      <div class="ma-5">
        <v-sheet class="pa-3 rounded" width="260">          
          <PlayerAvatar />
          <v-btn @click="playerModal = false" class="bg-deep-purple-darken-1 w-100 my-2 pa-2">ShadowGamer</v-btn>
          <div class="d-flex justify-space-between align-center">
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-ship-wheel"></v-icon> 52</span>
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-plus-box"></v-icon> 36</span>
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-minus-box"></v-icon> 12</span>
            <span class="pa-1 text-blue-grey-lighten-1"><v-icon size="small" color="deep-purple-lighten-2" icon="mdi-equal-box"></v-icon> 4</span>
          </div>
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