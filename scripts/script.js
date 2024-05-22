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

    const details = document.querySelectorAll('details');

    details.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const openItem = document.querySelector('details[open]');
        if (openItem) openItem.open = false;
        if (openItem !== item) item.open = true 
    })
    })



    var button = document.getElementById("show-more");
    var list = document.getElementById("cards");
    var items = list.getElementsByClassName("card");

    if ( window.matchMedia("(max-width: 430px)").matches)
    {
        var visibleItemCount = 4;

        const headerBurger = document.querySelector('.header-burger');
        const navMenu = document.getElementById('nav-menu');
        const menuButton = document.getElementById('menu-button-mob');
        const menu = document.getElementById('menu');
        const body = document.body;
        const marketing = document.querySelector('.marketing-block');
        const menuItems = document.querySelectorAll('.menu-item');

        function preventKeyBoardScroll(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        
        function disableScroll() {
            document.body.addEventListener('touchmove', preventKeyBoardScroll, { passive: false });
        }
        
        function enableScroll() {
            document.body.removeEventListener('touchmove', preventKeyBoardScroll);
        }

        headerBurger.addEventListener('click', function() {
            toggleHeaderBurger();
            toggleMenu();
        });

        menuItems.forEach(function(menuItem) {
            menuItem.addEventListener('click', function() {
                toggleHeaderBurger();
                toggleMenu();
            });
        });

        menuButton.addEventListener('click', function() {
            toggleHeaderBurger();
            toggleMenu();
        });

        function toggleMenu() {
            if (navMenu.style.display === 'none' || navMenu.style.display === '') {
                navMenu.style.display = 'block';
                menuButton.style.display = 'block';
                menu.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                // marketing.style.z-index = '-1';
                marketing.style.zIndex = '-1';
                disableScroll();
            } else {
                navMenu.style.display = 'none';
                menuButton.style.display = 'none';
                menu.style.backgroundColor = 'rgba(255, 255, 255, 0)';
                marketing.style.zIndex = '0';
                enableScroll();
            }
        }

        function toggleHeaderBurger() {
            headerBurger.classList.toggle('active');
        }
    }
    else
    {
        var visibleItemCount = 3;
    }

    var hiddenItemCount = items.length - visibleItemCount;
    var isHidden = true;

    for (var i = visibleItemCount; i < items.length; i++) {
        items[i].style.display = "none";
    }

    button.onclick = function() {
        if (isHidden) {
            for (var i = visibleItemCount; i < visibleItemCount + hiddenItemCount; i++) {
                if (items[i]) {
                    items[i].style.display = "block";
                }
            }
            button.textContent = "Скрыть";
        } else {
            for (var i = visibleItemCount; i < items.length; i++) {
                items[i].style.display = "none";
            }
            button.textContent = "Показать еще";
        }
        isHidden = !isHidden;
    };

    if ( window.matchMedia("(min-width: 431px)").matches)
    {
        var cardsFeedback = document.querySelector('.cards-feedback');
        var cardFeedbacks = document.querySelectorAll('.card-feedback');
        var currentMargin = 0;

        // Рассчитать общую ширину всех карточек
        var totalWidth = 0;
        cardFeedbacks.forEach(function(card) {
            totalWidth += card.offsetWidth + parseInt(window.getComputedStyle(card).marginRight);
        });
        cardsFeedback.style.width = totalWidth + 'px';

        // Функция для сдвига влево
        function slideNext() {
            var cardWidth = cardFeedbacks[0].offsetWidth + parseInt(window.getComputedStyle(cardFeedbacks[0]).marginRight);
            if (Math.abs(currentMargin) >= totalWidth - cardWidth * 3) {
                currentMargin = 0;
            } else {
                currentMargin -= cardWidth;
            }
            cardsFeedback.style.marginLeft = currentMargin + 'px';
        }

        // Функция для сдвига вправо
        function slidePrev() {
            var cardWidth = cardFeedbacks[0].offsetWidth + parseInt(window.getComputedStyle(cardFeedbacks[0]).marginRight);
            if (currentMargin >= 0) {
                currentMargin = -(totalWidth - cardWidth * 3);
            } else {
                currentMargin += cardWidth;
            }
            cardsFeedback.style.marginLeft = currentMargin + 'px';
        }

        // Привязка событий к кнопкам
        document.getElementById('sl-next').addEventListener('click', slideNext);
        document.getElementById('sl-prev').addEventListener('click', slidePrev);
    }

    var submitButton = document.getElementById('submitButton');
    var form = document.getElementById('myForm');
    var directionSelect = document.getElementById('direction');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (form.checkValidity()) {
            form.reset();
            directionSelect.value = '#';
        } else {
            form.reportValidity();
        }
    });
});

let currentImageIndex = 1;
let intervalId;

function changeImage(direction) {
    const totalImages = 3;
    const imgElement = document.getElementById('marketing-img');

    if (direction === 'next') {
        currentImageIndex = (currentImageIndex % totalImages) + 1;
    } else if (direction === 'prev') {
        currentImageIndex = (currentImageIndex - 2 + totalImages) % totalImages + 1;
    }

    imgElement.src = `image/marketing/marketing${currentImageIndex}.png`;
}

function startInterval() {
    intervalId = setInterval(function() {
        changeImage('next');
    }, 3000);
}

startInterval();

document.getElementById('next-btn').addEventListener('click', function() {
    const currentIndexBeforeReset = currentImageIndex; // Сохраняем текущий индекс изображения
    clearInterval(intervalId); // Сбросить интервал
    changeImage('next');
    currentImageIndex = currentIndexBeforeReset; // Восстанавливаем текущий индекс изображения
    startInterval(); // Запустить интервал заново
});

document.getElementById('prev-btn').addEventListener('click', function() {
    const currentIndexBeforeReset = currentImageIndex; // Сохраняем текущий индекс изображения
    clearInterval(intervalId); // Сбросить интервал
    changeImage('prev');
    currentImageIndex = currentIndexBeforeReset; // Восстанавливаем текущий индекс изображения
    startInterval(); // Запустить интервал заново
});

const imgElement = document.getElementById('marketing-img');
const hammer = new Hammer(imgElement);

hammer.on('swipeleft', function() {
    clearInterval(intervalId); // Сбросить интервал
    changeImage('next');
    startInterval(); // Запустить интервал заново
});

hammer.on('swiperight', function() {
    clearInterval(intervalId); // Сбросить интервал
    changeImage('prev');
    startInterval(); // Запустить интервал заново
});
