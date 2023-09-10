let dice=document.getElementById("dice")
let num=Math.floor(Math.random()*(6-1+1)+1)

let player1=document.getElementById("p1")
let player2=document.getElementById("p2")

function roll(){
    num=Math.floor(Math.random()*(6-1+1)+1)
    dice=document.getElementById("dice").innerText=num
    play()
}

function play(){
    let p1sum=0
    p1sum+=num*50
    document.getElementById("p1").style.left=`${p1sum}px`   
}



