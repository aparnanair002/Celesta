function generateStars(container, count) {
  let stars = [];

  for (let i = 0; i < count; i++) {
    const size = Math.random() *3  + 0.3;
    const opacity = Math.random() * 0.8 + 0.2;
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    stars.push(`
      radial-gradient(
        circle ${size}px at ${x}% ${y}%,
        rgba(255,255,255,${opacity}),
        transparent 70%
      )
    `);
  }

  container.style.background = stars.join(",");
}
document.addEventListener("DOMContentLoaded", function() {
  const layer1 = document.querySelector(".layer1");
  const layer2 = document.querySelector(".layer2");
  generateStars(layer1, 150);  
  generateStars(layer2, 60);  

  const audio = document.getElementById("myAudio");
  const button = document.querySelector(".soundstatus button");

  if (button) { // check exists
    const span = button.querySelector("span");
   

    button.addEventListener("click", function() {
      if (span.textContent === "❚❚") {
        audio.pause();
        span.textContent = "▶";
        button.nextSibling.textContent = " SOUND OFF";
       
      } else {
        audio.play().catch(err => console.log("Autoplay blocked:", err));
        span.textContent = "❚❚";
                button.nextSibling.textContent = " SOUND ON";
          const buttons = document.querySelectorAll('.sign');
           buttons.forEach(btn => btn.style.display = "block");

      
      }
    });
  }

//hubble following
 const hubble = document.querySelector(".hubble");

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  const speed = 0.1;

  document.addEventListener("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

 function animate() {
  currentX += (mouseX - currentX) * speed;
  currentY += (mouseY - currentY) * speed;

  hubble.style.left = currentX + "px";
  hubble.style.top = currentY + "px";

  document.documentElement.style.setProperty('--x', currentX + 'px');
  document.documentElement.style.setProperty('--y', currentY + 'px');

  requestAnimationFrame(animate);
}
animate();
});

//all sign in sign up stuff
const popup = document.querySelector(".popup");
const signin=document.getElementById("sign-in");
const signup=document.getElementById("sign-up");

signin.addEventListener("click", function() {
  popup.classList.add("open");
  document.querySelector(".popup-signin").style.display = "block";
  document.querySelector(".popup-signup").style.display = "none";
});

signup.addEventListener("click", function() {
  popup.classList.add("open");
  document.querySelector(".popup-signin").style.display = "none";
  document.querySelector(".popup-signup").style.display = "block";
});

document.getElementById('close').addEventListener("click", function() {
  popup.classList.remove("open");
});

document.getElementById('submit').addEventListener("click", function() {
window.location.href = "./galaxies.html";
});