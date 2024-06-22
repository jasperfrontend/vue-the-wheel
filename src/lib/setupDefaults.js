import { ref } from "vue";

const setupDefaults = {
  errorMessage: ref(null),
  errorShown: ref(false),
  isLoading: ref(false)
};

export default setupDefaults;