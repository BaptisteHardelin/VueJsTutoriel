export default {
    props: {
      ninjas: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        
      }
    },
    methods: {
      deleteNinja: function() {
        this.ninjas.pop();
      }
    },
  };