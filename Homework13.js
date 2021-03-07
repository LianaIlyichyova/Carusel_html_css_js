
const birds = ["Bird1.jpg", "Bird2.jpg", "Bird3.jpg","Bird4.jpg","Bird5.jpg","Bird6.jpg"];

const infos = ["Hummingbirds vision is insane, isn't it?",
                "They lay the smallest of all bird eggs.",
                "They eat all day long.",
                "They fly faster than a car.",
                "They can fly in any direction.",
                "Their hearts beat like crazy."
              ];
let container, currentPic, birdPic, previous, next, info;

function createMainPage(){
  container = document.getElementsByClassName("maincontainer")[0];
  currentPic = container.appendChild(document.createElement("img"));
  currentPic.src=birds[0]
  currentPic.id="mainpic";

    previous = container.appendChild(document.createElement("a"));
    previous.id="previous";
    previous.innerHTML="&#10094";

    next = container.appendChild(document.createElement("a"));
    next.id="next";
    next.innerHTML="&#10095";

    let textContainer=container.appendChild(document.createElement("div"));
    textContainer.className="textcontainer";
    info = textContainer.appendChild(document.createElement("p"));
    info.id = "info";
    info.innerHTML = infos[0];

    let row = container.appendChild(document.createElement("div"));
    row.className="row";
    for(let i=0; i < birds.length; i++){
      let column = row.appendChild(document.createElement("div"));
      column.className="column";

      birdPic = column.appendChild(document.createElement("img"));
      birdPic.src=birds[i];
      birdPic.className="demo cursor";

      birdPic.addEventListener("click",function(){
        currentPic.src = birds[i];
        info.innerHTML=infos[i];
      });
    }
}
createMainPage();


function plusSlides(n) {
  if(currentPic.src.endsWith(birds[0]) && n===-1){
    currentPic.src = birds[birds.length-1];
    info.innerHTML=infos[infos.length-1];
  }else if(currentPic.src.endsWith(birds[birds.length-1]) && n===1){
    currentPic.src=birds[0];
    info.innerHTML=infos[0];
  }else{
    currentPic.src = birds[birds.indexOf((currentPic.src).slice(currentPic.src.lastIndexOf("/")+1))+n];
    info.innerHTML=infos[infos.indexOf(info.innerHTML)+n];
  }
} 

previous.addEventListener("click",function(){
  plusSlides(-1);
});

next.addEventListener("click",function(){
  plusSlides(1);
});

function carousel(){
      if(currentPic.src.endsWith(birds[birds.length-1])){
        currentPic.src=birds[0];
        info.innerHTML=infos[0];
      }else{
        currentPic.src = birds[birds.indexOf((currentPic.src).slice(currentPic.src.lastIndexOf("/")+1))+1];
        info.innerHTML=infos[infos.indexOf(info.innerHTML)+1];
      }
    }


function changingPicByTime(interval){
      let tabCarousel=setInterval(carousel,interval)
      container.onmouseover = ()=>clearInterval(tabCarousel);
      container.onmouseout= ()=>{
      tabCarousel=setInterval(carousel,interval);
    }
  } 
    changingPicByTime(5000)
  



 





