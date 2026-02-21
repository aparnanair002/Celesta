
function celesta_galaxy(container, starCount,layer) {
    let constellations = new Array();
    const sizer = layer === 0 ? 3.2 : 1.5; 
    for (let i = 0; i < starCount; i++) {
        const size = Math.random() * sizer + 0.5;
        const opacity = Math.random() * 0.8 + 0.2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
         constellations.push(`
      radial-gradient(
        circle ${size}px at ${x}% ${y}%,
        rgba(255,255,255,${opacity}),
        transparent 70%
      )
    `);
    }
   container.style.background=constellations.join(',');

}

document.addEventListener("DOMContentLoaded", function() {
    const layer1 = document.querySelector(".layer1");
    const layer2 = document.querySelector(".layer2");
    const layer3 = document.querySelector(".layer3");
    celesta_galaxy(layer1, 80,0);  
    celesta_galaxy(layer2, 120,1);
    celesta_galaxy(layer3, 90,1);

});
