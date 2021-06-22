// Wrap every letter in a span
var textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// title letter
anime.timeline({loop: true})
  .add({
    targets: '.my-name .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.my-name',
    opacity: 0,
    duration: 4000,
    easing: "easeOutExpo",
    delay: 1000
  });


	// init controller
	var controller = new ScrollMagic.Controller();

  // build scene
  var scene = new ScrollMagic.Scene({
    triggerElement: "#about-me"
  })
  .setTween(".cloud1", 0.5, {scale: 1.5}) // trigger a TweenMax.to tween
  .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
  .addTo(controller);