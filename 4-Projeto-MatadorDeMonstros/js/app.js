new Vue({
    el: '#app',
    data: {
        healthPlayer: 100,
        playerBarColor: 'bg-success',
        monsterBarColor: 'bg-success',
        healthMonster: 100,
        isOver: false,
        battleLog: [],
        gameResult: null,
        gameResultColor: null
    },
    watch: {
        healthMonster() {
            this.monsterBarColor = this.getHealthBarColor(this.healthMonster)

            if (this.healthMonster < 0) {
                this.healthMonster = 0
                this.isOver = true
                this.gameResult = 'You Won!'
                this.gameResultColor = 'green'
                this.battleLog.push('Player won!')
            }
        },
        healthPlayer() {
            this.playerBarColor = this.getHealthBarColor(this.healthPlayer)

            if (this.healthPlayer < 0) {
                this.healthPlayer = 0
                this.isOver = true
                this.gameResult = 'You Lost!'
                this.gameResultColor = 'red'
                this.battleLog.push('Player lost!')
            } else if (this.healthPlayer > 100) {
                this.healthPlayer = 100
            }
        }
    },
    methods: {
        getRandom(min, max) {
            return Math.floor(Math.random() * (+max - +min)) + +min
        },
        getHealthBarColor(health) {
          if (health > 75) {
              return 'bg-success'
          } else if (health > 50) {
              return 'bg-info'
          } else if (health > 25) {
              return 'bg-warning'
          } else {
              return 'bg-danger'
          }
        },
        monsterAttack() {
            const damage = this.getRandom(10, 15)
            this.healthPlayer -= damage
            this.battleLog.push('Monster attacked player dealing damage of ' + damage)
        },
        playerAttack() {
            const damage = this.getRandom(8, 13)
            this.healthMonster -= damage
            this.monsterAttack()
            this.battleLog.push('Player attacked monster dealing damage of ' + damage)
        },
        playerSpecialAttack() {
            const damage = this.getRandom(14, 19)
            this.healthMonster -= damage
            this.monsterAttack()
            this.battleLog.push('Player special attacked monster dealing damage of ' + damage)
        },
        playerHeal() {
            const healedAmount = this.getRandom(10, 15)
            if (this.healthPlayer >= 100) {
                this.healthPlayer = 100
                this.battleLog.push('Player didn\'t heal because life is at 100')
            } else {
                this.healthPlayer += healedAmount
                this.battleLog.push('Player healed the amount of ' + healedAmount)
            }
            this.monsterAttack()
        },
        playerGiveUp() {
            this.isOver = true
            this.gameResult = 'You Gave Up!'
            this.gameResultColor = 'red'
            this.battleLog.push('Player gave up!')
        },
        playAgain() {
            this.isOver = false
            this.gameResult = null
            this.healthMonster = 100
            this.healthPlayer = 100
            this.battleLog = []
        }
    }
});
