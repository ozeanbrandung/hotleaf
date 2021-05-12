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
