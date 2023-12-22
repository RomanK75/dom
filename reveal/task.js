window.addEventListener("scroll", function() {
    var rotatorCases = document.getElementsByClassName("reveal");
    
    for (var i = 0; i < rotatorCases.length; i++) {
      var rect = rotatorCases[i].getBoundingClientRect();
      var isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight);
      
      if (isVisible) {
        rotatorCases[i].classList.add("reveal_active");
    } else {
        rotatorCases[i].classList.remove("reveal_active");
      }
    }
  });