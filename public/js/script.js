window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('.header-welcome');
    if (!navbar || !header) return;

    const headerBottom = header.getBoundingClientRect().bottom;
    if (headerBottom <= 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});


const animationtext = () => {

const eslogan = document.querySelector('.Animate-text');
const text = eslogan.textContent;
eslogan.textContent = '';

text.split('').forEach((letter, index) => {
    if (letter === ' ') {
        const space = document.createElement('span');
        space.textContent = ' ';
        eslogan.appendChild(space);
        return;
    }
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.opacity = 0;
    span.style.display = 'inline-block';
    span.style.transform = 'translateY(20px)';
    span.style.animation = `fadeInUp 0.5s forwards`;
    span.style.animationDelay = `${index * 0.3}s`;
    eslogan.appendChild(span);
});


setTimeout(() => {
   
    eslogan.textContent = text;
   setTimeout(animationtext, 5000);
   
},5000);

};

animationtext();
