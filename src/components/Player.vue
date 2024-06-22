<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoundStore } from '@/stores/round';
import PlayerSong from '@/components/PlayerSong.vue';
import PlayerAvatar from '@/components/PlayerAvatar.vue';
import PlayerName from '@/components/PlayerName.vue';

const props = defineProps({
  side: String,
  duration: Number,
  currentTime: Number,
  uid: String,
  song: String,
});

const currentTime = ref(props.currentTime);
const store = useRoundStore();
const playerDetails = ref({});

const fetchPlayerDetails = async () => {
  if (props.uid) {
    const playerNumber = props.side === 'left' ? 1 : 2;
    await store.fetchPlayerDetails(props.uid, playerNumber);
    playerDetails.value = playerNumber === 1 ? store.player1Details : store.player2Details;
  }
};

watch(() => props.uid, fetchPlayerDetails, { immediate: true });
watch(() => props.currentTime, (newVal) => {
  currentTime.value = newVal;
});

onMounted(() => {
  setInterval(() => {
    if (currentTime.value < props.duration) {
      currentTime.value += 1;
    }
  }, 1000);
});
</script>

<template>
  <div :class="side" v-if="props.uid">
    <PlayerSong :duration="props.duration" :currentTime="currentTime" :song="props.song" />
    <div class="player_data d-flex align-center pa-1 px-2">
      <PlayerAvatar :uid="props.uid" :size="50" :src="playerDetails.avatar_url" />
      <PlayerName :uid="props.uid" :name="playerDetails.name" :class="['pa-3', 'text-h6']" />
    </div>
  </div>
</template>
