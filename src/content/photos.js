// Every photo on the site is declared here. To replace one, drop your own file in /public/photos
// and change `src` (keep w/h in step with the new file). Photos are free-licence stock from Pexels;
// see public/photos/CREDITS.md. `pos` is the focal point used when the photo is cropped.

const pexels = (id) => `https://www.pexels.com/photo/${id}/`;

function photo(file, w, h, who, id, alt, pos = 'center') {
  return { src: `/photos/${file}.webp`, w, h, pos, credit: { who, url: pexels(id) }, alt };
}

export const photos = {
  heroGhat: photo('hero-ghat-golden-hour', 2000, 1333, 'Arto Suraj', 34741303, { en: 'Golden light over the ghats of Varanasi', hi: 'वाराणसी के घाटों पर सुनहरी रोशनी' }, 'center 60%'),
  heroBoats: photo('hero-boats-sunrise', 2000, 1333, 'Arto Suraj', 34741296, { en: 'Boats on the Ganga at sunrise', hi: 'सूर्योदय के समय गंगा में नावें' }, 'center 70%'),
  heroLamps: photo('hero-brass-lamps', 2000, 1333, 'Mian Rizwan', 34899896, { en: 'Brass temple lamps glowing in the dark', hi: 'अंधेरे में जगमगाते पीतल के दीप' }, 'center 45%'),
  heroDiyas: photo('hero-evening-diyas', 2000, 1334, 'Trishik Bose', 29422096, { en: 'A row of diyas burning at dusk', hi: 'संध्या के समय जलते दीपों की पंक्ति' }, 'center 60%'),

  aartiFlame: photo('feature-aarti-flame', 1000, 1500, 'Shootcase Chronicles', 7919635, { en: 'An aarti flame raised above the evening crowd', hi: 'संध्या आरती की ज्योति' }, 'center 35%'),
  aartiPriest: photo('about-priest-aarti', 1000, 1500, 'Albela Raahi', 18073348, { en: 'A priest performing the evening aarti', hi: 'संध्या आरती करते पुजारी' }, 'center 30%'),
  diyasFlowers: photo('about-diyas-flowers', 1500, 1001, 'Naveen Sahu', 6213685, { en: 'Brass diyas among flowers', hi: 'फूलों के बीच पीतल के दीप' }),
  diyaRed: photo('ambient-diya-red', 1500, 1001, 'Naveen Sahu', 6315702, { en: 'A lit diya on a silver plate', hi: 'चाँदी की थाली में जलता दीपक' }, 'center 55%'),
  diyaSingle: photo('ambient-diya-single', 1000, 1500, 'Maddy Freddie', 6007272, { en: 'A single diya burning in the dark', hi: 'अंधेरे में जलता एक दीपक' }, 'center 70%'),
  bells: photo('ambient-temple-bells', 1500, 1000, 'grunge texture', 2610378, { en: 'Brass temple bells', hi: 'मंदिर की पीतल की घंटियाँ' }),
  templeDome: photo('temple-dome-garlands', 1000, 1500, 'Abhisek Tripathy', 32519946, { en: 'A temple dome decorated with marigold garlands', hi: 'गेंदे की मालाओं से सजा मंदिर का शिखर' }, 'center 30%'),
  templeSpire: photo('temple-golden-spire', 1000, 1500, 'A P', 15142391, { en: 'A golden temple spire among trees', hi: 'वृक्षों के बीच सुनहरा मंदिर शिखर' }, 'center 40%'),
  templeSpires: photo('temple-spires', 1125, 1500, 'dharamveer', 7152003, { en: 'Carved temple spires against the sky', hi: 'आकाश के सामने नक्काशीदार मंदिर शिखर' }, 'center 40%'),
  stage: photo('stage-golden-columns', 1500, 1000, 'BANU FILM ADS', 14395559, { en: 'A festival stage with golden columns and flowers', hi: 'सुनहरे स्तंभों और फूलों से सजा उत्सव मंच' }),

  live: photo('svc-live-broadcasting', 1500, 1000, 'Genie Music', 17189845, { en: 'A broadcast camera on location', hi: 'लोकेशन पर लगा प्रसारण कैमरा' }),
  events: photo('svc-religious-events', 1500, 1000, 'SOMUVISION', 12432503, { en: 'A religious ceremony stage decorated with marigolds', hi: 'गेंदे के फूलों से सजा धार्मिक आयोजन मंच' }),
  celebrity: photo('svc-celebrity-management', 1500, 1127, 'Kerim Isazade', 31129059, { en: 'A speaker on stage before a large audience', hi: 'बड़ी सभा के सामने मंच पर वक्ता' }, 'center 40%'),
  social: photo('svc-social-media', 1500, 1000, 'cottonbro studio', 5082579, { en: 'Hands scrolling a social feed on a phone', hi: 'फ़ोन पर सोशल मीडिया फ़ीड देखते हाथ' }),
  editing: photo('svc-video-editing', 1500, 1000, 'minhphuc .workspace', 28955777, { en: 'A video editing workstation', hi: 'वीडियो एडिटिंग वर्कस्टेशन' }),
  audio: photo('svc-audio-production', 1000, 1500, 'Tima Miroshnichenko', 4988132, { en: 'A studio microphone with a pop filter', hi: 'पॉप फ़िल्टर के साथ स्टूडियो माइक्रोफ़ोन' }, 'center 35%'),
  promotion: photo('svc-song-promotion', 1500, 1000, 'Ivan S', 4162581, { en: 'Listening to music on a phone with headphones', hi: 'हेडफ़ोन लगाकर फ़ोन पर संगीत सुनना' }),
  distribution: photo('svc-song-distribution', 993, 1500, 'Adeniji Abdullahi A', 9799543, { en: 'A music player on a phone', hi: 'फ़ोन पर म्यूज़िक प्लेयर' }, 'center 40%'),

  cameras: photo('eq-cameras', 1000, 1500, 'Badri Rai', 8704971, { en: 'A cinema camera with a prime lens', hi: 'प्राइम लेंस वाला सिनेमा कैमरा' }, 'center 45%'),
  rig: photo('eq-camera-rig', 1500, 1000, 'dp singh Bhullar', 28532582, { en: 'A professional camera rig on a stand', hi: 'स्टैंड पर लगा प्रोफ़ेशनल कैमरा रिग' }),
  drones: photo('eq-drones', 1000, 1500, 'Ahmed', 18079757, { en: 'A hand holding a DJI Mini drone', hi: 'हाथ में DJI मिनी ड्रोन' }, 'center 35%'),
  mics: photo('eq-microphones', 845, 1500, 'Nihongraphy', 7063530, { en: 'A studio condenser microphone', hi: 'स्टूडियो कंडेंसर माइक्रोफ़ोन' }, 'center 30%'),
};

export const heroSlides = ['heroGhat', 'heroBoats', 'heroLamps', 'heroDiyas'];
