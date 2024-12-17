/*
id для всякого говна
шапка - header-place
подвал - footer-place
два рекламных блока - two-blocks-rek
*/

//вставка шапки
fetch('header.html')
    .then(response => {
        if (!response.ok) throw new Error('Ошибка загрузки header.html');
        return response.text();
    })
    .then(data => {
        document.getElementById('header-place').innerHTML = data;
    })
    .catch(error => {
        console.error('Ошибка: ', error);
    });

//вставка подвала
fetch('footer.html')
    .then(response => {
        if (!response.ok) throw new Error('Ошибка загрузки footer.html');
        return response.text();
    })
    .then(data => {
        document.getElementById('footer-place').innerHTML = data;
    })
    .catch(error => {
        console.error('Ошибка: ', error);
    });


//вставка рекламных блоков
fetch('rek_blokcs.html')
    .then(response => {
        if (!response.ok) throw new Error('Ошибка загрузки rek_blokcs.html');
        return response.text();
    })
    .then(data => {
        document.getElementById('two-blocks-rek').innerHTML = data;
    })
    .catch(error => {
        console.error('Ошибка: ', error);
    });

const slider = document.getElementById('slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
    
let currentIndex = 0;
    
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
    }
});
    
nextButton.addEventListener('click', () => {
    if (currentIndex < 1) { // 4 карточки - 3 видимые = 1 сдвиг
        currentIndex++;
        updateSliderPosition();
    }
});
    
function updateSliderPosition() {
    const offset = -currentIndex * 363; // Ширина карточки + отступ
    slider.style.transform = `translateX(${offset}px)`;
}