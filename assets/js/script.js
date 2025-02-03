let videobtn = document.querySelector(".play-btn");
let heroVideo= document.getElementById("heroVideo");
videobtn.addEventListener("click",function(){
	heroVideo.play();
	videobtn.style.display="none"
})