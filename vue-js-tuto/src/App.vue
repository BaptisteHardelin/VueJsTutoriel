<template>
  <div>
    <h1>{{title}}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
import Ninjas from './Ninjas.vue';

export default {
  components: { Ninjas },
  data () {
    return {
      title: 'Ninja App'
    };
  }
};


</script>

<style>

</style>
