<template>
  <div class="flex flex-wrap justify-center">
    <div class="mt-5 mx-4 p-10 max-w-4xl">
      <h1 class="font-bold text-5xl flex-1 mb-4">
        New and trending
      </h1>
      <p>Based on player counts and release date.</p>
      <br>
      <div class="flex mb-4">
        <input
          v-model="searchInput"
          type="search"
          class="flex-1 text-black px-4 py-2 bg-gray-800 text-gray-300 rounded-sm"
          placeholder="Search 448,527 games..."
          @keyup.enter="fetchGame"
        >
        <button
          class="py-2 px-5 uppercase font-bold bg-gray-500 rounded-sm ml-2"
          @click="fetchGame"
        >
          Search
        </button>
      </div>
      <ul
        v-if="games.results"
        class="grid grid-cols-1 grid-flow-row gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        <li
          v-for="game in games.results"
          :key="game.id"
        >
          <router-link :to="`/games/${game.slug}`">
            <GameCard :game="game" />
          </router-link>
        </li>
      </ul>
      <p v-if="loading">
        Loading...
      </p>
      <p v-if="hasErrors">
        <ErrorAlert :error-message="hasErrors" />
      </p>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, provide } from 'vue';
import GameCard from '../components/GameCard.vue';
import ErrorAlert from '../components/ErrorAlert.vue';
import useFetch from '../composables/useFetch';
export default {
  components: {
    GameCard,
    ErrorAlert
  },
  setup() {
    const searchInput = ref('');
    const { results, hasErrors, loading, execute } = useFetch();
    onMounted(() => {
      execute(
        'https://rawg.io/api/games/lists/main?discover=true&ordering=-relevance&page_size=40&page=1'
      );
    });
    function fetchGame() {
      execute(`https://api.rawg.io/api/games?search=${searchInput.value}`);
    }
    // anything that needs to be accessed in the template
    return {
      searchInput,
      games: results,
      loading,
      hasErrors,
      execute,
      fetchGame,
    };
  },
};
</script>