export default {
  props: {
    title: String
  },
  data() {
    return {
      title: "Vue Ninjas",
    };
  },
  methods: {
    changeTitle: function () {
      this.$emit('changeTitle', 'Vue Wizards');
    }
  },
};