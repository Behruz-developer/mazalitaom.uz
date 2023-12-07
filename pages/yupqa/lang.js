const langData = {
    "uz": {
      "home": "Bosh sahifa",
      "about": "Biz haqimizda",
      "product": "Mahsulotlarimiz",
      "contact": "Bog'lanish",
      "product1": "Yupqa",
      "product2": "Yupqa — xamir, goʻsht va piyozdan tayyorlanadigan taom. Goʻshtni goʻsht qiymalagichdan oʻtkazib, mayda toʻgʻralgan piyoz, murch bilan aralashtiriladi va qovurib olib qoʻyiladi. Xamirdan 30 g li zuvalachalar yasalib, yupqa qilib yoyiladi. Qizigan qozonga yarim qoshiq yogʻ surtib, yoyilgan xamirlardan biri ikkala tomonidan yaxshilab singitib pishiriladi. Soʻngra qozonga ikkinchi Yu.ni solib pishiriladi va qozonda qoldirilib, betiga tayyor qiymadan bir tekis solinib, ustiga birinchi pishirilgani yopiladi. Buning betiga ham qiymadan solib yana navbatdagi yoyilgan xamir yopiladi va pishirish uchun agʻdariladi. Qavatlar soni shu tariqa 10—12 tagacha yetkaziladi. Soʻngra har birini alohidaalohida ajratib olib, toʻrt buklab likopchada dasturxonga tortiladi. Ayrim joylarda avval Yu.ning xamiri pishirilib, qiymasi taxlanayotganda solinadi. Yu.ni juda sust olovda pishirish va zarur boʻlganda, qozonga yarim qoshiqdan yogʻ tomizib turish lozim. Yu. tansiq taomlardan boʻlib, chaqaloqni beshikka belashda hamda hayitmarosimlarda tayyorlanadi.",
      "product3": "Narxi: donasi 10.000 so'm",
      "product4": "Murojaat uchun tel: +998 (99) 300-84-44",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
  
      
    },
    "ru": {
      "home": "Главная",
      "about": "О нас",
      "product": "Наши продукты",
      "contact": "Контакт",
      "product1": "Юпка",
      "product2": "Юпка — блюдо из теста, мяса и лука. Мясо пропускают через мясорубку, смешивают с мелко нарезанным луком и перцем и обжаривают. Из теста слепить шарики массой 30 г и тонко раскатать. На горячую кастрюлю нанесите пол-ложки масла и приготовьте одно из тесто, хорошо пропитывая его с обеих сторон. Затем положите в кастрюлю второй Ю. и сварите его, оставьте в кастрюле, равномерно разложите приготовленный фарш по поверхности, накройте приготовленным первым. Следующий пласт теста покрывают фаршем и переворачивают для приготовления. Таким образом, количество этажей будет увеличено до 10-12. Затем каждую отделяют и кладут на тарелку в четыре сгиба. В некоторых местах тесто Ю. Варить Ю. необходимо на очень медленном огне и при необходимости капнуть в кастрюлю пол-ложки масла. Ю. Это одно из традиционных блюд, его готовят у колыбели ребенка и во время праздников Курбан-Байрам.",
      "product3": "Цена: 10 000 сум за штуку.",
      "product4": "Телефон: +998 (99) 300-84-44",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
  
    },
  };
  
  const langElements = document.querySelectorAll('.lang');
  
  function changeLanguage(language) {
    selectedLanguage = language;
    langElements.forEach(el => {
      el.textContent = langData[selectedLanguage][el.getAttribute('key')];
    });
  }
  
  
  
  // Tilni qayta belgilash
  let selectedLanguage = 'uz';
  langElements.forEach(el => {
    el.textContent = langData[selectedLanguage][el.getAttribute('key')];
  });
  
  const langButtons = document.querySelectorAll('.lang-button');
  langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    changeLanguage(btn.dataset.lang);
    langButtons.forEach(btn => {
      btn.classList.remove('active_lang');
    });
    btn.classList.add('active_lang');
  });
  });