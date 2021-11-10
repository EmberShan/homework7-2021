var video = document.querySelector('.video');
var slider = document.querySelector('#slider');

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector('#play').addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector('#pause').addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector('#slower').addEventListener("click", function() {
	console.log("Slow Video");
	video.playbackRate *= 0.95;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector('#faster').addEventListener("click", function() {
	console.log("Fast forward Video");
	video.playbackRate *= 1.05;
	console.log(video.playbackRate);
});

document.querySelector('#skip').addEventListener("click", function() {
	console.log("Original location " + video.currentTime);
	video.currentTime += 15
	let curr = video.currentTime;
	if (curr >= 67){
		console.log("Going back to beginning")
		video.currentTime = 0;
	}
	console.log("New location " + video.currentTime);
});

document.querySelector('#mute').addEventListener("click", function() {
	console.log("Mute Video");
	video.muted = !(video.muted); //toggle it
	let button = document.querySelector('#mute')
	if (button.innerHTML == 'Mute'){
		button.innerHTML = 'Unmute';
	}else{
		button.innerHTML = 'Mute';
	}
});

slider.addEventListener("change", function() {
	console.log("Slider changed");
	video.volume = slider.value / 100;
	console.log(video.volume);
	document.querySelector('#volume').innerHTML = slider.value + '%';
});

document.querySelector('#vintage').addEventListener("click", function() {
	console.log("old school");
	video.classList.add('oldSchool');
	
});

document.querySelector('#orig').addEventListener("click", function() {
	console.log("original");
	video.classList.remove('oldSchool');
});