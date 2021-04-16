new Vue({
    el: "#app",
    data() {
        return {
            player: {
                health: 100,
                maxDmg: 30,
                minDmg: 0,
                accuracy: 70,
                strength: 10,
                critalChace: 0.03,
                alive: function () {
                    console.log(this.health);
                    return this.health > 0;
                }
            },
            playerDefaults: {
                health: 100,
                maxDmg: 30,
                minDmg: 0,
                critalChace: 3,
                accuracy: 70,
                strength: 10,
            },
            enemy: {
                health: 100,
                counterAtack: true,
                maxDmg: 22,
                minDmg: 0,
                accuracy: 70,
                strength: 15,
                alive: function () {
                    return this.health > 0;
                }
            },
            enemyDefaults: {
                health: 100,
                maxDmg: 22,
                minDmg: 0,
                accuracy: 70,
                strength: 15,
            },
            gameState: {
                started: false,
                attackType: 1,
                healType: 2,
                paused: false,
                log: {
                    player: [], // type: attackType | healType; value: damaged/healed
                    enemy: [],
                },
                displayedLog: [],
                attackDelay: 300,
            },
            timerHandle: null
        };
    },
    computed: {
        pHP: function () {
            return { width: this.player.health + "%" };
        },
        eHP: function () {
            return { width: this.enemy.health + "%" };
        },
        displayedLog: function() {
            return [].concat(this.gameState.displayedLog).reverse();
        }
    },
    watch: {
        'player.health': function (newVal, oldVal) {
            if(!this.gameState.log.player.length) {
                return false
            }
            let l = this.gameState.log.player.length - 1;
            let lastLog = this.gameState.log.player[l];
            if (lastLog.type === this.gameState.healType) {
                this.gameState.displayedLog.push({type: 'player', text: 'Player healed by ' + lastLog.value + ' HP'});
            } else {
                this.gameState.displayedLog.push({type: 'player', text: 'Player hits monster for ' + lastLog.value});
            }

            if(newVal > oldVal) {
                let vm = this;
                this.enemyAttack();
                this.timerHandle = setTimeout(() => {
                    let l = this.gameState.log.enemy.length - 1;
                    let lastLog = this.gameState.log.enemy[l];
                    this.gameState.displayedLog.push({type: 'enemy', text: 'Enemy hits player for ' + lastLog.value});
                }, this.gameState.attackDelay);
            }
        },
        'enemy.health': function () {
            if(!this.gameState.log.enemy.length) {
                return false
            }
            let vm = this;
            this.enemyAttack();
            this.timerHandle = setTimeout(() => {
                let l = this.gameState.log.enemy.length - 1;
                let lastLog = this.gameState.log.enemy[l];
                this.gameState.displayedLog.push({type: 'enemy', text: 'Enemy hits player for ' + lastLog.value});
            }, this.gameState.attackDelay);
            console.log('enemy health changed');
        },
        'gameState.paused': function() {
            clearTimeout(this.timerHandle);
            this.timerHandle = null;
        },
        'gameState.log.player': function() {
            console.log('gs log');
        }
    },
    methods: {
        resetProps(toWhom, objOfProps) {
            for (var k in objOfProps) {
                if (this[toWhom].hasOwnProperty(k)) {
                    this[toWhom][k] = objOfProps[k];
                }
            }
        },
        canInteract: function () {
            if (this.gameState.paused || !this.gameState.started) {
                return false;
            }
            return true;
        },
        startGame: function (e) {
            if (this.gameState.started) {
                e.preventDefault();
                return false;
            }
            this.gameState.started = true;
        },
        endGame: function () {
            this.gameState.started = false;
            this.gameState.paused = false;
            this.resetProps('player', this.playerDefaults);
            this.resetProps('enemy', this.enemyDefaults);
            this.gameState.displayedLog = []
            this.gameState.log = { player: [], enemy: [] }
            // this.player.reset();
            // this.enemy.reset();
        },
        getRndNmbrBtw: function (min, max) {
            min = parseInt(min);
            max = parseInt(max);
            if (min > max) {
                max += min;
                min = max - min;
            }
            return Math.floor((Math.random() * (max - min + 1))) + min;
        },
        takeDamage: function (toWhom, dmg) {
            if (this[toWhom].health - dmg <= 0) {
                this[toWhom].health = 0;
                this.gameState.paused = true;
            } else {
                this[toWhom].health -= dmg;
            }
        },
        playerAttack: function () {
            let attack = this.getRndNmbrBtw(this.player.minDmg, this.player.maxDmg);
            this.gameState.log.player.push({ type: this.gameState.attackType, value: attack });
            this.takeDamage('enemy', attack);
            this.enemyAttack();
        },
        useSkill: function () {
            let attack = this.getRndNmbrBtw(this.player.minDmg, this.player.maxDmg);
            let testYourLuck = attack % this.player.critalChace;

            if (testYourLuck) {
                attack = this.getRndNmbrBtw(attack / this.player.critalChace,
                    attack + (this.player.critalChace / 10) * attack
                );
            } else {
                attack = this.getRndNmbrBtw(this.player.minDmg, this.player.maxDmg)
            }
            attack = attack > 75 ? 57 : attack;
            console.log(attack);
            this.gameState.log.player.push({ type: this.gameState.attackType, value: attack });
            this.takeDamage('enemy', attack);
        },
        playerHeal: function () {
            let healValue = this.getRndNmbrBtw(this.player.minDmg, this.player.maxDmg);
            this.player.health += this.getRndNmbrBtw(this.player.minDmg, this.player.maxDmg/2);
            this.gameState.log.player.push({ type: this.gameState.healType, value: healValue });
            console.log('enemy attackk');
        },
        enemyAttack: function () {
            let attack = this.getRndNmbrBtw(this.enemy.minDmg, this.enemy.maxDmg);
            this.gameState.log.enemy.push({ type: this.gameState.attackType, value: attack });
            this.takeDamage('player', attack);
        },
    }
});