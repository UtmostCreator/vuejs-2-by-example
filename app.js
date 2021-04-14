new Vue({
    el: "#app",
    data() {
        return {
            color: '#ccc',
            colorArr: ['red', 'green', 'blue', 'steelblue', '#abd']
        };
    },
    computed: {
        bgColor: function () {
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
            setInterval(function () {
                vm.color = vm.colorArr[vm.getRandomArbitrary(0, vm.colorArr.length)];
                console.log(vm.color)
            }, 2000);
        }
    }
});