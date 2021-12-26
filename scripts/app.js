new Vue({
    el: '#vue-app',
    data: {
        name: 'BabaProg',
        job: 'Streamer',
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name;
        }
    }
});