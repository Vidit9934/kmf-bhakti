// The eight services. `text` is from the source video. `covers` and `how` are written for this site
// (NEW or CONFIRM items need the owner's review). Every field is { en, hi } so pages stay data-driven.

export const services = [
  {
    slug: 'live-broadcasting',
    icon: 'live',
    photo: 'live',
    title: { en: 'Live Broadcasting', hi: 'लाइव ब्रॉडकास्टिंग' },
    short: { en: 'Multi-camera HD streaming of Katha, Bhajan Sandhya and every spiritual discourse.', hi: 'कथा, भजन संध्या और हर आध्यात्मिक प्रवचन का मल्टी-कैमरा HD प्रसारण।' },
    text: {
      en: 'Professional live streaming of all types of Dharmik Katha, Bhajan Sandhya, Shiv Puran, Ram Katha, Shrimad Bhagwat Katha, Devi Puran, and other spiritual discourses with multi-camera setups and HD quality.',
      hi: 'सभी प्रकार की धार्मिक कथा, भजन संध्या, शिव पुराण, राम कथा, श्रीमद् भागवत कथा, देवी पुराण और अन्य आध्यात्मिक प्रवचनों का मल्टी-कैमरा सेटअप और HD गुणवत्ता में पेशेवर लाइव प्रसारण।',
    },
    covers: [
      { en: 'Multi-camera setups for every angle of the stage', hi: 'मंच के हर कोण के लिए मल्टी-कैमरा सेटअप' },
      { en: 'HD quality streaming to your channels', hi: 'आपके चैनलों पर HD गुणवत्ता में स्ट्रीमिंग' },
      { en: 'Dharmik Katha, Bhajan Sandhya, Shiv Puran and Ram Katha', hi: 'धार्मिक कथा, भजन संध्या, शिव पुराण और राम कथा' },
      { en: 'Shrimad Bhagwat Katha, Devi Puran and other discourses', hi: 'श्रीमद् भागवत कथा, देवी पुराण और अन्य प्रवचन' },
    ],
    how: [
      { title: { en: 'Plan the shoot', hi: 'शूट की योजना' }, text: { en: 'We visit or study the venue and agree the camera positions, audio and schedule.', hi: 'हम स्थान देखते हैं और कैमरा, ऑडियो तथा समय-सारणी तय करते हैं।' } },
      { title: { en: 'Set up and test', hi: 'सेटअप और परीक्षण' }, text: { en: 'Cameras, microphones and the stream are tested before devotees arrive.', hi: 'भक्तों के आने से पहले कैमरे, माइक और स्ट्रीम की जाँच होती है।' } },
      { title: { en: 'Go live', hi: 'लाइव प्रसारण' }, text: { en: 'Our crew stays on site and keeps picture and sound clear for the full programme.', hi: 'हमारी टीम पूरे कार्यक्रम में मौजूद रहकर चित्र और ध्वनि स्पष्ट रखती है।' } },
    ],
  },
  {
    slug: 'religious-event-management',
    icon: 'events',
    photo: 'events',
    title: { en: 'Religious Event Management', hi: 'धार्मिक आयोजन प्रबंधन' },
    short: { en: 'Planning to execution for spiritual gatherings and festivals.', hi: 'आध्यात्मिक सभाओं और उत्सवों की योजना से लेकर संचालन तक।' },
    text: {
      en: 'Complete Dharmik event management from planning to execution, including venue setup, technical arrangements, and participant coordination for spiritual gatherings and festivals.',
      hi: 'योजना से लेकर संचालन तक संपूर्ण धार्मिक आयोजन प्रबंधन, जिसमें स्थल की व्यवस्था, तकनीकी इंतज़ाम और आध्यात्मिक सभाओं तथा उत्सवों के प्रतिभागियों का समन्वय शामिल है।',
    },
    covers: [
      { en: 'Planning from the first idea to the last day', hi: 'पहले विचार से अंतिम दिन तक की योजना' },
      { en: 'Venue setup', hi: 'स्थल की व्यवस्था' },
      { en: 'Technical arrangements: sound, light and screens', hi: 'तकनीकी इंतज़ाम: साउंड, लाइट और स्क्रीन' },
      { en: 'Participant coordination for gatherings and festivals', hi: 'सभाओं और उत्सवों के प्रतिभागियों का समन्वय' },
    ],
    how: [
      { title: { en: 'Understand the occasion', hi: 'अवसर को समझना' }, text: { en: 'We learn the purpose, crowd and traditions of your gathering.', hi: 'हम आपके आयोजन का उद्देश्य, भीड़ और परंपराएँ समझते हैं।' } },
      { title: { en: 'Prepare the venue', hi: 'स्थल की तैयारी' }, text: { en: 'Stage, seating, power and technical arrangements are set up and checked.', hi: 'मंच, बैठने की व्यवस्था, बिजली और तकनीकी इंतज़ाम लगाए और जाँचे जाते हैं।' } },
      { title: { en: 'Run the programme', hi: 'कार्यक्रम का संचालन' }, text: { en: 'A coordinator on site keeps every session and every guest on schedule.', hi: 'स्थल पर एक समन्वयक हर सत्र और हर अतिथि को समय पर रखता है।' } },
    ],
  },
  {
    slug: 'celebrity-management',
    icon: 'celebrity',
    photo: 'celebrity',
    title: { en: 'Celebrity Management', hi: 'सेलिब्रिटी मैनेजमेंट' },
    short: { en: 'Scheduling, travel and hospitality for Maharaj and spiritual speakers.', hi: 'महाराज और आध्यात्मिक वक्ताओं के लिए कार्यक्रम, यात्रा और आतिथ्य।' },
    text: {
      en: 'Comprehensive Maharaj management services including scheduling, travel arrangements, hospitality, and coordination for spiritual leaders and speakers.',
      hi: 'महाराज प्रबंधन की संपूर्ण सेवाएँ, जिनमें कार्यक्रम निर्धारण, यात्रा व्यवस्था, आतिथ्य तथा आध्यात्मिक गुरुओं और वक्ताओं के लिए समन्वय शामिल है।',
    },
    covers: [
      { en: 'Scheduling of katha and programme dates', hi: 'कथा और कार्यक्रम की तिथियों का निर्धारण' },
      { en: 'Travel arrangements', hi: 'यात्रा व्यवस्था' },
      { en: 'Hospitality for the speaker and the team', hi: 'वक्ता और उनकी टीम का आतिथ्य' },
      { en: 'Coordination with organisers and venues', hi: 'आयोजकों और स्थलों के साथ समन्वय' },
    ],
    how: [
      { title: { en: 'Agree the calendar', hi: 'कैलेंडर तय करना' }, text: { en: 'We take bookings and keep one clear schedule for the whole year.', hi: 'हम बुकिंग लेते हैं और पूरे वर्ष का एक स्पष्ट कार्यक्रम रखते हैं।' } },
      { title: { en: 'Arrange the journey', hi: 'यात्रा की व्यवस्था' }, text: { en: 'Travel, stay and local hospitality are confirmed before each programme.', hi: 'हर कार्यक्रम से पहले यात्रा, ठहरना और स्थानीय आतिथ्य पक्का किया जाता है।' } },
      { title: { en: 'Stay in touch with hosts', hi: 'आयोजकों से संपर्क' }, text: { en: 'One point of contact for organisers, so nothing is missed.', hi: 'आयोजकों के लिए संपर्क का एक ही केंद्र, ताकि कुछ छूटे नहीं।' } },
    ],
  },
  {
    slug: 'social-media-management',
    icon: 'social',
    photo: 'social',
    title: { en: 'Social Media Management', hi: 'सोशल मीडिया मैनेजमेंट' },
    short: { en: 'Strategy, posting, community and growth analytics for spiritual organisations.', hi: 'आध्यात्मिक संस्थाओं के लिए रणनीति, पोस्टिंग, समुदाय और विकास विश्लेषण।' },
    text: {
      en: 'Professional management of all social media platforms including content strategy, posting schedules, community engagement, and growth analytics for spiritual organizations.',
      hi: 'सभी सोशल मीडिया प्लेटफ़ॉर्म का पेशेवर प्रबंधन, जिसमें कंटेंट रणनीति, पोस्टिंग शेड्यूल, समुदाय से जुड़ाव और आध्यात्मिक संस्थाओं के लिए ग्रोथ एनालिटिक्स शामिल हैं।',
    },
    covers: [
      { en: 'Content strategy', hi: 'कंटेंट रणनीति' },
      { en: 'Posting schedules', hi: 'पोस्टिंग शेड्यूल' },
      { en: 'Community engagement', hi: 'समुदाय से जुड़ाव' },
      { en: 'Growth analytics', hi: 'ग्रोथ एनालिटिक्स' },
    ],
    how: [
      { title: { en: 'Review your channels', hi: 'चैनलों की समीक्षा' }, text: { en: 'We look at what your audience already watches and shares.', hi: 'हम देखते हैं कि आपके दर्शक पहले से क्या देखते और साझा करते हैं।' } },
      { title: { en: 'Plan and post', hi: 'योजना और पोस्टिंग' }, text: { en: 'A content calendar is agreed, and posts go out on schedule.', hi: 'कंटेंट कैलेंडर तय होता है और पोस्ट समय पर जाती हैं।' } },
      { title: { en: 'Measure and improve', hi: 'मापना और सुधारना' }, text: { en: 'Monthly numbers show what is growing and what to change.', hi: 'मासिक आँकड़े बताते हैं कि क्या बढ़ रहा है और क्या बदलना है।' } },
    ],
  },
  {
    slug: 'graphic-video-editing',
    icon: 'editing',
    photo: 'editing',
    title: { en: 'Graphic & Video Editing', hi: 'ग्राफ़िक और वीडियो एडिटिंग' },
    short: { en: 'Reels, shorts, thumbnails, posters and banners with spiritual themes.', hi: 'आध्यात्मिक थीम पर रील्स, शॉर्ट्स, थंबनेल, पोस्टर और बैनर।' },
    text: {
      en: 'High-quality graphic design and video editing services for reels, shorts, thumbnails, posters, banners, and other promotional materials with spiritual themes.',
      hi: 'आध्यात्मिक थीम वाली रील्स, शॉर्ट्स, थंबनेल, पोस्टर, बैनर और अन्य प्रचार सामग्री के लिए उच्च गुणवत्ता की ग्राफ़िक डिज़ाइन और वीडियो एडिटिंग सेवाएँ।',
    },
    covers: [
      { en: 'Reels and shorts cut from long katha recordings', hi: 'लंबी कथा रिकॉर्डिंग से बनी रील्स और शॉर्ट्स' },
      { en: 'Thumbnails that invite a click', hi: 'क्लिक के लिए बुलाने वाले थंबनेल' },
      { en: 'Posters and banners', hi: 'पोस्टर और बैनर' },
      { en: 'Other promotional material with spiritual themes', hi: 'आध्यात्मिक थीम की अन्य प्रचार सामग्री' },
    ],
    how: [
      { title: { en: 'Share the footage', hi: 'फ़ुटेज साझा करें' }, text: { en: 'Send us the recording and tell us what the audience should feel.', hi: 'हमें रिकॉर्डिंग भेजें और बताएँ कि दर्शकों को क्या अनुभव होना चाहिए।' } },
      { title: { en: 'Edit and design', hi: 'एडिट और डिज़ाइन' }, text: { en: 'We cut, colour and design in a style that fits your tradition.', hi: 'हम आपकी परंपरा के अनुरूप शैली में कट, रंग और डिज़ाइन तैयार करते हैं।' } },
      { title: { en: 'Review and publish', hi: 'समीक्षा और प्रकाशन' }, text: { en: 'You approve each piece, then we deliver it in the right size for each platform.', hi: 'आप हर सामग्री स्वीकृत करते हैं, फिर हम उसे हर प्लेटफ़ॉर्म के सही आकार में देते हैं।' } },
    ],
  },
  {
    slug: 'audio-production',
    icon: 'audio',
    photo: 'audio',
    title: { en: 'Audio Production', hi: 'ऑडियो प्रोडक्शन' },
    short: { en: 'Studio-quality recording and post-processing for discourses, bhajans and podcasts.', hi: 'प्रवचन, भजन और पॉडकास्ट के लिए स्टूडियो-गुणवत्ता की रिकॉर्डिंग और पोस्ट-प्रोसेसिंग।' },
    text: {
      en: 'Professional audio recording and production services for spiritual discourses, bhajans, and podcasts with studio-quality equipment and post-processing.',
      hi: 'आध्यात्मिक प्रवचनों, भजनों और पॉडकास्ट के लिए स्टूडियो-गुणवत्ता के उपकरणों और पोस्ट-प्रोसेसिंग के साथ पेशेवर ऑडियो रिकॉर्डिंग और प्रोडक्शन सेवाएँ।',
    },
    covers: [
      { en: 'Recording of discourses, bhajans and podcasts', hi: 'प्रवचन, भजन और पॉडकास्ट की रिकॉर्डिंग' },
      { en: 'Studio-quality microphones and equipment', hi: 'स्टूडियो-गुणवत्ता के माइक और उपकरण' },
      { en: 'Post-processing: clean, balanced, ready to release', hi: 'पोस्ट-प्रोसेसिंग: साफ़, संतुलित और रिलीज़ के लिए तैयार' },
    ],
    how: [
      { title: { en: 'Record', hi: 'रिकॉर्ड' }, text: { en: 'We capture your voice or your bhajan with studio-grade microphones.', hi: 'हम स्टूडियो-ग्रेड माइक से आपकी आवाज़ या भजन रिकॉर्ड करते हैं।' } },
      { title: { en: 'Polish', hi: 'निखारें' }, text: { en: 'Noise is removed and levels are balanced in post-processing.', hi: 'पोस्ट-प्रोसेसिंग में शोर हटाया जाता है और स्तर संतुलित किए जाते हैं।' } },
      { title: { en: 'Hand over', hi: 'सौंपें' }, text: { en: 'You receive final files ready for release or for the next step with us.', hi: 'आपको रिलीज़ के लिए या हमारे साथ अगले चरण के लिए तैयार अंतिम फ़ाइलें मिलती हैं।' } },
    ],
  },
  {
    // NEW: written for this site, please review the wording.
    slug: 'song-promotion',
    icon: 'promotion',
    photo: 'promotion',
    isNew: true,
    title: { en: 'Song Promotion', hi: 'गीत प्रमोशन' },
    short: { en: 'Release campaigns that take your bhajan to the devotees who will love it.', hi: 'रिलीज़ अभियान जो आपके भजन को उन भक्तों तक पहुँचाते हैं जो उसे सराहेंगे।' },
    text: {
      en: 'Release campaigns for bhajans and devotional songs, including playlist pitching, reels and shorts promotion, and outreach to channels and creators, so your music reaches the devotees who will listen.',
      hi: 'भजनों और भक्ति गीतों के लिए रिलीज़ अभियान, जिनमें प्लेलिस्ट पिचिंग, रील्स और शॉर्ट्स प्रमोशन तथा चैनलों और क्रिएटर्स तक पहुँच शामिल है, ताकि आपका संगीत उन भक्तों तक पहुँचे जो उसे सुनेंगे।',
    },
    covers: [
      { en: 'Playlist pitching', hi: 'प्लेलिस्ट पिचिंग' },
      { en: 'Reels and shorts promotion around the release', hi: 'रिलीज़ के आसपास रील्स और शॉर्ट्स प्रमोशन' },
      { en: 'Outreach to devotional channels and creators', hi: 'भक्ति चैनलों और क्रिएटर्स तक पहुँच' },
      { en: 'A release-day plan for your social channels', hi: 'आपके सोशल चैनलों के लिए रिलीज़-दिवस की योजना' },
    ],
    how: [
      { title: { en: 'Listen to the song', hi: 'गीत सुनना' }, text: { en: 'We learn who the song is for and what makes it special.', hi: 'हम समझते हैं कि गीत किसके लिए है और उसमें क्या ख़ास है।' } },
      { title: { en: 'Build the campaign', hi: 'अभियान बनाना' }, text: { en: 'Playlists, creators, short videos and a release calendar are prepared together.', hi: 'प्लेलिस्ट, क्रिएटर्स, शॉर्ट वीडियो और रिलीज़ कैलेंडर साथ में तैयार होते हैं।' } },
      { title: { en: 'Launch and follow up', hi: 'लॉन्च और अनुवर्तन' }, text: { en: 'We push on release day and report how far the song has travelled.', hi: 'हम रिलीज़ के दिन प्रचार करते हैं और बताते हैं कि गीत कितनी दूर पहुँचा।' } },
    ],
  },
  {
    // NEW: written for this site, please review the wording.
    slug: 'song-distribution',
    icon: 'distribution',
    photo: 'distribution',
    isNew: true,
    title: { en: 'Song Distribution', hi: 'गीत वितरण' },
    short: { en: 'Your songs on Spotify, Apple Music, YouTube Music, JioSaavn and more.', hi: 'आपके गीत Spotify, Apple Music, YouTube Music, JioSaavn और अन्य पर।' },
    text: {
      en: 'Distribution of your songs to Spotify, Apple Music, YouTube Music, JioSaavn, Gaana, Amazon Music and other major platforms, with metadata, artwork and release scheduling handled for you.',
      hi: 'आपके गीतों का Spotify, Apple Music, YouTube Music, JioSaavn, Gaana, Amazon Music और अन्य प्रमुख प्लेटफ़ॉर्म पर वितरण, जिसमें मेटाडेटा, आर्टवर्क और रिलीज़ शेड्यूल हम आपके लिए संभालते हैं।',
    },
    covers: [
      { en: 'Delivery to Spotify, Apple Music, YouTube Music and JioSaavn', hi: 'Spotify, Apple Music, YouTube Music और JioSaavn तक वितरण' },
      { en: 'Gaana, Amazon Music and other major platforms', hi: 'Gaana, Amazon Music और अन्य प्रमुख प्लेटफ़ॉर्म' },
      { en: 'Metadata and artwork prepared correctly', hi: 'मेटाडेटा और आर्टवर्क की सही तैयारी' },
      { en: 'Release scheduling', hi: 'रिलीज़ शेड्यूलिंग' },
    ],
    how: [
      { title: { en: 'Send the master', hi: 'मास्टर भेजें' }, text: { en: 'Share the final audio, cover art and song details.', hi: 'अंतिम ऑडियो, कवर आर्ट और गीत का विवरण साझा करें।' } },
      { title: { en: 'We prepare and submit', hi: 'हम तैयार कर जमा करते हैं' }, text: { en: 'We check metadata and artwork, then submit to every platform.', hi: 'हम मेटाडेटा और आर्टवर्क जाँचकर हर प्लेटफ़ॉर्म पर जमा करते हैं।' } },
      { title: { en: 'Release on your date', hi: 'आपकी तिथि पर रिलीज़' }, text: { en: 'The song goes live everywhere on the day you choose.', hi: 'गीत आपकी चुनी तिथि पर सब जगह उपलब्ध हो जाता है।' } },
    ],
  },
];

export const serviceGroups = [
  { id: 'broadcast', title: { en: 'Broadcast and events', hi: 'प्रसारण और आयोजन' }, items: ['live-broadcasting', 'religious-event-management', 'celebrity-management'] },
  { id: 'content', title: { en: 'Content and growth', hi: 'कंटेंट और विकास' }, items: ['social-media-management', 'graphic-video-editing'] },
  { id: 'music', title: { en: 'From studio to streaming', hi: 'स्टूडियो से स्ट्रीमिंग तक' }, sequence: true, items: ['audio-production', 'song-promotion', 'song-distribution'] },
];

export const servicesBySlug = Object.fromEntries(services.map((service) => [service.slug, service]));
