let wrapper = document.querySelector('.wrapper');
let wheel = document.querySelector('.wheel');
let modal = document.querySelector('.modal');

function rotate() {
    wheel.classList.add('active');
    setInterval(()=> {
        modal.classList.add('active');
    }, 6000)
    setInterval(()=> {
        modal.classList.add('opacity');
    }, 6500)
}

function adaptationElements() {
    const aspectRatio = window.innerWidth / window.innerHeight;
    const aspectClass = aspectRatio >= 2.17
        ? 'modificate1'
        : aspectRatio >= 1.5
            ? 'modificate2'
            : aspectRatio > 1
                ? 'modificate3'
                : 'modificate4';

    wrapper.className = `wrapper ${aspectClass}`;
}

adaptationElements();

window.addEventListener('resize', adaptationElements);