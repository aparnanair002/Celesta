const constels= document.querySelector('.constels');
const popup=document.querySelector('.popup-of-constellations');


document.addEventListener('DOMContentLoaded', () => {
    constellations=['Andromeda', 'Antlia', 'Apus', 'Aquarius', 'Aquila', 'Ara', 'Aries', 'Auriga', 'Boötes', 'Caelum', 
        'Camelopardalis', 'Cancer', 'Canes Venatici', 'Canis Major', 'Canis Minor', 
        'Capricornus', 'Carina', 'Cassiopeia', 'Centaurus', 'Cepheus', 'Cetus',
         'Chamaeleon', 'Circinus', 'Columba', 'Coma Berenices', 'Corona Australis', 
         'Corona Borealis', 'Corvus', 'Crater', 'Crux', 'Cygnus', 'Delphinus', 
         'Dorado', 'Draco', 'Equuleus', 'Eridanus', 'Fornax', 'Gemini', 'Grus', 
         'Hercules', 'Horologium', 'Hydra', 'Hydrus', 'Indus', 'Lacerta', 'Leo', 
         'Leo Minor', 'Lepus', 'Libra', 'Lupus', 'Lynx', 'Lyra', 'Mensa', 'Microscopium', 
         'Monoceros', 'Musca', 'Norma', 'Octans', 'Ophiuchus', 'Orion', 'Pavo', 'Pegasus', 
         'Perseus', 'Phoenix', 'Pictor', 'Pisces', 'Piscis Austrinus', 'Puppis', 'Pyxis', 
         'Reticulum', 'Sagitta', 'Sagittarius', 'Scorpius', 'Sculptor', 'Scutum', 'Serpens', 
         'Sextans', 'Taurus', 'Telescopium', 'Triangulum', 'Triangulum Australe', 'Tucana', 
         'Ursa Major', 'Ursa Minor', 'Vela', 'Virgo', 'Volans', 'Vulpecula'];
    represesntations=['👸', '🛠️', '🐦', '🏺', '🦅', '🔥', '🐏', '🚗', '🧑‍🌾', '🔪', '🦒', '🦀', 
        '🐕🐕', '🐕', '🐕', '🐐', '🚢', '👑', '🐎', '👑', '🐉', '🦎', '📐', '🕊️', '💇‍♀️', 
        '👑', '👑', '🐦‍⬛', '🏆', '✝️', '🦢', '🐬', '🐟', '🐉', '🐎', '🌊', '🔥', '👯', 
        '🐦', '🦸', '🕰️', '🐍', '🐍', '🧑', '🦎', '🦁', '🦁', '🐇', '⚖️', '🐺', '🐆', 
        '🎵', '🏔️', '🔬', '🦄', '🪰', '📐', '🧭', '🐍', '🏹', '🦚', '🐎', '🗡️', '🔥', 
        '🎨', '🐟🐟', '🐟', '🚢', '🧭', '🕸️', '🏹', '🏹', '🦂', 
        '🗿', '🛡️', '🐍', '📐', '🐂', '🔭', '🔺', '🔺', '🐦', 
        '🐻', '🐻', '⛵', '👩', '🐟', '🦊']

Meaning_Array = ["Princess (Andromeda)","Air Pump","Bird of Paradise","Water Bearer","Eagle","Altar","Ram","Charioteer","Herdsman","Chisel","Giraffe","Crab","Hunting Dogs","Greater Dog","Lesser Dog","Sea Goat","Keel (of a ship)","Queen","Centaur","King","Sea Monster (Whale)","Chameleon","Compass (Drafting Tool)","Dove","Berenice’s Hair","Southern Crown","Northern Crown","Crow","Cup","Southern Cross","Swan","Dolphin","Dolphinfish","Dragon","Little Horse","River","Furnace","Twins","Crane","Hero (Hercules)","Clock","Water Snake","Little Water Snake","Indian (Native American figure)","Lizard","Lion","Little Lion","Hare","Scales","Wolf","Lynx","Lyre","Table Mountain","Microscope","Unicorn","Fly","Carpenter’s Square","Octant","Serpent Bearer","Hunter","Peacock","Winged Horse","Hero (Perseus)","Phoenix (Mythical Bird)","Painter’s Easel","Fishes","Southern Fish","Stern (of a ship)","Mariner’s Compass","Net","Arrow","Archer","Scorpion","Sculptor","Shield","Serpent","Sextant","Bull","Telescope","Triangle","Southern Triangle","Toucan","Great Bear","Little Bear","Sails (of a ship)","Virgin","Flying Fish","Little Fox"];   

visibility_array = ["Northern Hemisphere","Southern Hemisphere","Southern Hemisphere","Both Hemispheres","Both Hemispheres","Southern Hemisphere","Both Hemispheres","Northern Hemisphere","Northern Hemisphere","Southern Hemisphere","Northern Hemisphere","Both Hemispheres","Northern Hemisphere","Both Hemispheres","Both Hemispheres","Both Hemispheres","Southern Hemisphere","Northern Hemisphere","Southern Hemisphere","Northern Hemisphere","Both Hemispheres","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Northern Hemisphere","Southern Hemisphere","Northern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Both Hemispheres","Both Hemispheres","Southern Hemisphere","Northern Hemisphere","Northern Hemisphere","Both Hemispheres","Southern Hemisphere","Both Hemispheres","Southern Hemisphere","Northern Hemisphere","Southern Hemisphere","Both Hemispheres","Southern Hemisphere","Southern Hemisphere","Northern Hemisphere","Both Hemispheres","Northern Hemisphere","Both Hemispheres","Both Hemispheres","Southern Hemisphere","Northern Hemisphere","Northern Hemisphere","Southern Hemisphere","Southern Hemisphere","Both Hemispheres","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Both Hemispheres","Both Hemispheres","Southern Hemisphere","Both Hemispheres","Northern Hemisphere","Southern Hemisphere","Southern Hemisphere","Both Hemispheres","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Southern Hemisphere","Both Hemispheres","Both Hemispheres","Both Hemispheres","Southern Hemisphere","Southern Hemisphere","Both Hemispheres","Southern Hemisphere","Both Hemispheres","Southern Hemisphere","Northern Hemisphere","Southern Hemisphere","Southern Hemisphere","Northern Hemisphere","Northern Hemisphere","Southern Hemisphere","Both Hemispheres","Southern Hemisphere","Northern Hemisphere"];    best_viewing_month_array=[];
mythological_array = [
"Andromeda was a princess in Greek mythology, the daughter of King Cepheus and Queen Cassiopeia. After her mother boasted that she was more beautiful than the sea nymphs, Poseidon sent a sea monster to punish their kingdom. Andromeda was chained to a rock as a sacrifice but was rescued by the hero Perseus, and both were later placed among the stars.",
"Antlia has no roots in ancient Greek mythology. It was introduced in the 18th century by the French astronomer Nicolas-Louis de Lacaille. The constellation represents an air pump, reflecting the scientific instruments of the Enlightenment era rather than mythological tradition.",
"Apus also does not originate from classical mythology. It was created during the Age of Exploration to represent a bird of paradise seen in the southern hemisphere. The constellation reflects European fascination with exotic wildlife rather than ancient legend.",
"Aquarius represents Ganymede, a beautiful youth chosen by Zeus. Zeus transformed himself into an eagle and carried Ganymede to Mount Olympus to serve as cupbearer of the gods. Because of this role, Aquarius is depicted as the water bearer pouring water into the heavens.",
"Aquila represents the eagle of Zeus in Greek mythology. The eagle carried Zeus’s thunderbolts and served as a symbol of divine authority. In some stories, Aquila is also the eagle that abducted Ganymede to Olympus.",
"Ara symbolizes the altar of the gods. According to myth, the gods swore an oath upon this altar before battling the Titans. After their victory, the altar was placed in the sky to commemorate their triumph.",
"Aries represents the golden ram from the myth of Phrixus and Helle. The ram carried the children away from danger, but Helle fell into the sea during the journey. The ram was later sacrificed, and its golden fleece became the object of Jason’s famous quest.",
"Auriga is usually identified as a charioteer in Greek mythology. Some traditions associate him with Erichthonius, an early king of Athens who invented the four-horse chariot. The constellation is often depicted holding a goat, adding complexity to its mythological identity.",
"Boötes is often described as a herdsman or plowman. In some myths, he is Arcas, the son of Callisto, who was nearly killed by his mother after she was transformed into a bear. Zeus intervened and placed both in the sky as Ursa Major and Boötes.",
"Caelum has no ancient mythological origin. It was introduced by Lacaille in the 18th century. The constellation represents a sculptor’s chisel, reflecting scientific and artistic instruments rather than classical legend.",
"Camelopardalis has no roots in Greek mythology. It was introduced in the early modern period to represent a giraffe described as a camel-leopard. The constellation reflects exploration-era astronomy rather than ancient legend.",
"Cancer represents the crab sent by Hera to distract Heracles during his battle with the Hydra. The crab bit the hero’s foot in an attempt to help the serpent. Though crushed, it was honored by Hera and placed among the stars.",
"Canes Venatici represents the hunting dogs of Boötes. In later tradition they are called Asterion and Chara. The constellation was added in the 17th century to complete the celestial hunting scene.",
"Canis Major is Orion’s great hunting dog. It follows the mighty hunter across the sky and contains Sirius, the brightest star visible from Earth. In myth, the dog represents loyalty and strength in the eternal hunt.",
"Canis Minor is the lesser hunting dog that accompanies Orion. Though smaller and less bright than Canis Major, it forms part of the celestial hunting trio. It symbolizes faithful companionship in Greek myth.",
"Capricornus represents the sea-goat linked to the god Pan. When fleeing the monster Typhon, Pan leapt into water and transformed into a half-goat, half-fish creature. Zeus honored this transformation by placing Capricornus in the sky.",
"Carina was originally part of the great ship Argo Navis. It represents the keel of the vessel used by Jason and the Argonauts in their quest for the Golden Fleece. The ship was later divided into smaller constellations, but its mythological connection remains.",
"Cassiopeia was the vain queen who boasted of her beauty. Her pride angered the sea nymphs and brought disaster upon her kingdom. She was placed in the sky on a throne, often depicted upside down as a lesson in humility.",
"Centaurus is commonly identified as the wise centaur Chiron. Unlike other centaurs, Chiron was noble and served as a teacher to many Greek heroes. His wisdom and sacrifice earned him a place among the stars.",
"Cepheus was the king of Ethiopia and husband of Cassiopeia. He struggled to save his daughter Andromeda from a sea monster sent by Poseidon. He was placed in the sky along with his royal family, forming a connected mythological group.",
"Cetus represents the great sea monster sent by Poseidon to punish Cassiopeia’s kingdom. The creature was meant to devour Andromeda as a sacrifice. Perseus ultimately slew the monster, and it was immortalized in the sky.",
"Chamaeleon has no roots in Greek mythology. It was introduced during the Age of Exploration to represent the color-changing reptile of the southern hemisphere. The constellation reflects scientific curiosity rather than ancient legend.",
"Circinus has no classical mythological origin. It was created in the 18th century by Nicolas-Louis de Lacaille to represent a drafting compass. The constellation honors scientific instruments instead of mythic figures.",
"Columba is often associated with the dove from the story of Noah’s Ark. The dove carried an olive branch as a sign that the floodwaters were receding. Though not Greek in origin, it carries strong symbolic meaning of peace and hope.",
"Coma Berenices represents the hair of Queen Berenice II of Egypt. She vowed to sacrifice her beautiful hair if her husband returned safely from war. After she fulfilled her promise, the hair was said to have been placed among the stars.",
"Corona Australis represents a southern crown. In some traditions, it is associated with the crown of the centaur Sagittarius. Though less prominent in myth, it symbolizes honor and royalty.",
"Corona Borealis is the Northern Crown and is linked to Ariadne. After helping Theseus defeat the Minotaur, Ariadne was abandoned but later married Dionysus. Dionysus placed her crown in the sky as a symbol of love and immortality.",
"Corvus is the crow associated with the god Apollo. In myth, the crow was sent on an errand but became distracted and lied about it. As punishment, Apollo placed the bird in the sky and turned its feathers black.",
"Crater represents the cup of Apollo. It is often shown alongside Corvus and Hydra in the sky. The grouping reflects the myth involving Apollo’s crow and the consequences of dishonesty.",
"Crux, the Southern Cross, has no origin in Greek mythology. It became significant to navigators in the southern hemisphere for locating the south celestial pole. Its cultural importance grew through exploration rather than ancient myth.",
"Cygnus represents a swan in Greek mythology. In one story, Zeus transformed into a swan to approach Leda. The constellation is also sometimes linked to Orpheus, whose lyre was placed nearby in the sky.",
"Delphinus represents the dolphin that saved the poet Arion. According to myth, sailors attempted to kill Arion, but he was rescued by a dolphin charmed by his music. The grateful gods placed the dolphin among the stars.",
"Dorado has no roots in Greek mythology. It was introduced during the Age of Exploration to represent a dolphinfish. The constellation reflects maritime discovery rather than classical legend.",
"Draco represents the dragon Ladon from Greek mythology. Ladon guarded the golden apples in the Garden of the Hesperides. After being slain by Heracles, the dragon was placed in the sky.",
"Equuleus is known as the little horse. It is sometimes associated with Celeris, the brother of Pegasus. Though minor in myth, it represents speed and loyalty.",
"Eridanus represents a great celestial river. In some myths, it is the river into which Phaethon fell after losing control of the Sun chariot. The river was placed in the sky as a reminder of his tragic fall.",
"Fornax has no classical mythological origin. It was created in the 18th century by Lacaille. The constellation represents a furnace, honoring scientific progress.",
"Gemini represents the twin brothers Castor and Pollux. Though one was mortal and the other divine, they shared an inseparable bond. Zeus placed them together in the sky to symbolize eternal brotherhood.",
"Grus has no roots in Greek mythology. It was introduced during southern sky mapping to represent a crane. The constellation reflects exploration-era naming traditions.",
"Hercules represents the great hero Heracles of Greek mythology. He is famous for completing the Twelve Labors, including slaying the Hydra and capturing Cerberus. His placement in the sky honors his strength and heroic deeds.",
"Horologium has no roots in Greek mythology. It was introduced in the 18th century by Nicolas-Louis de Lacaille. The constellation represents a clock, reflecting the scientific instruments of the Enlightenment era.",
"Hydra represents the multi-headed serpent slain by Heracles as one of his Twelve Labors. Each time a head was cut off, two more would grow in its place. With the help of his nephew Iolaus, Heracles defeated the creature, and it was later placed among the stars.",
"Hydrus has no classical mythological origin. It was created to represent a small water snake in the southern sky. The constellation reflects navigation-era astronomy rather than ancient storytelling.",
"Indus has no connection to Greek mythology. It was introduced during the Age of Exploration to depict a Native American figure. The constellation reflects European encounters with new cultures.",
"Lacerta has no roots in classical myth. It was introduced in the 17th century by the astronomer Johannes Hevelius. The constellation represents a lizard and carries no ancient legend.",
"Leo represents the Nemean Lion defeated by Heracles. The lion’s hide was impervious to weapons, forcing Heracles to strangle it with his bare hands. After the beast was slain, Zeus placed it in the sky to commemorate the hero’s strength.",
"Leo Minor has no direct connection to Greek mythology. It was introduced by Johannes Hevelius in the 17th century. The constellation serves as a smaller companion to Leo.",
"Lepus represents the hare often depicted beneath Orion. In some interpretations, it is the prey of the great hunter and his dogs. The constellation symbolizes the eternal chase in the sky.",
"Libra represents the scales of justice. In Roman tradition, it is associated with Astraea, the goddess of fairness and order. The scales symbolize balance and moral equilibrium.",
"Lupus represents a wild beast, sometimes interpreted as a wolf. In ancient depictions, the animal is shown being offered as a sacrifice by the centaur Centaurus. The constellation connects to themes of ritual and wilderness.",
"Lynx has no roots in Greek mythology. It was introduced in the 17th century by Johannes Hevelius. The constellation represents a lynx and carries no ancient legend.",
"Lyra represents the lyre of Orpheus, the legendary musician. Orpheus’s music was so beautiful that it could charm all living things and even inanimate objects. After his death, Zeus placed his lyre in the sky to honor his musical talent.",
"Mensa has no classical mythological origin. It was created in the 18th century by Nicolas-Louis de Lacaille. The constellation represents Table Mountain in South Africa, reflecting geographic rather than mythological significance.",
"Microscopium has no roots in Greek mythology. It was introduced in the 18th century by Nicolas-Louis de Lacaille. The constellation represents a microscope, reflecting scientific instruments rather than ancient legend.",
"Monoceros represents a unicorn, a mythical creature symbolizing purity and grace. The constellation was introduced in the 17th century and has no direct connection to Greek mythology, but it draws on the rich tradition of mythical beasts.",
"Musca has no roots in Greek mythology. It was introduced during the Age of Exploration to represent a fly. The constellation reflects scientific curiosity rather than ancient legend.",
"Norma has no classical mythological origin. It was created in the 18th century by Nicolas-Louis de Lacaille. The constellation represents a carpenter’s square, reflecting scientific instruments rather than mythic figures.",
"Octans has no roots in Greek mythology. It was introduced in the 18th century by Nicolas-Louis de Lacaille. The constellation represents an octant, a navigational instrument used by sailors.",
"Ophiuchus represents the serpent bearer, often identified as Asclepius, the god of medicine. Asclepius was said to have the power to heal and even bring the dead back to life. Zeus placed him in the sky to honor his contributions to healing.",
"Orion represents the great hunter in Greek mythology. He is often depicted with a belt of three stars and is associated with various myths, including his pursuit of the Pleiades and his battle with the giant scorpion that led to the creation of Scorpius.",
"Pavo has no roots in Greek mythology. It was introduced during the Age of Exploration to represent a peacock. The constellation reflects European fascination with exotic animals rather than ancient legend.",
"Pegasus represents the winged horse born from the blood of Medusa after she was slain by Perseus. Pegasus is associated with poetic inspiration and heroism. The constellation honors the mythical creature’s role in Greek mythology.",
"Perseus represents the hero who rescued Andromeda from the sea monster Cetus. He is famous for slaying Medusa and using her head as a weapon. Perseus’s placement in the sky commemorates his heroic deeds.",
"Phoenix has no roots in Greek mythology. It was introduced during the Age of Exploration to represent the mythical bird that is reborn from its ashes. The constellation reflects themes of renewal and immortality rather than ancient legend.",
"Pictor has no classical mythological origin. It was created in the 18th century by Nicolas-Louis de Lacaille. The constellation represents a painter’s easel, reflecting artistic instruments rather than mythic figures.",
"Pisces represents the fish into which Aphrodite and her son Eros transformed to escape the monster Typhon. The two fish are often depicted tied together with a cord, symbolizing their connection and the theme of love and protection.",
"Piscis Austrinus represents the southern fish associated with the water bearer Aquarius. In some myths, it is linked to the story of the great flood and the saving of humanity. The constellation symbolizes salvation and divine intervention.",
"Puppis was originally part of the great ship Argo Navis. It represents the stern of the vessel used by Jason and the Argonauts in their quest for the Golden Fleece. The ship was later divided into smaller constellations, but its mythological connection remains.",
"Pyxis has no classical mythological origin. It was created in the 18th century by Nicolas-Louis de Lacaille. The constellation represents a mariner’s compass, reflectingnavigation instruments rather than mythic figures.",
"Reticulum has no roots in Greek mythology. It was introduced in the 18th century by Nicolas-Louis de Lacaille. The constellation represents a net, reflecting scientific instruments rather than ancient legend.",
"Sagitta represents an arrow. In some myths, it is associated with the arrow used by Hercules to kill the eagle that tormented Prometheus. The constellation symbolizes heroism and divine retribution.",
"Sagittarius represents the centaur archer, often identified as Chiron. In some traditions, it is associated with the centaur Crotus, who invented archery. The constellation symbolizes wisdom and skill in battle.",
"Scorpius represents the scorpion sent by Gaia to kill Orion. After a fierce battle, both were placed in the sky on opposite sides to prevent them from fighting again. The constellation symbolizes danger and cosmic balance.",
"Sculptor has no classical mythological origin. It was created in the 18th century by Nicolas-Louis de Lacaille. The constellation represents a sculptor, reflecting artistic instruments rather than mythic figures.",
"Scutum has no roots in Greek mythology. It was introduced in the 18th century by Nicolas-Louis de Lacaille. The constellation represents a shield, reflecting military instruments rather than ancient legend.",
"Serpens represents a serpent held by the constellation Ophiuchus. In some myths, it is associated with the serpent that Asclepius used to heal the sick. The constellation symbolizes healing and knowledge.",
"Sextans has no classical mythological origin. It was created in the 18th century by Nicolas-Louis de Lacaille. The constellation represents a sextant, a navigational instrument used by sailors.",
"Taurus represents the bull form taken by Zeus to abduct Europa. The constellation is also associated with the myth of the Cretan Bull, which was captured by Heracles as one of his Twelve Labors.",
"Telescopium has no roots in Greek mythology. It was introduced in the 18th century by Nicolas-Louis de Lacaille. The constellation represents a telescope, reflecting scientific instruments rather than ancient legend.",
"Triangulum represents a triangle. In some myths, it is associated with the island of Sicily, which was said to be triangular in shape. The constellation symbolizes simplicity and geometric harmony.",
"Triangulum Australe represents a southern triangle. It has no direct connection to Greek mythology but is often associated with the Southern Cross and other southern constellations.",
"Tucana has no roots in Greek mythology. It was introduced during the Age of Exploration to represent a toucan. The constellation reflects European fascination with exotic wildlife rather than ancient legend.",
"Ursa Major represents the great bear in Greek mythology. It is often associated with Callisto, a nymph who was transformed into a bear by Zeus and placed in the sky to protect her from Hera’s jealousy.",
"Ursa Minor represents the little bear, often associated with Arcas, the son of Callisto. After nearly being killed by his mother in bear form, Zeus intervened and placed both in the sky as Ursa Major and Ursa Minor, symbolizing their eternal connection. The constellation also contains Polaris, the North Star, which has been crucial for navigation throughout history.",
"Vela was originally part of the great ship Argo Navis. It represents the sails of the vessel used by Jason and the Argonauts in their quest for the Golden Fleece. The ship was later divided into smaller constellations, but its mythological connection remains.",
"Virgo represents the maiden, often associated with Astraea, the goddess of justice. In some myths, she is also linked to Demeter or Persephone. The constellation symbolizes purity, fertility, and the harvest.",
"Volans has no roots in Greek mythology. It was introduced during the Age of Exploration to represent a flying fish. The constellation reflects European fascination with exotic marine life rather than ancient legend.",
"Vulpecula has no classical mythological origin. It was created in the 18th century by Nicolas-Louis de Lacaille. The constellation represents a little fox, reflecting scientific instruments rather than mythic figures."
];   

brightest_star_array=[
"Alpheratz (Alpha Andromedae)","Alpha Antliae","Alpha Apodis","Sadalmelik (Alpha Aquarii)","Altair (Alpha Aquilae)","Beta Arae","Hamal (Alpha Arietis)","Capella (Alpha Aurigae)","Arcturus (Alpha Boötis)","Alpha Caeli","Beta Camelopardalis","Acubens (Alpha Cancri)","Cor Caroli (Alpha Canum Venaticorum)","Sirius (Alpha Canis Majoris)","Procyon (Alpha Canis Minoris)","Deneb Algedi (Delta Capricorni)","Canopus (Alpha Carinae)","Schedar (Alpha Cassiopeiae)","Rigil Kentaurus (Alpha Centauri)","Alderamin (Alpha Cephei)","Menkar (Alpha Ceti)","Alpha Chamaeleontis","Alpha Circini","Diadem (Alpha Comae Berenices)","Rho Coronae Borealis","Gienah Corvi (Gamma Corvi)","Alkes (Alpha Crateris)","Acrux (Alpha Crucis)","Deneb Cygnus (Alpha Cygni)","Sualocin (Alpha Delphini)","Beta Doradus","Thuban (Alpha Draconis)","Kitalpha (Alpha Equulei)","Zaurak (Gamma Eridani)","Fornax Australis (Epsilon Fornacis)","Castor (Alpha Geminorum)","Alnair (Alpha Gruis)","Ras Algethi (Alpha Herculis)","Zeta Horologii","Alphard (Alpha Hydrae)","Beta Hydri","Indus Australis (Beta Indi)",
"Alpha Lacertae","Regulus (Alpha Leonis)","Praecipua (Alpha LMi)","Arneb (Alpha Leporis)","Zubenelgenubi (Alpha Librae)","Alpha Lupi","Alpha Lyncis","Vega (Alpha Lyrae)","Alpha Mensae","Gamma Microscopii","Rasalhague (Alpha Ophiuchi)","Betelgeuse (Alpha Orionis)","Peacock (Alpha Pavonis)","Enif (Epsilon Pegasi)","Algol (Beta Persei)","Ankaa (Alpha Phoenicis)","Alpha Pictoris","Alrescha (Alpha Piscium)","Fomalhaut (Alpha Piscis Austrini)","Naos (Zeta Puppis)","Pyxis Australis (Epsilon Pyxidis)","Reticulum Beta (Beta Reticuli)","Sham (Beta Sagittarii)",
"Kaus Australis (Epsilon Sagittarii)","Antares (Alpha Scorpii)","Beta Sculptoris","Alpha Scutum","Unukalhai (Alpha Serpentis)","Alpha Sextantis","Aldebaran (Alpha Tauri)","Zeta Telescopii","Beta Trianguli","Atria (Alpha Trianguli Australis)","Epsilon Tucanae","Dubhe (Alpha Ursae Majoris)","Polaris (Alpha Ursae Minoris)","Gamma Velorum (Regor)","Spica (Alpha Virginis)","Beta Volantis","Anser (Alpha Vulpeculae)"];
    notable_stars_array=[];
    distance_array=[];
    deep_sky_objects_array=[];
    area_rank_array=[];
    neighboring_constellations_array=[];
    messier_objects_array=[];
    right_ascension_array=[];
    cultural_significance_array=[];
    modern_iau_boundaries_array=[];
    size_array=[];

    for (let i = 0; i < 88; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    row.innerHTML = '<b>' + (i + 1) + ')  ' + represesntations[i] + '  ' + constellations[i] + '</b>';

    row.setAttribute('id', i);

    row.addEventListener('click', () => {

       popup.style.display='block';
    });

    const close=document.querySelector('.popup-of-constellations .close');
    close.addEventListener('click', () => {
        popup.style.display='none';
    });

    constels.appendChild(row);
}


                        });