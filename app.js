// let sharedData = {
//     status: 'status NNN'
// };

Vue.component('my-cmp', {
    data: function () {
        return {
            status: 'status NNN'
        }; // will be the same for each component if used this way
    },
    template: '<p>test paragraph {{status}} <button @click="changeStatus">Change Status</button></p>',
    methods: {
        changeStatus: function () {
            this.status = 'Normal';
        }
    }
});

new Vue({
    el: "#app",
    data: {
        status: 'Status'
    },
    methods: {
    }
});