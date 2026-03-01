document.addEventListener('DOMContentLoaded', () => {
    represesntations=['👸', '🛠️', '🐦', '🏺', '🦅', '🔥', '🐏', '🚗', '🧑‍🌾', '🔪', '🦒', '🦀', 
        '🐕🐕', '🐕', '🐕', '🐐', '🚢', '👑', '🐎', '👑', '🐉', '🦎', '📐', '🕊️', '💇‍♀️', 
        '👑', '👑', '🐦‍⬛', '🏆', '✝️', '🦢', '🐬', '🐟', '🐉', '🐎', '🌊', '🔥', '👯', 
        '🐦', '🦸', '🕰️', '🐍', '🐍', '🧑', '🦎', '🦁', '🦁', '🐇', '⚖️', '🐺', '🐆', 
        '🎵', '🏔️', '🔬', '🦄', '🪰', '📐', '🧭', '🐍', '🏹', '🦚', '🐎', '🗡️', '🔥', 
        '🎨', '🐟🐟', '🐟', '🚢', '🧭', '🕸️', '🏹', '🏹', '🦂', 
        '🗿', '🛡️', '🐍', '📐', '🐂', '🔭', '🔺', '🔺', '🐦', 
        '🐻', '🐻', '⛵', '👩', '🐟', '🦊']
  const constels = document.querySelector('.constels');

  fetch('./constellations.json')
    .then(res => res.json())
    .then(data => {
      data.forEach((c,index) => {
        const div = document.createElement('div');
        div.classList.add('row');
        div.textContent = `${index+1} ) ${represesntations[data.indexOf(c)]} ${c.name}`;
        constels.appendChild(div);
        div.addEventListener('click', () => {
          const details = document.querySelector('.popup-of-constellations');
          details.style.display = 'flex';
          const texts=document.querySelector('.popup-of-constellations .parag');
          const image=document.querySelector('.popup-of-constellations .image');
          texts.innerHTML = `
             <h2>${c.name}</h2> 
            <p><strong>Meaning & Origin:</strong> ${c.meaning_origin}</p>
            <p><strong>Mythological Story:</strong> ${c.mythological_story}</p>
            <p><strong>Hemisphere Visibility:</strong> ${c.hemisphere_visibility}</p>
            <p><strong>Cultural Significance:</strong> ${c.cultural_significance}</p>
            <p><strong>Modern IAU Boundaries:</strong> ${c.modern_iau_boundaries}</p>
          `;
        });
         
      });
    })
    .catch(err => console.log(err));

    const closeBtn = document.querySelector('.popup-of-constellations .close');
    closeBtn.addEventListener('click', () => {
      const details = document.querySelector('.popup-of-constellations');
      details.style.display = 'none';   
    });

});