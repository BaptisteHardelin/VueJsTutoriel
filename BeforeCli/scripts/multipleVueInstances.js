let one = new Vue({
    el: '#instance1',
    data: {
        title: 'Vue App One'
    },
    methods: {
        
    },
    computed: {
        greet: function() {
            return 'Hello from app one';
        }
    },
});

let two = new Vue({
    el: '#instance2',
    data: {
        title: 'Vue App Two'
    },
    methods: {
        changeTitle: function() {
            one.title = 'Title changed by vue app 2'
        }
    },
    computed: {
        greet: function() {
            return 'Hello from app two';
        }
    },
});

// two.title = 'New title from outside instance of vue';