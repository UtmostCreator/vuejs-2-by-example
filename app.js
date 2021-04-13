new Vue({
    el: "#app",
    data() {
        return {
            name: '',
            age: '',
            rndNumber: '',
            imgUrl: 'https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e',
            rndTopLimit: 10
        }
    },
    methods: {
        getUserNameAndAge: function() {
            return ` Name: ${this.name} (Age: ${this.age})`;
        },
        generateRandomNumber: function() {
            this.rndNumber = Math.floor(Math.random() * this.rndTopLimit);
        }
    }
  });