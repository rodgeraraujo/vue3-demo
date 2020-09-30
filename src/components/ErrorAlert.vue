<template>
  <div
    class="bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 rounded relative"
    role="alert"
  >
    <strong class="font-bold">Error:</strong>
    <span class="block sm:inline text-red-700">{{ errorMessage }}.</span>
  </div>
</template>

<script>
export default {
  props: {
    errorMessage: Object,
  }
};
</script>