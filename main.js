x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
apple = "";
speak_data = "";
to_number = "";
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
function preload(){
loadImage(apple, "apple.png");
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "System will " + content; 
    to_number = Number(content);
    if(Number.isInteger(to_number)){
      draw_apple = "set";
      document.getElementById("status").innerHTML = "Started drawing apples";
    }
    else{
      document.getElementById("status").innerHTML = "You have not specified the number of apples to draw";
    }

}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 createCanvas(screen_width, screen_height - 170);
 canvas.position(75, 75);
}

function draw() {
  if(draw_apple == "set")
  {
    for(i = 1, i <= to_number;){
      x = Math.floor(Math.random * 700);
      y = Math.floor(Math.random * 400);
      image(apple, x, y, 100, 100);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
