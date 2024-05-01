var button = document.getElementById("show-more");
var list = document.getElementById("cards");
var items = list.getElementsByClassName("card");
var visibleItemCount = 3; // количество элементов, которые отображаются изначально
var hiddenItemCount = items.length - visibleItemCount; // количество скрытых элементов
var isHidden = true; // флаг для отслеживания состояния кнопки

// Скрыть все элементы, кроме первых visibleItemCount
for (var i = visibleItemCount; i < items.length; i++) {
    items[i].style.display = "none";
}

button.onclick = function() {
    if (isHidden) {
        // Показать следующие hiddenItemCount элементов
        for (var i = visibleItemCount; i < visibleItemCount + hiddenItemCount; i++) {
            if (items[i]) {
                items[i].style.display = "block";
            }
        }
        button.textContent = "Скрыть";
    } else {
        // Скрыть все элементы, кроме первых visibleItemCount
        for (var i = visibleItemCount; i < items.length; i++) {
            items[i].style.display = "none";
        }
        button.textContent = "Показать еще";
    }
    isHidden = !isHidden; // Инвертировать состояние кнопки
};



document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item details');

    faqItems.forEach(function(item) {
        const toggle = item.querySelector('.toggle-img');
        const answer = item.querySelector('.faq-answer');

        item.addEventListener('toggle', function() {
            if (item.open) {
                answer.classList.add('show');
                toggle.src = 'image/minus.svg';
            } else {
                answer.classList.remove('show');
                toggle.src = 'image/plus.svg';
            }
        });
    });
});

const details = document.querySelectorAll('details');

// Проходимся по каждому элементу
details.forEach(item => {

  // На каждый элемент вешаем слушатель события клика
  item.addEventListener('click', (e) => {

    // Сбрасываем стандартное действие при клике
    e.preventDefault();
    
    // Находим открытый элемент
    const openItem = document.querySelector('details[open]');
    
    // Если есть открытый элемент удаляем ему атрибут open
    if (openItem) openItem.open = false;

    // Если открытый элемент не является тем, на который мы нажали, то нажатому элементу добавляем атрибут open
    if (openItem !== item) item.open = true 
  })
})

let currentImageIndex = 1; // Индекс текущего изображения

function changeImage(direction) {
    const totalImages = 3; // Общее количество изображений
    const imgElement = document.getElementById('marketing-img');

    if (direction === 'next') {
        currentImageIndex = (currentImageIndex % totalImages) + 1; // Увеличиваем индекс и циклически переходим к следующему изображению
    } else if (direction === 'prev') {
        currentImageIndex = (currentImageIndex - 2 + totalImages) % totalImages + 1; // Уменьшаем индекс и циклически переходим к предыдущему изображению
    }

    imgElement.src = `image/marketing/marketing${currentImageIndex}.png`; // Устанавливаем новый источник изображения
}

let intervalId; // Переменная для хранения идентификатора интервала

// Функция для запуска интервала смены изображений
function startInterval() {
    intervalId = setInterval(function() {
        changeImage('next'); // Переключаемся на следующее изображение
    }, 10000); // Интервал смены изображений каждые 15 секунд (15000 миллисекунд)
}

// Запускаем интервал смены изображений
startInterval();

// Обработчик события для кнопки "Вперед"
document.getElementById('next-btn').addEventListener('click', function() {
    clearInterval(intervalId); // Очищаем предыдущий интервал
    changeImage('next'); // Переключаем изображение
    startInterval(); // Запускаем новый интервал
});

// Обработчик события для кнопки "Назад"
document.getElementById('prev-btn').addEventListener('click', function() {
    clearInterval(intervalId); // Очищаем предыдущий интервал
    changeImage('prev'); // Переключаем изображение
    startInterval(); // Запускаем новый интервал
});
