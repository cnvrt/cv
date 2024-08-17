// JS
const pos1 = [{l:41,t:20},{l:50,t:20},{l:60,t:20}, {l:20,t:50},{l:30,t:50},{l:40,t:50},{l:50,t:50},{l:60,t:50},{l:70,t:50},{l:80,t:50}, {l:25,t:75},{l:37,t:75},{l:45,t:75},{l:55,t:75},{l:65,t:75},{l:75,t:75}];

const pos2 = [{l:90,t:75},{l:20,t:75},{l:65,t:20}, {l:60,t:75},{l:55,t:20},{l:55,t:50},{l:10,t:75}, {l:70,t:75},{l:35,t:50},{l:45,t:50},{l:80,t:75},{l:35,t:20},{l:65,t:50},{l:40,t:75},{l:30,t:75},{l:50,t:75}];

function setC(c,p){
  c.style.left = `${p.l}%`;
  c.style.top = `${p.t}%`;
  c.style.opacity = 1;
}

function moveAll(c,p){
  c.forEach((char, index) => {
    setC(char,p[index]);
  });
  pos = p[0].l==pos1[0].l?pos2:pos1;
  setTimeout(() => {
    moveAll(c,pos);
  }, 15000);
}


document.addEventListener("DOMContentLoaded", function() {
  audio = document.getElementById("background-music");
  const chars = document.querySelectorAll('.char');

    const playButton = document.getElementById("play-button");
    const animationContainer = document.getElementById("animation-container");

    playButton.addEventListener('click', function () {
        audio.play();
        playButton.style.display = 'none';
        animationContainer.style.display = 'grid';
      
  chars.forEach((char, index) => {
    setTimeout(() => {
      setC(char,pos1[index]);
    }, 100 * index);
  });

  setTimeout(() => {
    moveAll(chars,pos2);
  }, 5000);
      
    });
  
});