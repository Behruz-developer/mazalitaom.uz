const langData = {
    "uz": {
      "home": "Bosh sahifa",
      "about": "Biz haqimizda",
      "product": "Mahsulotlarimiz",
      "contact": "Bog'lanish",
      "product1": "Chuchvara",
      "product2": "Narxi: kg 100.000 so'm",
      "product3": "Qushtili",
      "product4": "Narxi: kg 100.000 so'm",
      "product5": "Yupqa",
      "product6": "Narxi: donasi 10.000 so'm",
      "time-job": "Ish vaqti",
      "job-time": "Xar kuni  9:00 dan 18:00 gacha",
      "location": "Toshkent, Shayhontoxur tumani",
      "netvork": "Ijtimoiy tarmoq sahiafalarimiz",
      "content-text": "Mazali Yupqalar va Chuchvaralar",
      "about1": "Men Azimova Mahmuda 10-yildan beri zakazga Qo'vurma Chuchvara , Bo'g'irsoq , Yupqa , Qushtili, Xasip , Charvi ,Varaqi , Norin qilaman. Pensiyaga chiqqanimdan keyin uyda o'tirib qolmaslik uchun shu ishni boshladim. Buyurtma qilgan insonlar har doim xursand bo'lib ketishadi ularga men tayyorlagan mahsulotlar juda ham yoqadi. Shuning uchun men ishlarni kelinimga ham o'rgatdim. Va bu ishlani hozida kelinim bilan birgalikda qilamiz.",
      "": "",
      "": "",
      "": "",
  
      
    },
    "ru": {
      "home": "Главная",
      "about": "О нас",
      "product": "Наши продукты",
      "contact": "Контакт",
      "product1": "Чучвара",
      "product2": "Цена: 85.000 сум за кг.",
      "product3": "Куштили",
      "product4": "Цена: 100.000 сум за кг",
      "product5": "Йупка",
      "product6": "Цена: 10 000 сум за штуку.",
      "time-job": "Рабочее время",
      "job-time": "каждый день с 9:00 до 18:00",
      "location": "Ташкент, Шайхонтохурский район",
      "netvork": "Наши страницы в социальных сетях",
      "content-text": "Вкусные Юпки и Чучвари",
      "about1": "У Азимовой Махмуд уже 10 лет готовлю жареные пельмени, Богурсок, Юпку, Куштили, Хасип, Чарви, Вараки, Норин. Я начал эту работу, чтобы не сидеть дома после выхода на пенсию. Люди, которые заказывают, всегда довольны, им очень нравится продукция, которую я делаю. Поэтому я также учила свою невестку. И эту работу мы делаем вместе с моей невесткой.",
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