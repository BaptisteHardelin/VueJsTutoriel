new Vue({
    el: '#event',
    data: {
        age: 19,
        x: 0,
        y: 0
    },
    methods: {
        addYear: function (inc) {
            this.age += inc;
        },
        subYear: function (dec) {
            this.age -= dec;
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert('You clicked me !');
        }
    }
});