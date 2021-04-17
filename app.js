Vue.component('my-cmp', {
	data: function() {
       return {
        status: 'status NNN'
       }
    },
    template: '<p>test paragraph {{status}}</p>',
});

new Vue({
    el: "#app",
    data: {
        status: 'Status'
    },
    methods: {
    }
  });