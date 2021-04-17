let componentA = Vue.component('component-a', Vue.extend({
    template: '<p>some text</p>'
}));

console.log(componentA);


let data = { title: 'Title VM 1', pVisible: false };

let vm1 = new Vue({
    // el: "#app1",
    data: data, // it is possible. not a problem
    methods: {
        showP: function () {
            this.pVisible = !this.pVisible;
            console.log(this.$refs);
            this.$refs.vBtn.innerText = 'Text changed from VM1 function';
        }
    }
});
vm1.$mount('#app1');// works the same

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

let vm3 = new Vue({
    template: "<p>One Line template</p>",
    // template: `<h3>Title template VM3</h3>
    //             <p>Multiple Line template</p>
    //             <span>SOme text heree</span>`,
});

// only 1st occurrence will be replaced with vue instance.
let vm4 = new Vue({
    el: '.world',
    template: "<p>Hello!</p>",
    components: {
        'component-a': componentA,
    },
});


vm3.$mount(); // $mount('.classOr#ID')
document.getElementById('app3').appendChild(vm3.$el); // very uncommon way! + limitation