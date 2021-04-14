new Vue({
    el: "#app",
    data() {
        return {
            currClass: '',
            color: '',
            handle: null,
            bgArrStyleClasses: ['red', 'green', 'blue', 'steelblue', '#abd'],
            bgClasses: ['red', 'green', 'steelblue']
        };
    },
    computed: {
        bgStyleColor: function () {
            return {
                backgroundColor: this.color
            }
        }
    },
    methods: {
        getRandomArbitrary: function (min, max) {
            // return Math.floor(Math.random() * (max - min + 1)); // returns N >= min && N < max
            return Math.floor(Math.random() * (max - min + 1)) + min; // returns N >= min && N <= max due to + min
        },
        startEffect: function () {
            let vm = this;

            // console.log(Math.random()); // return 0.0 to 0.99....
            // console.log(Math.floor(2.99)); // return 2
            // so this works like: we get a value from 0.0 to 0.99... then we 3 -1 + 1 => 3 * 0.99 = 2.97 Math.floor(2.97) = 2; then + 1 = 3 which is our max value.
            console.log(vm.getRandomArbitrary(1, 2));
            this.handle = setInterval(function () {
                vm.color = vm.bgArrStyleClasses[vm.getRandomArbitrary(0, vm.bgArrStyleClasses.length - 1)];
                console.log(vm.color)
            }, 2000);
        },
        startEffectWithClasses: function () {
            let vm = this;
            this.handle = setInterval(function () {
                vm.currClass = vm.bgClasses[vm.getRandomArbitrary(0, vm.bgClasses.length - 1)];
                console.log(vm.currClass);
            }, 2000);
        },
        stopInterval: function () {
            clearInterval(this.handle);
            this.handle = null;
        }
    }
});