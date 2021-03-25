const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery img');
const previewsNarrow = document.querySelectorAll('.galleryNarrow img');
const original = document.querySelector('.full-img');
const caption = document.querySelector('.caption');


previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        original.classList.add('open');
        //Dynamic change text&image
        const originalSrc = preview.getAttribute('data-original');
        original.src = originalSrc;
        const altText = preview.alt;
        caption.textContent = altText;
    });
});

previewsNarrow.forEach(previewN => {
    previewN.addEventListener('click', () => {
        modal.classList.add('open');
        original.classList.add('open');
        //Dynamic change text&image
        const originalSrcN = previewN.getAttribute('data-original');
        original.src = originalSrcN;
        const altText = previewN.alt;
        caption.textContent = altText;
    });
});

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open');
        original.classList.remove('open');
    }
});
