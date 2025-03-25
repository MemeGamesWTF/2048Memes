const player = document.getElementById('player');
const obstacle = document.getElementById('obstacle');

let isJumping = false;

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !isJumping) {
        jump();
    }
});

function jump() {
    isJumping = true;
    player.classList.add('jump');

    setTimeout(() => {
        player.classList.remove('jump');
        isJumping = false;
    }, 500); // Duration of the jump
}

// Collision detection
function checkCollision() {
    const playerRect = player.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    if (
        playerRect.bottom >= obstacleRect.top &&
        playerRect.top <= obstacleRect.bottom &&
        playerRect.right >= obstacleRect.left &&
        playerRect.left <= obstacleRect.right
    ) {
        alert('Game Over! Refresh to play again.');
        obstacle.style.animation = 'none'; // Stop obstacle
    }
}

setInterval(checkCollision, 10); // Check collision every 10ms