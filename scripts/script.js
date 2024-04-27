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

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(function(item) {
            const header = item.querySelector('.faq-header');
            const toggle = item.querySelector('.toggle-img');
            const answer = item.querySelector('.faq-answer');

            header.addEventListener('click', function() {
                answer.classList.toggle('show');
                toggle.src = answer.classList.contains('show') ? 'image/minus.svg' : 'image/plus.svg';
            });
        });
    });