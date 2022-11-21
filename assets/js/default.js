// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}

// Login
document.getElementById('frmLogin').addEventListener('submit', (e) => {
  e.preventDefault()
  const username = document.querySelector("input[name='username'").value;
  const password = document.querySelector("input[name='password'").value;
  if (username === "admin" && password === "admin") {
    document.getElementById('login').style.display = "none";
    document.getElementById('dashboard').style.display = "block";
  } else {
    alert("Wrong Username or Password");
  }

})