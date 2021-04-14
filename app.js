new Vue({
    el: "#app",
    data() {
        return {
            attachRed: false,
            color: ''
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