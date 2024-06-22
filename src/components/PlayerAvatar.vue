<script setup>
const props = defineProps({
  uid: String,
  size: Number,
  src: String,
});
</script>

<template>
  <img :src="src" :alt="uid" :width="size" :height="size" class="avatar" />
</template>

<style scoped>
.avatar {
  border-radius: 50%;
}
</style>