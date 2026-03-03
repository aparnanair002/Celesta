document.addEventListener("DOMContentLoaded", () => {
  represesntations = [
    "👸",
    "🛠️",
    "🐦",
    "🏺",
    "🦅",
    "🔥",
    "🐏",
    "🚗",
    "🧑‍🌾",
    "🔪",
    "🦒",
    "🦀",
    "🐕🐕",
    "🐕",
    "🐕",
    "🐐",
    "🚢",
    "👑",
    "🐎",
    "👑",
    "🐉",
    "🦎",
    "📐",
    "🕊️",
    "💇‍♀️",
    "👑",
    "👑",
    "🐦‍⬛",
    "🏆",
    "✝️",
    "🦢",
    "🐬",
    "🐟",
    "🐉",
    "🐎",
    "🌊",
    "🔥",
    "👯",
    "🐦",
    "🦸",
    "🕰️",
    "🐍",
    "🐍",
    "🧑",
    "🦎",
    "🦁",
    "🦁",
    "🐇",
    "⚖️",
    "🐺",
    "🐆",
    "🎵",
    "🏔️",
    "🔬",
    "🦄",
    "🪰",
    "📐",
    "🧭",
    "🐍",
    "🏹",
    "🦚",
    "🐎",
    "🗡️",
    "🔥",
    "🎨",
    "🐟🐟",
    "🐟",
    "🚢",
    "🧭",
    "🕸️",
    "🏹",
    "🏹",
    "🦂",
    "🗿",
    "🛡️",
    "🐍",
    "📐",
    "🐂",
    "🔭",
    "🔺",
    "🔺",
    "🐦",
    "🐻",
    "🐻",
    "⛵",
    "👩",
    "🐟",
    "🦊",
  ];

  images_hh = [
    "andromeda.png",
    "antlia.png",
    "aquarius.png",
    "aqua.png",
    "aquila.png",
    "aries.png",
    "taurus.png",
    "gemini.png",
    "cancer.png",
    "leo.png",
    "virgo.png",
    "libra.png",
    "scorpio.png",
    "sagittarius.png",
    "capricornus.png",
    "aquarius.png",
    "pisces.png",
    "pisces.png",
    "carina.png",
    "cassiopeia.png",
    "centaurus.png",
    "cepheus.png",
    "cygnus.png",
    "delphinus.png",
    "draco.png",
    "equuleus.png",
    "eridanus.png",
    "fornax.png",
    "gemini.png",
    "grus.png",
    "hercules.png",
    "horologium.png",
    "hydra.png",
    "hydrus.png",
    "indus.png",
    "lacerta.png",
    "leo minor.png",
    "leoninae.png",
    "lupus.png",
    "lynx.png",
    "lyra.png",
    "mensae.png",
    "microscopium.png",
    "monoceros.png",
    "musca.png",
    "norma.png",
    "octans.png",
    "ophiuchus.png",
    "orion.png",
    "pavo.png",
    "pegasus.png",
    "perseus.png",
    "phoenix.png",
    "pictor.png",
    "pisces.png",
    "piscis austrinus.png",
    "puppis.png",
    "pyxis.png",
    "reticulum.png",
    "sagitta.png",
    "sagittarius.png",
    "scorpius.png",
    "sculptor.png",
    "scutum.png",
    "serpens.png",
    "sextans.png",
    "taurus.png",
    "telescopium.png",
    "triangulum.png",
    "triangulum australe.png",
    "tucana.png",
    "ursa major.png",
    "ursa minor.png",
    "vela.png",
    "virgo.png",
    "volans.png",
    "vulpecula.png",
  ];
  const constels = document.querySelector(".constels");

  fetch("./constellations.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((c, index) => {
        const div = document.createElement("div");
        div.classList.add("row");

        div.textContent = `${index + 1} ) ${represesntations[index]} ${c.name}`;
        constels.appendChild(div);

        div.addEventListener("click", () => {
          const details = document.querySelector(".popup-of-constellations");
          details.style.display = "flex";

          const texts = document.querySelector(
            ".popup-of-constellations .parag",
          );
          const image = document.querySelector(
            ".popup-of-constellations .image",
          );

          texts.innerHTML = `
      <h2>${c.name}</h2> 

<p><strong><u>Meaning & Origin</u></strong><br>${c.meaning_origin}</p>

<p><strong><u>Mythological Story</u></strong><br>${c.mythological_story}</p>

<p><strong><u>Hemisphere Visibility</u></strong><br>${c.hemisphere_visibility}</p>

<p><strong><u>Best Viewing Month</u></strong><br>${c.best_viewing_month}</p>

<p><strong><u>Brightest Star</u></strong><br>${c.brightest_star}</p>

<p><strong><u>Notable Stars</u></strong><br>${c.notable_stars.join(", ")}</p>

<p><strong><u>Deep Sky Objects</u></strong><br>${c.deep_sky_objects.join(", ")}</p>

<p><strong><u>Zodiac Classification</u></strong><br>${c.zodiac}</p>

<p><strong><u>Area Rank</u></strong><br>${c.area_rank}</p>

<p><strong><u>Neighboring Constellations</u></strong><br>${c.neighboring_constellations.join(", ")}</p>

<p><strong><u>Messier Objects</u></strong><br>${c.messier_objects.join(", ")}</p>

<p><strong><u>Right Ascension</u></strong><br>${c.right_ascension}</p>

<p><strong><u>Declination</u></strong><br>${c.declination}</p>

<p><strong><u>Cultural Significance</u></strong><br>${c.cultural_significance}</p>
      <p><strong><u>Modern IAU Boundaries</u></strong><br> ${c.modern_iau_boundaries}</p>
    `;

          image.src = `./constellations/${images_hh[index]}`;
        });
      });
    })
    .catch((err) => console.log(err));

  const closeBtn = document.querySelector(".popup-of-constellations .close");
  closeBtn.addEventListener("click", () => {
    const details = document.querySelector(".popup-of-constellations");
    details.style.display = "none";
  });
});
