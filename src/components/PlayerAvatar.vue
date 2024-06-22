<script setup>
import { ref } from "vue";
import { supabase } from '@/lib/supabaseClient';
import { onMounted } from 'vue';
import { useError } from "@/lib/error.js";

const { errorMessage, errorShown, setError, isLoading } = useError();
const returnData = ref(null);
const props = defineProps({
  uid: String,
});

async function getPlayerAvatar(uid) {
  isLoading.value = true;
  uid = props.uid || null;
  const { data, error } = await supabase
    .from('players')
    .select('avatar_url')
    .eq('uid', uid)
    .maybeSingle();
  if(error) {
    setError("Could not fetch player avatar");
  } else if (data.length === 0) {
    setError("Player avatar is empty.");
  } else {
    isLoading.value = false;
    returnData.value = data;
    setError(null, false); // we are all good, we don't need errors
  }
}

onMounted(() => {
  getPlayerAvatar();
})
</script>
<template>
  <div v-if="!isLoading">
    <div class="pa-3 text-h6" v-if="errorShown">Error: {{ errorMessage }}</div>
    <v-avatar v-else v-for="avatar in returnData" :key="avatar.avatar_url"
      :image="avatar" 
      size="40" 
      class="rounded-circle my-1"
      >
    </v-avatar>
  </div>
</template>