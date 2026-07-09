
    // ===== ДАННЫЕ НОВОСТЕЙ =====
    const NEWS_DATA = [];

    // ===== ДАННЫЕ ВРАЧЕЙ =====
    const DOCTOR_DATA = {
      'Ткаченко Екатерина Андреевна': {
        photo: 'images/doctor_tkachenko.jpg',
        role: 'Педиатр',
        experience: '10 лет',
        info: 'Стаж работы 10 лет. Работает в МЦ МОМ с 2024 года. Ранее работала в ООО «МЕДИАСС-К», ОБУЗ «ЦОЗМП», ОБУЗ КГДП 7. Образование — Курский ГМУ, специальность «Педиатрия». Интернатура по педиатрии. Множество курсов повышения квалификации по детским заболеваниям, инфекционной настороженности и фармакотерапии.',
        education: 'Курский государственный медицинский университет, специальность «Педиатрия»',
        work: 'МЦ МОМ (2024 — н.в.), ООО «МЕДИАСС-К» (2023 — 2024), ОБУЗ «ЦОЗМП» (2022 — н.в.), ОБУЗ КГДП 7 (2016 — 2022)'
      },
      'Петровская Надежда Юрьевна': {
        photo: 'images/doctor_petrovskaya.jpeg',
        role: 'Детский врач УЗИ',
        experience: '11 лет, высшая кат.',
        info: 'Стаж работы 11 лет, высшая категория. Работает в МЦ МОМ с 2022 года. Также ведёт приём в Областном перинатальном центре. Образование — Курский ГМУ, интернатура по неонатологии, переподготовка по ультразвуковой диагностике. Множество специализированных курсов по нейросонографии, эхокардиографии и УЗИ-диагностике в педиатрии.',
        education: 'Курский ГМУ, интернатура по неонатологии, переподготовка по УЗИ-диагностике',
        work: 'МЦ МОМ (2022 — н.в.), Областной перинатальный центр (2019 — н.в.), Курская городская больница №6 (2015 — 2019)'
      },
      'Каплина Карина Романовна': {
        photo: 'images/doctor_kaplina.jpeg',
        role: 'Неонатолог, физиотерапевт',
        experience: '10 лет',
        info: 'Стаж работы 10 лет. Заместитель руководителя медицинской организации ООО «К-МЕД» и врач-физиотерапевт. Ранее работала неонатологом в ОБУЗ «Курский городской клинический родильный дом» и ОБУЗ «Курская городская больница № 6». Образование — Курский ГМУ, интернатура по неонатологии. Прошла обучение по реабилитации детей по методу Войта и Бобат-терапии.',
        education: 'Курский ГМУ, интернатура по неонатологии',
        work: 'ООО «К-МЕД» (2022 — н.в.), ОБУЗ «Курская городская больница № 6» (2017 — 2022)'
      },
      'Мартынова Ольга Игоревна': {
        photo: 'images/doctor_martynova.jpg',
        role: 'Детский психиатр, психиатр',
        experience: '3 года',
        info: 'Врач-психиатр с опытом работы 3 года. Образование — Курский ГМУ, ординатура по психиатрии (2024), циклы переподготовки по психотерапии. Множество специализированных курсов: когнитивно-поведенческая психотерапия, детская и подростковая психиатрия, диагностика и лечение ОКР, работа с РАС, ПТСР, суицидология, психофармакотерапия.',
        education: 'Курский ГМУ, ординатура по психиатрии (2024), переподготовка по психотерапии',
        work: 'МЦ МОМ'
      },
      'Блюм Анна Ивановна': {
        photo: 'images/doctor_blyum.jpg',
        role: 'Клинический психолог',
        experience: 'Более 20 лет',
        info: 'Клинический психолог, преподаватель психологии, специалист по детскому, взрослому и семейному консультированию. Опыт работы с 2010 года. Работает в рамках интегративного подхода с использованием современных методов психотерапии. Проводит индивидуальные консультации в рамках краткосрочной и долгосрочной психотерапии, работает с взрослыми и детьми.',
        education: 'Курский государственный медицинский университет. Специальность — клинический психолог.',
        work: 'МЦ МОМ'
      },
      'Казанова Марина Витальевна': {
        photo: 'images/doctor_kazanova.jpg',
        role: 'Врач УЗИ',
        experience: '11 лет, 1-я кат.',
        info: 'Врач ультразвуковой диагностики. Стаж 11 лет, первая квалификационная категория. Образование — Курский ГМУ, интернатура и повышение квалификации по ультразвуковой диагностике.',
        education: 'Курский ГМУ, специальность «Ультразвуковая диагностика»',
        work: 'МЦ МОМ'
      },
      'Коровина Елизавета Юрьевна': {
        photo: 'images/doctor_korovina.jpg',
        role: 'Педиатр',
        experience: '5 лет',
        info: 'Врач-педиатр. Стаж 5 лет. Работает в МЦ МОМ с 2026 года. Также работает педиатром в ОБУЗ КГДП. Образование — Курский ГМУ, специальность «Педиатрия» (2020).',
        education: 'Курский ГМУ, специальность «Педиатрия» (2020)',
        work: 'МЦ МОМ (2026 — н.в.), ОБУЗ КГДП (2020 — н.в.)'
      },
      'Денисова Анна Денисовна': {
        photo: 'images/doctor_denisova.jpg',
        role: 'Педиатр, врач-эндокринолог',
        experience: '3 года',
        info: 'Врач-педиатр, врач-эндокринолог. Стаж 3 года. Образование — Курский ГМУ, специальность «Педиатрия» (2022). Автор публикаций о скарлатине у детей в журнале «Инфекционные болезни в современном мире» и тезисов на международной научной конференции.',
        education: 'Курский ГМУ, специальность «Педиатрия» (2022)',
        work: 'МЦ МОМ'
      },
      'Юшкова Алина Геннадьевна': {
        photo: 'images/doctor_yushkova.jpg',
        role: 'Педиатр',
        experience: '2 года',
        info: 'Врач-педиатр. Стаж 2 года. Образование — Курский ГМУ, специальность «Педиатрия» (2023).',
        education: 'Курский ГМУ, специальность «Педиатрия» (2023)',
        work: 'МЦ МОМ'
      },
      'Араева Екатерина Михайловна': {
        photo: 'images/doctor_araeva.jpg',
        role: 'Специалист по грудному вскармливанию',
        experience: '',
        info: 'Специалист по грудному вскармливанию. Проводит консультации и помощь мамам по вопросам грудного вскармливания.',
        education: '',
        work: 'МЦ МОМ'
      }
    };

    // ===== ФУНКЦИИ МОДАЛЬНОГО ОКНА ВРАЧА =====
    function openDoctorModal(name) {
      const doctor = DOCTOR_DATA[name];
      if (!doctor) return;

      let modal = document.getElementById('doctorModal');
      if (!modal) {
        document.body.insertAdjacentHTML('beforeend', `
          <div id="doctorModal" class="doctor-modal" onclick="if(event.target===this)closeDoctorModal()">
            <div class="doctor-modal-content">
              <span class="doctor-modal-close" onclick="closeDoctorModal()">&times;</span>
              <div class="doctor-modal-body">
                <div class="doctor-modal-photo">
                  <img id="doctorModalImg" src="" alt="">
                </div>
                <div class="doctor-modal-info">
                  <h2 id="doctorModalName"></h2>
                  <div class="doctor-modal-role" id="doctorModalRole"></div>
                  <div class="doctor-modal-section" id="doctorModalInfo"></div>
                  <div class="doctor-modal-section" id="doctorModalEducation"></div>
                  <div class="doctor-modal-section" id="doctorModalWork"></div>
                </div>
              </div>
              <div class="doctor-modal-footer">
                <a href="https://prodoctorov.ru/kursk/lpu/84476-mom/price/?page=1#tab-content" target="_blank" class="btn btn-primary">Записаться</a>
              </div>
            </div>
          </div>
        `);
        modal = document.getElementById('doctorModal');
      }

      document.getElementById('doctorModalImg').src = doctor.photo;
      document.getElementById('doctorModalImg').alt = name;
      document.getElementById('doctorModalName').textContent = name;
      document.getElementById('doctorModalRole').textContent = doctor.role + (doctor.experience ? ' | Стаж ' + doctor.experience : '');
      document.getElementById('doctorModalInfo').innerHTML = '<h4>О специалисте</h4><p>' + doctor.info + '</p>';
      document.getElementById('doctorModalEducation').innerHTML = doctor.education ? '<h4>Образование</h4><p>' + doctor.education + '</p>' : '';
      document.getElementById('doctorModalWork').innerHTML = doctor.work ? '<h4>Опыт работы</h4><p>' + doctor.work + '</p>' : '';
      
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    function closeDoctorModal() {
      const modal = document.getElementById('doctorModal');
      if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    }

    // ===== ФУНКЦИИ МОДАЛЬНОГО ОКНА СОЦСЕТЕЙ =====
    function openSocialModal() {
      let modal = document.getElementById('socialModal');
      if (!modal) {
        document.body.insertAdjacentHTML('beforeend', `
          <div id="socialModal" onclick="if(event.target===this)closeSocialModal()">
            <div class="social-modal-content">
              <span class="social-modal-close" onclick="closeSocialModal()">&times;</span>
              <div class="social-modal-title">Мы тут</div>
              <div class="social-modal-subtitle">Присоединяйтесь к нам в социальных сетях</div>
              <div class="social-modal-buttons">
                <a href="https://vk.com/club212652456" target="_blank" rel="noopener noreferrer" class="social-modal-btn vk">
                  <i class="fab fa-vk"></i>Мы в ВК
                </a>
                <a href="https://vk.com/public222835645" target="_blank" rel="noopener noreferrer" class="social-modal-btn ippomom">
                  <i class="fab fa-vk"></i>IPPOMOM
                </a>
              </div>
            </div>
          </div>
        `);
        modal = document.getElementById('socialModal');
      }
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeSocialModal() {
      const modal = document.getElementById('socialModal');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeDoctorModal();
        closeSocialModal();
        closeNewsModal();
      }
    });

    // ===== ОТКРЫТИЕ МОДАЛЬНОГО ОКНА НОВОСТЕЙ =====
    function openNewsModal(index) {
      const news = NEWS_DATA[index];
      if (!news) return;

      document.getElementById('news-modal-content').innerHTML =
        '<div class="modal-photo" style="background: ' + news.gradient + ';">' +
          '<div class="news-icon">' + news.icon + '</div>' +
        '</div>' +
        '<div class="modal-text">' +
          '<div class="modal-date">' + news.date + '</div>' +
          '<div class="modal-title">' + news.title + '</div>' +
          '<div class="modal-body">' + news.body + '</div>' +
        '</div>';
      document.getElementById('news-modal').style.display = 'flex';
    }

    // ===== ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА =====
    function closeNewsModal() {
      document.getElementById('news-modal').style.display = 'none';
    }

    // ESC для закрытия
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeNewsModal();
    });
  

    // Page navigation system
    function showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        const targetPage = document.getElementById('page-' + pageId);
        if (targetPage) targetPage.classList.add('active');
        document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
        const navLink = document.getElementById('nav-' + pageId);
        if (navLink) navLink.classList.add('active');
        window.scrollTo(0, 0);
    }

    function goToSection(sectionId) {
        showPage(sectionId);
    }

    // Staff carousel scroll
    function scrollStaff(direction) {
        const carousel = document.getElementById('staffCarousel');
        carousel.scrollBy({ left: direction * 310, behavior: 'smooth' });
    }

    // Loader
    window.addEventListener('load', () => {
        setTimeout(() => document.getElementById('loader').classList.add('hidden'), 500);
    });

    // Navbar auto-hide on scroll
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;
    let navHideTimeout;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            navbar.classList.add('hidden-nav');
        } else if (currentScrollY < lastScrollY) {
            navbar.classList.remove('hidden-nav');
        }
        lastScrollY = currentScrollY;
    });
    navbar.addEventListener('mouseenter', () => { navbar.classList.remove('hidden-nav'); });

    // Mobile menu toggle
    function toggleMobileMenu() {
        const menu = document.getElementById('mobileMenu');
        if (menu) menu.classList.toggle('active');
    }

    // Fade in animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.fade-in').forEach(el => { el.classList.add('visible'); observer.observe(el); });

    // Staff carousel drag (mouse + touch)
    const carousel = document.querySelector('.staff-carousel');
    if (carousel) {
        let isDown = false, startX, scrollLeft;
        carousel.addEventListener('mousedown', (e) => { isDown = true; startX = e.pageX - carousel.offsetLeft; scrollLeft = carousel.scrollLeft; });
        carousel.addEventListener('mouseleave', () => isDown = false);
        carousel.addEventListener('mouseup', () => isDown = false);
        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return; e.preventDefault();
            carousel.scrollLeft = scrollLeft - (e.pageX - carousel.offsetLeft - startX) * 2;
        });
        // Touch events for mobile
        carousel.addEventListener('touchstart', (e) => { isDown = true; startX = e.touches[0].pageX - carousel.offsetLeft; scrollLeft = carousel.scrollLeft; }, {passive: true});
        carousel.addEventListener('touchend', () => isDown = false);
        carousel.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            carousel.scrollLeft = scrollLeft - (e.touches[0].pageX - carousel.offsetLeft - startX) * 2;
        }, {passive: true});
    }
    setTimeout(function(){var l=document.getElementById('loader');if(l){l.style.opacity='0';l.style.pointerEvents='none';l.style.visibility='hidden';}},3500);
    function switchPriceTab(tabName){
        document.querySelectorAll('.price-section').forEach(function(s){s.classList.remove('active');});
        document.querySelectorAll('.price-tab').forEach(function(t){t.classList.remove('active');});
        var s=document.getElementById('price-'+tabName);if(s)s.classList.add('active');
        var t=document.getElementById('tab-'+tabName);if(t)t.classList.add('active');
    }


// ============================================================================
//  MOM Medical Center — Enhanced ChatBot
//  Расширенная логика ответов с категориями запросов
// ============================================================================

// ====== Ответы бота по категориям ======

// Accessibility mode toggle
function toggleAccessibility() {
    document.body.classList.toggle('accessibility-mode');
    const btn = document.getElementById('accessibilityBtn');
    if (document.body.classList.contains('accessibility-mode')) {
        btn.classList.add('active');
        btn.title = 'Обычная версия';
        localStorage.setItem('accessibilityMode', 'true');
    } else {
        btn.classList.remove('active');
        btn.title = 'Версия для слабовидящих';
        localStorage.setItem('accessibilityMode', 'false');
    }
}

// Restore accessibility mode on load
(function() {
    if (localStorage.getItem('accessibilityMode') === 'true') {
        document.body.classList.add('accessibility-mode');
        var btn = document.getElementById('accessibilityBtn');
        if (btn) {
            btn.classList.add('active');
            btn.title = 'Обычная версия';
        }
    }
})();

const BOT_RESPONSES = {
  // 1. Педиатр
  pediatr: {
    keywords: ['педиатр', 'педиатра', 'педиатру', 'педиатрический', 'педиатрия',
               'ткаченко', 'коровина', 'денисова', 'юшкова', 'араева',
               'детский врач', 'детский доктор', 'осмотр', 'профилактика', 'прививки',
               'питание', 'прикорм', 'вскармливание', 'грудное'],
    response: `👩‍⚕️ Педиатр

Педиатр ведёт наблюдение за здоровьем ребёнка с первых дней жизни:
• Профилактические осмотры и консультации
• Лечение детских заболеваний
• Вопросы питания и прикорма
• Прививки и иммунизация
• Консультации по развитию

Ведут приём:
• Ткаченко Е.А. — педиатр
• Коровина Е.Ю. — педиатр
• Денисова А.Д. — педиатр, врач-эндокринолог
• Юшкова А.Г. — педиатр

<a href="https://prodoctorov.ru/kursk/lpu/84476-mom/price/?page=1#tab-content" target="_blank" style="display:inline-block;padding:10px 20px;background:linear-gradient(135deg, #4A86C1, #f06292);color:white;border-radius:20px;text-decoration:none;font-weight:600;margin-top:10px;">📅 Записаться к педиатру</a>`
  },

  // 2. Невролог
  nevrolog: {
    keywords: ['невролог', 'невролога', 'неврологу', 'неврологический', 'неврология',
               'нервная система', 'головная боль', 'судороги',
               'эпилепсия', 'дцп', 'задержка развития', 'гипертонус', 'гипотонус'],
    response: `🧠 Невролог

Детский невролог занимается диагностикой и лечением заболеваний нервной системы:
• Задержка моторного и психического развития
• ДЦП и другие двигательные нарушения
• Судороги и эпилепсия
• Головные боли и головокружения
• Гипертонус/гипотонус мышц
• Нарушения сна и поведения

<a href="https://prodoctorov.ru/kursk/lpu/84476-mom/price/?page=1#tab-content" target="_blank" style="display:inline-block;padding:10px 20px;background:linear-gradient(135deg, #4A86C1, #f06292);color:white;border-radius:20px;text-decoration:none;font-weight:600;margin-top:10px;">📅 Записаться к неврологу</a>`
  },

  // 3. Хирург-ортопед
  hirurg: {
    keywords: ['хирург', 'хирурга', 'хирургу', 'хирургический', 'ортопед', 'ортопеда', 'ортопеду',
               'ортопедический', 'сколиоз', 'плоскостопие', 'валгус', 'варус',
               'врд', 'стопы', 'свод стопы', 'ортопедические стельки', 'стельки', 'осанка'],
    response: `🦴 Хирург-ортопед

Детский хирург-ортопед помогает при заболеваниях опорно-двигательного аппарата:
• Сколиоз и нарушения осанки
• Плоскостопие, вальгусная/варусная деформация
• Врождённая дисплазия тазобедренных суставов (ВРД)
• Подбор ортопедических стелек
• Массаж и ЛФК
• УЗИ тазобедренных суставов

<a href="https://prodoctorov.ru/kursk/lpu/84476-mom/price/?page=1#tab-content" target="_blank" style="display:inline-block;padding:10px 20px;background:linear-gradient(135deg, #4A86C1, #f06292);color:white;border-radius:20px;text-decoration:none;font-weight:600;margin-top:10px;">📅 Записаться к ортопеду</a>`
  },

  // 4. Логопед
  logoped: {
    keywords: ['логопед', 'логопеда', 'логопеду', 'логопедия', 'логопедический', 'речь', 'говорит',
               'не говорит', 'задержка речи', 'дизартрия', 'афазия', 'артикуляция', 'произношение',
               'звуки', 'говорение', 'речевое развитие', 'заикание', 'заикается'],
    response: `🗣️ Логопед

Логопед помогает детям с речевыми нарушениями:
• Задержка речевого развития (не говорит в 2–3 года)
• Дизартрия (нечёткое произношение)
• Заикание
• Афазия (нарушение понимания речи)
• Нарушения звукопроизношения
• Логопедический массаж

<a href="https://prodoctorov.ru/kursk/lpu/84476-mom/price/?page=1#tab-content" target="_blank" style="display:inline-block;padding:10px 20px;background:linear-gradient(135deg, #4A86C1, #f06292);color:white;border-radius:20px;text-decoration:none;font-weight:600;margin-top:10px;">📅 Записаться к логопеду</a>`
  },

  // 5. Психолог
  psiholog: {
    keywords: ['психолог', 'психолога', 'психологу', 'психологический', 'психология', 'психологи',
               'блюм', 'мартынова', 'адаптация', 'тревожность', 'страх', 'рас', 'аутизм', 'сдвг',
               'гиперактивность', 'поведение', 'эмоции', 'психологическая помощь', 'психологическая поддержка'],
    response: `🧠 Психолог

Психолог помогает детям и родителям справляться с эмоциональными трудностями:
• Адаптация к детскому саду и школе
• Тревожность, страхи, фобии
• Расстройства аутистического спектра (РАС)
• СДВГ (гиперактивность, дефицит внимания)
• Проблемы поведения и общения
• Психологическая поддержка родителей

Ведёт приём: Блюм А.И. — клинический психолог

<a href="https://prodoctorov.ru/kursk/lpu/84476-mom/price/?page=1#tab-content" target="_blank" style="display:inline-block;padding:10px 20px;background:linear-gradient(135deg, #4A86C1, #f06292);color:white;border-radius:20px;text-decoration:none;font-weight:600;margin-top:10px;">📅 Записаться к психологу</a>`
  },

  // 6. Гинеколог
  ginekolog: {
    keywords: ['гинеколог', 'гинеколога', 'гинекологу', 'гинекологический', 'гинекология',
               'детский гинеколог', 'девочка', 'детская гинекология', 'мальчик', 'уролог', 'взрослый гинеколог'],
    response: `👩‍⚕️ Гинеколог

В нашем центре ведут приём детский и взрослый гинекологи:
• Профилактические осмотры
• Консультации по половому развитию
• Диагностика и лечение гинекологических заболеваний
• Подростковая гинекология

<a href="https://prodoctorov.ru/kursk/lpu/84476-mom/price/?page=1#tab-content" target="_blank" style="display:inline-block;padding:10px 20px;background:linear-gradient(135deg, #4A86C1, #f06292);color:white;border-radius:20px;text-decoration:none;font-weight:600;margin-top:10px;">📅 Записаться к гинекологу</a>`
  },

  // 7. Эндокринолог
  endokrinolog: {
    keywords: ['эндокринолог', 'эндокринолога', 'эндокринологу', 'эндокринология',
               'денисова', 'щитовидная', 'диабет', 'сахарный диабет',
               'гормоны', 'гормональные', 'тиреоидит', 'зоб'],
    response: `🩺 Эндокринолог

Эндокринолог занимается диагностикой и лечением гормональных нарушений:
• Заболевания щитовидной железы
• Сахарный диабет
• Ожирение и нарушения обмена веществ
• Задержка полового развития
• Нарушения роста

Ведёт приём: Денисова А.Д. — педиатр, врач-эндокринолог

<a href="https://prodoctorov.ru/kursk/lpu/84476-mom/price/?page=1#tab-content" target="_blank" style="display:inline-block;padding:10px 20px;background:linear-gradient(135deg, #4A86C1, #f06292);color:white;border-radius:20px;text-decoration:none;font-weight:600;margin-top:10px;">📅 Записаться к эндокринологу</a>`
  },

  // 8. Нейропсихолог
  neiropsiholog: {
    keywords: ['нейропсихолог', 'нейропсихолога', 'нейропсихологу', 'нейропсихология',
               'блюм', 'когнитивное', 'когнитивное развитие', 'память', 'внимание',
               'мышление', 'обучение', 'коррекция', 'сдвг', 'аутизм', 'рас'],
    response: `🧩 Нейропсихолог

Нейропсихолог оценивает и корректирует когнитивные функции:
• Память, внимание, мышление
• Речевое развитие
• СДВГ (синдром дефицита внимания)
• Расстройства аутистического спектра (РАС)
• Проблемы с обучением
• Подготовка к школе

Ведёт приём: Блюм А.И. — клинический психолог

<a href="https://prodoctorov.ru/kursk/lpu/84476-mom/price/?page=1#tab-content" target="_blank" style="display:inline-block;padding:10px 20px;background:linear-gradient(135deg, #4A86C1, #f06292);color:white;border-radius:20px;text-decoration:none;font-weight:600;margin-top:10px;">📅 Записаться к нейропсихологу</a>`
  },

  // 9. Массаж
  massage: {
    keywords: ['массаж', 'массажист', 'лечебный массаж', 'детский массаж', 'массаж ребенку',
               'массажистка', 'массаж детям', 'массаж для детей', 'массаж спины',
               'массаж ног', 'массаж шеи', 'профилактический массаж', 'массажист'],
    response: `💆 Массаж

В нашем центре проводятся:
• Лечебный массаж
• Профилактический массаж для детей
• Массаж при плоскостопии, сколиозе
• Массаж для младенцев и детей любого возраста

Массаж помогает при:
— Задержке моторного развития
— Плоскостопии и сколиозе
— Гипертонусе/гипотонусе мышц
— После перенесённых травм и операций

<a href="https://prodoctorov.ru/kursk/lpu/84476-mom/price/?page=1#tab-content" target="_blank" style="display:inline-block;padding:10px 20px;background:linear-gradient(135deg, #4A86C1, #f06292);color:white;border-radius:20px;text-decoration:none;font-weight:600;margin-top:10px;">📅 Записаться на массаж</a>`
  },

  // 10. Войта-терапия
  voyta: {
    keywords: ['войта', 'войтотерапия', 'войта терапия', 'войта-терапия', 'reflexlocomotion',
               'двигательные нарушения', 'двигательное развитие', 'лфк', 'лечебная физкультура'],
    response: `🏃 Войта-терапия

Войта-терапия — метод лечебной физкультуры, основанный на активации врождённых двигательных программ.

Показания:
• ДЦП и другие двигательные нарушения
• Задержка моторного развития
• Гипертонус/гипотонус мышц
• Нарушения походки

<a href="https://prodoctorov.ru/kursk/lpu/84476-mom/price/?page=1#tab-content" target="_blank" style="display:inline-block;padding:10px 20px;background:linear-gradient(135deg, #4A86C1, #f06292);color:white;border-radius:20px;text-decoration:none;font-weight:600;margin-top:10px;">📅 Записаться на Войта-терапию</a>`
  },

  // 11. Бобат-терапия
  bobat: {
    keywords: ['бобат', 'бобат-терапия', 'бобат терапия', 'bobath', 'нейродвигательная терапия',
               'нейрофизиологическая терапия', 'двигательные нарушения', 'двигательное развитие'],
    response: `🤸 Бобат-терапия

Бобат-терапия — нейродвигательный метод реабилитации для детей с двигательными нарушениями.

Показания:
• ДЦП (церебральный паралич)
• Задержка моторного развития
• Гипертонус/гипотонус мышц
• Нарушения походки и равновесия

<a href="https://prodoctorov.ru/kursk/lpu/84476-mom/price/?page=1#tab-content" target="_blank" style="display:inline-block;padding:10px 20px;background:linear-gradient(135deg, #4A86C1, #f06292);color:white;border-radius:20px;text-decoration:none;font-weight:600;margin-top:10px;">📅 Записаться на Бобат-терапию</a>`
  },

  // 12. Иппотерапия
  ippoterapiya: {
    keywords: ['иппотерапия', 'иппотерапию', 'лошадь', 'лошади', 'верховая езда', 'конная терапия',
               'hippotherapy', 'контактная терапия', 'лошадей'],
    response: `🐴 Иппотерапия

Иппотерапия — лечение с помощью лошадей, способствующее развитию координации, равновесия и мышечного тонуса.

Показания:
• ДЦП и другие двигательные нарушения
• Задержка моторного развития
• Аутизм, РАС
• СДВГ (гиперактивность)
• Нарушения равновесия и координации

<a href="https://prodoctorov.ru/kursk/lpu/84476-mom/price/?page=1#tab-content" target="_blank" style="display:inline-block;padding:10px 20px;background:linear-gradient(135deg, #4A86C1, #f06292);color:white;border-radius:20px;text-decoration:none;font-weight:600;margin-top:10px;">📅 Записаться на иппотерапию</a>`
  },

  // 13. УЗИ
  uzi: {
    keywords: ['узи', 'узи-диагностика', 'узи диагностика', 'ультразвук', 'ультразвуковое',
               'узи исследование', 'диагностика узи', 'скрининг', 'узи органов', 'узи головы',
               'узи брюшной полости', 'нейросонография', 'эхокг', 'узист', 'петровская', 'казанова'],
    response: `🔬 УЗИ-диагностика

В нашем центре проводятся все виды УЗИ-диагностики для детей:
• УЗИ головного мозга (нейросонография)
• УЗИ брюшной полости
• УЗИ почек и мочевого пузыря
• УЗИ тазобедренных суставов (дисплазия)
• УЗИ сердца (эхоКГ)
• УЗИ щитовидной железы

Ведут приём:
• Петровская Н.Ю. — детский врач УЗИ
• Казанова М.В. — врач УЗИ

<a href="https://prodoctorov.ru/kursk/lpu/84476-mom/price/?page=1#tab-content" target="_blank" style="display:inline-block;padding:10px 20px;background:linear-gradient(135deg, #4A86C1, #f06292);color:white;border-radius:20px;text-decoration:none;font-weight:600;margin-top:10px;">📅 Записаться на УЗИ</a>`
  },

  // 14. Физиотерапия
  fizioterapiya: {
    keywords: ['физиотерапия', 'физиотерапевт', 'лфк', 'лечебная физкультура', 'гимнастика',
               'лечебная гимнастика', 'физиотерапевтический', 'двигательное развитие', 'двигательные', 'каплина'],
    response: `🏋️ Физиотерапия (ЛФК)

Лечебная физкультура и физиотерапия помогают детям с:
• Задержкой моторного развития
• ДЦП и другими двигательными нарушениями
• Сколиозом и плоскостопием
• Гипертонусом/гипотонусом мышц
• После перенесённых травм и операций

В комплекс входит:
— Индивидуальная программа ЛФК
— Коррекционная гимнастика
— Домашние рекомендации для родителей

<a href="https://prodoctorov.ru/kursk/lpu/84476-mom/price/?page=1#tab-content" target="_blank" style="display:inline-block;padding:10px 20px;background:linear-gradient(135deg, #4A86C1, #f06292);color:white;border-radius:20px;text-decoration:none;font-weight:600;margin-top:10px;">📅 Записаться на ЛФК</a>`
  },

  // 15. Терапия
  terapiya: {
    keywords: ['терапия', 'терапевт', 'терапевта', 'терапевту', 'терапевтический',
               'общий врач', 'терапевтическая', 'консультация терапевта'],
    response: `🩺 Терапия

Терапевтические консультации в нашем центре включают:
• Общие консультации по состоянию здоровья
• Наблюдение за хроническими заболеваниями
• Профилактические осмотры
• Направления к узким специалистам

<a href="https://prodoctorov.ru/kursk/lpu/84476-mom/price/?page=1#tab-content" target="_blank" style="display:inline-block;padding:10px 20px;background:linear-gradient(135deg, #4A86C1, #f06292);color:white;border-radius:20px;text-decoration:none;font-weight:600;margin-top:10px;">📅 Записаться к терапевту</a>`
  },

  // 16. Врачи (общий запрос)
  doctors: {
    keywords: ['врач', 'доктор', 'специалист', 'врачи', 'доктора', 'какие специалисты',
               'кто принимает', 'кто врач', 'фамилии', 'ткаченко', 'петровская', 'каплина',
               'мартынова', 'блюм', 'казанова', 'коровина', 'денисова', 'юшкова', 'араева'],
    response: `👨‍⚕️ Наши специалисты

• Ткаченко Е.А. — Педиатр
• Петровская Н.Ю. — Детский врач УЗИ
• Каплина К.Р. — Неонатолог, физиотерапевт
• Мартынова О.И. — Детский психиатр, психиатр
• Блюм А.И. — Клинический психолог
• Казанова М.В. — Врач УЗИ
• Коровина Е.Ю. — Педиатр
• Денисова А.Д. — Педиатр, врач-эндокринолог
• Юшкова А.Г. — Педиатр
• Араева Е.М. — Специалист по грудному вскармливанию

К какому врачу вам надо? Просто напишите его специальность или фамилию!`
  },

  // 17. Адрес
  address: {
    keywords: ['адрес', 'где', 'как проехать', 'место', 'находитесь', 'куда ехать',
               'как добраться', 'где вы', 'локация', 'курск', 'карта', 'маршрут',
               'доехать', 'проехать', 'улица', 'толстого'],
    response: `📍 Мы находимся по адресу:
г. Курск, ул. Л. Толстого, д. 21, пом III

📞 Телефон: +7 (4712) 36-00-61
🕐 Режим работы: ежедневно с 9:00 до 21:00

<a href="https://yandex.ru/maps/?text=г.+Курск,+ул.+Л.+Толстого,+д.+21" target="_blank" style="display:inline-block;padding:10px 20px;background:linear-gradient(135deg, #4A86C1, #A8D5A2);color:white;border-radius:20px;text-decoration:none;font-weight:600;margin-top:10px;">📍 Мы на карте</a>`
  },

  // 18. Телефон / Контакты
  contacts: {
    keywords: ['телефон', 'номер', 'позвонить', 'контакты', 'связаться',
               'как позвонить', 'телефонный', 'звонок', 'мобильный', 'контакт',
               'email', 'почта', 'соцсети', 'социальные сети', 'whatsapp', 'телеграм',
               'telegram', 'vk', 'вконтакте', 'instagram', 'инстаграм'],
    response: `📞 Наши контакты

Телефон: +7 (4712) 36-00-61
Дополнительный: +7 962 380-90-25
Режим работы: ежедневно с 9:00 до 21:00
Адрес: г. Курск, ул. Л. Толстого, д. 21, пом III

<a href="https://prodoctorov.ru/kursk/lpu/84476-mom/price/?page=1#tab-content" target="_blank" style="display:inline-block;padding:10px 20px;background:linear-gradient(135deg, #4A86C1, #f06292);color:white;border-radius:20px;text-decoration:none;font-weight:600;margin-top:10px;">📅 Записаться на приём</a>`
  },

  // 19. Запись / Записаться
  appointment: {
    keywords: ['записаться', 'запись', 'приём', 'прием', 'записать', 'записываться',
               'хочу к врачу', 'записаться на', 'записать на прием', 'записаться к',
               'записаться к врачу', 'запись к', 'как записаться', 'запись на'],
    response: `📝 Записаться на приём

Записаться можно несколькими способами:
• Онлайн: через форму на сайте (кнопка «Записаться»)
• По телефону: +7 (4712) 36-00-61 или +7 962 380-90-25
• Через чат-бот — напишите, к какому специалисту хотите записаться

Работаем ежедневно с 9:00 до 21:00.

<a href="https://prodoctorov.ru/kursk/lpu/84476-mom/price/?page=1#tab-content" target="_blank" style="display:inline-block;padding:10px 20px;background:linear-gradient(135deg, #4A86C1, #f06292);color:white;border-radius:20px;text-decoration:none;font-weight:600;margin-top:10px;">📅 Записаться на приём</a>`
  },

  // 20. Цены / Стоимость
  prices: {
    keywords: ['цена', 'стоимость', 'сколько стоит', 'ценник', 'прайс', 'прайс-лист',
               'оплата', 'сколько', 'стоимость приема', 'цены', 'дорого', 'дешево',
               'сколько платить', 'стоимость услуги', 'расценки', 'прайслист'],
    response: `💰 Наши цены

• Первичный приём специалиста — от 2000 руб.
• Повторный приём — от 1600 руб.
• Массаж — от 1000 руб.
• УЗИ — от 1500 руб.
• Консультация психолога — от 2500 руб.
• Иппотерапия — от 2000 руб.
• Войта-терапия — от 1500 руб.
• Бобат-терапия — от 1500 руб.

Подробный прайс-лист смотрите в разделе «Услуги и цены».

<a href="https://prodoctorov.ru/kursk/lpu/84476-mom/price/?page=1#tab-content" target="_blank" style="display:inline-block;padding:10px 20px;background:linear-gradient(135deg, #4A86C1, #f06292);color:white;border-radius:20px;text-decoration:none;font-weight:600;margin-top:10px;">📅 Записаться на приём</a>`
  },

  // 21. Время работы
  hours: {
    keywords: ['время', 'график', 'когда работаете', 'часы работы', 'время работы',
               'когда открыты', 'до скольки', 'с какого', 'выходные', 'когда можно прийти',
               'когда работает', 'в какие дни', 'когда принимаете', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    response: `🕐 Мы работаем ежедневно с 9:00 до 21:00, без выходных!`
  },

  // 22. Отзывы
  reviews: {
    keywords: ['отзывы', 'отзыв', 'мнение', 'рейтинг', 'отзывы о врачах', 'отзывы о центре',
               'что говорят', 'пациенты', 'пришли', 'результаты', 'результат'],
    response: `⭐ Отзывы

Вы можете ознакомиться с отзывами наших пациентов в разделе «Отзывы» на сайте.

Также мы будем рады, если вы оставите свой отзыв после визита — это поможет другим родителям сделать выбор!`
  },

  // 23. Статьи / Советы
  articles: {
    keywords: ['статьи', 'советы', 'полезное', 'блог', 'информация', 'почитать', 'совет',
               'как', 'что делать', 'помогите', 'рекомендации', 'статья', 'пост'],
    response: `📖 Статьи

В нашем центре есть полезные статьи на темы:
• Прикорм — с чего начать?
• Детский массаж — зачем нужен?
• Развитие речи в 1-3 года
• Плоскостопие у детей — профилактика
• Сон ребёнка — нормы и проблемы
• Двигательное развитие — этапы и нормы

Смотрите раздел «Статьи» на сайте!`
  },

  // 24. Библиотека / Книги
  library: {
    keywords: ['библиотека', 'книги', 'литература', 'почитать', 'книга', 'рекомендации по книгам',
               'полезные книги', 'книги для родителей', 'пособие', 'пособия', 'методичка'],
    response: `📚 Библиотека

В нашем центре есть библиотека с полезной литературой для родителей:
• Книги по детскому развитию
• Методические пособия по массажу и ЛФК
• Руководства по прикорму и питанию
• Литература по логопедии и речевому развитию

Вы можете воспользоваться поиском книг в разделе «Библиотека» на сайте!`
  },

  // 25. Прививки / Вакцинация
  vaccines: {
    keywords: ['прививки', 'вакцинация', 'прививка', 'вакцина', 'прививки по календарю',
               'календарь прививок', 'прививать', 'прививка ребенку', 'вакцинировать',
               'прививки сделать', 'прививочный календарь', 'прививочный'],
    response: `💉 Прививки

В нашем центре педиатры консультируют по вопросам вакцинации и помогают составить индивидуальный график прививок.

Если у вас вопросы о прививках — запишитесь на консультацию к педиатру:
• Проверка прививочного статуса
• Консультация по вакцинации
• Составление индивидуального календаря

<a href="https://prodoctorov.ru/kursk/lpu/84476-mom/price/?page=1#tab-content" target="_blank" style="display:inline-block;padding:10px 20px;background:linear-gradient(135deg, #4A86C1, #f06292);color:white;border-radius:20px;text-decoration:none;font-weight:600;margin-top:10px;">📅 Записаться к педиатру</a>`
  },

  // 26. Анкеты / Формы
  anketa: {
    keywords: ['анкета', 'анкеты', 'форма', 'заполнить', 'заполнить анкету', 'анкета для приема',
               'заполнить форму', 'форма для записи', 'анкета невролога', 'анкета педиатра'],
    response: `📝 Анкеты для приёма

На нашем сайте есть анкеты для подготовки к приёму:
• Анкета для приёма у невролога
• Анкета для приёма у педиатра

Заполните анкету заранее — это поможет врачу лучше подготовиться к приёму и сэкономит время на приёме.

Найти анкеты можно в разделе «Анкеты» на сайте или через меню.`
  },

  // 28. Услуги
  uslugi: {
    keywords: ['услуги', 'услуга', 'что делаете', 'что умеете', 'направления', 'направление',
               'чем занимаетесь', 'что предлагаете', 'предложение', 'что есть', 'виды услуг',
               'список услуг', 'услуги центра', 'медицинские услуги', 'помощь', 'лечение'],
    response: `🏥 Наши услуги

• Педиатрия — консультации педиатров, профилактические осмотры, прививки
• УЗИ-диагностика — нейросонография, УЗИ брюшной полости, эхоКГ
• Детский невролог — задержка развития, ДЦП, судороги, гипертонус
• Хирург-ортопед — сколиоз, плоскостопие, ВРД, ортопедические стельки
• Логопед — задержка речи, дизартрия, заикание, звукопроизношение
• Психолог — тревожность, адаптация, РАС, СДВГ, поведенческие проблемы
• Эндокринолог — щитовидная железа, сахарный диабет, нарушения роста
• Массаж — лечебный, профилактический, при плоскостопии и сколиозе
• ЛФК и физиотерапия — Войта-терапия, Бобат-терапия, коррекционная гимнастика
• Иппотерапия — конная терапия для детей с ДЦП и РАС
• Гинекология — детская и взрослая гинекология, подростковая консультация
• Анкеты — подготовка к приёму у педиатра и невролога

Просто напишите, к какому специалисту или услуге хотите записаться!`
  },

  // 27. Приветствие
  greeting: {
    keywords: ['привет', 'здравствуй', 'здравствуйте', 'добрый день', 'доброе утро',
               'добрый вечер', 'хай', 'hello', 'hi', 'ку', 'здарова', 'приветствую'],
    response: `Здравствуйте! 👋 Я чат-бот медицинского центра MOM. Чем могу помочь?

Я могу рассказать о:
— Направлениях и услугах центра
— Наших специалистах
— Адресе и времени работы
— Как записаться на приём
— Ценах на услуги

Просто напишите ваш вопрос!`
  },

  // 28. Прощание
  goodbye: {
    keywords: ['спасибо', 'благодарю', 'пока', 'до свидания', 'хорошего дня', 'до встречи',
               'спасибо большое', 'благодарю вас', 'всего доброго', 'удачи'],
    response: `Всегда рад помочь! 🌸 Будьте здоровы!
Если останутся вопросы — обращайтесь.
Записаться на приём можно по телефону +7 (4712) 36-00-61 или +7 962 380-90-25, а также через кнопку «Записаться» на сайте.`
  }
};
const DEFAULT_RESPONSE = `Извините, я не совсем понял вопрос. Вот что я могу рассказать:
— Направления и услуги центра
— Наши специалисты
— Адрес и время работы
— Как записаться на приём
— Цены на услуги
Сформулируйте вопрос иначе или выберите нужную тему!`;

// ====== Функция определения категории запроса ======
function detectCategory(userMessage) {
  const lowerMsg = userMessage.toLowerCase();
  for (const [category, data] of Object.entries(BOT_RESPONSES)) {
    for (const keyword of data.keywords) {
      if (lowerMsg.includes(keyword)) {
        return category;
      }
    }
  }
  return null;
}

// ====== Кнопка записи ======
const BOOKING_BTN = `
<a href="https://prodoctorov.ru/kursk/lpu/84476-mom/price/?page=1#tab-content" target="_blank" style="display:inline-block;padding:10px 20px;background:linear-gradient(135deg, #4A86C1, #f06292);color:white;border-radius:20px;text-decoration:none;font-weight:600;margin-top:10px;">📅 Записаться на приём</a>`;

function addBookingButton(response, category) {
  if (category === 'greeting' || category === 'goodbye' || category === 'address' || category === 'doctors' || category === 'reviews' || category === 'articles' || category === 'library' || category === 'hours' || category === 'anketa') return response;
  if (response.includes('prodoctorov.ru')) return response;
  return response + '\n\n' + BOOKING_BTN;
}

// ====== Основная функция получения ответа ======
function getBotResponse(userMessage) {
  const category = detectCategory(userMessage);
  if (category && BOT_RESPONSES[category]) {
    return addBookingButton(BOT_RESPONSES[category].response, category);
  }
  return addBookingButton(DEFAULT_RESPONSE, 'default');
}

// ====== Функция форматирования времени ======
function formatTime(date) {
  return date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
}

// ====== Инициализация чат-бота ======
function initChatBot() {
  const botHTML = `
    <div class="chat-bot-tooltip" id="chatBotTooltip">Готов помочь с вашими вопросами</div>
    <div class="chat-bot-icon" id="chatBotIcon" onclick="toggleChat()" style="display:none;">
      <span style="filter: grayscale(0.2);">💬</span>
    </div>
    <div class="chat-window" id="chatWindow">
      <div class="chat-header">
        <h4>🩺 MOM Assistant</h4>
        <button class="chat-close" onclick="toggleChat()">&times;</button>
      </div>
      <div class="chat-body" id="chatBody">
        <div class="message bot" id="welcomeMsg">
          Здравствуйте! 👋 Я чат-бот медицинского центра MOM. Чем могу помочь?
          <div style="margin-top:8px;opacity:0.7;">
            Напишите: услуги, врачи, адрес, запись, цены, время
          </div>
          <div class="msg-time">${formatTime(new Date())}</div>
        </div>
        <div class="typing-indicator" id="typingIndicator">
          <span></span><span></span><span></span>
        </div>
      </div>
      <div class="chat-footer">
        <input type="text" class="chat-input" id="chatInput"
               placeholder="Введите сообщение..." maxlength="200">
        <button class="chat-send" onclick="sendChatMessage()">➤</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', botHTML);

  // Enter для отправки
  document.getElementById('chatInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') sendChatMessage();
  });
}

// ====== Открыть/закрыть чат ======
function toggleChat() {
  const win = document.getElementById('chatWindow');
  const icon = document.getElementById('chatBotIcon');
  if (win.style.display === 'flex') {
    win.style.display = 'none';
    if (icon) icon.style.display = 'flex';
  } else {
    win.style.display = 'flex';
    if (icon) icon.style.display = 'none';
  }
}

// ====== Показать индикатор набора ======
function showTyping() {
  const indicator = document.getElementById('typingIndicator');
  if (indicator) indicator.style.display = 'block';
}

function hideTyping() {
  const indicator = document.getElementById('typingIndicator');
  if (indicator) indicator.style.display = 'none';
}

// ====== Добавить сообщение в чат ======
function addMessage(text, isBot) {
  const chatBody = document.getElementById('chatBody');
  const msgDiv = document.createElement('div');
  msgDiv.className = 'message ' + (isBot ? 'bot' : 'user');
  msgDiv.innerHTML = text.replace(/\n/g, '<br>') +
    '<div class="msg-time">' + formatTime(new Date()) + '</div>';
  chatBody.insertBefore(msgDiv, document.getElementById('typingIndicator'));
  chatBody.scrollTop = chatBody.scrollHeight;
}

// ====== Отправка сообщения пользователя ======
function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, false);
  input.value = '';

  showTyping();
  document.getElementById('chatBody').scrollTop =
    document.getElementById('chatBody').scrollHeight;

  setTimeout(function() {
    hideTyping();
    const response = getBotResponse(text);
    addMessage(response, true);
  }, 600 + Math.random() * 400);
}

// ====== Автозапуск ======
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChatBot);
} else {
  initChatBot();
}

// ====== Экспорт для использования в других модулях ======



// Toggle conditional fields
document.querySelectorAll('input[name="birthComplications"]').forEach(function(el) {
  el.addEventListener('change', function() {
    document.getElementById('birthDetailsField').style.display = this.value === 'yes' ? 'block' : 'none';
  });
});
document.querySelectorAll('input[name="medications"]').forEach(function(el) {
  el.addEventListener('change', function() {
    document.getElementById('medsDetailsField').style.display = this.value === 'yes' ? 'block' : 'none';
  });
});


// Show chat bot after 10 seconds with tooltip
setTimeout(function() {
    var botBtn = document.querySelector('.chat-bot-icon');
    var botTip = document.querySelector('.chat-bot-tooltip');
    if(botBtn) { botBtn.style.display = 'flex'; botBtn.classList.add('visible'); }
    if(botTip) botTip.classList.add('visible');
    // Hide tooltip after 5 seconds
    setTimeout(function() {
        if(botTip) botTip.classList.remove('visible');
    }, 5000);
}, 10000);


function openBookSearch(title) {
  var query = encodeURIComponent(title + ' купить ozon');
  window.open('https://www.google.com/search?q=' + query, '_blank');
}
