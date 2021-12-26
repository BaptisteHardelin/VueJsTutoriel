new Vue({
    el: '#vue-app',
    data: {
        name: 'BabaProg',
        job: 'Dev',
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name;
        }
    }
});