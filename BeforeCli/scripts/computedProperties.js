new Vue({
    el: '#comp-proper',
    data: {
        age: 20,
        a: 0,
        b: 0
    },
    methods: {
        /*addToA: function () {
            console.log('AddToA');
            return this.a + this.age;
        },
        addToB: function () {
            console.log('AddToB');
            return this.b + this.age;
        }*/
    },
    computed: {
        addToA: function () {
            console.log('AddToA');
            return this.a + this.age;
        },
        addToB: function () {
            console.log('AddToB');
            return this.b + this.age;
        }
    },
});