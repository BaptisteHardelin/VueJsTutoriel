<template>
  <div>
    <ul>
        <li v-for="ninja in ninjas" v-bind:key="ninja">{{ninja}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ninjas: ['Yoshi', 'Mario', 'Ryu']
    };
  }
};
</script>

<style>

</style>
