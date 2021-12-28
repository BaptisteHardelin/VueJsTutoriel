const maxHelath = 100;
const maxDamage = 10;
const minHealth = 0;

new Vue({
    el: '#app',
    data: {
        health: maxHelath,
        ended: false
    },
    methods: {
        punch: function () {
            this.health -= maxDamage;
            if (this.health <= minHealth) {
                this.ended = true;
            }
        },
        restart: function () {
            this.health = maxHelath;
            this.ended = false;
        }
    },
    computed: {

    },
});