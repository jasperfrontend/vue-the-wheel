<script setup>

</script>

<template>
<div class="scroll-container">
  <div class="bg-deep-purple-darken-1 pa-1 rounded-t" style="position: relative; z-index: 10;">
    <p>Player Queue</p>
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