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

      
      }
    });
  }
});
