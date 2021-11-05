<template>
  <div class="home">
    <table >
        <tr v-bind:key='rowIndex' v-for='(row, rowIndex) in gameData' >
        <td v-bind:key='columnIndex'
           v-for='(column, columnIndex) in row'
           v-on:click='click(rowIndex,columnIndex)'
           >
            <p>{{gameData[rowIndex][columnIndex]}}</p>
        </td>
        </tr>
    </table>
 <div class='gameControl-div'>
     <button type="submit" v-on:click='restart()' >Yeniden Oyna</button>
 </div>
 <p v-if="gameisdone === true" > Oyun bitti! Kazanan {{winner}} </p>
 </div>
</template>

<script>
export default {
  name: 'Play',
  methods: {
    pcPlay: function pcPlay() {
      while (true) {
        const randomX = Math.round(Math.random() * 2);
        const randomY = Math.round(Math.random() * 2);
        if (this.gameData[randomX][randomY] === '') {
          console.log(randomX, randomY);
          this.gameData[randomX][randomY] = 'O';
          break;
        }
      }
    },
    click: function click(rowIndex, columnIndex) {
      if ( this.gameisdone  || this.gameData[rowIndex][columnIndex] !== '' ) {
        return;
      }
      this.gameData[rowIndex][columnIndex] = 'X';
      this.freeSpace();
      console.log(this.emptySlot);
      if(this.emptySlot === 0){
          this.gameisdone = true;
          this.winner = 'Kardeşlik';
          return;
      }
      if(this.isGameOver()){
        this.gameisdone = true;
        this.winner = "X";
      }
      if(!this.gameisdone){
        this.pcPlay();
        this.freeSpace();
        if(this.isGameOver()){
            this.gameisdone = true;
            this.winner = "Y"
        }
      }else{
          return;
      }
    },
    freeSpace: function freeSpace(){
        this.emptySlot -= 1 ;
       },
    isGameOver: function isGameOver() {
      for (let i = 0; i < 3; i += 1) {
        if (this.gameData[i][0] && this.gameData[i][0] === this.gameData[i][1]
            && this.gameData[i][0] === this.gameData[i][2]) {
          return true;
        }
        if (this.gameData[0][i] && this.gameData[0][i] === this.gameData[1][i]
            && this.gameData[0][i] === this.gameData[2][i]) {
          return true;
        }
        if(this.gameData[0][0] && this.gameData[0][0] === this.gameData [1][1] && this.gameData[0][0] === this.gameData[2][2]){
            return true;
        }
        if(this.gameData[0][2] && this.gameData[0][2] === this.gameData[1][1] && this.gameData[0][2] === this.gameData[2][0]){
            return true;
        }
      }
    },
    restart: function restart() {
        this.emptySlot = 9;
        this.gameisdone = false;
      this.gameData = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
    },
  },
  data() {
    return {
        emptySlot:  9,
        winner: null,
      gameisdone: false,
      gameData: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
    };
  },
};
</script>
<style scoped>
.home {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items:center;
    flex-direction: column;
}
table {
    border: none;
    border-collapse: collapse;
}

table tr td p{
    font-size: 40px;
    cursor: pointer;
    display:flex;
    align-items:center;
   justify-content: center;
   aspect-ratio: 1/1;
    width: 20vw;
    max-width: 150px;
}
table tr:nth-child(2)  {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
}
table tr td:nth-child(2)  {
    border-left: 1px solid black;
    border-right: 1px solid black;
}
.gameControl-div {
    width: %100;
    display:flex;
    justify-content:center;
}
.gameControl-div button{
    color: black;
    border: none;
    background-color: transparent;
    font-size: 20px;
    margin-top:20px;
    cursor: pointer;
}
.gameControl-div button:hover{
    color: red;
}
</style>
