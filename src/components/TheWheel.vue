// @/components/TheWheel.vue
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { supabase } from '@/lib/supabaseClient';
import { useError } from "@/lib/error.js";
import { useRoundStore } from '@/stores/round';

const categories = ref([]);
const spinResults = ref(null);
const spinResult = ref(null);
const showResult = ref(false);
const { errorMessage, errorShown, setError, isLoading } = useError();
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const { data: { user } } = await supabase.auth.getUser();

// Pinia Store
const roundStore = useRoundStore();

async function getCategories() {
  spinResults.value = null;
  isLoading.value = true;

  const tenHoursInMilliseconds = 3600 * 10 * 1000; // 10 hours, but then easier to read than 36000000
  const tenHoursAgo = new Date(Date.now() - tenHoursInMilliseconds).toISOString();

  const { data:spinCategories, error:spinCategoriesError } = await supabase
    .from('categories')
    .select('id')
    .or(`last_played.lt.${tenHoursAgo},last_played.is.null`); // skip cats that have been played < 10 hr ago

  if (spinCategoriesError) {
    console.error(spinCategoriesError)
    isLoading.value = false;
  } else {
    categories.value = spinCategories;
    if (categories.value.length > 0) {
      spinResults.value = Math.floor(Math.random() * categories.value.length);
      getCategory(categories.value[spinResults.value].id); // pass the id of the selected category
    } else {
      setError("No categories available for spinge");
    }
  }
}

async function createNewRound(roundId) {
  await roundStore.startRound(roundId);
}

async function getCategory(id) {
  const { data:spinCategory, error:spinError } = await supabase
    .from('categories')
    .select('*')
    .eq('id', id)
    .single();

  if(spinError) {      
    console.error(spinError);
    isLoading.value = false;
  } else if (!spinCategory) {
    setError("No categories found");
  } else {
    await sleep(1000); // force an additional 1000ms loading time. this looks better on-screen
    isLoading.value = false;
    spinResult.value = spinCategory;

    const timestamp = new Date().toISOString();
    const { error:errorUpdateCategory } = await supabase
      .from('categories')
      .update({ count: spinCategory.count + 1, last_played: timestamp, spin_uid: user.id }) 
      .eq('id', id);
    if(errorUpdateCategory) {
      setError("Error updating category last-played status:" + errorUpdateCategory);
    } 
    // console.log(id)
    createNewRound(id);

  }
}

</script>

<template>
  <v-container class="d-flex justify-center">
    <div id="board" class="w-50">
      <div class="d-flex flex-column text-center pa-2 h-100 align-center">
        <div style="position: relative;">
          <v-btn v-if="!showResult"
            size="x-large" 
            color="deep-purple-darken-1 rounded-pill" 
            @click="spinResult = null; getCategories(); showResult = true;" 
          >
            Spinge
          </v-btn>
          <div id="result" class="text-h1 font-weight-black text-center" v-else>
            <span v-if="isLoading"><v-progress-circular color="deep-purple-darken-1" indeterminate></v-progress-circular></span>
            <span v-else class="text-center">{{ spinResult.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <v-snackbar v-model="errorShown" duration="3000" color="red">{{ errorMessage }}
      <template v-slot:actions>
        <v-btn @click="errorShown = false">Close</v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
