# Критерии приема

- Создан репозиторий `goit-js-hw-07`.
- При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую
  страницу на `GitHub Pages`.
- При посещении живой страницы задания, в консоли нету ошибок и предупреждений.
- Имена переменных и функций понятные, описательные.
- Код отформатирован `Prettier`.

## Стартовые файлы

[Скачай стартовые файлы](https://downgit.github.io/#/home?url=https://github.com/goitacademy/javascript-homework/tree/main/v2/07/src)
с базовой разметкой, готовыми стилями и подключенными файлами скриптов для
каждого задания. Скопируй их себе в проект.

В файле `gallery-items.js` есть массив `galleryItems`, который содержит объекты
с информацией о изображениях: маленькое (превью), оригинальное (большое) и
описание. Мы уже подключили его к каждому из JS-файлов проекта.

## Задание 1 - галерея изображений

Создай галерею с возможностью клика по её элементам и просмотра полноразмерного
изображения в модальном окне. Посмотри демо видео работы галереи.

<!-- Посмотри
[демо видео](https://user-images.githubusercontent.com/17479434/127711719-4e293f5b-fbaa-4851-8671-fc841963d961.mp4)
работы галереи. -->

https://user-images.githubusercontent.com/17479434/127711719-4e293f5b-fbaa-4851-8671-fc841963d961.mp4

Выполняй это задание в файлах `01-gallery.html` и `01-gallery.js`. Разбей его на
несколько подзадач:

1. Создание и рендер разметки по массиву данных `galleryItems` и
   предоставленному шаблону элемента галереи.
2. Реализация делегирования на `div.gallery` и получение `url` большого
   изображения.
3. Подключение скрипта и стилей библиотеки модального окна
   [basicLightbox](https://basiclightbox.electerious.com/). Используй
   [CDN сервис jsdelivr](https://www.jsdelivr.com/package/npm/basiclightbox?path=dist)
   и добавь в проект ссылки на минифицированные (`.min`) файлы библиотеки.
4. Открытие модального окна по клику на элементе галереи. Для этого ознакомься с
   [документацией](https://github.com/electerious/basicLightbox#readme) и
   [примерами](https://basiclightbox.electerious.com/).
5. Замена значения атрибута `src` элемента `<img>` в модальном окне перед
   открытием. Используй готовую разметку модального окна с изображением из
   примеров библиотеки [basicLightbox](https://basiclightbox.electerious.com/).

### Разметка элемента галереи

Ссылка на оригинальное изображение должна храниться в data-атрибуте `source` на
элементе `<img>`, и указываться в `href` ссылки. Не добавляй другие HTML теги
или CSS классы кроме тех, что есть в этом шаблоне.

```html
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>
```

Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по
умолчанию пользователь будет перенаправлен на другую страницу. Запрети это
поведение по умолчанию.

### Закрытие с клавиатуры

> ⚠️ Следующий функционал не обязателен при сдаче задания, но будет хорошей
> дополнительной практикой.

Добавь закрытие модального окна по нажатию клавиши `Escape`. Сделай так, чтобы
прослушивание клавиатуры было только пока открыто модальное окно. У библиотеки
[basicLightbox](https://basiclightbox.electerious.com/) есть метод для
программного закрытия модального окна.

## Задание 2 - библиотека `SimpleLightbox`

Сделай такую же галерею как в первом задании, но используя библиотеку
[SimpleLightbox](https://simplelightbox.com/), которая возьмет на себя обработку
кликов по изображениям, открытие и закрытие модального окна, а также
пролистывание изображений при помощи клавиатуры.

Посмотри демо видео работы галереи с подключенной библиотекой.

https://user-images.githubusercontent.com/17479434/127714821-4b7527c8-01db-42d3-83f0-8c1578561982.mp4

<!-- Посмотри
[демо видео](https://user-images.githubusercontent.com/17479434/127714821-4b7527c8-01db-42d3-83f0-8c1578561982.mp4)
работы галереи с подключенной библиотекой. -->

Необходимо немного изменить разметку карточки галереи, используй этот шаблон.

```html
<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>
```

Выполняй это задание в файлах `02-lightbox.html` и `02-lightbox.js`. Разбей его
на несколько подзадач:

1. Создание и рендер разметки по массиву данных `galleryItems` и
   предоставленному шаблону элемента галереи. Используй готовый код из первого
   задания.
2. Подключение скрипта и стилей библиотеки используя
   [CDN сервис cdnjs](https://cdnjs.com/libraries/simplelightbox). Необходимо
   добавить ссылки на два файла: `simple-lightbox.min.js` и
   `simple-lightbox.min.css`.
3. Инициализация библиотеки после того как элементы галереи созданы и добавлены
   в `div.gallery`. Для этого ознакомься с документацией
   [SimpleLightbox](https://simplelightbox.com/) - в первую очередь секции
   «Usage» и «Markup».
4. Посмотри в документации секцию «Options» и добавь отображение подписей к
   изображениям из атрибута `alt`. Пусть подпись будет снизу и появляется через
   250 миллисекунд после открытия изображения.