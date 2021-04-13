new Vue({
    el: "#app",
    data() {
        return {
            totalCount: 0,
            step: 2,
            enterValue: '',
            keyupValue: '',
            changeValueFromView: ''
        }
    },
    methods: {
        keyup: function(event) {
            this.keyupValue = event.target.value;
        },
        enterPressed: function(event) {
            this.enterValue = event.target.value;
        },
        increase: function() {
            this.totalCount += this.step;
        }
    }
  });