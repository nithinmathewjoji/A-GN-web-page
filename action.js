
  // Check the viewport width
  function checkViewportWidth() {
    if (window.innerWidth <= 500) 
    {
      // Redirect to another page
      //window.location.href = "warning.html";
    }
    else{
        
    }
  }

   //Check the width initially
  checkViewportWidth();

  // Add an event listener to check on window resize
  window.addEventListener("resize", checkViewportWidth);
