new Vue({
    el: '#app',
    data: {
        infinity: Infinity,
        value: 3,
        debt: -6,
        cash: 9,
        moneyInBank: 15,
    },

    computed: {
        computedPropRemainingCashFundsIfPaid: function () {
            console.log('computedPropRemainingCashFundsIfPaid');
            return this.debt + this.cash;
        },
        computedPropRemainingTotalFunds: function () {
            console.log('computedPropRemainingTotalFunds');
            return this.cash + this.moneyInBank + this.debt;
        }
    },
    methods: {
        depositFunds: function (from, to, value, limit = false) {
            if (limit && (this[to] + value) >= 0) { // if you try to return greater value than you owe
                this[from] += this[to];
                this[to] = 0;
            } else if (this[from] > value && this[from] - value >= 0) { // usual deposit
                this[to] += value;
                this[from] -= value;
            } else { // attempt to depost more than you have
                this[to] += this[from];
                this[from] = 0;
            }
        },
        repayADebt: function () {
            this.value = Math.abs(this.value);
            if (this.debt < 0) {
                this.depositFunds('cash', 'debt', this.value, true);
            }
            console.log('Attempt to repayADebt', this.value);
        },
        lendAmount: function () {
            this.depositFunds('infinity', 'debt', -Math.abs(this.value));
            console.log('Attempt to lendAmount', this.value);
        },
        withdraw: function () {
            if (this.moneyInBank) {
                this.depositFunds('moneyInBank', 'cash', this.value);
            }
            console.log('Attempt to withdraw', this.value);
        }
    }
});