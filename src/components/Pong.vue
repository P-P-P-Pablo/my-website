<script setup>
import { onMounted, ref } from 'vue';

let canvas = ref();
let context;
let game;
let scores;
const PLAYER_HEIGHT = 12;
const PLAYER_WIDTH = 150;
const BONUS_HEIGHT = 30;
const BONUS_WIDTH = 60;


onMounted(() => {
    starter();
});

function starter() {
  canvas.value.addEventListener('click', startClic);
  startPage();
};


function startPage() {
  context = canvas.value.getContext('2d');


  // Draw field
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.value.width, canvas.value.height);
  context.strokeStyle = 'white';

  //draw text
  context.strokeStyle = 'red';
  context.font = "1000 60px Arial";
  context.strokeText("P-P-P-PONG", canvas.value.width / 3 + 1, canvas.value.height / 3);
  context.strokeText("click to start", canvas.value.width / 3 + 1, canvas.value.height / 2);
  context.font = "600 60px Arial";
  context.fillStyle = 'blue';
  context.fillText("P-P-P-PONG", canvas.value.width / 3 - 1, canvas.value.height / 3);
  context.fillText("click to start", canvas.value.width / 3 - 1, canvas.value.height / 2);

};

function startClic() {
  context.clearRect(0, 0, canvas.value.width, canvas.value.height);
  canvas.value.removeEventListener('click', startClic);
  playing();
};


function playing() {

  canvas.value.addEventListener('mousemove', playerMove);
  game = {
    player: {
      x: canvas.value.width / 2 - PLAYER_WIDTH / 2,
      score: 0

    },
    computer: {
      x: canvas.value.width / 2 - PLAYER_WIDTH / 2,
      score: 0
    },
    ball: {
      x: canvas.value.width / 2,
      y: canvas.value.height / 2,
      r: 8,
      speed: {
        x: 3,
        y: -3
      }

    }
  };
  
  gamePage();
  play();

};


function gamePage() {

  if (game.player.score >= 10) {
    return endPage("Computer");
  } else if (game.computer.score >= 10) {
    return endPage("Player");
  } else {

    // Draw field
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.value.width, canvas.value.height);

    // Draw middle line
    context.strokeStyle = 'white';
    context.beginPath();
    context.moveTo(0, canvas.value.height / 2);
    context.lineTo(canvas.value.width, canvas.value.height / 2);
    context.stroke();

    // Draw ball
    context.beginPath();
    context.fillStyle = 'white';
    context.arc(game.ball.x, game.ball.y, game.ball.r, 0, Math.PI * 2, false);
    context.fill();

    // Draw players
    context.fillStyle = 'red';
    context.fillRect(game.player.x, 0, PLAYER_WIDTH, PLAYER_HEIGHT);
    context.fillRect(game.computer.x, canvas.value.height - PLAYER_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT);
    context.strokeStyle = 'blue';
    context.lineWidth = 5;
    context.strokeRect(game.player.x + 3, -3, PLAYER_WIDTH, PLAYER_HEIGHT);
    context.strokeRect(game.computer.x + 2, canvas.value.height - PLAYER_HEIGHT - 2, PLAYER_WIDTH, PLAYER_HEIGHT);
    context.lineWidth = 1;

    // display scores
    context.strokeStyle = 'red';
    context.font = "1000 60px Arial";
    context.strokeText(game.computer.score, canvas.value.width / 4, canvas.value.height / 4);
    context.strokeText(game.player.score, canvas.value.width / 4 * 3, canvas.value.height / 4 * 3);
    context.font = "600 60px Arial";
    context.fillStyle = 'blue';
    context.fillText(game.computer.score, canvas.value.width / 4, canvas.value.height / 4);
    context.fillText(game.player.score, canvas.value.width / 4 * 3, canvas.value.height / 4 * 3);

  }
};


function play() {
  ballMove();
  computerMove();
  gamePage();
  requestAnimationFrame(play);
};

function playerMove(event) {
  // Get the mouse location in the canvas
  let canvasLocation = canvas.value.getBoundingClientRect();
  let mouseLocation = event.clientX - canvasLocation.x;
  game.player.x = mouseLocation - PLAYER_WIDTH / 2; // make it follow the mouse
  if (mouseLocation < PLAYER_WIDTH / 2) {
    game.player.x = 0;
  } else if (mouseLocation > canvas.value.width - PLAYER_WIDTH / 2) {
    game.player.x = canvas.value.width - PLAYER_WIDTH;
  } else {
    game.player.x = mouseLocation - PLAYER_WIDTH / 2;
  }
}

function computerMove() {
  game.computer.x += game.ball.speed.x * 0.8;
}

function ballMove() {
  if (game.ball.x > canvas.value.width || game.ball.x < 0) {
    game.ball.speed.x *= -1;
  };

  if (game.ball.y > canvas.value.height - PLAYER_HEIGHT) {
    collide(game.computer);
  } else if (game.ball.y < PLAYER_HEIGHT) {
    collide(game.player);
  };

  game.ball.x += game.ball.speed.x;
  game.ball.y += game.ball.speed.y;
}

function collide(player) {
  // The player does not hit the ball
  if (game.ball.x < player.x || game.ball.x > player.x + PLAYER_WIDTH) {
    player.score += 1;
    reset();

  } else {
    // Increase speed and change direction
    game.ball.speed.y *= -1.2;
    changeDirection(player.x);
  }
}

function reset() {

  // Set ball and players to the center
  game.ball.x = canvas.value.width / 2;
  game.ball.y = canvas.value.height / 2;
  game.player.x = canvas.value.width / 2 - PLAYER_WIDTH / 2;
  game.computer.x = canvas.value.width / 2 - PLAYER_WIDTH / 2;

  // Reset speed
  game.ball.speed.y = 2;
  game.ball.speed.x *= -1;

}

function changeDirection(playerPosition) {
  let impact = game.ball.x - playerPosition - PLAYER_WIDTH / 2;
  let ratio = 100 / (PLAYER_WIDTH / 2);
  // Get a value between 0 and 10
  game.ball.speed.x = Math.round(impact * ratio / 10);
}

function endPage(winner) {
  canvas.value.removeEventListener('mousemove', playerMove);
  context.clearRect(0, 0, canvas.value.width, canvas.value.height);
  game.ball.speed.y = 0;
  game.ball.speed.x = 0;

  // Draw field
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.value.width, canvas.value.height);
  context.strokeStyle = 'white';

  //draw text
  context.font = "50px Arial";

  context.strokeText(game.computer.score, canvas.value.width - 50, canvas.value.height / 4);
  context.strokeText(game.player.score, 20, canvas.value.height / 4 * 3);
  context.strokeText(winner, canvas.value.width / 5, canvas.value.height / 3);
  context.strokeText("WIN", canvas.value.width / 5, canvas.value.height / 2);

  canvas.value.addEventListener('click', endClic);
}

function endClic() {
  context.clearRect(0, 0, canvas.value.width, canvas.value.height);
  canvas.value.removeEventListener('click', endClic);
  canvas.value.addEventListener('click', startClic);
}




</script>

<template>
    <div>
        <div class="score-display">
        </div>
        <main>

            <canvas ref="canvas" width="800" height="600"></canvas>
        </main>
    </div>
</template>

<style scoped>

main{
  display: flex;
  align-items: center;
  justify-items: center;
}

.score-display{
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-items: center;
}
</style>