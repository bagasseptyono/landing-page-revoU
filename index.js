// Set the interval for changing the active image
let slideIndex = 0;
showSlides();

// Show the slides and update the active image
function showSlides() {
  let slides = document.querySelectorAll('.heroimg img');
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].style.display = "block";  
  slides[slideIndex - 1].classList.add('active');
  
  setTimeout(showSlides, 2000);
}

function validateForm() {
  // Get the form element
  const form = document.getElementById("contact");
  
  var name = form.elements["name"].value;
  var email = form.elements["email"].value;
  if (name=== "") {
    alert("Please enter your name.");
    return true;
  }
  if (email === "") {
    alert("Please enter your Email.");
    return true;
  }

  
  // Submit the form
  form.submit();
}
