<template>
  <div id="movie-filter" class="col-3">
    <h2>Movie Filter</h2>
    <div class="filter-group">
      <h3>By time of day</h3>
      <check-filter v-for="time in times" :title="time" category="time"></check-filter>
      <h3>By genre</h3>
      <check-filter v-for="genre in genres" :title="genre" category="genre"></check-filter>
    </div>
  </div>
</template>
<script>
import genres from "../util/genres.js";
import times from "../util/times.js";

import CheckFilter from "./CheckFilter.vue";

export default {
  data() {
    return {
      genres,
      times
    };
  },

  /*  methods: {
    checkFilter(category, title, checked) {
      this.$emit("check-filter", category, title, checked);
    }
  }, */

  components: {
    CheckFilter
  }
};
</script>