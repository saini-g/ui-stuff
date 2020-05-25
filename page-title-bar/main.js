const targetEl = document.querySelector('#cover-image');
const titleEl = document.querySelector('.page-title-wrap');

function callback(entries, observer) {
  entries.forEach((e) => {

    if (e.isIntersecting) {
      titleEl.classList.remove('sticky-title-box');
    } else {
      titleEl.classList.add('sticky-title-box');
    }
  });
};

const observer = new IntersectionObserver(callback, { threshold: 0.42 });
observer.observe(targetEl);
