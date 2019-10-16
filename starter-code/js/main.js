
// var digitalClock = document.querySelector('h1');
// var secondHand= document.getElementById("seconds")
// var minutesHand =document.getElementById("minutes")
// var hoursHand =document.getElementById("hour")


// setInterval(time, 1000)
// function time(){
//     let date = new Date()

//     let hours = date.getHours()
//     let minutes = date.getMinutes()
//     let seconds = date.getSeconds()
//     // let shift = data.digitalClock();
//     // changeHand( hours * 30);
//     // changeHand( minutes * 6);
//     secondHand.style.transform = "rotate(" + seconds * 6 + "deg)";
//     minutesHand.style.transform = "rotate(" + minutes * 6 + "deg)";
//     hoursHand.style.transform = "rotate(" + hours * 30 + "deg)";

//     digitalClock.innerHTML = `${hours} : ${minutes} : ${seconds} `
// }

// function changeTimeFormat(){
//     digitalClock.innerHTML="hh"
// }
var creator = document.querySelector('.creator')
var li = document.createElement("li")
//<li></li>
console.log(li)
var text = document.createTextNode("List me") //List me
console.log(text)
li.appendChild(text)
//<li>List me</li>
console.log(li)

creator.appendChild(li)
console.log(creator)

let img2 = document.createElement("img")
//<img />
img2.setAttribute("src", "https://i.ytimg.com/vi/O6gkm-nklyw/maxresdefault.jpg")
//<img src="https://i.ytimg.com/vi/O6gkm-nklyw/maxresdefault.jpg" />

img2.setAttribute("width", "20%")

creator.appendChild(img2)