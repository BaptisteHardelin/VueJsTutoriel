new Vue({
    el: '#css',
    data: {
        available: false,
        nearby: false
    },
    methods: {
        
    },
    computed: {
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            };
        }
    },
});