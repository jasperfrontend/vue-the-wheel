<script setup>
import { supabase } from '@/lib/supabaseClient';
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'


const session = ref()
const router = useRouter()
const route = useRoute()

async function signInWithTwitch() {
  const redirectUrl = route.fullPath;  // Capture the current route
  localStorage.setItem('redirectUrl', redirectUrl);  // Save it to local storage
  supabase.auth.signInWithOAuth({provider: 'twitch'}).then(({ data }) => {
    session.value = data.session
    handleRedirect()
  })
}

function handleRedirect() {
  const redirectUrl = localStorage.getItem('redirectUrl')
  if (redirectUrl) {
    localStorage.removeItem('redirectUrl')  // Clean up
    router.push(redirectUrl)  // Redirect back to the original URL
  }
}

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
    if (session.value) {
      handleRedirect()
    }
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
    if (session.value) {
      handleRedirect()
    }
  })
})
</script>

<template>
  <v-app v-if="session">
    <router-view />
  </v-app>
  <v-app v-else>
    <div class="d-flex flex-column text-center justify-center align-center h-100">

      <div class="d-flex align-end h-75">
        <v-btn size="x-large" color="purple" text="Sign in with Twitch" prepend-icon="mdi-twitch" @click="signInWithTwitch()"></v-btn>
      </div>

      <footer class="d-flex align-end text-center h-25">
        <div class="pa-3">
          <p>&copy; 2024 JasperDiscovers</p>
          <p>By using this webapp, you agree with the <a href="#" target="_blank">Privacy Policy</a>.</p>
        </div>
      </footer>

    </div>
  </v-app>
</template>

<style>
html, body {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.right .player_data {
  flex-flow: row-reverse;
}
</style>