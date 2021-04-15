new Vue({
    el: "#app",
    data() {
        return {
            show: true,
            books: [
                {
                    title: "Title Unbeatable",
                    published: 2020,
                    author: "David Amaron",
                },
                {
                    title: "Title New",
                    published: 2004,
                    author: "Brad Avilston",
                },
                {
                    title: "Pet treatments",
                    published: 2021,
                    author: "Britney Drey",
                },
            ],
            experiment: [
                {
                    name: 'testeojb',
                    data: [1, 1.23, 5.33, 9.44, 99999,999900098]
                }
            ]
        };
    },
    methods: {
    }
});