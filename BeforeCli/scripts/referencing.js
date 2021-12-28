new Vue({
    el: '#app',
    data: {
        output: 'Your fav food'
    },
    methods: {
        readRefs: function() {
            console.log(this.$refs.test.innerText);
            this.output = this.$refs.input.value;
        }
    },
    computed: {
        
    },
});