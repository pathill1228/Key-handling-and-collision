const player = document.getElementById('player')
let positionX = 0;
let positionY = 0;
let v = 2;

//player.style.left = "50%";
//player.style.top = "50%";

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case "d":
            if (positionX != 100) {
                positionX += v;
                console.log(positionX + "%");
                player.style.left = positionX + "%";
                player.style.transition = "left 0.07s ease-out";
            }
            break;
        case "a":
            if (positionX != 0) {
                positionX -= v;
                console.log(positionX + "%");
                player.style.left = positionX + "%";
                player.style.transition = "left 0.07s ease-out";
            }
            break;
        case "s":
            if (positionY != 100) {
                positionY += v;
                console.log(positionY + "%");
                player.style.top = positionY + "%";
                player.style.transition = "top 0.07s ease-out";
            }
            break;
        case "w":
            if (positionY != 0) {
                positionY -= v;
                console.log(positionY + "%");
                player.style.top = positionY + "%";
                player.style.transition = "top 0.07s ease-out";
            }
            break;
    }
});

//try using objects and cleaner code next time.
/*
player.x = moveX * player.speed
player.x = moveX * player.speed * diagonal

diagonal = 1 / math.sqrt(2)

animation frame and call funciton updateGame?
*/