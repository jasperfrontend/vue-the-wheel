import { ref } from "vue";

export function useError() {
  const errorMessage = ref(null);
  const errorShown = ref(false);
  const isLoading = ref(false);

  function setError(message, show = true, loading = false) {
    errorMessage.value = message;
    errorShown.value = show;
    isLoading.value = loading;
  }

  return {
    errorMessage,
    errorShown,
    setError,
    isLoading
  };
}
