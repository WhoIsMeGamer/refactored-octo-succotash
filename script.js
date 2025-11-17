// Массив со ВСЕМИ HTML тегами
const allTags = [
    {
        name: "<!--...-->",
        category: "basic",
        description: "Комментарий в коде - не отображается на странице.",
        attributes: [],
        details: {
            description: "Используется для добавления комментариев в код. Комментарии не отображаются в браузере и предназначены для разработчиков.",
            example: "<!-- Это комментарий -->\n<div>Видимый контент</div>"
        }
    },
    {
        name: "<!DOCTYPE>",
        category: "basic",
        description: "Объявляет тип документа и версию HTML.",
        attributes: [],
        details: {
            description: "Должен быть первой строкой в HTML-документе. Сообщает браузеру, какая версия HTML используется.",
            example: "<!DOCTYPE html>\n<html>\n<head>\n<title>Заголовок</title>\n</head>\n<body>\nСодержимое\n</body>\n</html>"
        }
    },
    {
        name: "<a>",
        category: "media",
        description: "Создаёт гипертекстовые ссылки.",
        attributes: [
            { name: "href", required: true },
            { name: "target" },
            { name: "download" },
            { name: "rel" }
        ],
        details: {
            description: "Ссылки могут вести на другие страницы, файлы, email адреса или якоря на текущей странице.",
            attributes: "href - URL назначения (обязательный)\ntarget - где открыть ссылку (_blank, _self)\ndownload - предлагает скачать файл\nrel - отношения между документами",
            example: '<a href="https://example.com" target="_blank">Посетите сайт</a>\n<a href="mailto:email@example.com">Написать письмо</a>\n<a href="#section">Перейти к разделу</a>'
        }
    },
    {
        name: "<abbr>",
        category: "text",
        description: "Определяет аббревиатуру или акроним.",
        attributes: [
            { name: "title", required: true }
        ],
        details: {
            description: "При наведении курсора показывает расшифровку аббревиатуры.",
            example: '<abbr title="HyperText Markup Language">HTML</abbr>'
        }
    },
    {
        name: "<address>",
        category: "text",
        description: "Задает контактные данные автора/владельца.",
        attributes: [],
        details: {
            description: "Обычно отображается курсивом. Содержит контактную информацию.",
            example: "<address>\nАвтор: Иван Иванов<br>\nEmail: <a href=\"mailto:ivan@example.com\">ivan@example.com</a>\n</address>"
        }
    },
    {
        name: "<area>",
        category: "media",
        description: "Активная область на изображении-карте.",
        attributes: [
            { name: "shape", required: true },
            { name: "coords", required: true },
            { name: "href" },
            { name: "alt" }
        ],
        details: {
            description: "Всегда используется внутри <map>. Создает кликабельные области на изображении.",
            example: '<img src="planets.jpg" usemap="#planetmap">\n<map name="planetmap">\n<area shape="rect" coords="0,0,82,126" href="sun.html" alt="Sun">\n<area shape="circle" coords="90,58,3" href="mercury.html" alt="Mercury">\n</map>'
        }
    },
    {
        name: "<article>",
        category: "structure",
        description: "Независимый раздел контента.",
        attributes: [],
        details: {
            description: "Используется для статей, постов блога, новостей, которые могут распространяться независимо.",
            example: "<article>\n<h2>Заголовок статьи</h2>\n<p>Содержимое статьи...</p>\n</article>"
        }
    },
    {
        name: "<aside>",
        category: "structure",
        description: "Боковая панель или дополнительный контент.",
        attributes: [],
        details: {
            description: "Содержит контент, косвенно связанный с основным содержимым (боковые панели, цитаты).",
            example: "<aside>\n<h3>Интересный факт</h3>\n<p>Дополнительная информация...</p>\n</aside>"
        }
    },
    {
        name: "<audio>",
        category: "media",
        description: "Встраивает аудиоплеер.",
        attributes: [
            { name: "src" },
            { name: "controls" },
            { name: "autoplay" },
            { name: "loop" }
        ],
        details: {
            description: "Поддерживает форматы MP3, WAV, OGG. Для отображения элементов управления используйте атрибут controls.",
            example: '<audio controls>\n<source src="audio.mp3" type="audio/mpeg">\nВаш браузер не поддерживает аудио.\n</audio>'
        }
    },
    {
        name: "<b>",
        category: "text",
        description: "Выделяет текст жирным без придания важности.",
        attributes: [],
        details: {
            description: "Используется для стилизации текста без семантического значения. Для важного текста используйте <strong>.",
            example: "Это <b>жирный текст</b> без особого значения."
        }
    },
    {
        name: "<base>",
        category: "basic",
        description: "Задает базовый URL для всех относительных ссылок.",
        attributes: [
            { name: "href" },
            { name: "target" }
        ],
        details: {
            description: "Определяет базовый URL, который будет использоваться для всех относительных URL на странице.",
            example: '<base href="https://example.com/">\n<a href="page.html">Ссылка будет вести на https://example.com/page.html</a>'
        }
    },
    {
        name: "<bdi>",
        category: "text",
        description: "Изолирует текст с направлением справа налево.",
        attributes: [],
        details: {
            description: "Полезно для текста на арабском, иврите и других языках с направлением справа налево.",
            example: "Слева <bdi>نص عربي</bdi> справа"
        }
    },
    {
        name: "<bdo>",
        category: "text",
        description: "Принудительно меняет направление текста.",
        attributes: [
            { name: "dir", required: true }
        ],
        details: {
            description: "Переопределяет текущее направление текста. dir может быть 'ltr' (слева направо) или 'rtl' (справа налево).",
            example: '<bdo dir="rtl">Этот текст будет справа налево</bdo>'
        }
    },
    {
        name: "<blockquote>",
        category: "text",
        description: "Выделяет длинную цитату с отступами.",
        attributes: [
            { name: "cite" }
        ],
        details: {
            description: "Используется для цитирования больших фрагментов текста. Обычно отображается с отступами.",
            example: '<blockquote cite="http://example.com">\nЭто длинная цитата из другого источника.\n</blockquote>'
        }
    },
    {
        name: "<body>",
        category: "basic",
        description: "Тело документа - всё видимое содержимое.",
        attributes: [],
        details: {
            description: "Содержит весь контент, который отображается в браузере: текст, изображения, ссылки и т.д.",
            example: "<body>\n<h1>Мой сайт</h1>\n<p>Добро пожаловать на мой сайт!</p>\n</body>"
        }
    },
    {
        name: "<br>",
        category: "text",
        description: "Перенос строки без создания нового абзаца.",
        attributes: [],
        details: {
            description: "Одиночный тег. Используется для разрыва строки в тексте без создания нового параграфа.",
            example: "Первая строка<br>Вторая строка<br>Третья строка"
        }
    },
    {
        name: "<button>",
        category: "forms",
        description: "Создает интерактивную кнопку.",
        attributes: [
            { name: "type" },
            { name: "disabled" },
            { name: "onclick" }
        ],
        details: {
            description: "Может содержать текст или изображение. Используется для отправки форм или выполнения действий.",
            example: '<button type="button" onclick="alert(\'Привет!\')">Нажми меня</button>\n<button type="submit">Отправить</button>'
        }
    },
    {
        name: "<canvas>",
        category: "media",
        description: "Область для рисования графики через JavaScript.",
        attributes: [
            { name: "width" },
            { name: "height" }
        ],
        details: {
            description: "Используется для рисования графиков, игр, анимаций с помощью JavaScript.",
            example: '<canvas id="myCanvas" width="200" height="100"></canvas>\n<script>\nconst canvas = document.getElementById("myCanvas");\nconst ctx = canvas.getContext("2d");\nctx.fillStyle = "red";\nctx.fillRect(10, 10, 150, 80);\n</script>'
        }
    },
    {
        name: "<caption>",
        category: "tables",
        description: "Заголовок таблицы.",
        attributes: [],
        details: {
            description: "Добавляет подпись к таблице. Размещается сразу после открывающего тега <table>.",
            example: "<table>\n<caption>Ежемесячные продажи</caption>\n<tr><th>Месяц</th><th>Сумма</th></tr>\n<tr><td>Январь</td><td>1000</td></tr>\n</table>"
        }
    },
    {
        name: "<cite>",
        category: "text",
        description: "Источник цитирования.",
        attributes: [],
        details: {
            description: "Отображается курсивом. Используется для указания названия книги, фильма, статьи и т.д.",
            example: 'По словам <cite>Чарльза Дарвина</cite>, выживает сильнейший.'
        }
    },
    {
        name: "<code>",
        category: "text",
        description: "Фрагмент программного кода.",
        attributes: [],
        details: {
            description: "Отображается моноширинным шрифтом. Используется для выделения кода в тексте.",
            example: "Для вывода текста используйте <code>console.log()</code>"
        }
    },
    {
        name: "<col>",
        category: "tables",
        description: "Задает свойства для столбцов таблицы.",
        attributes: [
            { name: "span" }
        ],
        details: {
            description: "Используется внутри <colgroup> для форматирования столбцов таблицы.",
            example: "<table>\n<colgroup>\n<col span=\"2\" style=\"background-color:red\">\n<col style=\"background-color:yellow\">\n</colgroup>\n<tr><th>ISBN</th><th>Title</th><th>Price</th></tr>\n<tr><td>123</td><td>Book</td><td>$10</td></tr>\n</table>"
        }
    },
    {
        name: "<colgroup>",
        category: "tables",
        description: "Группирует столбцы таблицы для форматирования.",
        attributes: [],
        details: {
            description: "Контейнер для элементов <col>, которые определяют свойства столбцов таблицы.",
            example: "<table>\n<colgroup>\n<col style=\"background-color:red\">\n<col style=\"background-color:yellow\">\n</colgroup>\n<tr><th>First</th><th>Second</th></tr>\n<tr><td>Data1</td><td>Data2</td></tr>\n</table>"
        }
    },
    {
        name: "<data>",
        category: "text",
        description: "Связывает содержимое с машиночитаемым значением.",
        attributes: [
            { name: "value", required: true }
        ],
        details: {
            description: "Позволяет связать человекочитаемый текст с машиночитаемым значением.",
            example: '<data value=\"21053\">Cherry Tomato</data>'
        }
    },
    {
        name: "<datalist>",
        category: "forms",
        description: "Список предопределенных вариантов для поля ввода.",
        attributes: [
            { name: "id", required: true }
        ],
        details: {
            description: "Предоставляет варианты для автозаполнения элемента <input>.",
            example: '<input list=\"browsers\">\n<datalist id=\"browsers\">\n<option value=\"Chrome\">\n<option value=\"Firefox\">\n<option value=\"Safari\">\n</datalist>'
        }
    },
    {
        name: "<dd>",
        category: "text",
        description: "Описание термина в списке определений.",
        attributes: [],
        details: {
            description: "Используется внутри <dl> для описания термина, заданного в <dt>.",
            example: "<dl>\n<dt>HTML</dt>\n<dd>Язык разметки гипертекста</dd>\n<dt>CSS</dt>\n<dd>Каскадные таблицы стилей</dd>\n</dl>"
        }
    },
    {
        name: "<del>",
        category: "text",
        description: "Помечает текст как удаленный.",
        attributes: [
            { name: "cite" },
            { name: "datetime" }
        ],
        details: {
            description: "Отображается перечёркнутым текстом. Используется для показа изменений в документе.",
            example: 'Цена: <del>1000 руб.</del> <ins>800 руб.</ins>'
        }
    },
    {
        name: "<details>",
        category: "interactive",
        description: "Создает сворачиваемый блок с дополнительной информацией.",
        attributes: [
            { name: "open" }
        ],
        details: {
            description: "Создает интерактивный виджет, который пользователь может открывать и закрывать.",
            example: '<details>\n<summary>Подробнее</summary>\n<p>Дополнительная информация, которая показывается при раскрытии.</p>\n</details>'
        }
    },
    {
        name: "<dfn>",
        category: "text",
        description: "Определяет термин, который определяется в текущем контексте.",
        attributes: [],
        details: {
            description: "Отображается курсивом. Используется для выделения терминов при их первом определении.",
            example: "<p><dfn>HTML</dfn> - это язык разметки для создания веб-страниц.</p>"
        }
    },
    {
        name: "<dialog>",
        category: "interactive",
        description: "Создает диалоговое окно или модальное окно.",
        attributes: [
            { name: "open" }
        ],
        details: {
            description: "Используется для создания всплывающих диалоговых окон.",
            example: '<dialog open>\n<p>Это диалоговое окно!</p>\n<button onclick=\"this.parentElement.close()\">Закрыть</button>\n</dialog>'
        }
    },
    {
        name: "<div>",
        category: "structure",
        description: "Универсальный блочный контейнер.",
        attributes: [],
        details: {
            description: "Используется для группировки элементов и применения стилей. Не имеет семантического значения.",
            example: '<div class=\"container\">\n<h1>Заголовок</h1>\n<p>Текст внутри контейнера</p>\n</div>'
        }
    },
    {
        name: "<dl>",
        category: "lists",
        description: "Список определений (термин + описание).",
        attributes: [],
        details: {
            description: "Контейнер для списка терминов и их определений. Содержит элементы <dt> и <dd>.",
            example: "<dl>\n<dt>Кофе</dt>\n<dd>Черный горячий напиток</dd>\n<dt>Молоко</dt>\n<dd>Белый холодный напиток</dd>\n</dl>"
        }
    },
    {
        name: "<dt>",
        category: "lists",
        description: "Термин в списке определений.",
        attributes: [],
        details: {
            description: "Определяет термин в списке определений <dl>.",
            example: "<dl>\n<dt>HTML</dt>\n<dd>Язык разметки</dd>\n<dt>CSS</dt>\n<dd>Язык стилей</dd>\n</dl>"
        }
    },
    {
        name: "<em>",
        category: "text",
        description: "Выделяет важный текст курсивом.",
        attributes: [],
        details: {
            description: "Придает тексту семантическое значение важности. Отображается курсивом.",
            example: "Это <em>очень важный</em> текст."
        }
    },
    {
        name: "<embed>",
        category: "media",
        description: "Встраивает внешний контент или плагин.",
        attributes: [
            { name: "src", required: true },
            { name: "type" },
            { name: "width" },
            { name: "height" }
        ],
        details: {
            description: "Используется для встраивания внешнего контента, такого как PDF, Flash, видео.",
            example: '<embed src=\"video.swf\" type=\"application/x-shockwave-flash\" width=\"400\" height=\"300\">'
        }
    },
    {
        name: "<fieldset>",
        category: "forms",
        description: "Группирует связанные поля формы с рамкой.",
        attributes: [
            { name: "disabled" },
            { name: "form" }
        ],
        details: {
            description: "Создает группу связанных элементов формы с видимой рамкой и заголовком <legend>.",
            example: '<fieldset>\n<legend>Персональная информация</legend>\n<label>Имя: <input type=\"text\"></label><br>\n<label>Email: <input type=\"email\"></label>\n</fieldset>'
        }
    },
    {
        name: "<figcaption>",
        category: "media",
        description: "Подпись для элемента <figure>.",
        attributes: [],
        details: {
            description: "Определяет заголовок или подпись для содержимого элемента <figure>.",
            example: '<figure>\n<img src=\"image.jpg\" alt=\"Описание\">\n<figcaption>Подпись к изображению</figcaption>\n</figure>'
        }
    },
    {
        name: "<figure>",
        category: "media",
        description: "Самодостаточный контейнер для медиа-контента.",
        attributes: [],
        details: {
            description: "Используется для группировки иллюстраций, диаграмм, фото с подписью <figcaption>.",
            example: '<figure>\n<img src=\"chart.png\" alt=\"График\">\n<figcaption>Рис. 1 - График продаж</figcaption>\n</figure>'
        }
    },
    {
        name: "<footer>",
        category: "structure",
        description: "Нижний колонтитул документа или раздела.",
        attributes: [],
        details: {
            description: "Обычно содержит информацию об авторе, copyright, контактные данные.",
            example: "<footer>\n<p>Автор: Иван Иванов</p>\n<p><a href=\"mailto:ivan@example.com\">ivan@example.com</a></p>\n</footer>"
        }
    },
    {
        name: "<form>",
        category: "forms",
        description: "Форма для сбора и отправки данных пользователя.",
        attributes: [
            { name: "action", required: true },
            { name: "method" },
            { name: "enctype" }
        ],
        details: {
            description: "Контейнер для элементов ввода данных. Отправляет данные на сервер для обработки.",
            example: '<form action=\"/submit\" method=\"post\">\n<label>Имя: <input type=\"text\" name=\"name\"></label><br>\n<label>Email: <input type=\"email\" name=\"email\"></label><br>\n<button type=\"submit\">Отправить</button>\n</form>'
        }
    },
    {
        name: "<h1> to <h6>",
        category: "text",
        description: "Заголовки шести уровней важности.",
        attributes: [],
        details: {
            description: "h1 - самый важный заголовок, h6 - наименее важный. Создают иерархию контента.",
            example: "<h1>Главный заголовок</h1>\n<h2>Подзаголовок</h2>\n<h3>Меньший заголовок</h3>"
        }
    },
    {
        name: "<head>",
        category: "basic",
        description: "Контейнер для метаданных документа.",
        attributes: [],
        details: {
            description: "Содержит мета-информацию о документе: заголовок, стили, скрипты, мета-теги.",
            example: "<head>\n<title>Мой сайт</title>\n<meta charset=\"UTF-8\">\n<link rel=\"stylesheet\" href=\"styles.css\">\n</head>"
        }
    },
    {
        name: "<header>",
        category: "structure",
        description: "Вводная часть страницы или раздела.",
        attributes: [],
        details: {
            description: "Обычно содержит логотип, навигацию, заголовок раздела.",
            example: "<header>\n<h1>Название сайта</h1>\n<nav>\n<a href=\"/\">Главная</a>\n<a href=\"/about\">О нас</a>\n</nav>\n</header>"
        }
    },
    {
        name: "<hr>",
        category: "text",
        description: "Горизонтальная линия-разделитель.",
        attributes: [],
        details: {
            description: "Создает тематический раздел между параграфами. Отображается горизонтальной линией.",
            example: "<p>Первый раздел текста</p>\n<hr>\n<p>Второй раздел текста</p>"
        }
    },
    {
        name: "<html>",
        category: "basic",
        description: "Корневой элемент HTML-документа.",
        attributes: [
            { name: "lang" }
        ],
        details: {
            description: "Является контейнером для всех остальных HTML-элементов. Сообщает браузеру, что это HTML-документ.",
            example: '<html lang=\"ru\">\n<head>\n<title>Заголовок</title>\n</head>\n<body>\nСодержимое\n</body>\n</html>'
        }
    },
    {
        name: "<i>",
        category: "text",
        description: "Выделяет текст курсивом без придания важности.",
        attributes: [],
        details: {
            description: "Используется для стилизации текста курсивом. Для семантического выделения используйте <em>.",
            example: "Название <i>Война и мир</i> написано курсивом."
        }
    },
    {
        name: "<iframe>",
        category: "media",
        description: "Встраивает другую веб-страницу в текущую.",
        attributes: [
            { name: "src", required: true },
            { name: "width" },
            { name: "height" }
        ],
        details: {
            description: "Создает встроенный фрейм для отображения другого HTML-документа.",
            example: '<iframe src=\"https://example.com\" width=\"300\" height=\"200\"></iframe>'
        }
    },
    {
        name: "<img>",
        category: "media",
        description: "Вставляет изображение в документ.",
        attributes: [
            { name: "src", required: true },
            { name: "alt", required: true },
            { name: "width" },
            { name: "height" }
        ],
        details: {
            description: "Одиночный тег. Атрибут alt обязателен для доступности и SEO.",
            example: '<img src=\"image.jpg\" alt=\"Описание изображения\" width=\"400\" height=\"300\">'
        }
    },
    {
        name: "<input>",
        category: "forms",
        description: "Создает поле для ввода данных.",
        attributes: [
            { name: "type" },
            { name: "name" },
            { name: "value" },
            { name: "placeholder" }
        ],
        details: {
            description: "Многофункциональный элемент для создания различных полей ввода: текст, пароль, чекбокс, радио и др.",
            example: '<input type=\"text\" name=\"username\" placeholder=\"Введите имя\">\n<input type=\"password\" name=\"password\">\n<input type=\"checkbox\" name=\"subscribe\">'
        }
    },
    {
        name: "<ins>",
        category: "text",
        description: "Помечает текст как добавленный.",
        attributes: [
            { name: "cite" },
            { name: "datetime" }
        ],
        details: {
            description: "Отображается подчёркнутым текстом. Используется для показа изменений в документе.",
            example: 'Цена: <del>1000 руб.</del> <ins>800 руб.</ins>'
        }
    },
    {
        name: "<kbd>",
        category: "text",
        description: "Текст, вводимый с клавиатуры.",
        attributes: [],
        details: {
            description: "Отображается моноширинным шрифтом. Используется для обозначения клавиш или ввода пользователя.",
            example: "Нажмите <kbd>Ctrl</kbd> + <kbd>C</kbd> для копирования."
        }
    },
    {
        name: "<label>",
        category: "forms",
        description: "Подпись для элемента формы.",
        attributes: [
            { name: "for" }
        ],
        details: {
            description: "Улучшает доступность и удобство использования. Связывается с элементом через атрибут for или вложением.",
            example: '<label for=\"username\">Имя пользователя:</label>\n<input type=\"text\" id=\"username\">'
        }
    },
    {
        name: "<legend>",
        category: "forms",
        description: "Заголовок для группы полей <fieldset>.",
        attributes: [],
        details: {
            description: "Определяет заголовок для группы полей формы, объединенных в <fieldset>.",
            example: '<fieldset>\n<legend>Контактная информация</legend>\n<label>Телефон: <input type=\"tel\"></label>\n</fieldset>'
        }
    },
    {
        name: "<li>",
        category: "lists",
        description: "Элемент маркированного или нумерованного списка.",
        attributes: [],
        details: {
            description: "Используется внутри <ul> или <ol> для создания элементов списка.",
            example: "<ul>\n<li>Первый пункт</li>\n<li>Второй пункт</li>\n</ul>"
        }
    },
    {
        name: "<link>",
        category: "basic",
        description: "Подключает внешние ресурсы к документу.",
        attributes: [
            { name: "rel", required: true },
            { name: "href", required: true }
        ],
        details: {
            description: "Чаще всего используется для подключения CSS-стилей. Размещается в <head>.",
            example: '<link rel=\"stylesheet\" href=\"styles.css\">\n<link rel=\"icon\" href=\"favicon.ico\">'
        }
    },
    {
        name: "<main>",
        category: "structure",
        description: "Основное уникальное содержимое документа.",
        attributes: [],
        details: {
            description: "Должен быть уникальным для страницы. Не должен повторяться на других страницах сайта.",
            example: "<main>\n<h1>Главный контент</h1>\n<p>Уникальное содержимое страницы</p>\n</main>"
        }
    },
    {
        name: "<map>",
        category: "media",
        description: "Контейнер для активных областей изображения.",
        attributes: [
            { name: "name", required: true }
        ],
        details: {
            description: "Содержит элементы <area>, которые определяют кликабельные области на изображении.",
            example: '<img src=\"planets.jpg\" usemap=\"#planetmap\">\n<map name=\"planetmap\">\n<area shape=\"rect\" coords=\"0,0,82,126\" href=\"sun.html\" alt=\"Sun\">\n</map>'
        }
    },
    {
        name: "<mark>",
        category: "text",
        description: "Выделяет текст желтым фоном.",
        attributes: [],
        details: {
            description: "Используется для выделения фрагментов текста, как маркером.",
            example: "Это <mark>важный текст</mark>, который нужно выделить."
        }
    },
    {
        name: "<meta>",
        category: "basic",
        description: "Предоставляет метаданные о документе.",
        attributes: [
            { name: "charset" },
            { name: "name" },
            { name: "content" }
        ],
        details: {
            description: "Используется для указания кодировки, описания, ключевых слов и другой мета-информации.",
            example: '<meta charset=\"UTF-8\">\n<meta name=\"description\" content=\"Описание страницы\">\n<meta name=\"keywords\" content=\"HTML, CSS, JavaScript\">'
        }
    },
    {
        name: "<meter>",
        category: "forms",
        description: "Индикатор измерения в заданном диапазоне.",
        attributes: [
            { name: "value" },
            { name: "min" },
            { name: "max" }
        ],
        details: {
            description: "Используется для отображения скалярного значения в известном диапазоне.",
            example: '<meter value=\"0.6\">60%</meter>\n<meter value=\"2\" min=\"0\" max=\"10\">2 из 10</meter>'
        }
    },
    {
        name: "<nav>",
        category: "structure",
        description: "Навигационное меню по сайту.",
        attributes: [],
        details: {
            description: "Содержит основные навигационные ссылки по сайту.",
            example: "<nav>\n<a href=\"/\">Главная</a>\n<a href=\"/about\">О нас</a>\n<a href=\"/contact\">Контакты</a>\n</nav>"
        }
    },
    {
        name: "<noscript>",
        category: "scripting",
        description: "Альтернативный контент при отключенном JavaScript.",
        attributes: [],
        details: {
            description: "Содержимое отображается, если в браузере отключен JavaScript.",
            example: '<noscript>\n<p>Для работы сайта требуется включить JavaScript</p>\n</noscript>'
        }
    },
    {
        name: "<object>",
        category: "media",
        description: "Встраивает внешний ресурс в документ.",
        attributes: [
            { name: "data" },
            { name: "type" },
            { name: "width" },
            { name: "height" }
        ],
        details: {
            description: "Может использоваться для встраивания различных типов медиа: PDF, Flash, изображения.",
            example: '<object data=\"video.swf\" type=\"application/x-shockwave-flash\" width=\"400\" height=\"300\"></object>'
        }
    },
    {
        name: "<ol>",
        category: "lists",
        description: "Упорядоченный (нумерованный) список.",
        attributes: [
            { name: "type" },
            { name: "start" }
        ],
        details: {
            description: "Создает нумерованный список. Элементы списка помещаются в <li>.",
            example: "<ol>\n<li>Первый пункт</li>\n<li>Второй пункт</li>\n<li>Третий пункт</li>\n</ol>"
        }
    },
    {
        name: "<optgroup>",
        category: "forms",
        description: "Группа вариантов в выпадающем списке.",
        attributes: [
            { name: "label", required: true }
        ],
        details: {
            description: "Создает группу связанных вариантов в элементе <select> с заголовком.",
            example: '<select>\n<optgroup label=\"Фрукты\">\n<option>Яблоко</option>\n<option>Банан</option>\n</optgroup>\n<optgroup label=\"Овощи\">\n<option>Морковь</option>\n<option>Картофель</option>\n</optgroup>\n</select>'
        }
    },
    {
        name: "<option>",
        category: "forms",
        description: "Вариант в выпадающем списке.",
        attributes: [
            { name: "value" },
            { name: "selected" }
        ],
        details: {
            description: "Определяет вариант для выбора в элементах <select>, <datalist>, <optgroup>.",
            example: '<select>\n<option value=\"volvo\">Volvo</option>\n<option value=\"saab\">Saab</option>\n<option value=\"mercedes\">Mercedes</option>\n</select>'
        }
    },
    {
        name: "<output>",
        category: "forms",
        description: "Поле для вывода результата вычислений.",
        attributes: [
            { name: "for" },
            { name: "name" }
        ],
        details: {
            description: "Используется для отображения результата вычисления, выполненного скриптом.",
            example: '<form oninput=\"x.value=parseInt(a.value)+parseInt(b.value)\">\n<input type=\"range\" id=\"a\" value=\"50\"> +\n<input type=\"number\" id=\"b\" value=\"25\"> =\n<output name=\"x\" for=\"a b\">75</output>\n</form>'
        }
    },
    {
        name: "<p>",
        category: "text",
        description: "Абзац текста.",
        attributes: [],
        details: {
            description: "Блочный элемент для текстового контента. Автоматически добавляет отступы сверху и снизу.",
            example: "<p>Это первый абзац текста.</p>\n<p>Это второй абзац с дополнительной информацией.</p>"
        }
    },
    {
        name: "<param>",
        category: "media",
        description: "Параметры для плагинов в <object>.",
        attributes: [
            { name: "name", required: true },
            { name: "value" }
        ],
        details: {
            description: "Используется внутри <object> для передачи параметров встраиваемому плагину.",
            example: '<object data=\"video.swf\">\n<param name=\"autoplay\" value=\"true\">\n<param name=\"loop\" value=\"false\">\n</object>'
        }
    },
    {
        name: "<picture>",
        category: "media",
        description: "Контейнер для адаптивных изображений.",
        attributes: [],
        details: {
            description: "Позволяет браузеру выбирать наиболее подходящее изображение из нескольких вариантов.",
            example: '<picture>\n<source media=\"(min-width: 650px)\" srcset=\"img_pink_flowers.jpg\">\n<source media=\"(min-width: 465px)\" srcset=\"img_white_flower.jpg\">\n<img src=\"img_orange_flowers.jpg\" alt=\"Цветы\">\n</picture>'
        }
    },
    {
        name: "<pre>",
        category: "text",
        description: "Текст с сохранением пробелов и переносов.",
        attributes: [],
        details: {
            description: "Отображает текст с сохранением всех пробелов и переносов строк. Используется для кода.",
            example: "<pre>\nfunction hello() {\n    console.log(\"Hello, world!\");\n}\n</pre>"
        }
    },
    {
        name: "<progress>",
        category: "forms",
        description: "Индикатор выполнения задачи.",
        attributes: [
            { name: "value" },
            { name: "max" }
        ],
        details: {
            description: "Отображает прогресс выполнения задачи, такой как загрузка файла или выполнение операции.",
            example: '<progress value=\"70\" max=\"100\">70%</progress>'
        }
    },
    {
        name: "<q>",
        category: "text",
        description: "Краткая цитата в строке.",
        attributes: [
            { name: "cite" }
        ],
        details: {
            description: "Используется для коротких цитат, которые не требуют разрыва абзаца. Автоматически добавляет кавычки.",
            example: 'Он сказал: <q cite=\"http://example.com\">Жизнь прекрасна!</q>'
        }
    },
    {
        name: "<rp>",
        category: "text",
        description: "Резервный текст для браузеров без поддержки ruby.",
        attributes: [],
        details: {
            description: "Используется внутри <ruby> для отображения альтернативного текста, если браузер не поддерживает ruby-аннотации.",
            example: '<ruby>\n漢 <rp>(</rp><rt>kan</rt><rp>)</rp>\n</ruby>'
        }
    },
    {
        name: "<rt>",
        category: "text",
        description: "Аннотация в ruby-разметке.",
        attributes: [],
        details: {
            description: "Определяет произношение или перевод символов в элементе <ruby>.",
            example: '<ruby>\n漢 <rt>hàn</rt>\n</ruby>'
        }
    },
    {
        name: "<ruby>",
        category: "text",
        description: "Аннотация для восточноазиатских символов.",
        attributes: [],
        details: {
            description: "Используется для отображения произношения или перевода восточноазиатских символов.",
            example: '<ruby>\n漢 <rt>hàn</rt>\n</ruby>'
        }
    },
    {
        name: "<s>",
        category: "text",
        description: "Зачёркнутый текст.",
        attributes: [],
        details: {
            description: "Отображает текст перечёркнутым. Используется для обозначения устаревшей или неактуальной информации.",
            example: "Цена: <s>1000 руб.</s> 800 руб."
        }
    },
    {
        name: "<samp>",
        category: "text",
        description: "Пример вывода компьютерной программы.",
        attributes: [],
        details: {
            description: "Отображается моноширинным шрифтом. Используется для демонстрации вывода программы.",
            example: "Если все правильно, вы увидите: <samp>Hello, World!</samp>"
        }
    },
    {
        name: "<script>",
        category: "scripting",
        description: "Подключает или содержит JavaScript-код.",
        attributes: [
            { name: "src" },
            { name: "type" }
        ],
        details: {
            description: "Может содержать код JavaScript или ссылаться на внешний файл с кодом.",
            example: '<script>\nconsole.log(\"Hello, World!\");\n</script>\n<script src=\"script.js\"></script>'
        }
    },
    {
        name: "<section>",
        category: "structure",
        description: "Логический раздел документа.",
        attributes: [],
        details: {
            description: "Определяет тематическую группу контента, обычно с заголовком.",
            example: "<section>\n<h2>О нас</h2>\n<p>Информация о нашей компании...</p>\n</section>"
        }
    },
    {
        name: "<select>",
        category: "forms",
        description: "Выпадающий список с вариантами.",
        attributes: [
            { name: "name" },
            { name: "multiple" }
        ],
        details: {
            description: "Создает список вариантов для выбора. Варианты задаются элементами <option>.",
            example: '<select name=\"cars\">\n<option value=\"volvo\">Volvo</option>\n<option value=\"saab\">Saab</option>\n<option value=\"mercedes\">Mercedes</option>\n</select>'
        }
    },
    {
        name: "<small>",
        category: "text",
        description: "Текст меньшего размера.",
        attributes: [],
        details: {
            description: "Отображает текст шрифтом меньшего размера. Часто используется для юридической информации.",
            example: "<small>© 2024 Компания. Все права защищены.</small>"
        }
    },
    {
        name: "<source>",
        category: "media",
        description: "Альтернативные источники медиа.",
        attributes: [
            { name: "src" },
            { name: "type" }
        ],
        details: {
            description: "Используется внутри <audio>, <video>, <picture> для указания альтернативных медиаресурсов.",
            example: '<audio controls>\n<source src=\"audio.mp3\" type=\"audio/mpeg\">\n<source src=\"audio.ogg\" type=\"audio/ogg\">\nВаш браузер не поддерживает аудио.\n</audio>'
        }
    },
    {
        name: "<span>",
        category: "text",
        description: "Универсальный строчный контейнер.",
        attributes: [],
        details: {
            description: "Используется для группировки строчных элементов и применения стилей.",
            example: "Это <span style=\"color: red;\">красный текст</span> внутри абзаца."
        }
    },
    {
        name: "<strong>",
        category: "text",
        description: "Важный текст с сильным акцентом.",
        attributes: [],
        details: {
            description: "Отображается жирным шрифтом. Придает тексту семантическое значение высокой важности.",
            example: "<strong>Внимание!</strong> Это очень важное сообщение."
        }
    },
    {
        name: "<style>",
        category: "basic",
        description: "Встроенные CSS-стили.",
        attributes: [
            { name: "type" }
        ],
        details: {
            description: "Содержит CSS-стили, применяемые к текущему документу. Размещается в <head>.",
            example: '<style>\nbody { font-family: Arial; }\nh1 { color: blue; }\n</style>'
        }
    },
    {
        name: "<sub>",
        category: "text",
        description: "Подстрочное написание.",
        attributes: [],
        details: {
            description: "Отображает текст ниже базовой линии. Используется для химических формул, математических индексов.",
            example: "H<sub>2</sub>O - формула воды."
        }
    },
    {
        name: "<summary>",
        category: "interactive",
        description: "Заголовок для сворачиваемого блока <details>.",
        attributes: [],
        details: {
            description: "Определяет видимый заголовок для элемента <details>. При клике раскрывает/скрывает содержимое.",
            example: '<details>\n<summary>Подробнее о HTML</summary>\n<p>HTML - это язык разметки...</p>\n</details>'
        }
    },
    {
        name: "<sup>",
        category: "text",
        description: "Надстрочное написание.",
        attributes: [],
        details: {
            description: "Отображает текст выше базовой линии. Используется для степеней, сносок.",
            example: "x<sup>2</sup> + y<sup>2</sup> = z<sup>2</sup>"
        }
    },
    {
        name: "<table>",
        category: "tables",
        description: "Создает таблицу для данных.",
        attributes: [],
        details: {
            description: "Контейнер для табличных данных. Содержит строки <tr>, ячейки <td> и заголовки <th>.",
            example: "<table>\n<tr><th>Имя</th><th>Возраст</th></tr>\n<tr><td>Иван</td><td>25</td></tr>\n<tr><td>Мария</td><td>30</td></tr>\n</table>"
        }
    },
    {
        name: "<tbody>",
        category: "tables",
        description: "Тело таблицы с данными.",
        attributes: [],
        details: {
            description: "Группирует основные строки таблицы. Используется вместе с <thead> и <tfoot>.",
            example: "<table>\n<thead><tr><th>Заголовок</th></tr></thead>\n<tbody><tr><td>Данные</td></tr></tbody>\n</table>"
        }
    },
    {
        name: "<td>",
        category: "tables",
        description: "Ячейка таблицы с данными.",
        attributes: [
            { name: "colspan" },
            { name: "rowspan" }
        ],
        details: {
            description: "Определяет ячейку с данными в таблице. Может объединять ячейки через colspan и rowspan.",
            example: "<table>\n<tr><td>Ячейка 1</td><td>Ячейка 2</td></tr>\n<tr><td colspan=\"2\">Объединенная ячейка</td></tr>\n</table>"
        }
    },
    {
        name: "<template>",
        category: "scripting",
        description: "Шаблон для клонирования через JavaScript.",
        attributes: [],
        details: {
            description: "Содержит HTML-код, который не отображается, но может быть клонирован и вставлен скриптом.",
            example: '<template id=\"myTemplate\">\n<div class=\"item\">\n<h3>Заголовок</h3>\n<p>Текст</p>\n</div>\n</template>'
        }
    },
    {
        name: "<textarea>",
        category: "forms",
        description: "Многострочное поле для ввода текста.",
        attributes: [
            { name: "rows" },
            { name: "cols" },
            { name: "placeholder" }
        ],
        details: {
            description: "Создает большое текстовое поле для ввода длинного текста.",
            example: '<textarea rows=\"4\" cols=\"50\" placeholder=\"Введите ваш текст...\"></textarea>'
        }
    },
    {
        name: "<tfoot>",
        category: "tables",
        description: "Нижний колонтитул таблицы.",
        attributes: [],
        details: {
            description: "Группирует строки-итоги в нижней части таблицы.",
            example: "<table>\n<thead><tr><th>Месяц</th><th>Продажи</th></tr></thead>\n<tbody><tr><td>Январь</td><td>1000</td></tr></tbody>\n<tfoot><tr><td>Итого</td><td>1000</td></tr></tfoot>\n</table>"
        }
    },
    {
        name: "<th>",
        category: "tables",
        description: "Заголовочная ячейка таблицы.",
        attributes: [
            { name: "colspan" },
            { name: "rowspan" },
            { name: "scope" }
        ],
        details: {
            description: "Определяет ячейку-заголовок в таблице. Обычно отображается жирным шрифтом.",
            example: "<table>\n<tr><th>Имя</th><th>Возраст</th></tr>\n<tr><td>Иван</td><td>25</td></tr>\n</table>"
        }
    },
    {
        name: "<thead>",
        category: "tables",
        description: "Заголовок таблицы с колонками.",
        attributes: [],
        details: {
            description: "Группирует строки-заголовки в верхней части таблицы.",
            example: "<table>\n<thead>\n<tr><th>Заголовок 1</th><th>Заголовок 2</th></tr>\n</thead>\n<tbody>\n<tr><td>Данные 1</td><td>Данные 2</td></tr>\n</tbody>\n</table>"
        }
    },
    {
        name: "<time>",
        category: "text",
        description: "Дата и/или время в машиночитаемом формате.",
        attributes: [
            { name: "datetime" }
        ],
        details: {
            description: "Представляет дату и/или время. Атрибут datetime содержит машиночитаемое значение.",
            example: '<time datetime=\"2024-01-15\">15 января 2024</time>'
        }
    },
    {
        name: "<title>",
        category: "basic",
        description: "Заголовок документа (отображается во вкладке браузера).",
        attributes: [],
        details: {
            description: "Определяет заголовок документа, который отображается в строке заголовка браузера и в результатах поиска.",
            example: "<title>Мой веб-сайт - Главная страница</title>"
        }
    },
    {
        name: "<tr>",
        category: "tables",
        description: "Строка таблицы.",
        attributes: [],
        details: {
            description: "Определяет строку в таблице. Содержит ячейки <td> или заголовки <th>.",
            example: "<table>\n<tr><td>Ячейка 1</td><td>Ячейка 2</td></tr>\n<tr><td>Ячейка 3</td><td>Ячейка 4</td></tr>\n</table>"
        }
    },
    {
        name: "<track>",
        category: "media",
        description: "Субтитры для <audio> и <video>.",
        attributes: [
            { name: "src", required: true },
            { name: "kind" },
            { name: "srclang" }
        ],
        details: {
            description: "Определяет текстовые дорожки для медиа-элементов (субтитры, описания, главы).",
            example: '<video controls>\n<source src=\"movie.mp4\" type=\"video/mp4\">\n<track src=\"subtitles_en.vtt\" kind=\"subtitles\" srclang=\"en\" label=\"English\">\n</video>'
        }
    },
    {
        name: "<u>",
        category: "text",
        description: "Подчёркнутый текст.",
        attributes: [],
        details: {
            description: "Отображает текст с подчёркиванием. Не имеет семантического значения.",
            example: "Это <u>подчёркнутый текст</u>."
        }
    },
    {
        name: "<ul>",
        category: "lists",
        description: "Маркированный список.",
        attributes: [],
        details: {
            description: "Создает неупорядоченный (маркированный) список. Элементы списка помещаются в <li>.",
            example: "<ul>\n<li>Первый пункт</li>\n<li>Второй пункт</li>\n<li>Третий пункт</li>\n</ul>"
        }
    },
    {
        name: "<var>",
        category: "text",
        description: "Переменная в математическом выражении или коде.",
        attributes: [],
        details: {
            description: "Отображается курсивом. Используется для обозначения переменных в математике или программировании.",
            example: "Переменная <var>x</var> равна 10."
        }
    },
    {
        name: "<video>",
        category: "media",
        description: "Встраивает видеоплеер.",
        attributes: [
            { name: "src" },
            { name: "controls" },
            { name: "width" },
            { name: "height" }
        ],
        details: {
            description: "Поддерживает форматы MP4, WebM, OGG. Для отображения элементов управления используйте атрибут controls.",
            example: '<video controls width=\"320\" height=\"240\">\n<source src=\"movie.mp4\" type=\"video/mp4\">\nВаш браузер не поддерживает видео.\n</video>'
        }
    },
    {
        name: "<wbr>",
        category: "text",
        description: "Возможное место разрыва длинного слова.",
        attributes: [],
        details: {
            description: "Указывает браузеру, где можно разорвать длинное слово, если это необходимо.",
            example: "Оченьдлинноеслово<wbr>котороеможетбытьразорвано"
        }
    }
];

// Категории тегов
const categories = {
    'basic': { name: '📄 Основные теги документа', icon: '📄' },
    'text': { name: '📝 Текстовые теги', icon: '📝' },
    'media': { name: '🖼️ Медиа и ссылки', icon: '🖼️' },
    'forms': { name: '📊 Формы и ввод данных', icon: '📊' },
    'structure': { name: '🏗️ Структурные теги', icon: '🏗️' },
    'lists': { name: '📋 Списки', icon: '📋' },
    'tables': { name: '📊 Таблицы', icon: '📊' },
    'scripting': { name: '⚙️ Скрипты и метаданные', icon: '⚙️' },
    'interactive': { name: '🎮 Интерактивные элементы', icon: '🎮' }
};

// Функция для создания HTML разметки тега
function createTagHTML(tag) {
    const attributesHTML = tag.attributes.length > 0 
        ? `<div class="attributes-title">📎 Дополнительные теги:</div>
           <div class="attributes-list">${tag.attributes.map(attr => 
               attr.required ? `<span class="required">${attr.name}</span>` : attr.name
           ).join(', ')}</div>`
        : '<div class="no-attributes">Нет атрибутов</div>';

    const detailsHTML = tag.details ? `
        <div class="tag-details">
            ${tag.details.description ? `
            <div class="detail-section">
                <div class="detail-title">💡 Подробности</div>
                <div class="detail-content">${tag.details.description}</div>
            </div>` : ''}
            ${tag.details.attributes ? `
            <div class="detail-section">
                <div class="detail-title">🎯 Атрибуты</div>
                <div class="detail-content">${tag.details.attributes}</div>
            </div>` : ''}
            ${tag.details.example ? `
            <div class="detail-section">
                <div class="detail-title">📝 Пример</div>
                <div class="code-example">${tag.details.example}</div>
            </div>` : ''}
        </div>
    ` : '';

    return `
        <div class="tag-card" onclick="toggleTag(this)">
            <div class="tag-header">
                <div class="tag-name">${tag.name}</div>
                <div class="toggle-icon">▼</div>
            </div>
            <div class="tag-description">${tag.description}</div>
            <div class="tag-attributes">
                ${attributesHTML}
            </div>
            ${detailsHTML}
        </div>
    `;
}

// Функция для отображения всех тегов по категориям
function displayAllTags() {
    const container = document.getElementById('tagsContainer');
    let totalTags = 0;

    // Группируем теги по категориям
    const tagsByCategory = {};
    allTags.forEach(tag => {
        if (!tagsByCategory[tag.category]) {
            tagsByCategory[tag.category] = [];
        }
        tagsByCategory[tag.category].push(tag);
        totalTags++;
    });

    // Обновляем счетчик тегов
    document.getElementById('totalTags').textContent = totalTags;

    // Создаем HTML для каждой категории
    for (const [categoryId, categoryInfo] of Object.entries(categories)) {
        const categoryTags = tagsByCategory[categoryId];
        if (categoryTags && categoryTags.length > 0) {
            const categoryHTML = `
                <div class="category" id="${categoryId}">
                    <div class="category-header">
                        <div class="category-icon">${categoryInfo.icon}</div>
                        <h2>${categoryInfo.name}</h2>
                    </div>
                    <div class="tags-grid">
                        ${categoryTags.map(tag => createTagHTML(tag)).join('')}
                    </div>
                </div>
            `;
            container.innerHTML += categoryHTML;
        }
    }
}

// Функция для переключения аккордеона
function toggleTag(card) {
    const isActive = card.classList.contains('active');
    
    // Закрываем все открытые карточки
    document.querySelectorAll('.tag-card.active').forEach(activeCard => {
        if (activeCard !== card) {
            activeCard.classList.remove('active');
        }
    });
    
    // Переключаем текущую карточку
    card.classList.toggle('active', !isActive);
}

// Поиск по тегам
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        const tagCards = document.querySelectorAll('.tag-card');
        let foundCount = 0;
        
        // Показываем/скрываем категории
        document.querySelectorAll('.category').forEach(category => {
            category.style.display = 'none';
        });
        
        tagCards.forEach(card => {
            const tagName = card.querySelector('.tag-name').textContent.toLowerCase();
            const tagDescription = card.querySelector('.tag-description').textContent.toLowerCase();
            
            if (searchTerm === '' || tagName.includes(searchTerm) || tagDescription.includes(searchTerm)) {
                card.style.display = 'block';
                foundCount++;
                // Показываем родительскую категорию
                const category = card.closest('.category');
                if (category) {
                    category.style.display = 'block';
                }
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Плавная прокрутка к категориям
function scrollToCategory(categoryId) {
    const element = document.getElementById(categoryId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Закрытие карточек при клике вне их
function setupClickOutside() {
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.tag-card')) {
            document.querySelectorAll('.tag-card.active').forEach(card => {
                card.classList.remove('active');
            });
        }
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    displayAllTags();
    setupSearch();
    setupClickOutside();
});
