const unsplash = (id: string, width = 1400, quality = 82) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=${quality}`;

export const imagesData = {
  hero: {
    main: unsplash("photo-1607008829749-c0f284a4981f", 1200, 84),
    ritual: unsplash("photo-1620916566398-39f1143ab7be", 900, 84),
    clinic: unsplash("photo-1631217868264-e5b90bb7e133", 900, 84),
  },
  clinic: {
    interior: unsplash("photo-1629909613654-28e377c37b09", 1300),
    consultationRoom: unsplash("photo-1629909613654-28e377c37b09", 1200),
    experience: [
      unsplash("photo-1631217868264-e5b90bb7e133", 1000),
      unsplash("photo-1629909613654-28e377c37b09", 1000),
      unsplash("photo-1581595220892-b0739db3ba8c", 1000),
      unsplash("photo-1519494026892-80bbd2d6fd0d", 1000),
    ],
  },
  doctor: {
    drNidheeshAgarwal:
      "https://i.pinimg.com/736x/0c/e0/da/0ce0da30bceee3a1c274cf376860ea12.jpg",
  },
  treatments: {
    acne: unsplash("photo-1596755389378-c31d21fd1273"),
    fungalInfections: unsplash("photo-1570172619644-dfd03ed5d881"),
    vitiligo: unsplash("photo-1584362917165-526a968579e8"),
    pigmentation: unsplash("photo-1601612628452-9e99ced43524"),
    chemicalPeels: unsplash("photo-1620916566398-39f1143ab7be"),
    laserHairRemoval: unsplash("photo-1571942676516-bcab84649e44"),
    botox: unsplash("photo-1556228720-195a672e8a03"),
    fillers: unsplash("photo-1607008829749-c0f284a4981f"),
    prpHair: unsplash("photo-1522335789203-aabd1fc54bc9"),
    maleBaldness: unsplash("photo-1621605815971-fbc98d665033"),
    femaleHairFall: unsplash("photo-1515377905703-c4788e51af15"),
    hairTransplant: unsplash("photo-1516975080664-ed2fc6a32937"),
    beardTransplant: unsplash("photo-1521590832167-7bcbfaa6381f"),
    wartRemoval: unsplash("photo-1519494026892-80bbd2d6fd0d"),
    skinTagRemoval: unsplash("photo-1581595220892-b0739db3ba8c"),
    pediatricDermatitis: unsplash("photo-1542736667-069246bdbc74"),
  },
  blogs: {
    hairLossSigns: unsplash("photo-1522335789203-aabd1fc54bc9", 1500),
    acneScars: unsplash("photo-1596755389378-c31d21fd1273", 1500),
    prpVsTransplant: unsplash("photo-1516975080664-ed2fc6a32937", 1500),
    indianSummers: unsplash("photo-1507525428034-b723cf961d3e", 1500),
    pigmentationCauses: unsplash("photo-1601612628452-9e99ced43524", 1500),
    chemicalPeels: unsplash("photo-1620916566398-39f1143ab7be", 1500),
    oilySkin: unsplash("photo-1556228720-195a672e8a03", 1500),
    stressHairFall: unsplash("photo-1515377905703-c4788e51af15", 1500),
  },
  gallery: {
    acneBefore: unsplash("photo-1509967419530-da38b4704bc6", 900),
    acneAfter: unsplash("photo-1512316609839-ce289d3eba0a", 900),
    hairBefore: unsplash("photo-1621605815971-fbc98d665033", 900),
    hairAfter: unsplash("photo-1516975080664-ed2fc6a32937", 900),
    pigmentationBefore: unsplash("photo-1596755389378-c31d21fd1273", 900),
    pigmentationAfter: unsplash("photo-1601612628452-9e99ced43524", 900),
    clinicBefore: unsplash("photo-1631217868264-e5b90bb7e133", 900),
    clinicAfter: unsplash("photo-1629909613654-28e377c37b09", 900),
    antiAgingBefore: unsplash("photo-1556228720-195a672e8a03", 900),
    antiAgingAfter: unsplash("photo-1607008829749-c0f284a4981f", 900),
  },
};
