new Vue({
    el: '#app',
    data: {
        counter: 0
    },

    // computed properties always work syncronosly (see the prevous branch e54eca0)
    computed: {
        result: function() {
            return this.counter > 5 ? "Greater than 5" : "Less than 5";
        }
    },
    // is used when you need some other code when the propeties updates, and when it is not solved by a computed property, then watch is for you
    watch: {
        // this wil be changed only after the computed result will be re-rendered re-cached!!!
        result: function(value) {
            let vm = this;

            // because it is a closure, you have to store you app instance in a separate variable.
            setTimeout(function() {
                vm.counter = 0;
            }, 5000);
        }
    },
    methods: {
    }
});