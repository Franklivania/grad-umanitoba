var button = document.querySelector("#btn");

button.addEventListener("click", function() {
  let errorContent = document.querySelector(".error");

  if(errorContent) {
    errorContent.style.display = "block";
  };
});