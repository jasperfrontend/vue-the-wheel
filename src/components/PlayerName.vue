<script setup>
const props = defineProps({
  uid: String,
  name: String,
});
</script>

<template>
  <div>{{ name }}</div>
</template>