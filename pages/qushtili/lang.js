const langData = {
    "uz": {
      "home": "Bosh sahifa",
      "about": "Biz haqimizda",
      "product": "Mahsulotlarimiz",
      "contact": "Bog'lanish",
      "product1": "Qushtili",
      "product2": "Tuxum sarig’ini oqidan ajratib olamiz Idish olinadi va unga 2 st un solinadi. Unning orta qismini kichik chuqurcha qilib tuxum sarig’ini solinadi. Ushbu qorishmaga shakar, uksusda o’ldirilgan soda va o’simlik yog’ini qo’shamiz. So’ngra kefir qo’shiladi. Barcha mahsulotlarni bir ko’rinishga kelguncha aralashtiriladi. Xamir quyuq holga kelishi uchun ozgina un qo’shiladi. So’ngra, xamir qo’lga yopishmaydigan bo’lguncha aralashtiriladi. Polietilen salafanga solinadi va 15-20 daqiqa davomida tindiriladi. So’ngra xamirni olamiz va 3 mm qalinlikda yoyamiz. 2-3 sm enlikda to’g’ri to’rtburchak shaklida kesib chiqiladi. O’rta qismdan pichoqda kesiladi. Bitta kesib tayyorlangan qush tilini qo’lga olinadi. So’ngra qirqilgan kesmaning o’rtasidan qush tilining bir uchini olib o’tamiz. Barcha xamirni yuqorida keltirilgandek holga keltirib chiqiladi. Yog’ni qizdirilgan holiga qush tilini solamiz va ikki tomonini pishirib olamiz. Tayyor bo’lgan qush tilidan ortiqcha yog’ chiqib ketishi uchun salfetkaga qo’yib chiqiladi, qush tilini ustiga shakar kukunini sepgan holda tortiladi. Tayyor mahsulot shunday ko’rinishda bo’ladi.",
      "product3": "Narxi: kg 100.000 so'm",
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
      "product1": "Куштили",
      "product2": "Отделяем желток от белка, берем миску и насыпаем в нее 2 столовые ложки муки. Сделайте небольшое отверстие в центре муки и добавьте яичный желток. Добавьте в эту смесь сахар, соду и растительное масло. Затем добавляется кефир. Все продукты перемешиваются до однородного состояния. Добавляется немного муки, чтобы тесто получилось густым. Затем перемешиваем до тех пор, пока тесто не будет прилипать к рукам. Полиэтилен помещают в пищевую пленку и оставляют отдыхать на 15-20 минут. Затем берем тесто и раскатываем его до толщины 3 мм. Его разрезают на прямоугольники шириной 2-3 см. Его разрезают ножом посередине. Берут птичий язык, подготовленный одним разрезом. Затем проводим один конец птичьего языка через середину отрезанного участка. Все тесто делается, как описано выше. Выкладываем птичий язык в горячее масло и обжариваем с двух сторон. Готовый птичий язык выкладывают на салфетку, чтобы стекла лишний жир, и присыпают птичий язык сахарной пудрой. Готовое изделие будет выглядеть так.",
      "product3": "Цена: 100 000 сум за кг.",
      "product4": "Телефон: +998 (99) 300-84-44",
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