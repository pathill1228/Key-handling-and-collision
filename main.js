const player = document.getElementById('player')
let positionX = 0;
let positionY = 0;
let v = 2;

//player.style.left = "50%";
//player.style.top = "50%";

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case "ArrowRight":
            if (positionX != 100) {
                positionX += v;
                console.log(positionX + "%");
                player.style.left = positionX + "%";
                player.style.transition = "left 0.1s ease-out";
            }
            break;
        case "ArrowLeft":
            if (positionX != 0) {
                positionX -= v;
                console.log(positionX + "%");
                player.style.left = positionX + "%";
                player.style.transition = "left 0.1s ease-out";
            }
            break;
        case "ArrowDown":
            if (positionY != 100) {
                positionY += v;
                console.log(positionY + "%");
                player.style.top = positionY + "%";
                player.style.transition = "top 0.1s ease-out";
            }
            break;
        case "ArrowUp":
            if (positionY != 0) {
                positionY -= v;
                console.log(positionY + "%");
                player.style.top = positionY + "%";
                player.style.transition = "top 0.1s ease-out";
            }
            break;
    }
});