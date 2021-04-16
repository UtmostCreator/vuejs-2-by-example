new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        log: []
    },
    computed: {
        logCP: function () {
            return [].concat(this.log).reverse();
        }
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = !this.gameIsRunning;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {
            let min = 3;
            let max = 10;
            let damage = this.getArbitraryNumber(min, max);
            this.monsterHealth -= damage;
            this.log.push({owner: 'player', text: 'Player hits ' + damage});

            if (this.checkIfWin()) {
                return;
            }

            this.monsterAttack();
        },
        skill: function () {
            let damage = this.getArbitraryNumber(10, 23);
            this.monsterHealth -= damage;
            this.log.push({owner: 'player', text: 'Player hits ' + damage});

            this.monsterAttack();
        },
        heal: function () {
            let healVal = this.getArbitraryNumber(3, 13);
            this.playerHealth += healVal;
            this.log.push({owner: 'player', text: 'Player heals for ' + healVal});
            this.monsterAttack();
        },
        giveUp: function () {
            this.gameIsRunning = false;
        },
        getArbitraryNumber(min, max) {
            return Math.floor((Math.random() * (max - min) + 1)) + min;
            // return Math.max(Math.floor(Math.random() * max) + 1, min); // of 0, 0 willl return 1
        },
        checkIfWin: function () {
            if (this.playerHealth <= 0) {
                this.playerHealth = 0;
                this.gameIsRunning = false;
                this.log.push({owner: 'monster', text: 'You Lost!'});
                if (confirm('You Lost! Start a new game?')) {
                    this.startGame();
                }
                return true;
            }

            if (this.monsterHealth <= 0) {
                this.monsterHealth = 0;
                this.gameIsRunning = false;
                this.log.push({owner: 'player', text: 'You Won!'});
                if (confirm('You Won! Start a new game?')) {
                    this.startGame();
                }
                return true;
            }

            return false;
        },
        monsterAttack: function () {
            let min = 5;
            let max = 15;
            let damage = this.getArbitraryNumber(min, max);
            this.playerHealth -= damage;
            this.log.push({owner: 'monster', text: 'Monster hits ' + damage});
            this.checkIfWin();
        }
    }
});