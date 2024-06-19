<template>
  <div class="lower_thirds w-100 d-flex justify-space-between">
    <!-- Player left -->
    <div class="column_left ma-1 mr-0 bg-blue-grey-darken-4 rounded">
      <Player side="left" :duration="320" :currentTime="0" song="Metallica - One" />
    </div>
    <div class="column_center ma-1 bg-blue-grey-darken-3 rounded">
      <PlayersQueue />
    </div>
    <!-- Player right -->
    <div class="column_right ma-1 ml-0 bg-blue-grey-darken-4 rounded">
      <Player side="right" :currentTime="0" song="Roxette - The Look" /> <!-- :duration="<seconds>" to start countdown -->
    </div>
  </div>
</template>

<style scoped>
.column_left,
.column_right {
  width: 45%;
}
.column_center {
  width: 10%;
}
.right {
  flex-flow: row-reverse;
}
</style>