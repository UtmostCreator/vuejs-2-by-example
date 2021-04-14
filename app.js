new Vue({
    el: "#app",
    data() {
        return {
            attachRed: false
        }
    },
    computed: {
        divClasses: function() {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            }
        }
    },
    methods: {
    }
  });