import vyasaImg from '../assets/images/maharshi_vyasa_portrait_1789656039172.jpg'
import { MultilingualText, AuthorProfile, SourceTradition } from './ramayanaData'

export type { MultilingualText, AuthorProfile, SourceTradition }

export interface ParvaEpisode {
  title: MultilingualText
  adhyayaReference: string
  summary: MultilingualText
}

export interface MahabharataParvaDetail {
  number: number
  id: string
  title: MultilingualText
  sanskrit: string
  nameMeaning: MultilingualText
  adhyayasCount: number // BORI Critical Edition verified adhyāyas
  slokasCountApprox: number // BORI Critical Edition verified verses
  shortSummary: MultilingualText
  completeStoryline: MultilingualText[]
  importantEpisodes: ParvaEpisode[]
  mainCharacters: string[]
  importantPlaces: MultilingualText[]
  majorTeachings: MultilingualText[]
  dharmaQuestions: {
    question: MultilingualText
    analysis: MultilingualText
  }[]
  slokas: {
    devanagari: string
    transliteration: string
    reference: string
    meaning: MultilingualText
  }[]
  gitaConnection?: {
    hasGita: boolean
    summary: MultilingualText
    significance: MultilingualText
    keyChapters: string
  }
  sourceNotes: MultilingualText
}

export const MAHABHARATA_AUTHOR: AuthorProfile = {
  name: {
    en: 'Maharṣi Kṛṣṇa Dvaipāyana Vyāsa',
    te: 'మహర్షి కృష్ణ ద్వైపాయన వ్యాసుడు',
    hi: 'महर्षि कृष्ण द्वैपायन व्यास',
    sa: 'महर्षिः कृष्णद्वैपायनव्यासः',
    ta: 'மகரிஷி கிருஷ்ண துவைபாயன வியாசர்',
    kn: 'ಮಹರ್ಷಿ ಕೃಷ್ಣ ದ್ವೈಪಾಯನ ವ್ಯಾಸ',
  },
  sanskrit: 'महर्षिः कृष्णद्वैपायनव्यासः (वेदव्यासः)',
  title: {
    en: 'Veda Vyāsa (Arranger of Vedas) & Author-Witness of the Mahābhārata',
    te: 'వేదవ్యాసుడు & మహాభారత ద్రష్ట, కర్త',
    hi: 'वेदव्यास (वेदों के व्यवस्थापक) एवं महाभारत के रचयिता-साक्षी',
    sa: 'वेदव्यासः (वेदानां विभावकः) महाभारतस्य रचयिता साक्षी च',
    ta: 'வேத வியாசர் (வேதங்களைத் தொகுத்தவர்) & மகாபாரதத்தின் ஆசிரியர்-சாட்சி',
    kn: 'ವೇದವ್ಯಾಸ (ವೇದಗಳ ಸಂಯೋಜಕ) ಹಾಗೂ ಮಹಾಭಾರತದ ಕರ್ತೃ-ಸಾಕ್ಷಿ',
  },
  traditionalAttribution: {
    en: 'Traditionally attributed to Maharṣi Kṛṣṇa Dvaipāyana Vyāsa.',
    te: 'సాంప్రదాయికంగా మహర్షి కృష్ణద్వైపాయన వ్యాస ప్రణీతంగా పరిగణించబడుతోంది.',
    hi: 'पारंपरिक रूप से महर्षि कृष्ण द्वैपायन व्यास द्वारा रचित माना जाता है।',
    sa: 'पारम्परिकतया महर्षये कृष्णद्वैपायनव्यासप्रणीतं मन्यते।',
    ta: 'பாரம்பரியமாக மகரிஷி கிருஷ்ண துவைபாயன வியாசரால் இயற்றப்பட்டதாகக் கருதப்படுகிறது.',
    kn: 'ಸಾಂಪ್ರದಾಯಿಕವಾಗಿ ಮಹರ್ಷಿ ಕೃಷ್ಣ ದ್ವೈಪಾಯನ ವ್ಯಾಸರಿಂದ ರಚಿಸಲ್ಪಟ್ಟಿದೆ ಎಂದು ತಿಳಿಯಲಾಗುತ್ತದೆ.',
  },
  role: {
    en: 'The compiler and divider of the single Vedic corpus into four collections (Ṛg, Yajur, Sāma, Atharva) who subsequently composed the monumental Itihāsa of the Bharata dynasty. Uniquely in world literature, Vyāsa is both the inspired composer and an active historical progenitor/witness participating in the epic events.',
    te: 'ఏకైక వేదరాశిని నాలుగు వేదాలుగా (ఋక్, యజుస్, సామ, అథర్వ) విభజించి, భరత వంశ మహాచరిత్రను అక్షరబద్ధం చేసిన బ్రహ్మర్షి. ప్రపంచ సాహిత్యంలోనే అరుదుగా రచయితగా ఉండటమే కాక కథలోని ముఖ్య ఘట్టాలలో స్వయంగా పాల్గొన్న పాత్రధారి.',
    hi: 'एकीकृत वेदराशि को चार वेदों (ऋग्, यजुः, साम, अथर्व) में वर्गीकृत करने वाले महर्षि, जिन्होंने भरत वंश के विशाल इतिहास का निर्माण किया। वे न केवल इस महाकाव्य के रचयिता हैं अपितु इसके जीवन्त पात्र और साक्षी भी हैं।',
    sa: 'एकं वेदं चतुर्धा विभज्य (ऋग्यजुःसामाथर्वाख्यान्) भरतवंशस्य महानेतिहासग्रन्थं रचितवान्। स स्वयं काव्यस्य रचयिता तथैव प्रत्यक्षसाक्षी मार्गदर्शकश्चासीत्।',
    ta: 'வேதங்களை நான்கு பிரிவுகளாகத் தொகுத்தவர்; பாரத வம்சத்தின் மாபெரும் வரலாற்றை எழுதியவர். உலக இலக்கியத்தில் ஆசிரியராகவும் வரலாற்று நிகழ்வுகளின் சாட்சியாகவும் திகழ்ந்தவர்.',
    kn: 'ಒಂದೇ ವೇದರಾಶಿಯನ್ನು ನಾಲ್ಕು ವೇದಗಳನ್ನಾಗಿ ವಿಭಾಗಿಸಿ, ಭರತ ವಂಶದ ಮಹಾ ಇತಿಹಾಸವನ್ನು ಬರೆದ ಮಹರ್ಷಿ. ಕಾವ್ಯದ ಕರ್ತೃ ಮಾತ್ರವಲ್ಲದೆ ಪ್ರತ್ಯಕ್ಷ ಸಾಕ್ಷಿಯೂ ಮಾರ್ಗದರ್ಶಿಯೂ ಆಗಿದ್ದವರು.',
  },
  biography: {
    en: 'Born to Sage Parāśara and Satyavatī on an island in the Yamunā river, he was called "Kṛṣṇa" due to his dark complexion and "Dvaipāyana" from his island birth. He performed austere tapas in the Himalayas near Badarikāśrama. In traditional narrative, Lord Gaṇeśa inscribed the verses as Vyāsa dictated without pause. Vyāsa taught the epic to his son Śuka and disciples Vaiśampāyana, Paila, Jaimini, and Sumantu; Vaiśampāyana recited it to King Janamejaya at the royal snake sacrifice (Sarpa-satra).',
    te: 'పరాశర మహర్షి మరియు సత్యవతి దేవిలకు యమునా నదీ ద్వీపంలో జన్మించారు. శ్యామ వర్ణం వల్ల "కృష్ణ" అని, ద్వీపంలో పుట్టినందున "ద్వైపాయన" అని పేరు వచ్చింది. బదరికాశ్రమంలో తపస్సు చేశారు. సంప్రదాయ కథనం ప్రకారం వ్యాసుని కోరికపై విఘ్నేశ్వరుడు నిరంతరాయంగా లేఖనం చేశారు. వ్యాసుడు తన కుమారుడైన శుకునికి, శిష్యులైన వైశంపాయనుడు, పైలుడు, జైమిని, సుమంతులకు ఉపదేశించగా, వైశంపాయనుడు జనమేజయ మహారాజు సర్పయాగంలో దీనిని గానం చేశారు.',
    hi: 'महर्षि पराशर और सत्यवती के पुत्र के रूप में यमुना के द्वीप पर प्रादुर्भाव हुआ। श्याम वर्ण के कारण "कृष्ण" और द्वीप में जन्म के कारण "द्वैपायन" कहलाए। बदरिकाश्रम में घोर तपस्या की। मान्यतानुसार भगवान गणेश ने व्यास जी के मुख से निसृत श्लोकों को लिपिबद्ध किया। व्यास जी ने अपने पुत्र शुकदेव तथा वैशम्पायन आदि शिष्यों को इसका ज्ञान दिया; वैशम्पायन ने जनमेजय के सर्पसत्र में इसका वाचन किया।',
    sa: 'पराशरसत्यवतीसुतः यमुनाद्वीपे जातः। कृष्णवर्णत्वात् "कृष्णः", द्वीपजन्मत्वात् "द्वैपायनः" इति ख्यातः। बदरिकाश्रमे तपस्तेपे। परम्परानुसारं श्रीगणेशेन श्लोकाः लिखिताः। वैशम्पायनादिभ्यः शिष्येभ्यः उपदिष्टं काव्यं सर्पसत्रे जनमेजयाय श्रावितम्।',
    ta: 'பராசர முனிவருக்கும் சத்யவதிக்கும் யமுனை நதித் தீவில் பிறந்தவர். கருமை நிறத்தால் "கிருஷ்ண" என்றும், தீவில் பிறந்ததால் "துவைபாயன" என்றும் அழைக்கப்பட்டார். விநாயகப் பெருமான் இதன் சுலோகங்களை எழுதினார் என்ற பாரம்பரிய மரபு உண்டு. தனது சீடர் வைசம்பாயனர் மூலம் ஜனமேஜய மன்னனின் சர்ப்ப யாகத்தில் இது பாடப்பட்டது.',
    kn: 'ಪರಾಶರ ಮುನಿ ಮತ್ತು ಸತ್ಯವತಿಯರ ಮಗನಾಗಿ ಯಮುನಾ ನದಿಯ ದ್ವೀಪದಲ್ಲಿ ಜನಿಸಿದರು. ಶ್ಯಾಮವರ್ಣದಿಂದ "ಕೃಷ್ಣ" ಎಂದೂ, ದ್ವೀಪದಲ್ಲಿ ಜನಿಸಿದ್ದರಿಂದ "ದ್ವೈಪಾಯನ" ಎಂದೂ ಪ್ರಸಿದ್ಧರಾದರು. ಗಣೇಶನಿಂದ ಲಿಪಿಬದ್ಧವಾದ ಈ ಮಹಾಕಾವ್ಯವನ್ನು ಶಿಷ್ಯ ವೈಶಂಪಾಯನರು ಜನಮೇಜಯನ ಸರ್ಪಯಾಗದಲ್ಲಿ ಪಠಿಸಿದರು.',
  },
  placeInTradition: {
    en: 'Celebrated on Guru Pūrṇimā (Vyāsa Pūrṇimā), Vyāsa represents the archetypal Guru and embodiment of intellectual and dharmic synthesis. The Mahābhārata proudly declares: "Yad ihāsti tad anyatra yannehāsti na tat kvacit" (What is found here may be found elsewhere; what is not here is nowhere else). Modern manuscript scholarship documents three textual stages: Jaya (Victory) ~8,800 verses, Bhārata ~24,000 verses, and Mahābhārata ~100,000 verses. Scholars distinguish traditional attribution from the multi-century historical evolution demonstrated by the critical apparatus.',
    te: 'వ్యాస పూర్ణిమ (గురు పూర్ణిమ) నామంతో సర్వ గురు పరంపరకు ఆద్యుడిగా పూజింపబడతారు. "ధర్మే చార్థే చ కామే చ మోక్షే చ భరతర్షభ | యదిహాస్తి తదన్యత్ర యన్నేహాస్తి న తత్ క్వచిత్" అని మహాభారతం యొక్క సార్వత్రిక సంపూర్ణతను గ్రంథమే చాటిచెప్పింది. చారిత్రక పరిశోధనలలో జయ (8,800 శ్లోకాలు), భారతము (24,000 శ్లోకాలు), మహాభారతము (లక్ష శ్లోకాలు) అనే మూడు దశల వికాసాన్ని పండితులు గుర్తించారు.',
    hi: 'गुरु पूर्णिमा (व्यास पूर्णिमा) के रूप में समस्त ज्ञान-परम्परा के परम गुरु के रूप में पूज्य। महाभारत के विषय में प्रसिद्ध है: "यदिहास्ति तदन्यत्र यन्नेहास्ति न तत् क्वचित्"। समालोचनात्मक शोध के अनुसार यह ग्रंथ तीन चरणों में विकसित हुआ: जय (८,८०० श्लोक), भारत (२४,००० श्लोक) तथा महाभारत (१,००,००० श्लोक)। पारंपरिक श्रद्धा और ऐतिहासिक पाण्डुलिपि-शास्त्र दोनों का यथोचित सम्मान यहाँ रक्षित है।',
    sa: 'गुरुपूर्णिमादिने व्यासपूजा विधीयते। "यदिहास्ति तदन्यत्र यन्नेहास्ति न तत् क्वचित्" इति अस्य ग्रन्थस्य सार्वभौमिकता। शोधदृष्ट्या जय-भारत-महाभारतरूपेण त्रयः विकासावस्थाः स्वीक्रियन्ते।',
    ta: 'குரு பூர்ணிமா நாளில் குருவாக வணங்கப்படுகிறார். "இங்கு உள்ளதே பிறிதொரு இடத்திலும் உள்ளது; இங்கு இல்லாதது எங்கும் இல்லை" என்று போற்றப்படும் இந்நூல் மனித வாழ்வின் சகல பரிமாணங்களையும் அலசுகிறது.',
    kn: 'ಗುರು ಪೂರ್ಣಿಮೆಯ ದಿನ ವ್ಯಾಸರನ್ನು ಜಗದ್ಗುರುವಾಗಿ ಪೂಜಿಸಲಾಗುತ್ತದೆ. "ಇಲ್ಲಿರುವುದೇ ಬೇರೆಡೆಯೂ ಇದೆ; ಇಲ್ಲಿಲ್ಲದ್ದು ಎಲ್ಲೂ ಇಲ್ಲ" ಎಂಬ ಮಾತಿನಂತೆ ಸಕಲ ಧರ್ಮ, ಅರ್ಥ, ಕಾಮ, ಮೋಕ್ಷಗಳ ಸಾರವನ್ನು ಮಹಾಭಾರತ ಒಳಗೊಂಡಿದೆ.',
  },
  image: vyasaImg,
  sources: [
    {
      work: 'BORI Critical Edition, Ādi Parva 1.1–1.50',
      reference: 'Adhyāya 1',
      context: {
        en: 'Genealogy of the Kuru dynasty, composition of the text, collaboration with Gaṇeśa as scribe, and transmission through Śaunaka and the ṛṣis of Naimiṣāraṇya.',
        te: 'కురువంశ చరిత్ర, గ్రంథ రచన, నైమిశారణ్య మునులకు సూతుని ద్వారా ప్రవచనం.',
        hi: 'कुरु वंशानुक्रम, ग्रंथ का प्रणयन, गणेश जी का लेखन और नैमिषारण्य में शौनकादि ऋषियों को आख्यान।',
        sa: 'कुरुवंशवर्णनम्, ग्रन्थनिर्माणम्, शौनकादिभ्यः नैमिषारण्ये सूतप्रोक्तं महाख्यानम्।',
        ta: 'குரு வம்ச வரலாறு, காவிய உருவாக்கம் மற்றும் நைமிசாரண்ய முனிவர்களுக்குக் கூறப்பட்ட முறை.',
        kn: 'ಕುರು ವಂಶಾವಳಿ, ಕಾವ್ಯ ರಚನೆ ಹಾಗೂ ನೈಮಿಷಾರಣ್ಯದಲ್ಲಿ ಮುನಿಗಳಿಗೆ ಹೇಳಲ್ಪಟ್ಟ ಕಥೆ.',
      },
    },
    {
      work: 'Mahābhārata, Śānti Parva 337–340',
      reference: 'Mokṣadharma Parva',
      context: {
        en: 'Nārāyaṇīya section depicting Vyāsa’s cosmic role, Vedic classifications, and philosophical disquisitions on supreme reality.',
        te: 'వ్యాసుని వేద విభజన కార్యం మరియు పరతత్వ తాత్విక చర్చలు.',
        hi: 'नारायणीय उपाख्यान में व्यास जी की ब्रह्मांडीय भूमिका एवं वेदों का विभाजन।',
        sa: 'नारायणीयोपाख्याने व्यासस्य भूमिका वेदानां वर्गीकरणं च।',
        ta: 'நாராயணீயப் பகுதியில் வியாசரின் வேதாந்தப் போதனைகள்.',
        kn: 'ನಾರಾಯಣೀಯ ಭಾಗದಲ್ಲಿ ವ್ಯಾಸರ ತಾತ್ವಿಕ ಬೋಧನೆಗಳು.',
      },
    },
  ],
}

export const BORI_SCHOLARLY_STANDARDS = {
  institution: 'Bhandarkar Oriental Research Institute (BORI), Pune, Maharashtra',
  projectYears: '1919 – 1966 (47 years of dedicated scholarly collation)',
  editors: ['V. S. Sukthankar (General Editor, 1925–1943)', 'S. K. Belvalkar', 'P. L. Vaidya', 'R. N. Dandekar'],
  manuscriptsExamined: '1,259 manuscripts from across all Indian regions and scripts',
  scriptsRepresented: ['Śāradā (Kashmir)', 'Nepālī', 'Maithilī', 'Bengali', 'Devanāgarī', 'Grantha (Tamil Nadu)', 'Telugu', 'Malayalam'],
  principles: [
    'Strict stemmatic manuscript collation distinguishing the Northern and Southern recensions.',
    'Only readings attested by both distinct recension families or clearly ancestral archetypes are elevated to the critical text.',
    'Passages found in only one regional family (such as certain late narrative expansions) are catalogued transparently in the critical apparatus and appendices.',
    'No arbitrary or doctrinal censorship; objective fidelity to the earliest recoverable manuscript archetype.',
  ],
}

export const MAHABHARATA_SOURCE_TRADITIONS: SourceTradition[] = [
  {
    id: 'bori_ce',
    name: {
      en: 'BORI Critical Edition (Bhandarkar Oriental Research Institute)',
      te: 'భండార్కర్ ఓరియంటల్ రీసెర్చ్ ఇన్స్టిట్యూట్ (BORI) క్రిటికల్ ఎడిషన్',
      hi: 'भाण्डारकर प्राच्य विद्या संशोधन मन्दिर (BORI) समालोचनात्मक संस्करण',
      sa: 'भाण्डारकर-प्राच्यविद्या-संशोधनमन्दिर-संपादितं समालोचनात्मकं संस्करणम्',
      ta: 'பாண்டார்கர் ஓரியண்டல் ஆய்வு நிறுவனத்தின் (BORI) மூல ஆராய்ச்சிப் பதிப்பு',
      kn: 'ಭಾಂಡಾರ್ಕರ್ ಪ್ರಾಚ್ಯ ಸಂಶೋಧನಾ ಸಂಸ್ಥೆಯ (BORI) ವಿಮರ್ಶಾತ್ಮಕ ಆವೃತ್ತಿ',
    },
    sanskrit: 'महाभारतम् (भाण्डारकर-प्राच्यविद्या-संशोधनमन्दिर-संस्करणम्)',
    language: {
      en: 'Classical Sanskrit (rigorous critical text)',
      te: 'సంస్కృతం (శాస్త్రీయ పరిశోధనాత్మక మూల పాఠం)',
      hi: 'संस्कृत (शोधपरक समालोचनात्मक मूल पाठ)',
      sa: 'संस्कृतम् (शुद्ध-प्रमाणित-पाठः)',
      ta: 'சமஸ்கிருதம் (ஆராய்ச்சி அடிப்படையிலான மூலம்)',
      kn: 'ಸಂಸ್ಕೃತ (ವಿಮರ್ಶಾತ್ಮಕ ಶುದ್ಧ ಮೂಲ)',
    },
    era: {
      en: 'Published 1919–1966 in 19 monumental volumes; represents the earliest recoverable manuscript archetype.',
      te: '1919–1966 మధ్య 19 బృహత్ సంపుటాలలో ప్రచురితం; ప్రాచీన తాళపత్ర ప్రతుల ఆధారిత ప్రామాణికం.',
      hi: '१९१९–१९६६ में १९ विशाल खण्डों में प्रकाशित; प्राचीनतम पाण्डुलिपियों पर आधारित।',
      sa: '१९१९–१९६६ वर्षे सम्पादितम्। एकोनविंशतिखण्डेषु मुद्रितम्।',
      ta: '1919–1966 காலப்பகுதியில் 19 தொகுதிகளாக வெளிவந்தது.',
      kn: '೧೯೧೯–೧೯೬೬ರಲ್ಲಿ ೧೯ ಸಂಪುಟಗಳಲ್ಲಿ ಪ್ರಕಟಗೊಂಡ ಪ್ರಾಮಾಣಿಕ ಆವೃತ್ತಿ.',
    },
    author: {
      en: 'Editorial Board led by V. S. Sukthankar, S. K. Belvalkar, and P. L. Vaidya',
      te: 'వి. ఎస్. సుక్తంకర్, ఎస్. కె. బెల్వాల్కర్, పి. ఎల్. వైద్య ఆధ్వర్యంలోని విద్వత్ మండలి',
      hi: 'वी. एस. सुखथंकर, एस. के. बेलवलकर एवं पी. एल. वैद्य के नेतृत्व में सम्पादक मण्डल',
      sa: 'वी. एस. सुखथंकरप्रमुखाः विद्वांसः',
      ta: 'வி. எஸ். சுக்தங்கர் தலைமையிலான அறிஞர் குழு',
      kn: 'ವಿ. ಎಸ್. ಸುಕ್ತಂಕರ್ ಮೊದಲಾದ ವಿದ್ವಾಂಸರ ಮಂಡಳಿ',
    },
    description: {
      en: 'The definitive gold standard of international Sanskrit philology. It meticulously collates over 1,200 manuscripts in eight scripts, stripping away later regional interpolations to reconstitute approximately 73,000 verses in the 18 Parvas.',
      te: 'అంతర్జాతీయ సంస్కృత విద్వత్తు అంగీకరించిన అత్యున్నత ప్రామాణిక గ్రంథం. దేశవ్యాప్తంగా 1,200కు పైగా ప్రతులను శోధించి ప్రక్షిప్తాలను వేరుచేసి 18 పర్వాలలోని సుమారు 73,000 శ్లోకాలను పునరుద్ధరించింది.',
      hi: 'अंतरराष्ट्रीय संस्कृत शोध का स्वर्ण मानक। आठ लिपियों की १,२०० से अधिक पाण्डुलिपियों का मिलान कर प्रक्षिप्त अंशों को अलग करते हुए लगभग ७३,००० श्लोकों का प्रामाणिक पाठ प्रस्तुत करता है।',
      sa: 'अन्तरराष्ट्रीयसंस्कृतविद्वद्भिः स्वीकृतं परमप्रमाणम्। अष्टलिपिषु उपलभ्यानां १२०० हस्तलेखानां पाठसमीक्षया सिद्धम्।',
      ta: 'சர்வதேச அளவில் ஏற்கப்பட்ட மிகச் சிறந்த மூலப் பதிப்பு. 1,200க்கும் மேற்பட்ட கையெழுத்துப் பிரதிகளை ஆராய்ந்து அமைக்கப்பட்ட 18 பர்வங்கள்.',
      kn: 'ಅಂತಾರಾಷ್ಟ್ರೀಯ ಸಂಸ್ಕೃತ ವಿದ್ವತ್ ಜಗತ್ತು ಒಪ್ಪಿರುವ ಶ್ರೇಷ್ಠ ಆವೃತ್ತಿ. ೧,೨೦೦ಕ್ಕೂ ಹೆಚ್ಚು ತಾಳೆಗರಿಗಳ ಪರಿಶೀಲನೆಯಿಂದ ಸಿದ್ಧವಾದ ೧೮ ಪರ್ವಗಳ ಮಹಾಕಾವ್ಯ.',
    },
    keyCharacteristics: [
      {
        en: '18 Parvas: 73,784 verified stanzas and prose units across 1,984 adhyāyas.',
        te: '18 పర్వాలు: 1,984 అధ్యాయాలు మరియు 73,784 పరిశోధిత శ్లోకాలు.',
        hi: '१८ पर्व: १,९८४ अध्यायों में ७३,७८४ शोधित श्लोक।',
        sa: '१८ पर्वाणि: १९८४ अध्यायेषु ७३७८४ श्लोकाः।',
        ta: '18 பர்வங்கள்: 1,984 அத்தியாயங்கள், 73,784 சுலோகங்கள்.',
        kn: '೧೮ ಪರ್ವಗಳು: ೧,೯೮೪ ಅಧ್ಯಾಯಗಳು ಹಾಗೂ ೭೩,೭೮೪ ಶ್ಲೋಕಗಳು.',
      },
      {
        en: 'Complete critical apparatus with variants from all recensions in footnotes.',
        te: 'అన్ని ప్రాంతీయ పాఠాంతరాలను సూచికలలో నిక్షిప్తం చేసిన పరిశోధనా పద్ధతి.',
        hi: 'सभी पाण्डुलिपि भेदों का विस्तृत पाद-टिप्पणियों में संकलन।',
        sa: 'सर्वेषां पाठांतराणां विशदं संकलनम्।',
        ta: 'அனைத்து வேறுபாடுகளையும் அடிக்குறிப்புகளில் தெளிவாகத் தொகுத்துள்ளது.',
        kn: 'ಎಲ್ಲಾ ಪಾಠಭೇದಗಳನ್ನು ಅಡಿಟಿಪ್ಪಣಿಗಳಲ್ಲಿ ದಾಖಲಿಸಿರುವ ಸಮಗ್ರತೆ.',
      },
    ],
    primaryStatus: true,
    criticalNote: {
      en: 'AUM designates the BORI Critical Edition as the primary authoritative benchmark for textual citations, chapter counts, and verse identification.',
      te: 'AUM గ్రంథాలయం శ్లోక నిర్ధారణకు, అధ్యాయ విభజనకు BORI క్రిటికల్ ఎడిషన్ ను ప్రథమ ప్రామాణికంగా పరిగణిస్తుంది.',
      hi: 'AUM इस समालोचनात्मक संस्करण को पाठ, अध्याय और श्लोक संख्या के लिए प्राथमिक आधार मानता है।',
      sa: 'AUM ग्रन्थालयः इमं पाठं मुख्यप्रमाणत्वेन स्वीकरोति।',
      ta: 'AUM தளம் இந்த BORI பதிப்பையே முதன்மை ஆதாரமாகக் கொள்கிறது.',
      kn: 'AUM ಗ್ರಂಥಾಲಯವು ಈ BORI ಆವೃತ್ತಿಯನ್ನೇ ಪ್ರಧಾನ ಆಧಾರವಾಗಿ ಅಂಗೀಕರಿಸುತ್ತದೆ.',
    },
  },
  {
    id: 'nilakantha_vulgate',
    name: {
      en: 'Nīlakaṇṭha Caturdhara Recension (The Vulgate / Chitrashala Edition)',
      te: 'నీలకంఠ చతుర్ధర వ్యాఖ్యాన సహిత భారత పాఠం (సాంప్రదాయిక పాఠం)',
      hi: 'नीलकण्ठ चतुर्धर टीका युक्त पाठ (चित्रशाला संस्करण / प्रचलित पाठ)',
      sa: 'नीलकण्ठचतुर्धरटीकासहितः पाठः (प्रचलितपाठः)',
      ta: 'நீலகண்ட சதுர்தரர் உரை பதிப்பு (பாரம்பரியப் புழக்கப் பதிப்பு)',
      kn: 'ನೀಲಕಂಠ ಚತುರ್ಧರ ಟೀಕಾ ಸಮೇತ ಮಹಾಭಾರತ (ಪ್ರಚಲಿತ ಪಾಠ)',
    },
    sanskrit: 'महाभारतम् (नीलकण्ठकृत-भारतभावदीप-सहितम्)',
    language: {
      en: 'Classical Sanskrit with Bhāratabhāvadīpa commentary',
      te: 'సంస్కృతం - భారతభావదీప వ్యాఖ్యతో',
      hi: 'संस्कृत - भारतभावदीप टीका सहित',
      sa: 'संस्कृतम् - भारतभावदीपव्याख्यया अलङ्कृतम्',
      ta: 'சமஸ்கிருதம் - பாரதபாவதீப உரையுடன்',
      kn: 'ಸಂಸ್ಕೃತ - ಭಾರತಭಾವದೀಪ ವ್ಯಾಖ್ಯಾನದೊಂದಿಗೆ',
    },
    era: {
      en: '17th Century CE commentary by Nīlakaṇṭha in Varanasi; became standard printed text in 19th-20th century India.',
      te: '17వ శతాబ్దంలో వారణాసిలో నీలకంఠునిచే రచింపబడి, ఆధునిక ముద్రణలలో విస్తృతంగా వ్యాపించిన పాఠం.',
      hi: '१७वीं शताब्दी में काशी में प्रणीत; १९वीं-२०वीं सदी के अधिकांश मुद्रणों का आधार।',
      sa: '१७ शतके वाराणस्यां रचितम्।',
      ta: '17ஆம் நூற்றாண்டில் காசியில் இயற்றப்பட்டது.',
      kn: '೧೭ನೇ ಶತಮಾನದಲ್ಲಿ ವಾರಾಣಸಿಯಲ್ಲಿ ರಚಿತವಾದ ಪ್ರಸಿದ್ಧ ಆವೃತ್ತಿ.',
    },
    author: {
      en: 'Paṇḍita Nīlakaṇṭha Caturdhara of Maharashtra (settled in Vārāṇasī)',
      te: 'మహారాష్ట్రకు చెందిన కాశీ విద్వాంసుడు పండిత నీలకంఠ చతుర్ధరుడు',
      hi: 'पण्डित नीलकण्ठ चतुर्धर',
      sa: 'पण्डितः नीलकण्ठचतुर्धरः',
      ta: 'பண்டிதர் நீலகண்ட சதுர்தரர்',
      kn: 'ಪಂಡಿತ ನೀಲಕಂಠ ಚತುರ್ಧರ',
    },
    description: {
      en: 'The most widely read traditional commentary across northern and western India for over three centuries. It contains approximately 90,000 to 100,000 verses, incorporating many passages that the modern Critical Edition classifies as later accretions.',
      te: 'ఉత్తర, పశ్చిమ భారతదేశంలో 300 ఏళ్లుగా అత్యంత ప్రాచుర్యం పొందిన సంప్రదాయ వ్యాఖ్య. లక్ష శ్లోకాలతో కూడి అనేక ఉపకథలను వివరిస్తుంది.',
      hi: 'उत्तर और पश्चिम भारत में सर्वाधिक प्रचलित पारंपरिक संस्करण। इसमें लगभग ९०,००० से १,००,००० श्लोक सम्मिलित हैं।',
      sa: 'प्रचलितपरम्परायां सर्वाधिकप्रचारितः पाठः। लक्ष्यश्लोकात्मकेऽस्मिन् पाठांतराणि प्राचुर्येण दृश्यन्ते।',
      ta: 'பாரம்பரியமாக மக்களால் அதிகம் வாசிக்கப்பட்ட உரை. இதில் சுமார் ஒரு லட்சம் சுலோகங்கள் அடங்கும்.',
      kn: 'ಉತ್ತರ ಮತ್ತು ಪಶ್ಚಿಮ ಭಾರತದಲ್ಲಿ ಶತಮಾನಗಳಿಂದ ಪ್ರಚಲಿತವಾಗಿರುವ ಪಾರಂಪರಿಕ ಆವೃತ್ತಿ. ಸುಮಾರು ಒಂದು ಲಕ್ಷ ಶ್ಲೋಕಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.',
    },
    keyCharacteristics: [
      {
        en: 'Includes popular episodes like detailed expanded sub-tales and devotional hymns.',
        te: 'ప్రముఖ భక్తిస్తోత్రాలు, ప్రచారంలో ఉన్న ఉపకథల విస్తృతి ఉంటుంది.',
        hi: 'लोकप्रिय उपकथाओं एवं भक्ति-परक स्तोत्रों का समावेश।',
        sa: 'भक्तिस्तोत्राणां उपाख्यानानां च बाहुल्यम्।',
        ta: 'பக்திப் பாடல்களும் பல துணைக் கதைகளும் இதில் உள்ளன.',
        kn: 'ಭಕ್ತಿ ಸ್ತೋತ್ರಗಳು ಹಾಗೂ ಜನಪ್ರಿಯ ಉಪಕಥೆಗಳು ವಿಸ್ತಾರವಾಗಿವೆ.',
      },
    ],
    primaryStatus: false,
    criticalNote: {
      en: 'Recognized as an indispensable traditional interpretive commentary, but distinctly noted where it diverges from the critical text.',
      te: 'సాంప్రదాయ అర్థ వివరణకు అమూల్యమైనదిగా పరిగణిస్తూనే, క్రిటికల్ ఎడిషన్ కన్నా పాఠాంతరాలు వేరుగా ఉన్న చోట స్పష్టంగా నమోదు చేయబడుతుంది.',
      hi: 'पारंपरिक व्याख्या हेतु अत्यंत उपयोगी, किंतु आलोचनात्मक संस्करण से भिन्नताओं को स्पष्ट रूप से दर्शाया जाता है।',
      sa: 'पारम्परिकव्याख्यानाय श्रेष्ठम्, समालोचनात्मकपाठाद् भिन्नता स्पष्टतया दर्श्यते।',
      ta: 'பாரம்பரிய விளக்கங்களுக்கு மிகச் சிறந்தது; ஆயினும் மூலப் பதிப்பிலிருந்து மாறுபடும் இடங்கள் குறிக்கப்பட்டுள்ளன.',
      kn: 'ಪಾರಂಪರಿಕ ವ್ಯಾಖ್ಯಾನಕ್ಕೆ ಅಮೂಲ್ಯ, ಆದರೆ ವಿಮರ್ಶಾತ್ಮಕ ಆವೃತ್ತಿಯಿಂದ ಭಿನ್ನವಾದೆಡೆ ಸ್ಪಷ್ಟವಾಗಿ ಉಲ್ಲೇಖಿಸಲಾಗಿದೆ.',
    },
  },
  {
    id: 'harivamsha',
    name: {
      en: 'Harivaṁśa (The Epilogue / Khila-parva)',
      te: 'హరివంశము (ఖిల పర్వము)',
      hi: 'हरिवंश पुराण (खिल पर्व)',
      sa: 'हरिवंशः (खिलपर्व)',
      ta: 'ஹரிவம்சம் (இறுதிப் பகுதி)',
      kn: 'ಹರಿವಂಶ ಪುರಾಣ (ಖಿಲ ಪರ್ವ)',
    },
    sanskrit: 'हरिवंशपुराणम् (महाभारतस्य खिलपर्व)',
    language: {
      en: 'Classical Sanskrit',
      te: 'సంస్కృతం',
      hi: 'संस्कृत',
      sa: 'संस्कृतम्',
      ta: 'சமஸ்கிருதம்',
      kn: 'ಸಂಸ್ಕೃತ',
    },
    era: {
      en: 'Regarded traditionally as the 19th or supplemental book (Khila) focusing on the genealogy and līlās of Bhagavān Śrī Kṛṣṇa.',
      te: 'సాంప్రదాయికంగా 19వ లేదా అనుబంధ (ఖిల) పర్వంగా పరిగణింపబడి, శ్రీకృష్ణుని దివ్య లీలలను, వంశాన్ని వర్ణిస్తుంది.',
      hi: 'पारंपरिक रूप से महाभारत का पूरक (खिल) ग्रंथ जो भगवान श्रीकृष्ण के वंश और बाल-चरित्र का वर्णन करता है।',
      sa: 'महाभारतस्य खिलभागः श्रीकृष्णस्य लीलाचरितप्रतिपादकश्च।',
      ta: 'மகாபாரதத்தின் தொடர்ச்சியாக ஸ்ரீ கிருஷ்ணரின் திருவிளையாடல்களையும் வம்சத்தையும் விவரிக்கும் பகுதி.',
      kn: 'ಮಹಾಭಾರತದ ಅನುಬಂಧ ಭಾಗವಾಗಿ ಶ್ರೀಕೃಷ್ಣನ ವಂಶ ಮತ್ತು ಲೀಲೆಗಳನ್ನು ವರ್ಣಿಸುವ ಪವಿತ್ರ ಗ್ರಂಥ.',
    },
    author: {
      en: 'Traditionally attributed to Maharṣi Vyāsa; critically edited by P. L. Vaidya (BORI 1969–1971)',
      te: 'వ్యాస మహర్షి ప్రణీతం; BORI లో పి. ఎల్. వైద్యచే పరిశోధింపబడింది',
      hi: 'महर्षि व्यास प्रणीत; BORI द्वारा पी. एल. वैद्य के सम्पादकत्व में प्रकाशित',
      sa: 'व्यासप्रणीतः, पी. एल. वैद्यमहोदयेन सम्पादितः',
      ta: 'வியாசரால் இயற்றப்பட்டது; BORI நிறுவனத்தால் ஆய்வு செய்யப்பட்டது',
      kn: 'ವ್ಯಾಸರಿಂದ ರಚಿತ; BORI ಸಂಸ್ಥೆಯಿಂದ ವಿಮರ್ಶಾತ್ಮಕವಾಗಿ ಪ್ರಕಟಿತ',
    },
    description: {
      en: 'Focuses entirely on the lineage of Hari (Śrī Kṛṣṇa), the Yādava dynasty, Kṛṣṇa’s childhood in Gokula, destruction of Kaṃsa, founding of Dvārakā, and the future Kaliyuga conditions.',
      te: 'శ్రీకృష్ణుని జన్మ, గోకుల లీలలు, కంసవధ, ద్వారకా నగర నిర్మాణం మరియు భవిష్యత్ కలియుగ లక్షణాలను సమగ్రంగా వివరించే అనుబంధ గ్రంథం.',
      hi: 'श्रीकृष्ण का बाल्यकाल, गोकुल-लीला, कंस-वध, द्वारका-स्थापना तथा कलियुग के लक्षणों का विशद निरूपण।',
      sa: 'श्रीकृष्णस्य जन्म, बाल्यलीलाः, कंसवधः, द्वारकापुरीनिर्माणं च वर्ण्यते।',
      ta: 'கண்ணனின் பிறப்பு, கோகுல லீலைகள், கம்ச வதம் மற்றும் துவாரகை உருவாக்கம் பற்றி விரிவாகக் கூறுகிறது.',
      kn: 'ಶ್ರೀಕೃಷ್ಣನ ಬಾಲ್ಯಲೀಲೆಗಳು, ಕಂಸವಧೆ, ದ್ವಾರಕೆಯ ಸ್ಥಾಪನೆ ಮತ್ತು ಕಲಿಯುಗದ ಲಕ್ಷಣಗಳನ್ನು ವಿವರಿಸುವ ಗ್ರಂಥ.',
    },
    keyCharacteristics: [
      {
        en: 'Three Parvas: Harivaṁśa Parva, Viṣṇu Parva, and Bhaviṣya Parva.',
        te: 'మూడు విభాగాలు: హరివంశ పర్వము, విష్ణు పర్వము, భవిష్య పర్వము.',
        hi: 'तीन पर्व: हरिवंश पर्व, विष्णु पर्व एवं भविष्य पर्व।',
        sa: 'त्रयः विभागाः: हरिवंशपर्व, विष्णुपर्व, भविष्यपर्व च।',
        ta: 'மூன்று பிரிவுகள்: ஹரிவம்ச பர்வம், விஷ்ணு பர்வம், பவிஷ்ய பர்வம்.',
        kn: 'ಮೂರು ವಿಭಾಗಗಳು: ಹರಿವಂಶ ಪರ್ವ, ವಿಷ್ಣು ಪರ್ವ ಮತ್ತು ಭವಿಷ್ಯ ಪರ್ವ.',
      },
    ],
    primaryStatus: false,
    criticalNote: {
      en: 'Categorized strictly as a supplementary appendix (Khila) rather than one of the core 18 battlefield and philosophical Parvas.',
      te: 'ఇది మూల 18 పర్వాలలో భాగం కాకుండా అనుబంధ (ఖిల) గ్రంథంగా స్పష్టంగా గుర్తించబడుతుంది.',
      hi: 'इसे १८ मूल पर्वों से पृथक् परिशिष्ट (खिल) के रूप में वर्गीकृत किया गया है।',
      sa: 'अष्टादशपर्वभ्यो बहिर्भूतः परिशिष्टग्रन्थः इति स्पष्टं ज्ञेयम्।',
      ta: 'இது மூல 18 பர்வங்களில் ஒன்றாக அமையாமல் தனி இணைப்பாகக் கருதப்படுகிறது.',
      kn: 'ಮೂಲ ೧೮ ಪರ್ವಗಳಿಂದ ಪ್ರತ್ಯೇಕವಾದ ಅನುಬಂಧ ಕೃತಿಯಾಗಿ ಗುರುತಿಸಲ್ಪಟ್ಟಿದೆ.',
    },
  },
]
