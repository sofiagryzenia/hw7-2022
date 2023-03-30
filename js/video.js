var video = document.querySelector(".video");
let volume = Number(document.getElementById('slider').value) / 100;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
    video.loop = false;
	console.log("Auto play is set to false");
	console.log("Loop is set to false");

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	video.volume = volume;
	document.querySelector('#volume').innerHTML = volume * 100 + '%'; 
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log('Slow down video');
	video.playbackRate *= 0.9;
	console.log('Speed is ' + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log('Speed up video');
	video.playbackRate /= 0.9;
	console.log('Speed is ' + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log('Skip ahead');
	video.currentTime += 10;
	console.log('Video current time is ' + video.currentTime);
	if (video.ended) {
		video.currentTime = 0;
		video.play();
	}
});

document.querySelector('#mute').addEventListener('click', function() {
	video.muted = !video.muted;
	if (video.muted) {
	  console.log("Mute");
	  document.querySelector('#mute').innerHTML = "Unmute";
	} else {
	  console.log("Unmute");
	  document.querySelector('#mute').innerHTML = "Mute";
	}
  });

document.querySelector("#slider").addEventListener("change", function() {
	let newVol = Number(document.getElementById("slider").value / 100);
	video.volume = newVol;
	console.log("The current value is", volume);
	console.log('The current value is', newVol);
	document.getElementById("volume").innerHTML = newVol * 100 + '%';
	volume = newVol;

	let divList = document.querySelectorAll("div");
	console.log(divList[1].querySelector("span"));
});
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});