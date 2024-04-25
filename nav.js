// Javascript code to enable Arrow Key navigation 

document.addEventListener("keydown", function(event) {
    // Check if the pressed key is the left arrow key (key code 37)
    if (event.code === "ArrowLeft") {
      // Redirect to the previous page
      var previousLink = document.querySelector(".nav-page-previous a");
      if (previousLink) {
        window.location.href = previousLink.getAttribute("href");
      }
    }
    // Check if the pressed key is the right arrow key (key code 39)
    else if (event.code === "ArrowRight") {
      // Redirect to the next page
      var nextLink = document.querySelector(".nav-page-next a");
      if (nextLink) {
        window.location.href = nextLink.getAttribute("href");
      }
    }
  });