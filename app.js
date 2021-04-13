new Vue({
    el: "#app",
    data() {
        return {
            goals: [],
            title: 'DEFAULT Titles',
            link: 'https://google.com',
            enteredValue: ''
        };
    },
    methods: {
        sayHello: function() {
            return 'Hello!';
            // return {test: 'testString', obj: {newprop: 'propValue'}}; // everything will be converted to a string
            // return ['hello!', 'asdfasd']; // something that is a string; not object/array
        },
        addGoal: function() {
            this.goals.push(this.enteredValue); // vue js creates easy access for us to use 'this' here.
        },
        changeTitle: function(event) {
            this.title = event.target.value; // vue js creates easy access for us to use 'this' here.
        }
    }
  });