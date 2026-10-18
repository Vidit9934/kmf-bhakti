// Site-wide copy and data. Every visible string is { en, hi }. Lines marked CONFIRM need the owner's review.
// Source: KMF_Media_Bhakti_Video_Text_Extraction.docx. Hindi was written for this site.

export const brand = {
  name: 'KMF Media Bhakti',
  nameHi: 'केएमएफ मीडिया भक्ति',
  tagline: { en: 'Digital Marketing & Broadcasting', hi: 'डिजिटल मार्केटिंग और ब्रॉडकास्टिंग' },
};

// CONFIRM: phone and email look like placeholders in the source video.
export const contact = {
  email: 'info@kmfmediabhakti.com',
  phone: '+91 98765 43210',
  office: { en: 'Saket, New Delhi - 110030, India', hi: 'साकेत, नई दिल्ली - 110030, भारत' },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Saket%2C+New+Delhi+110030',
  // CONFIRM: these point at each platform's home page. Replace with KMF's own pages.
  social: [
    { id: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/' },
    { id: 'x', label: 'X (Twitter)', url: 'https://x.com/' },
    { id: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/' },
    { id: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/' },
    { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/' },
  ],
};

// CONFIRM: the hero supporting line was too small to read in the source video.
export const hero = {
  headline: { en: 'Divine Media Productions', hi: 'दिव्य मीडिया प्रोडक्शंस' },
  lead: {
    en: 'Live Katha broadcasts, event management and digital growth for spiritual voices across India.',
    hi: 'भारत भर के आध्यात्मिक वक्ताओं के लिए लाइव कथा प्रसारण, आयोजन प्रबंधन और डिजिटल विकास।',
  },
};

// One per hero slide. CONFIRM: the Hindi banner slides in the source were not legible; these follow the Katha types in the services text.
export const channels = [
  { hi: 'राम कथा', en: 'Ram Katha' },
  { hi: 'शिव पुराण', en: 'Shiv Puran' },
  { hi: 'श्रीमद् भागवत कथा', en: 'Shrimad Bhagwat Katha' },
  { hi: 'भजन संध्या', en: 'Bhajan Sandhya' },
];

export const stats = [
  { value: 500, label: { en: 'Live Broadcasts', hi: 'लाइव प्रसारण' } },
  { value: 50, label: { en: 'Channels Managed', hi: 'चैनलों का प्रबंधन' } },
  { value: 5, label: { en: 'Years Experience', hi: 'वर्षों का अनुभव' } },
  { value: 20, label: { en: 'Team Members', hi: 'टीम सदस्य' } },
];

export const about = {
  founded: '2018',
  paragraphs: [
    {
      en: 'Founded in 2018, KMF Media Bhakti has been at the forefront of digital spiritual broadcasting, combining traditional values with modern technology to spread divine messages across the globe.',
      hi: 'वर्ष 2018 में स्थापित, केएमएफ मीडिया भक्ति डिजिटल आध्यात्मिक प्रसारण में अग्रणी रहा है, जो पारंपरिक मूल्यों को आधुनिक तकनीक से जोड़कर दिव्य संदेशों को पूरे विश्व तक पहुँचाता है।',
    },
    {
      en: 'With over 5 years of dedicated service in the field of religious broadcasting and digital marketing, we have successfully streamed more than 500 live Katha events, managed over 50 spiritual channels and social media accounts, and built a team of 20+ passionate professionals.',
      hi: 'धार्मिक प्रसारण और डिजिटल मार्केटिंग के क्षेत्र में 5 वर्षों से अधिक की समर्पित सेवा के साथ, हमने 500 से अधिक लाइव कथा आयोजनों का सफल प्रसारण किया है, 50 से अधिक आध्यात्मिक चैनलों और सोशल मीडिया खातों का प्रबंधन किया है, और 20+ समर्पित पेशेवरों की टीम बनाई है।',
    },
    {
      en: 'Our pan-India operations allow us to serve spiritual organizations across the country, while our technical expertise ensures that your message reaches devotees worldwide with crystal-clear audio and video quality.',
      hi: 'हमारा अखिल भारतीय संचालन हमें देश भर की आध्यात्मिक संस्थाओं की सेवा करने में सक्षम बनाता है, और हमारी तकनीकी विशेषज्ञता यह सुनिश्चित करती है कि आपका संदेश स्पष्ट ऑडियो और वीडियो गुणवत्ता के साथ विश्व भर के भक्तों तक पहुँचे।',
    },
  ],
};

export const equipment = [
  {
    id: 'cameras',
    photo: 'cameras',
    title: { en: 'Cameras', hi: 'कैमरे' },
    items: [
      { maker: 'Sony', model: 'Alpha 6400' },
      { maker: 'Sony', model: 'Z90' },
      { maker: 'Nikon', model: 'Z50' },
      { maker: 'Canon', model: '200D' },
    ],
  },
  {
    id: 'drones',
    photo: 'drones',
    title: { en: 'Drones & Stabilizers', hi: 'ड्रोन और स्टेबलाइज़र' },
    items: [
      { maker: 'DJI', model: 'Mini 3' },
      { maker: 'DJI', model: 'Crane 3' },
      { maker: 'Moza', model: 'Aircross 3' },
    ],
  },
  {
    id: 'mics',
    photo: 'mics',
    title: { en: 'Microphones', hi: 'माइक्रोफ़ोन' },
    // CONFIRM: "Rhode NT1A" in the source is spelled Rode NT1-A here.
    items: [
      { maker: 'Rode', model: 'NT1-A' },
      { maker: 'Neumann', model: 'U87' },
      { maker: 'Shure', model: 'SM7B' },
      { maker: { en: 'Various', hi: 'विभिन्न' }, model: { en: 'Dynamic Microphones', hi: 'डायनामिक माइक्रोफ़ोन' } },
    ],
  },
];

export const testimonials = [
  {
    name: { en: 'Shri Ram Sharma', hi: 'श्री राम शर्मा' },
    role: { en: 'Organizer, Ram Katha', hi: 'आयोजक, राम कथा' },
    quote: {
      en: 'KMF Media Bhakti transformed our Katha broadcasts with their professional setup and streaming expertise. The quality is exceptional and their team is always available to help.',
      hi: 'केएमएफ मीडिया भक्ति ने अपने पेशेवर सेटअप और स्ट्रीमिंग विशेषज्ञता से हमारे कथा प्रसारण को बदल दिया। गुणवत्ता असाधारण है और उनकी टीम सहायता के लिए हमेशा उपलब्ध रहती है।',
    },
  },
  {
    name: { en: 'Mataji Priyanka Devi', hi: 'माताजी प्रियंका देवी' },
    role: { en: 'Ashram Director', hi: 'आश्रम निदेशक' },
    quote: {
      en: 'Their event management services made our spiritual gathering seamless. From technical setup to live streaming, everything was handled professionally.',
      hi: 'उनकी आयोजन प्रबंधन सेवाओं ने हमारी आध्यात्मिक सभा को सहज बना दिया। तकनीकी सेटअप से लेकर लाइव स्ट्रीमिंग तक, सब कुछ पेशेवर ढंग से संभाला गया।',
    },
  },
  {
    name: { en: 'Swami Vishwanand', hi: 'स्वामी विश्वानंद' },
    role: { en: 'Spiritual Leader', hi: 'आध्यात्मिक गुरु' },
    quote: {
      en: 'The social media growth we’ve experienced since working with KMF Media Bhakti has been phenomenal. Their content strategy resonates perfectly with our spiritual audience.',
      hi: 'केएमएफ मीडिया भक्ति के साथ काम शुरू करने के बाद हमारी सोशल मीडिया में जो वृद्धि हुई है वह अद्भुत है। उनकी कंटेंट रणनीति हमारे आध्यात्मिक दर्शकों से पूरी तरह जुड़ती है।',
    },
  },
];

// Photos: add `photo: '/team/name.jpg'` (file in /public/team) to replace an initials monogram.
export const team = {
  founders: [
    {
      name: { en: 'Akshay Pandey', hi: 'अक्षय पांडेय' },
      role: { en: 'Co-Founder & CEO', hi: 'सह-संस्थापक और सीईओ' },
      initials: 'AP',
      bio: {
        en: 'With a background in media technology and a deep devotion to spiritual content, Akshay leads our technical operations and strategic vision.',
        hi: 'मीडिया तकनीक की पृष्ठभूमि और आध्यात्मिक सामग्री के प्रति गहरी श्रद्धा के साथ, अक्षय हमारे तकनीकी संचालन और रणनीतिक दृष्टि का नेतृत्व करते हैं।',
      },
      links: { email: 'info@kmfmediabhakti.com', linkedin: '', x: '' },
    },
    {
      name: { en: 'Krantiveer (Sourav Yadav)', hi: 'क्रांतिवीर (सौरव यादव)' },
      role: { en: 'Co-Founder & Creative Director', hi: 'सह-संस्थापक और क्रिएटिव डायरेक्टर' },
      initials: 'KV',
      bio: {
        en: 'A creative visionary with expertise in content strategy and spiritual storytelling, Krantiveer ensures our productions maintain authentic devotional values.',
        hi: 'कंटेंट रणनीति और आध्यात्मिक कथा-कथन में विशेषज्ञता रखने वाले रचनात्मक दूरदर्शी, क्रांतिवीर यह सुनिश्चित करते हैं कि हमारी प्रस्तुतियाँ प्रामाणिक भक्ति मूल्यों को बनाए रखें।',
      },
      links: { email: 'info@kmfmediabhakti.com', linkedin: '', x: '' },
    },
  ],
  members: [
    { name: { en: 'Priya Sharma', hi: 'प्रिया शर्मा' }, role: { en: 'Production Head', hi: 'प्रोडक्शन हेड' }, initials: 'PS' },
    { name: { en: 'Rajiv Malhotra', hi: 'राजीव मल्होत्रा' }, role: { en: 'Technical Director', hi: 'टेक्निकल डायरेक्टर' }, initials: 'RM' },
    { name: { en: 'Ananya Gupta', hi: 'अनन्या गुप्ता' }, role: { en: 'Content Strategist', hi: 'कंटेंट स्ट्रैटेजिस्ट' }, initials: 'AG' },
    { name: { en: 'Vikram Singh', hi: 'विक्रम सिंह' }, role: { en: 'Camera Specialist', hi: 'कैमरा विशेषज्ञ' }, initials: 'VS' },
  ],
};

// Brihadaranyaka Upanishad 1.3.28
export const verse = {
  sanskrit: 'असतो मा सद्गमय।\nतमसो मा ज्योतिर्गमय।\nमृत्योर्मा अमृतं गमय॥',
  meaning: {
    en: 'Lead me from untruth to truth, from darkness to light, from death to immortality.',
    hi: 'मुझे असत्य से सत्य की ओर, अंधकार से प्रकाश की ओर, मृत्यु से अमरता की ओर ले चलो।',
  },
  source: { en: 'Brihadaranyaka Upanishad 1.3.28', hi: 'बृहदारण्यक उपनिषद् 1.3.28' },
};
