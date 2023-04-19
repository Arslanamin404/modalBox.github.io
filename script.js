
//if we refresh our page modal box will be hidden. we used onload on for it to work
function hide() {
    document.querySelector(".whiteBox").style.display = "none"
    document.querySelector(".transparentBox").style.display = "none"
}
function dismiss() {
    document.querySelector(".whiteBox").style.display = "none"
    document.querySelector(".transparentBox").style.display = "none"
}
function openBox() {
    document.querySelector(".whiteBox").style.display = "block"
    document.querySelector(".transparentBox").style.display = "block"
}

// modal box will be appeared after some time
setTimeout(openBox,5000)


let interval = setInterval(openBox,30000)

/*This will run after every 2 minutes.
We can also use conditionals to clear specific interval,like if user clicked on "login btn" then clear interval
if user clicked on "close btn" then run again interval function after setTime interval
*/

document.getElementById("logIn").addEventListener("click",function () {
    clearInterval(interval)
    dismiss()
    alert("you cleared interval successfully!")
})

//Another way of doing same thing
/*
function intervalClear(){
    clearInterval(interval)
    dismiss()
    alert("you cleared interval successfully!")
}
document.getElementById("logIn").addEventListener("click",intervalClear)
 */