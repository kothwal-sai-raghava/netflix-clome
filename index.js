const carousel = document.getElementById('carousel');
const leftBtn = document.querySelector('.scroll-btn.left');
const rightBtn = document.querySelector('.scroll-btn.right');

leftBtn.style.display = 'none';
function scrollCarousel(direction) {
    const cardWidth = carousel.querySelector('.movie-card').offsetWidth + 16;
    const scrollAmount = direction * cardWidth * 3;

    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    setTimeout(checkScrollPosition, 300);
}

function checkScrollPosition() {
    const scrollLeft = carousel.scrollLeft;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    leftBtn.style.display = scrollLeft > 0 ? 'block' : 'none';

}

carousel.addEventListener('scroll', checkScrollPosition);
leftBtn.addEventListener('click', () => scrollCarousel(-1));
rightBtn.addEventListener('click', () => scrollCarousel(1));

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });

    if (!isActive) {
        faqItem.classList.add('active');
    }
 });
});