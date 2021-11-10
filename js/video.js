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
	// console.log("Slow Video");
	video.playbackRate *= 0.95;
	console.log(video.playbackRate);
});

document.querySelector('#faster').addEventListener("click", function() {
	// console.log("Fast forward Video");
	video.playbackRate *= 1.05;
	console.log(video.playbackRate);
});

document.querySelector('#skip').addEventListener("click", function() {
	// console.log("Skip Video");
	video.currentTime += 15
	console.log(video.currentTime)
});

document.querySelector('#mute').addEventListener("click", function() {
	console.log("Mute Video");
	video.muted = !(video.muted); //toggle it
	// console.log(video.muted);
});

slider.addEventListener("change", function() {
	console.log("Slider changed");
	video.volume = slider.value / 100;
	console.log(video.volume);
});

document.querySelector('#vintage').addEventListener("click", function() {
	console.log("old school");
	video.classList.add('oldSchool');
	
});

document.querySelector('#orig').addEventListener("click", function() {
	console.log("original");
	video.classList.remove('oldSchool');
});