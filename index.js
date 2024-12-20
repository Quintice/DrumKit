// 製作 for loop 讓每個 button 都有相同動作
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     alert("I got Click");
//   });
// }

// 播放聲音
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function play() {
//         var audio = new Audio('sounds/crash.mp3');
//         audio.play();
//       });
//   }

//   for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         this.style.color = "white";
//     });
//   }

//偵測滑鼠點擊事件執行 function
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    sound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//偵測鍵盤點擊事件執行 function
document.addEventListener("keypress", function (event) {
  console.log(event);
  sound(event.key);
  buttonAnimation(event.key);
});

function sound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(key);
  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

//測試用
// document.addEventListener("keypress", function (event) {
//   console.log(event)
//   sound(event.key);
// });

// function sound(eventKey) {
//   switch (eventKey) {
//     case "w":
//       alert("k");
//       break;

//     default:
//       console.log(eventKey);
//   }
// }

// function 詳細使用
// function a(typeOfEvent, callback) {
//   var eventHappen = {
//     type: "keypress",
//     key: "p",
//     duration: 2,
//   };
//   if (eventHappen.type === typeOfEvent) {
//     callback(eventHappen);
//   }
// }
// a("keypress", function (event) {
//   console.log(event);
// });

// document.addEventListener("keypress", function(event){
//   console.log(event);
// })
