document.getElementById("myform").addEventListener("submit", function(event) {
  let name = document.getElementById("name").value.trim();
  let insta = document.getElementById("insta").value.trim();
  let email = document.getElementById("email").value.trim();

  if (name === "" || insta === "" || email === "") {
    event.preventDefault(); // Stop going to next page
    alert("⚠️ Please fill all fields before submitting!");
  }
  // else → form will go to payment.html
});
