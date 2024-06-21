<script setup>
import { onMounted, ref } from 'vue'
import { supabase } from '@/lib/supabase';

const categories = ref([]);
const spinResults = ref(null);
const spinResult = ref(null);
const showResult = ref(false);
const isLoading = ref(false);
const errorMessage = ref(null);
const errorShown = ref(false);
const categoriesLength = ref(0); 
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function getCategories() {
  spinResults.value = null;
  isLoading.value = true;

  // go on a Date
  const tenHoursInMilliseconds = 3600 * 10 * 1000;
  const tenHoursAgo = new Date(Date.now() - tenHoursInMilliseconds).toISOString();

  const { data:spinCategories, error:spinCategoriesError } = await supabase
    .from('categories')
    .select(`id`)
    .or(`last_played.lt.${tenHoursAgo},last_played.is.null`); // skip cats that have been played < 10 hr ago

  if (spinCategoriesError) {
    console.error(spinCategoriesError)
    isLoading.value = false;

  } else {

    categories.value = spinCategories;
    categoriesLength.value = spinCategories.length;
    if (categories.value.length > 0) {
      spinResults.value = Math.floor(Math.random() * categories.value.length);
      getCategory(categories.value[spinResults.value].id); // pass the id of the selected category
    } else {
      errorMessage.value = "No categories available for spinge";
      errorShown.value = true;
      isLoading.value = false;
    }
  }
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
    errorMessage.value = "No categories found";
    errorShown.value = true;
  } else {
    
    await sleep(1000); // force an additional 1000ms loading time. this looks better on-screen
    
    isLoading.value = false;
    spinResult.value = spinCategory.name;

    const timestamp = new Date().toISOString();
    const { error:errorUpdateCategory } = await supabase
      .from('categories')
      .update({ count: spinCategory.count + 1, last_played: timestamp }) // Correct increment
      .eq('id', id)
    if(errorUpdateCategory) {
      errorMessage.value = "Error updating category last-played status:" + errorUpdateCategory
      errorShown.value = true;
    } 

  }
}

onMounted(() => {
  getCategories()
});

</script>

<template>
  <v-container class="d-flex justify-center">
    <div id="board" class="w-50">

      <v-card class="mb-3 w-100">
        <template v-slot:title>
          <div class="d-flex w-100">
            <div>{{ categoriesLength }} active categories</div>
          </div>
        </template>
      </v-card>
      
      <div class="d-flex pa-2 h-100 align-center">
        <div>
          <v-btn 
            size="x-large" 
            color="deep-purple-darken-1 rounded-pill" 
            @click="spinResult = null; getCategories(); showResult = true;"
          >
            Spinge
          </v-btn>
        </div>
        <div id="result" class="ms-auto text-h4" v-if="showResult">
          <span v-if="isLoading"><v-progress-circular color="deep-purple-darken-1" indeterminate></v-progress-circular></span><span v-else>{{ spinResult }}</span>
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
  </v-container>
</template>

<style>

</style>