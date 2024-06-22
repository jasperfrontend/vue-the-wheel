<script setup>
import { ref, computed } from "vue";
import { supabase } from '@/lib/supabaseClient';
import { onMounted } from 'vue';

import { useError } from "@/lib/error.js";
const { errorMessage, errorShown, setError, isLoading } = useError();

const returnData = ref(null);
const props = defineProps({
  uid: String,
  class: [String, Array, Object]
});
const computedClasses = computed(() => {
  return ['default-class', props.class]; // Add default class if needed, merge with passed classes
});

async function getPlayerName(uid) {

  isLoading.value = true;
  uid = props.uid || null;

  const { data, error } = await supabase
    .from('players')
    .select('name')
    .eq('uid', uid)
    .single();

  if(error) {
    setError("Could not fetch player name");
  } else if (data.length === 0) {
    setError("Player name is empty.");
  } else {
    isLoading.value = false;
    returnData.value = data;
    setError(null, false); // we are all good, we don't need errors
  }

}

onMounted(() => {
  getPlayerName();
})
</script>

<template>  
  <div :class="computedClasses" v-if="errorShown">Error: {{ errorMessage }}</div>
  <div :class="computedClasses" v-else v-for="playerName in returnData" :key="playerName">{{ returnData.name }}</div>
</template>
