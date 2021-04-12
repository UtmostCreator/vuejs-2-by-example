new Vue({
    el: "#app",
    data() {
        return {
            goals: [],
            title: 'DEFAULT Titles',
            enteredValue: ''
        };
    },
    methods: {
        addGoal: function() {
            this.goals.push(this.enteredValue);
        },
        changeTitle: function(event) {
            this.title = event.target.value;
        }
    }
  });