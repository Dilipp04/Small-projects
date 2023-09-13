let dice = document.getElementById("dice")
let num = Math.floor(Math.random() * (6 - 1 + 1) + 1)

let player1 = document.getElementById("p1")
let player2 = document.getElementById("p2")
let turn = 0
function roll() {
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    dice = document.getElementById("dice").innerText = num
    play()
    turn++
}

let p1sum = 1
let p2sum = 1

function play() {
    if (turn % 2 == 0) {
        if ((100 - p1sum) >= num) {
            p1sum += num
            document.getElementById(`b${p1sum}`).appendChild(player1)
        }
        if (p1sum == 100) {
            document.getElementById("tog").innerHTML = "RED WINS"
        } else {
            document.getElementById("tog").innerHTML = "Yellow's Turn :"
        }
        p1sum = snakeladdercheck(p1sum, player1)

    }
    else {
        if ((100 - p2sum) >= num) {
            p2sum += num
            document.getElementById(`b${p2sum}`).appendChild(player2)
        }
        if (p2sum == 100) {
            document.getElementById("tog").innerHTML = "YELLOW WINS"
        } else {
            document.getElementById("tog").innerHTML = "Red's Turn :"
        }
        p2sum = snakeladdercheck(p2sum, player2)


    }
}

function snakeladdercheck(psum, player) {
    let ladder = { 4: 25, 13: 46, 33: 49, 42: 63, 50: 69, 62: 81, 74: 92 }
    if (psum in ladder) {
        document.getElementById(`b${ladder[psum]}`).appendChild(player)
        return psum = ladder[psum]
    }
    let snake = { 27: 5, 40: 3, 43: 18, 54: 31, 66: 45, 76: 58, 89: 53, 99: 41 }
    if (psum in snake) {
        document.getElementById(`b${snake[psum]}`).appendChild(player)
        return psum = snake[psum]
    }
    return psum
}


