new Vue({
    el: "#app",
    data() {
        return {
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
        }
    }
  });