let data = {title: 'Title VM 1', pVisible: false};

let vm1 = new Vue({
    el: "#app1",
    data: data, // it is possible. not a problem
    methods: {
        showP: function () {
            this.pVisible = !this.pVisible;
            console.log(this.$refs);
            this.$refs.vBtn.innerText = 'Text changed from VM1 function';
        }
    }
});

vm1.customProp = 'text'; // this is not vue usable property. it won't have getters/setters and won't be watched.

vm1.$refs.vHeading.innerText = 'TEXT set in vanilla JS';// this is overrides other values
console.log(vm1);
console.log('vm1.$data === data', vm1.$data === data);

let vm2 = new Vue({
    el: "#app2",
    data: {
        title: 'Title 2'
    },
    methods: {
        changeVM1Title: function () {
            vm1.title = 'Changed from vm!';
        }
    }
});

setTimeout(() => {
    vm2.title = 'Changed title from a TIMER!';
}, 3000);