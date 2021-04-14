new Vue({
    el: '#app',
    data: {
        counter: 0
    },

    // computed properties always work syncronosly (see the prevous branch e54eca0)
    computed: {
    },
    // is used when you need some other code when the propeties updates, and when it is not solved by a computed property, then watch is for you
    watch: {
        counter: function(value) {
            let vm = this;

            // because it is a closure, you have to store you app instance in a separate variable.
            setTimeout(function() {
                vm.counter = 0;
            }, 2000);
        }
    },
    methods: {
    }
});