const questions = [
  {
    num: 1,
    question_en: "Which day is celebrated as Independence Day in India?",
    question_hi: "भारत में स्वतंत्रता दिवस कब मनाया जाता है?",
    options_en: ["15th August", "26th January", "2nd October", "5th September"],
    options_hi: ["15 अगस्त", "26 जनवरी", "2 अक्टूबर", "5 सितंबर"],
    answer_en: "15th August",
    answer_hi: "15 अगस्त",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which animal is known as the 'Ship of the Desert'?",
    question_hi: "रेगिस्तान का जहाज किसे कहा जाता है?",
    options_en: ["Horse", "Camel", "Elephant", "Donkey"],
    options_hi: ["घोड़ा", "ऊंट", "हाथी", "गधा"],
    answer_en: "Camel",
    answer_hi: "ऊंट",
    attempted: false,
    selected: ""
  },
      {
        num: 3,
        question_en: "What is the national animal of India?",
        question_hi: "भारत का राष्ट्रीय पशु कौन सा है?",
        options_en: ["Lion", "Elephant", "Tiger", "Leopard"],
        options_hi: ["शेर", "हाथी", "बाघ", "तेंदुआ"],
        answer_en: "Tiger",
        answer_hi: "बाघ",
        attempted: false,
        selected: ""
      },
      {
        num: 4,
        question_en: "Who wrote the Indian National Anthem?",
        question_hi: "भारतीय राष्ट्रगान किसने लिखा था?",
        options_en: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Subhash Chandra Bose"],
        options_hi: ["बंकिम चंद्र चट्टोपाध्याय", "रवींद्रनाथ ठाकुर", "सरोजिनी नायडू", "सुभाष चंद्र बोस"],
        answer_en: "Rabindranath Tagore",
        answer_hi: "रवींद्रनाथ ठाकुर",
        attempted: false,
        selected: ""
      },
      {
        num: 5,
        question_en: "Which planet is known as the Red Planet?",
        question_hi: "कौन सा ग्रह 'लाल ग्रह' के रूप में जाना जाता है?",
        options_en: ["Earth", "Mars", "Jupiter", "Venus"],
        options_hi: ["पृथ्वी", "मंगल", "बृहस्पति", "शुक्र"],
        answer_en: "Mars",
        answer_hi: "मंगल",
        attempted: false,
        selected: ""
      },
      {
        num: 6,
        question_en: "What is the full form of ATM?",
        question_hi: "ATM का पूरा नाम क्या है?",
        options_en: ["Automatic Teller Machine", "Any Time Money", "Auto Transaction Machine", "All Time Machine"],
        options_hi: ["ऑटोमैटिक टेलर मशीन", "एनी टाइम मनी", "ऑटो ट्रांजेक्शन मशीन", "ऑल टाइम मशीन"],
        answer_en: "Automatic Teller Machine",
        answer_hi: "ऑटोमैटिक टेलर मशीन",
        attempted: false,
        selected: ""
      },
      {
        num: 7,
        question_en: "Who is known as the Father of the Nation in India?",
        question_hi: "भारत में राष्ट्रपिता किसे कहा जाता है?",
        options_en: ["Jawaharlal Nehru", "Subhash Chandra Bose", "Mahatma Gandhi", "B. R. Ambedkar"],
        options_hi: ["जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "महात्मा गांधी", "भीमराव अंबेडकर"],
        answer_en: "Mahatma Gandhi",
        answer_hi: "महात्मा गांधी",
        attempted: false,
        selected: ""
      },
      {
        num: 8,
        question_en: "Which is the largest ocean in the world?",
        question_hi: "विश्व का सबसे बड़ा महासागर कौन सा है?",
        options_en: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        options_hi: ["अटलांटिक महासागर", "हिंद महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
        answer_en: "Pacific Ocean",
        answer_hi: "प्रशांत महासागर",
        attempted: false,
        selected: ""
      },
      {
        num: 9,
        question_en: "Which gas do plants use for photosynthesis?",
        question_hi: "पौधे प्रकाश संश्लेषण के लिए किस गैस का उपयोग करते हैं?",
        options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        answer_en: "Carbon Dioxide",
        answer_hi: "कार्बन डाइऑक्साइड",
        attempted: false,
        selected: ""
      },
      {
        num: 10,
        question_en: "Who invented the light bulb?",
        question_hi: "बल्ब का आविष्कार किसने किया था?",
        options_en: ["Albert Einstein", "Isaac Newton", "Thomas Edison", "Nikola Tesla"],
        options_hi: ["अल्बर्ट आइंस्टीन", "आइजैक न्यूटन", "थॉमस एडिसन", "निकोला टेस्ला"],
        answer_en: "Thomas Edison",
        answer_hi: "थॉमस एडिसन",
        attempted: false,
        selected: ""
      },
      {
        num: 11,
        question_en: "Which is the smallest state in India by area?",
        question_hi: "भारत का सबसे छोटा राज्य क्षेत्रफल के अनुसार कौन सा है?",
        options_en: ["Goa", "Sikkim", "Tripura", "Manipur"],
        options_hi: ["गोवा", "सिक्किम", "त्रिपुरा", "मणिपुर"],
        answer_en: "Goa",
        answer_hi: "गोवा",
        attempted: false,
        selected: ""
      },
      {
        num: 12,
        question_en: "Which festival is known as the Festival of Lights?",
        question_hi: "कौन सा त्योहार 'रोशनी का त्योहार' कहलाता है?",
        options_en: ["Holi", "Diwali", "Eid", "Christmas"],
        options_hi: ["होली", "दीवाली", "ईद", "क्रिसमस"],
        answer_en: "Diwali",
        answer_hi: "दीवाली",
        attempted: false,
        selected: ""
      },
      {
        num: 13,
        question_en: "Which instrument is used to measure temperature?",
        question_hi: "तापमान मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        options_en: ["Thermometer", "Barometer", "Hygrometer", "Odometer"],
        options_hi: ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "ओडोमीटर"],
        answer_en: "Thermometer",
        answer_hi: "थर्मामीटर",
        attempted: false,
        selected: ""
      },
      {
        num: 14,
        question_en: "Which bird is the national bird of India?",
        question_hi: "भारत का राष्ट्रीय पक्षी कौन है?",
        options_en: ["Swan", "Eagle", "Peacock", "Parrot"],
        options_hi: ["हंस", "गरुड़", "मोर", "तोता"],
        answer_en: "Peacock",
        answer_hi: "मोर",
        attempted: false,
        selected: ""
      },
      {
        num: 15,
        question_en: "Which is the longest river in India?",
        question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
        options_en: ["Yamuna", "Narmada", "Brahmaputra", "Ganga"],
        options_hi: ["यमुना", "नर्मदा", "ब्रह्मपुत्र", "गंगा"],
        answer_en: "Ganga",
        answer_hi: "गंगा",
        attempted: false,
        selected: ""
      },
      {
        num: 16,
        question_en: "What is the currency of India?",
        question_hi: "भारत की मुद्रा क्या है?",
        options_en: ["Dollar", "Rupee", "Yen", "Pound"],
        options_hi: ["डॉलर", "रुपया", "येन", "पाउंड"],
        answer_en: "Rupee",
        answer_hi: "रुपया",
        attempted: false,
        selected: ""
      },
      {
        num: 17,
        question_en: "Which of the following is used to measure speed?",
        question_hi: "निम्नलिखित में से किसका उपयोग गति मापने के लिए किया जाता है?",
        options_en: ["Odometer", "Thermometer", "Speedometer", "Altimeter"],
        options_hi: ["ओडोमीटर", "थर्मामीटर", "स्पीडोमीटर", "एल्टीमीटर"],
        answer_en: "Speedometer",
        answer_hi: "स्पीडोमीटर",
        attempted: false,
        selected: ""
      },
      {
        num: 18,
        question_en: "Which is the capital of India?",
        question_hi: "भारत की राजधानी कौन सी है?",
        options_en: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        options_hi: ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"],
        answer_en: "Delhi",
        answer_hi: "दिल्ली",
        attempted: false,
        selected: ""
      },
      {
        num: 19,
        question_en: "What is water called in its solid form?",
        question_hi: "जल के ठोस रूप को क्या कहा जाता है?",
        options_en: ["Steam", "Snow", "Ice", "Mist"],
        options_hi: ["भाप", "हिम", "बर्फ", "कोहरा"],
        answer_en: "Ice",
        answer_hi: "बर्फ",
        attempted: false,
        selected: ""
      },
      {
        num: 20,
        question_en: "Who was the first President of India?",
        question_hi: "भारत के पहले राष्ट्रपति कौन थे?",
        options_en: ["Dr. Rajendra Prasad", "Dr. B. R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"],
        options_hi: ["डॉ. राजेंद्र प्रसाद", "डॉ. भीमराव अंबेडकर", "जवाहरलाल नेहरू", "सरदार पटेल"],
        answer_en: "Dr. Rajendra Prasad",
        answer_hi: "डॉ. राजेंद्र प्रसाद",
        attempted: false,
        selected: ""
      },
          {
            num: 21,
            question_en: "Which is the largest state of India by area?",
            question_hi: "क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन सा है?",
            options_en: ["Madhya Pradesh", "Rajasthan", "Maharashtra", "Uttar Pradesh"],
            options_hi: ["मध्य प्रदेश", "राजस्थान", "महाराष्ट्र", "उत्तर प्रदेश"],
            answer_en: "Rajasthan",
            answer_hi: "राजस्थान",
            attempted: false,
            selected: ""
          },
          {
            num: 22,
            question_en: "Who was the first President of India?",
            question_hi: "भारत के पहले राष्ट्रपति कौन थे?",
            options_en: ["Rajendra Prasad", "Jawaharlal Nehru", "S. Radhakrishnan", "APJ Abdul Kalam"],
            options_hi: ["राजेन्द्र प्रसाद", "जवाहरलाल नेहरू", "एस. राधाकृष्णन", "एपीजे अब्दुल कलाम"],
            answer_en: "Rajendra Prasad",
            answer_hi: "राजेन्द्र प्रसाद",
            attempted: false,
            selected: ""
          },
          {
            num: 23,
            question_en: "Which city is known as the Cleanest City of India (as per Swachh Survekshan)?",
            question_hi: "स्वच्छ सर्वेक्षण के अनुसार भारत का सबसे स्वच्छ शहर कौन सा है?",
            options_en: ["Indore", "Bhopal", "Surat", "Chandigarh"],
            options_hi: ["इंदौर", "भोपाल", "सूरत", "चंडीगढ़"],
            answer_en: "Indore",
            answer_hi: "इंदौर",
            attempted: false,
            selected: ""
          },
          {
            num: 24,
            question_en: "In which year did Madhya Pradesh come into existence?",
            question_hi: "मध्य प्रदेश की स्थापना किस वर्ष हुई थी?",
            options_en: ["1947", "1950", "1956", "1960"],
            options_hi: ["1947", "1950", "1956", "1960"],
            answer_en: "1956",
            answer_hi: "1956",
            attempted: false,
            selected: ""
          },
          {
            num: 25,
            question_en: "Who is known as the 'Iron Man of India'?",
            question_hi: "भारत के 'लौह पुरुष' किसे कहा जाता है?",
            options_en: ["Subhash Chandra Bose", "Sardar Vallabhbhai Patel", "Bhagat Singh", "Jawaharlal Nehru"],
            options_hi: ["सुभाष चंद्र बोस", "सरदार वल्लभभाई पटेल", "भगत सिंह", "जवाहरलाल नेहरू"],
            answer_en: "Sardar Vallabhbhai Patel",
            answer_hi: "सरदार वल्लभभाई पटेल",
            attempted: false,
            selected: ""
          },
          {
            num: 26,
            question_en: "Which river flows through Madhya Pradesh?",
            question_hi: "मध्य प्रदेश से होकर बहने वाली नदी कौन सी है?",
            options_en: ["Ganga", "Godavari", "Narmada", "Yamuna"],
            options_hi: ["गंगा", "गोदावरी", "नर्मदा", "यमुना"],
            answer_en: "Narmada",
            answer_hi: "नर्मदा",
            attempted: false,
            selected: ""
          },
          {
            num: 27,
            question_en: "Who was the first Chief Minister of Madhya Pradesh?",
            question_hi: "मध्य प्रदेश के पहले मुख्यमंत्री कौन थे?",
            options_en: ["Digvijay Singh", "Ravishankar Shukla", "Shivraj Singh Chauhan", "Kailash Joshi"],
            options_hi: ["दिग्विजय सिंह", "रविशंकर शुक्ल", "शिवराज सिंह चौहान", "कैलाश जोशी"],
            answer_en: "Ravishankar Shukla",
            answer_hi: "रविशंकर शुक्ल",
            attempted: false,
            selected: ""
          },
          {
            num: 28,
            question_en: "Which of the following is the capital of Madhya Pradesh?",
            question_hi: "निम्नलिखित में से मध्य प्रदेश की राजधानी कौन सी है?",
            options_en: ["Indore", "Jabalpur", "Gwalior", "Bhopal"],
            options_hi: ["इंदौर", "जबलपुर", "ग्वालियर", "भोपाल"],
            answer_en: "Bhopal",
            answer_hi: "भोपाल",
            attempted: false,
            selected: ""
          },
          {
            num: 29,
            question_en: "Which Indian freedom fighter was born in Madhya Pradesh?",
            question_hi: "मध्य प्रदेश में जन्मे भारतीय स्वतंत्रता सेनानी कौन थे?",
            options_en: ["Chandrashekhar Azad", "Bhagat Singh", "Bal Gangadhar Tilak", "Lala Lajpat Rai"],
            options_hi: ["चंद्रशेखर आज़ाद", "भगत सिंह", "बाल गंगाधर तिलक", "लाला लाजपत राय"],
            answer_en: "Chandrashekhar Azad",
            answer_hi: "चंद्रशेखर आज़ाद",
            attempted: false,
            selected: ""
          },
          {
            num: 30,
            question_en: "Which state shares the longest border with Madhya Pradesh?",
            question_hi: "मध्य प्रदेश की सबसे लंबी सीमा किस राज्य से लगती है?",
            options_en: ["Maharashtra", "Uttar Pradesh", "Chhattisgarh", "Rajasthan"],
            options_hi: ["महाराष्ट्र", "उत्तर प्रदेश", "छत्तीसगढ़", "राजस्थान"],
            answer_en: "Uttar Pradesh",
            answer_hi: "उत्तर प्रदेश",
            attempted: false,
            selected: ""
          },
          {
            num: 31,
            question_en: "Who wrote the National Anthem of India?",
            question_hi: "भारत का राष्ट्रगान किसने लिखा?",
            options_en: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Subhash Chandra Bose", "Sarojini Naidu"],
            options_hi: ["बंकिम चंद्र चट्टोपाध्याय", "रवींद्रनाथ टैगोर", "सुभाष चंद्र बोस", "सरोजिनी नायडू"],
            answer_en: "Rabindranath Tagore",
            answer_hi: "रवींद्रनाथ टैगोर",
            attempted: false,
            selected: ""
          },
          {
            num: 32,
            question_en: "Which is the national flower of India?",
            question_hi: "भारत का राष्ट्रीय फूल कौन सा है?",
            options_en: ["Rose", "Lotus", "Sunflower", "Marigold"],
            options_hi: ["गुलाब", "कमल", "सूरजमुखी", "गेंदा"],
            answer_en: "Lotus",
            answer_hi: "कमल",
            attempted: false,
            selected: ""
          },
          {
            num: 33,
            question_en: "Which wildlife sanctuary is located in Madhya Pradesh?",
            question_hi: "मध्य प्रदेश में स्थित वन्यजीव अभयारण्य कौन सा है?",
            options_en: ["Jim Corbett", "Kanha", "Sundarbans", "Kaziranga"],
            options_hi: ["जिम कॉर्बेट", "कन्हा", "सुंदरबन", "काज़ीरंगा"],
            answer_en: "Kanha",
            answer_hi: "कन्हा",
            attempted: false,
            selected: ""
          },
          {
            num: 34,
            question_en: "Which festival is celebrated as the harvest festival in India?",
            question_hi: "भारत में कौन सा त्योहार फसल कटाई का पर्व माना जाता है?",
            options_en: ["Diwali", "Holi", "Pongal", "Raksha Bandhan"],
            options_hi: ["दिवाली", "होली", "पोंगल", "रक्षाबंधन"],
            answer_en: "Pongal",
            answer_hi: "पोंगल",
            attempted: false,
            selected: ""
          },
          {
            num: 35,
            question_en: "Which state is called the 'Heart of India'?",
            question_hi: "किस राज्य को 'भारत का हृदय' कहा जाता है?",
            options_en: ["Uttar Pradesh", "Madhya Pradesh", "Delhi", "Bihar"],
            options_hi: ["उत्तर प्रदेश", "मध्य प्रदेश", "दिल्ली", "बिहार"],
            answer_en: "Madhya Pradesh",
            answer_hi: "मध्य प्रदेश",
            attempted: false,
            selected: ""
          },
          {
            num: 36,
            question_en: "Which Indian state has the maximum number of Lok Sabha seats?",
            question_hi: "किस भारतीय राज्य में लोकसभा की सबसे अधिक सीटें हैं?",
            options_en: ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
            options_hi: ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
            answer_en: "Uttar Pradesh",
            answer_hi: "उत्तर प्रदेश",
            attempted: false,
            selected: ""
          },
          {
            num: 37,
            question_en: "Which dam is built on the Narmada River?",
            question_hi: "नर्मदा नदी पर कौन-सा बांध बना है?",
            options_en: ["Bhakra Nangal", "Sardar Sarovar", "Hirakud", "Tehri"],
            options_hi: ["भाखड़ा नांगल", "सरदार सरोवर", "हीराकुंड", "टिहरी"],
            answer_en: "Sardar Sarovar",
            answer_hi: "सरदार सरोवर",
            attempted: false,
            selected: ""
          },
          {
            num: 38,
            question_en: "Which is the highest civilian award in India?",
            question_hi: "भारत का सर्वोच्च नागरिक सम्मान कौन सा है?",
            options_en: ["Padma Shri", "Padma Bhushan", "Padma Vibhushan", "Bharat Ratna"],
            options_hi: ["पद्मश्री", "पद्म भूषण", "पद्म विभूषण", "भारत रत्न"],
            answer_en: "Bharat Ratna",
            answer_hi: "भारत रत्न",
            attempted: false,
            selected: ""
          },
          {
            num: 39,
            question_en: "Which temple in MP is a UNESCO World Heritage Site?",
            question_hi: "मध्य प्रदेश का कौन सा मंदिर यूनेस्को विश्व धरोहर स्थल है?",
            options_en: ["Khajuraho Temples", "Omkareshwar", "Mahakaleshwar", "Chausath Yogini"],
            options_hi: ["खजुराहो मंदिर", "ओंकारेश्वर", "महाकालेश्वर", "चौंसठ योगिनी"],
            answer_en: "Khajuraho Temples",
            answer_hi: "खजुराहो मंदिर",
            attempted: false,
            selected: ""
          },
          {
            num: 40,
            question_en: "Which Indian state has the longest coastline?",
            question_hi: "किस भारतीय राज्य की समुद्री तटरेखा सबसे लंबी है?",
            options_en: ["Kerala", "Gujarat", "Tamil Nadu", "Andhra Pradesh"],
            options_hi: ["केरल", "गुजरात", "तमिलनाडु", "आंध्र प्रदेश"],
            answer_en: "Gujarat",
          
            attempted: false,
            selected: ""
          },
          {
            num: 41,
            question_en: "What is the value of (2 + 3)²?",
            question_hi: "(2 + 3)² का मान क्या है?",
            options_en: ["10", "25", "15", "30"],
            options_hi: ["10", "25", "15", "30"],
            answer: "25",
            attempted: false,
            selected: ""
          },
          {
            num: 42,
            question_en: "If x = 3, then the value of x² - 2x + 1 is?",
            question_hi: "यदि x = 3 है, तो x² - 2x + 1 का मान क्या होगा?",
            options_en: ["4", "6", "7", "16"],
            options_hi: ["4", "6", "7", "16"],
            answer: "4",
            attempted: false,
            selected: ""
          },
          
          {
            num: 43,
            question_en: "What is the HCF of 18 and 24?",
            question_hi: "18 और 24 का लघुत्तम समापवर्तक (HCF) क्या है?",
            options_en: ["6", "3", "12", "9"],
            options_hi: ["6", "3", "12", "9"],
            answer: "6",
            attempted: false,
            selected: ""
          },
          {
            num: 44,
            question_en: "A train runs 120 km in 2 hours. What is its speed?",
            question_hi: "एक ट्रेन 2 घंटे में 120 किमी तय करती है। उसकी गति क्या है?",
            options_en: ["60 km/h", "50 km/h", "70 km/h", "80 km/h"],
            options_hi: ["60 किमी/घंटा", "50 किमी/घंटा", "70 किमी/घंटा", "80 किमी/घंटा"],
            answer: "60 km/h",
            attempted: false,
            selected: ""
          },
          {
            num: 45,
            question_en: "What is the square root of 81?",
            question_hi: "81 का वर्गमूल (square root) क्या है?",
            options_en: ["7", "8", "9", "10"],
            options_hi: ["7", "8", "9", "10"],
            answer: "9",
            attempted: false,
            selected: ""
          },
          {
            num: 46,
            question_en: "What is the next prime number after 7?",
            question_hi: "7 के बाद अगली अभाज्य संख्या (prime number) क्या है?",
            options_en: ["8", "9", "10", "11"],
            options_hi: ["8", "9", "10", "11"],
            answer: "11",
            attempted: false,
            selected: ""
          },
          {
            num: 47,
            question_en: "What is 25% of 200?",
            question_hi: "200 का 25% कितना है?",
            options_en: ["25", "50", "75", "100"],
            options_hi: ["25", "50", "75", "100"],
            answer: "50",
            attempted: false,
            selected: ""
          },
          {
            num: 48,
            question_en: "If 4 pencils cost ₹20, what is the cost of 1 pencil?",
            question_hi: "अगर 4 पेंसिल की कीमत ₹20 है, तो 1 पेंसिल की कीमत क्या है?",
            options_en: ["₹4", "₹5", "₹6", "₹8"],
            options_hi: ["₹4", "₹5", "₹6", "₹8"],
            answer: "₹5",
            attempted: false,
            selected: ""
          },
          {
            num: 49,
            question_en: "The area of a square is 64 sq units. What is its side?",
            question_hi: "एक वर्ग का क्षेत्रफल 64 वर्ग इकाई है। उसकी भुजा क्या है?",
            options_en: ["6", "8", "10", "9"],
            options_hi: ["6", "8", "10", "9"],
            answer: "8",
            attempted: false,
            selected: ""
          },
          {
            num: 50,
            question_en: "What is the average of 5, 10, and 15?",
            question_hi: "5, 10 और 15 का औसत क्या है?",
            options_en: ["10", "9", "8", "11"],
            options_hi: ["10", "9", "8", "11"],
            answer: "10",
            attempted: false,
            selected: ""
          },
          {
            num: 51,
            question_en: "If 3x = 15, what is x?",
            question_hi: "यदि 3x = 15, तो x का मान क्या है?",
            options_en: ["3", "4", "5", "6"],
            options_hi: ["3", "4", "5", "6"],
            answer: "5",
            attempted: false,
            selected: ""
          },
          {
            num: 52,
            question_en: "What is the value of 5³?",
            question_hi: "5³ का मान क्या है?",
            options_en: ["25", "125", "75", "100"],
            options_hi: ["25", "125", "75", "100"],
            answer: "125",
            attempted: false,
            selected: ""
          },
          {
            num: 53,
            question_en: "If a = 6 and b = 2, what is a² + b²?",
            question_hi: "यदि a = 6 और b = 2, तो a² + b² का मान क्या है?",
            options_en: ["36", "40", "28", "20"],
            options_hi: ["36", "40", "28", "20"],
            answer: "40",
            attempted: false,
            selected: ""
          },
          {
            num: 54,
            question_en: "What is 10% of 450?",
            question_hi: "450 का 10% कितना है?",
            options_en: ["45", "40", "35", "50"],
            options_hi: ["45", "40", "35", "50"],
            answer: "45",
            attempted: false,
            selected: ""
          },
          {
            num: 55,
            question_en: "Simplify: 8 × (3 + 2)",
            question_hi: "सरलीकृत करें: 8 × (3 + 2)",
            options_en: ["40", "48", "30", "56"],
            options_hi: ["40", "48", "30", "56"],
            answer: "40",
            attempted: false,
            selected: ""
          },
          {
            num: 56,
            question_en: "What is 0.75 as a fraction?",
            question_hi: "0.75 को भिन्न रूप में कैसे लिखा जाएगा?",
            options_en: ["1/2", "3/4", "2/5", "5/8"],
            options_hi: ["1/2", "3/4", "2/5", "5/8"],
            answer: "3/4",
            attempted: false,
            selected: ""
          },
          {
            num: 57,
            question_en: "What is the cube root of 27?",
            question_hi: "27 का घनमूल (cube root) क्या है?",
            options_en: ["2", "3", "4", "5"],
            options_hi: ["2", "3", "4", "5"],
            answer: "3",
            attempted: false,
            selected: ""
          },
          {
            num: 58,
            question_en: "If a man earns ₹500 per day, what will be his income in 7 days?",
            question_hi: "यदि एक आदमी प्रतिदिन ₹500 कमाता है, तो 7 दिनों में उसकी आय कितनी होगी?",
            options_en: ["₹3000", "₹3500", "₹4000", "₹4500"],
            options_hi: ["₹3000", "₹3500", "₹4000", "₹4500"],
            answer: "₹3500",
            attempted: false,
            selected: ""
          },
          {
            num: 59,
            question_en: "What is the perimeter of a square with side 6 cm?",
            question_hi: "6 सेमी भुजा वाले वर्ग की परिमाप क्या है?",
            options_en: ["24 cm", "12 cm", "36 cm", "18 cm"],
            options_hi: ["24 सेमी", "12 सेमी", "36 सेमी", "18 सेमी"],
            answer: "24 cm",
            attempted: false,
            selected: ""
          },
          {
            num: 60,
            question_en: "Find the missing number: 2, 4, 8, 16, ___?",
            question_hi: "खोई हुई संख्या ज्ञात करें: 2, 4, 8, 16, ___?",
            options_en: ["18", "20", "24", "32"],
            options_hi: ["18", "20", "24", "32"],
            answer: "32",
            attempted: false,
            selected: ""
          },
          {
            num: 61,
            question_en: "What does CPU stand for?",
            question_hi: "CPU का पूरा नाम क्या है?",
            options_en: ["Central Processing Unit", "Central Power Unit", "Control Processing Unit", "Computer Program Unit"],
            options_hi: ["सेंट्रल प्रोसेसिंग यूनिट", "सेंट्रल पावर यूनिट", "कंट्रोल प्रोसेसिंग यूनिट", "कंप्यूटर प्रोग्राम यूनिट"],
            answer: "Central Processing Unit",
            attempted: false,
            selected: ""
          },
          {
            num: 62,
            question_en: "Which device is used to input data into a computer?",
            question_hi: "कंप्यूटर में डेटा दर्ज करने के लिए किस उपकरण का उपयोग होता है?",
            options_en: ["Monitor", "Printer", "Keyboard", "Speaker"],
            options_hi: ["मॉनिटर", "प्रिंटर", "कीबोर्ड", "स्पीकर"],
            answer: "Keyboard",
            attempted: false,
            selected: ""
          },
          {
            num: 63,
            question_en: "What is the brain of a computer?",
            question_hi: "कंप्यूटर का मस्तिष्क क्या होता है?",
            options_en: ["RAM", "Monitor", "CPU", "Mouse"],
            options_hi: ["रैम", "मॉनिटर", "सीपीयू", "माउस"],
            answer: "CPU",
            attempted: false,
            selected: ""
          },
          {
            num: 64,
            question_en: "Which of the following is an output device?",
            question_hi: "निम्न में से कौन-सा आउटपुट डिवाइस है?",
            options_en: ["Mouse", "Keyboard", "Monitor", "Scanner"],
            options_hi: ["माउस", "कीबोर्ड", "मॉनिटर", "स्कैनर"],
            answer: "Monitor",
            attempted: false,
            selected: ""
          },
          {
            num: 65,
            question_en: "Which key is used to delete characters to the left of the cursor?",
            question_hi: "कर्सर के बाईं ओर के अक्षरों को मिटाने के लिए कौन-सी कुंजी उपयोग होती है?",
            options_en: ["Enter", "Shift", "Backspace", "Delete"],
            options_hi: ["एंटर", "शिफ्ट", "बैकस्पेस", "डिलीट"],
            answer: "Backspace",
            attempted: false,
            selected: ""
          },
          {
            num: 66,
            question_en: "What type of storage is a hard disk?",
            question_hi: "हार्ड डिस्क किस प्रकार की स्टोरेज है?",
            options_en: ["Primary", "Temporary", "Secondary", "Virtual"],
            options_hi: ["प्राथमिक", "अस्थायी", "द्वितीयक", "आभासी"],
            answer: "Secondary",
            attempted: false,
            selected: ""
          },
          {
            num: 67,
            question_en: "What is the full form of WWW?",
            question_hi: "WWW का पूरा नाम क्या है?",
            options_en: ["World Web Wide", "Web World Wide", "World Wide Web", "Wide Web World"],
            options_hi: ["वर्ल्ड वेब वाइड", "वेब वर्ल्ड वाइड", "वर्ल्ड वाइड वेब", "वाइड वेब वर्ल्ड"],
            answer: "World Wide Web",
            attempted: false,
            selected: ""
          },
          {
            num: 68,
            question_en: "Which of the following is not an input device?",
            question_hi: "निम्न में से कौन इनपुट डिवाइस नहीं है?",
            options_en: ["Mouse", "Keyboard", "Monitor", "Scanner"],
            options_hi: ["माउस", "कीबोर्ड", "मॉनिटर", "स्कैनर"],
            answer: "Monitor",
            attempted: false,
            selected: ""
          },
          {
            num: 69,
            question_en: "Which key is used to start a new line in a text editor?",
            question_hi: "टेक्स्ट एडिटर में नई पंक्ति शुरू करने के लिए कौन-सी कुंजी उपयोग होती है?",
            options_en: ["Backspace", "Shift", "Enter", "Esc"],
            options_hi: ["बैकस्पेस", "शिफ्ट", "एंटर", "एस्केप"],
            answer: "Enter",
            attempted: false,
            selected: ""
          },
          {
            num: 70,
            question_en: "Which part of the computer temporarily stores data?",
            question_hi: "कंप्यूटर का कौन-सा भाग अस्थायी रूप से डेटा संग्रहित करता है?",
            options_en: ["RAM", "Hard Disk", "ROM", "CPU"],
            options_hi: ["रैम", "हार्ड डिस्क", "रोम", "सीपीयू"],
            answer: "RAM",
            attempted: false,
            selected: ""
          },
          {
            num: 71,
            question_en: "Which device is used to print documents?",
            question_hi: "दस्तावेजों को छापने के लिए कौन-सा उपकरण उपयोग होता है?",
            options_en: ["Scanner", "Printer", "Monitor", "Keyboard"],
            options_hi: ["स्कैनर", "प्रिंटर", "मॉनिटर", "कीबोर्ड"],
            answer: "Printer",
            attempted: false,
            selected: ""
          },
          {
            num: 72,
            question_en: "Which software helps to create documents?",
            question_hi: "दस्तावेज़ बनाने में कौन-सा सॉफ्टवेयर सहायक होता है?",
            options_en: ["MS Paint", "MS Word", "MS Excel", "MS PowerPoint"],
            options_hi: ["एमएस पेंट", "एमएस वर्ड", "एमएस एक्सेल", "एमएस पावरपॉइंट"],
            answer: "MS Word",
            attempted: false,
            selected: ""
          },
          {
            num: 73,
            question_en: "Which of the following is an operating system?",
            question_hi: "निम्नलिखित में से कौन-सा ऑपरेटिंग सिस्टम है?",
            options_en: ["MS Word", "Google", "Windows", "Chrome"],
            options_hi: ["एमएस वर्ड", "गूगल", "विंडोज़", "क्रोम"],
            answer: "Windows",
            attempted: false,
            selected: ""
          },
          {
            num: 74,
            question_en: "Which is a portable storage device?",
            question_hi: "निम्न में से कौन-सा पोर्टेबल स्टोरेज डिवाइस है?",
            options_en: ["Hard Disk", "CD-ROM", "Pendrive", "Floppy"],
            options_hi: ["हार्ड डिस्क", "सीडी-रोम", "पेनड्राइव", "फ्लॉपी"],
            answer: "Pendrive",
            attempted: false,
            selected: ""
          },
          {
            num: 75,
            question_en: "Which of the following is a web browser?",
            question_hi: "निम्न में से कौन-सा वेब ब्राउज़र है?",
            options_en: ["Google", "Yahoo", "Chrome", "Windows"],
            options_hi: ["गूगल", "याहू", "क्रोम", "विंडोज़"],
            answer: "Chrome",
            attempted: false,
            selected: ""
          },
          {
            num: 76,
            question_en: "What does 'URL' stand for?",
            question_hi: "'URL' का पूरा नाम क्या है?",
            options_en: ["Uniform Resource Locator", "Universal Reference Link", "Universal Resource Link", "Uniform Reference Locator"],
            options_hi: ["यूनिफ़ॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रेफरेंस लिंक", "यूनिवर्सल रिसोर्स लिंक", "यूनिफ़ॉर्म रेफरेंस लोकेटर"],
            answer: "Uniform Resource Locator",
            attempted: false,
            selected: ""
          },
          {
            num: 77,
            question_en: "Which shortcut key is used to copy?",
            question_hi: "कॉपी करने के लिए किस शॉर्टकट कुंजी का उपयोग होता है?",
            options_en: ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + Z"],
            options_hi: ["कंट्रोल + V", "कंट्रोल + C", "कंट्रोल + X", "कंट्रोल + Z"],
            answer: "Ctrl + C",
            attempted: false,
            selected: ""
          },
          {
            num: 78,
            question_en: "Which function key is used to refresh a page?",
            question_hi: "किस फंक्शन कुंजी का उपयोग पृष्ठ को रिफ्रेश करने के लिए होता है?",
            options_en: ["F2", "F5", "F7", "F12"],
            options_hi: ["F2", "F5", "F7", "F12"],
            answer: "F5",
            attempted: false,
            selected: ""
          },
          {
            num: 79,
            question_en: "Which key is used to cancel a command?",
            question_hi: "किस कुंजी का उपयोग कमांड रद्द करने के लिए होता है?",
            options_en: ["Shift", "Enter", "Esc", "Ctrl"],
            options_hi: ["शिफ्ट", "एंटर", "एस्केप", "कंट्रोल"],
            answer: "Esc",
            attempted: false,
            selected: ""
          },
          {
            num: 80,
            question_en: "What is the full form of HTML?",
            question_hi: "HTML का पूरा नाम क्या है?",
            options_en: ["HighText Marking Language", "HyperText Markup Language", "HyperText Marketing Language", "High Transfer Markup Language"],
            options_hi: ["हाईटेक्स्ट मार्किंग लैंग्वेज", "हाइपरटेक्स्ट मार्कअप लैंग्वेज", "हाइपरटेक्स्ट मार्केटिंग लैंग्वेज", "हाई ट्रांसफर मार्कअप लैंग्वेज"],
            answer: "HyperText Markup Language",
            attempted: false,
            selected: ""
          },
          {
            num: 81,
            question_en: "Which number should come next in the series: 2, 4, 8, 16, ?",
            question_hi: "श्रृंखला में अगली संख्या क्या होगी: 2, 4, 8, 16, ?",
            options_en: ["18", "24", "32", "20"],
            options_hi: ["18", "24", "32", "20"],
            answer: "32",
            attempted: false,
            selected: ""
          },
          {
            num: 82,
            question_en: "If A = 1, B = 2, ..., Z = 26, what is the value of 'CAT'?",
            question_hi: "यदि A = 1, B = 2, ..., Z = 26 हो, तो 'CAT' का मान क्या होगा?",
            options_en: ["24", "27", "48", "41"],
            options_hi: ["24", "27", "48", "41"],
            answer: "48",
            attempted: false,
            selected: ""
          },
          {
            num: 83,
            question_en: "Find the odd one out: Apple, Banana, Carrot, Mango",
            question_hi: "असंगत शब्द चुनें: Apple, Banana, Carrot, Mango",
            options_en: ["Apple", "Banana", "Carrot", "Mango"],
            options_hi: ["सेब", "केला", "गाजर", "आम"],
            answer: "Carrot",
            attempted: false,
            selected: ""
          },
          {
            num: 84,
            question_en: "Which is the missing number? 3, 6, 11, 18, ?",
            question_hi: "अनुपस्थित संख्या ज्ञात करें: 3, 6, 11, 18, ?",
            options_en: ["25", "26", "27", "28"],
            options_hi: ["25", "26", "27", "28"],
            answer: "27",
            attempted: false,
            selected: ""
          },
          {
            num: 85,
            question_en: "Which word does not belong to the group: Rose, Lily, Lotus, Apple?",
            question_hi: "कौन-सा शब्द समूह से संबंधित नहीं है: गुलाब, कुमुदिनी, कमल, सेब?",
            options_en: ["Rose", "Lily", "Lotus", "Apple"],
            options_hi: ["गुलाब", "कुमुदिनी", "कमल", "सेब"],
            answer: "Apple",
            attempted: false,
            selected: ""
          },
          {
            num: 86,
            question_en: "If 2 + 3 = 13, 3 + 4 = 25, then 4 + 5 = ?",
            question_hi: "यदि 2 + 3 = 13, 3 + 4 = 25, तो 4 + 5 = ?",
            options_en: ["37", "35", "39", "29"],
            options_hi: ["37", "35", "39", "29"],
            answer: "41",
            attempted: false,
            selected: ""
          },
          {
            num: 87,
            question_en: "Pointing to a man, Rina said, 'He is the son of my mother’s only son'. Who is the man to Rina?",
            question_hi: "एक व्यक्ति की ओर इशारा करते हुए रीना ने कहा, 'वह मेरी माँ के इकलौते बेटे का बेटा है'। वह व्यक्ति रीना से क्या संबंध रखता है?",
            options_en: ["Brother", "Nephew", "Son", "Uncle"],
            options_hi: ["भाई", "भतीजा", "बेटा", "चाचा"],
            answer: "Son",
            attempted: false,
            selected: ""
          },
          {
            num: 88,
            question_en: "If all vowels are removed from 'EDUCATION', what will be left?",
            question_hi: "'EDUCATION' से सभी स्वर हटा दिए जाएं तो क्या बचेगा?",
            options_en: ["DCTN", "DCT", "DN", "EDCTN"],
            options_hi: ["DCTN", "DCT", "DN", "EDCTN"],
            answer: "DCTN",
            attempted: false,
            selected: ""
          },
          {
            num: 89,
            question_en: "If TODAY is coded as 'VQFCB', what is the code for NIGHT?",
            question_hi: "यदि TODAY को 'VQFCB' के रूप में कोडित किया गया है, तो NIGHT का कोड क्या होगा?",
            options_en: ["PKIJV", "PKIJU", "PKIJW", "OKIJV"],
            options_hi: ["PKIJV", "PKIJU", "PKIJW", "OKIJV"],
            answer: "PKIJV",
            attempted: false,
            selected: ""
          },
          {
            num: 90,
            question_en: "Find the next number: 121, 144, 169, ?",
            question_hi: "अगली संख्या ज्ञात करें: 121, 144, 169, ?",
            options_en: ["196", "189", "200", "225"],
            options_hi: ["196", "189", "200", "225"],
            answer: "196",
            attempted: false,
            selected: ""
          },
          {
            num: 91,
            question_en: "How many sides does a hexagon have?",
            question_hi: "हेक्सागन में कितनी भुजाएँ होती हैं?",
            options_en: ["5", "6", "7", "8"],
            options_hi: ["5", "6", "7", "8"],
            answer: "6",
            attempted: false,
            selected: ""
          },
          {
            num: 92,
            question_en: "Which of the following is a triangle with all sides equal?",
            question_hi: "निम्नलिखित में से कौन-सा त्रिभुज होता है जिसकी सभी भुजाएँ समान होती हैं?",
            options_en: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
            options_hi: ["स्केलेन", "आइसोसिलेस", "समबाहु", "समकोण"],
            answer: "Equilateral",
            attempted: false,
            selected: ""
          },
          {
            num: 93,
            question_en: "Which direction is opposite to North-East?",
            question_hi: "उत्तर-पूर्व के विपरीत दिशा कौन-सी होती है?",
            options_en: ["South-East", "South-West", "North-West", "East"],
            options_hi: ["दक्षिण-पूर्व", "दक्षिण-पश्चिम", "उत्तर-पश्चिम", "पूर्व"],
            answer: "South-West",
            attempted: false,
            selected: ""
          },
          {
            num: 94,
            question_en: "If DOG is coded as 4157, what is the code for GOD?",
            question_hi: "यदि DOG को 4157 के रूप में कोडित किया गया है, तो GOD का कोड क्या होगा?",
            options_en: ["7415", "7541", "7514", "7154"],
            options_hi: ["7415", "7541", "7514", "7154"],
            answer: "7514",
            attempted: false,
            selected: ""
          },
          {
            num: 95,
            question_en: "Complete the series: B, D, F, H, ?",
            question_hi: "श्रृंखला पूर्ण करें: B, D, F, H, ?",
            options_en: ["I", "J", "K", "L"],
            options_hi: ["आई", "जे", "के", "एल"],
            answer: "J",
            attempted: false,
            selected: ""
          },
          {
            num: 96,
            question_en: "Which is the next term in series: 2, 6, 12, 20, ?",
            question_hi: "श्रृंखला में अगला पद क्या होगा: 2, 6, 12, 20, ?",
            options_en: ["30", "28", "32", "26"],
            options_hi: ["30", "28", "32", "26"],
            answer: "30",
            attempted: false,
            selected: ""
          },
          {
            num: 97,
            question_en: "If ‘+’ means ‘×’, ‘×’ means ‘–’, ‘–’ means ‘÷’ and ‘÷’ means ‘+’, then what is 4 + 2 × 6?",
            question_hi: "यदि ‘+’ का अर्थ ‘×’, ‘×’ का अर्थ ‘–’, ‘–’ का अर्थ ‘÷’ और ‘÷’ का अर्थ ‘+’ है, तो 4 + 2 × 6 का मान क्या होगा?",
            options_en: ["16", "12", "4", "8"],
            options_hi: ["16", "12", "4", "8"],
            answer: "4",
            attempted: false,
            selected: ""
          },
          {
            num: 98,
            question_en: "In a certain code, BEAR is written as 2418. What is the code for BARE?",
            question_hi: "किसी कोड में BEAR को 2418 लिखा गया है। तो BARE के लिए कोड क्या होगा?",
            options_en: ["2481", "2184", "2418", "2148"],
            options_hi: ["2481", "2184", "2418", "2148"],
            answer: "2481",
            attempted: false,
            selected: ""
          },
          {
            num: 99,
            question_en: "Find the odd one out: Circle, Triangle, Rectangle, Sphere",
            question_hi: "असंगत शब्द चुनें: वृत्त, त्रिभुज, आयत, गोला",
            options_en: ["Circle", "Triangle", "Rectangle", "Sphere"],
            options_hi: ["वृत्त", "त्रिभुज", "आयत", "गोला"],
            answer: "Sphere",
            attempted: false,
            selected: ""
          },
          {
            num: 100,
            question_en: "How many letters are there between F and M in the English alphabet?",
            question_hi: "अंग्रेज़ी वर्णमाला में F और M के बीच कितने अक्षर होते हैं?",
            options_en: ["6", "5", "7", "8"],
            options_hi: ["6", "5", "7", "8"],
            answer: "6",
            attempted: false,
            selected: ""
          }
    // Continue adding more questions up to 30
];

// Add more questions as needed...

let currentQuestion = 0;
let language = "en"; // Default English
const circlesPerPage = 70;
let currentCirclePage = 0;
let timeLeft = 300;
let timerInterval;

function loadQuestion(index) {
    const questionText = language === "en" ? questions[index].question_en : questions[index].question_hi;
    const optionsArray = language === "en" ? questions[index].options_en : questions[index].options_hi;

    document.getElementById("question").textContent = `${questions[index].num}. ${questionText}`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    optionsArray.forEach(option => {
        optionsElement.innerHTML += `<li><input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}</li>`;
    });

    updateCircles();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateCircles();
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function updateCircles() {
    const circleContainer = document.getElementById("circleContainer");
    circleContainer.innerHTML = "";
    const start = currentCirclePage * circlesPerPage;
    const end = Math.min(start + circlesPerPage, questions.length);

    for (let i = start; i < end; i++) {
        const q = questions[i];
        let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
        circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
    }
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

function prevCirclePage() {
    if (currentCirclePage > 0) {
        currentCirclePage--;
        updateCircles();
    }
}

function nextCirclePage() {
    if ((currentCirclePage + 1) * circlesPerPage < questions.length) {
        currentCirclePage++;
        updateCircles();
    }
}

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0, notAttempted = 0, score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer) score++;
        } else {
            notAttempted++;
        }
        results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer });
    });

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
    if (viewResult) {
        window.location.href = "/Deshbord/category/test/submit-test.html";
    }
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Submitting the quiz automatically.");
            submitQuiz();
        } else {
            timerElement.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
}

window.onload = function () {
    startTimer();
    loadQuestion(currentQuestion);
};
