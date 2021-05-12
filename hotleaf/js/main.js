// // function testWebP(callback) {

// 	var webP = new Image();
// 	webP.onload = webP.onerror = function () {
// 		callback(webP.height == 2);
// 	};
// 	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }

// testWebP(function (support) {

// 	if (support == true) {
// 		document.querySelector('body').classList.add('webp');
// 	}else{
// 		document.querySelector('body').classList.add('no-webp');
// 	}
// });
const animated = document.querySelectorAll('.anim');

let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = 'anim1 0.5s forwards ease-out'
    }
    else {
      entry.target.style.animation = 'none';
    }
  })
})

animated.forEach(anim => {
  observer.observe(anim);
})
;
