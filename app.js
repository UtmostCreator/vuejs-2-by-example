new Vue({
    el: "#app",
    data() {
        return {
            color: '',
            width: 100
        }
    },
    computed: {
        myStyle: function() {
            return {
                backgroundColor: this.color,
                width: this.width + 'px'
            }
        }
    },
    methods: {
    }
  });