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

  live: photo('svc-live-broadcasting', 1000, 1250, 'Chalta Phirta', 20466664, { en: 'Devotees recording the evening Ganga Aarti on their phones', hi: 'संध्या गंगा आरती को फ़ोन में रिकॉर्ड करते श्रद्धालु' }, 'center 45%'),
  events: photo('svc-religious-events', 1500, 1000, 'SOMUVISION', 12432503, { en: 'A religious ceremony stage decorated with marigolds', hi: 'गेंदे के फूलों से सजा धार्मिक आयोजन मंच' }),
  celebrity: photo('svc-celebrity-management', 1500, 1000, 'Anil Sharma', 34950799, { en: 'A revered Baba seated on a flower-decked stage, blessing devotees', hi: 'फूलों से सजे मंच पर श्रद्धालुओं को आशीर्वाद देते बाबा' }, 'center 30%'),
  social: photo('svc-social-media', 1000, 1500, 'Soumalya Halder', 39293937, { en: 'A hand holding a phone that shows an image of Goddess Durga', hi: 'फ़ोन पर माँ दुर्गा की छवि दिखाता हाथ' }, 'center 55%'),
  editing: photo('svc-video-editing', 1000, 1500, 'Krishnendu Biswas', 30770627, { en: 'Priests raising aarti flames at a Ganga Aarti', hi: 'गंगा आरती में ज्योति उठाए पुजारी' }, 'center 40%'),
  audio: photo('svc-audio-production', 1500, 1000, 'Mehmet Turgut Kirkgoz', 16766079, { en: 'A harmonium player leading bhajans at a satsang', hi: 'सत्संग में भजन गाते हारमोनियम वादक' }, '75% center'),
  promotion: photo('svc-song-promotion', 1500, 964, 'Dmitry', 11711031, { en: 'A woman in white headphones listening to music', hi: 'सफ़ेद हेडफ़ोन लगाकर संगीत सुनती महिला' }, '55% center'),
  distribution: photo('svc-song-distribution', 1500, 1000, 'Pixabay', 164853, { en: 'A vinyl record spinning on a turntable', hi: 'टर्नटेबल पर घूमता वाइनिल रिकॉर्ड' }, '28% center'),

  cameras: photo('eq-cameras', 1000, 1500, 'Badri Rai', 8704971, { en: 'A cinema camera with a prime lens', hi: 'प्राइम लेंस वाला सिनेमा कैमरा' }, 'center 45%'),
  rig: photo('eq-camera-rig', 1500, 1000, 'dp singh Bhullar', 28532582, { en: 'A professional camera rig on a stand', hi: 'स्टैंड पर लगा प्रोफ़ेशनल कैमरा रिग' }),
  drones: photo('eq-drones', 1000, 1500, 'Ahmed', 18079757, { en: 'A hand holding a DJI Mini drone', hi: 'हाथ में DJI मिनी ड्रोन' }, 'center 35%'),
  mics: photo('eq-microphones', 845, 1500, 'Nihongraphy', 7063530, { en: 'A studio condenser microphone', hi: 'स्टूडियो कंडेंसर माइक्रोफ़ोन' }, 'center 30%'),
};

export const heroSlides = ['heroGhat', 'heroBoats', 'heroLamps', 'heroDiyas'];
