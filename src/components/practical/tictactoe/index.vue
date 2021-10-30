<template>
  <section>
    <h1>tic tac toe</h1>
    <hr />
    <div class="board-wrap">
      <div class="board">
        <div
          class="grid"
          v-for="(grid, idx) in grids"
          :key="idx"
          @click="setGrid(idx)"
        >
          {{ setSymbol(grid) }}
        </div>
      </div>
    </div>
    <div class="player-info">Player : {{ setSymbol(player) }}</div>
    <div class="player-info">Winner : {{ setSymbol(winner) }}</div>
    <button @click="resetGame()">Reset</button>
  </section>
</template>

<script>
// tic tac toe grid number
// 0 1 2
// 3 4 5
// 6 7 8
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

export default {
  data() {
    return {
      player: 1,
      grids: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    }
  },
  computed: {
    winner() {
      for (let i = 0; i < 8; i++) {
        const line = lines[i]
        const [a, b, c] = line
        const sum = this.grids[a] + this.grids[b] + this.grids[c]
        if (sum === 3) return 1
        if (sum === -3) return -1
      }
      return 0
    },
  },
  methods: {
    setGrid(idx) {
      if (this.grids[idx] !== 0) return
      this.$set(this.grids, idx, this.player)
      this.player = -this.player

      this.winner = this.getWinner()
    },
    setSymbol(num) {
      return num === 0 ? '' : num === 1 ? 'O' : 'X'
    },
    // getWinner() {
    //   for (let i = 0; i < 8; i++) {
    //     const line = lines[i]
    //     const [a, b, c] = line
    //     const sum = this.grids[a] + this.grids[b] + this.grids[c]
    //     if (sum === 3) return 1
    //     if (sum === -3) return -1
    //   }
    //   return 0
    // },
    resetGame() {
      this.grids = [0, 0, 0, 0, 0, 0, 0, 0, 0]
      this.player = 1
      // this.winner = 0
    },
  },
}
</script>

<style lang="scss" scoped>
.board-wrap {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.board {
  display: flex;
  flex-flow: row wrap;
  width: 400px;
  height: 400px;
  align-content: flex-start;
}
.grid {
  width: 33%;
  height: 33%;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 50px;
  line-height: 130px;
}
.player-info {
  font-size: 30px;
  margin-top: 20px;
}
</style>
