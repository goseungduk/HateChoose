<template>
  <div>
    <b-navbar toggleable="lg">

      <b-navbar-brand :to="'/'">{{ titleName }}고르기싫어</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand :to="'/roullet'">Roullet</b-navbar-brand>
      <b-navbar-brand :to="'map'">MapTest</b-navbar-brand>
      <!-- <b-collapse id="nav-collapse" is-nav>-->
    </b-navbar>
  </div>
</template>
<style scoped>
</style>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ['prefix'],
  data() {
    return {
      
    }
  },
  computed: {
    titleName(): string {
      if (!this.prefix) {
        return "";
      }
      return this.prefix + " ";
    }
  }
});
</script>