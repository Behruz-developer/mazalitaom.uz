const langData = {
    "uz": {
      "home": "Bosh sahifa",
      "about": "Biz haqimizda",
      "product": "Mahsulotlarimiz",
      "contact": "Bog'lanish",
      "product1": "Chuchvara",
      "product2": "qovurma chuchvara - Ichiga qiyma, pishirilgan kartoshka yoki koʻkat solib, chuchvara shaklida tugib, yogʻda qovurilgan pishiriq, taom. Misol: Dasturxondagi turli xil pishiriqlar orasidan ayni qovurilgan chuchvaralarni tanlab yedi.",
      "product3": "Narxi: go'shtli 85.000so'm , kartoshkali 75.000so'm",
      "product4": "Murojaat uchun tel: +998 (99) 300-84-44",
      "time-job": "Ish vaqti",
      "job-time": "Xar kuni  9:00 dan 18:00 gacha",
      "location": "Toshkent, Shayhontoxur tumani",
      "netvork": "Ijtimoiy tarmoq sahiafalarimiz",

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
      "product1": "Чучвара",
      "product2": "жареные пельмени - блюдо из фарша, печеного картофеля или зелени, обжаренных в масле, сформированное в виде пельменей. Пример: Он выбрал жареные пельмени среди разнообразной выпечки на столе и съел их.",
      "product3": "Цена: 85 000 сум с мясом, 75 000 сум с картофелем.",
      "product4": "Телефон: +998 (99) 300-84-44",
      "time-job": "Рабочее время",
      "job-time": "каждый день с 9:00 до 18:00",
      "location": "Ташкент, Шайхонтохурский район",
      "netvork": "Наши страницы в социальных сетях",
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