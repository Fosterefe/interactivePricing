const slider = document.getElementById('mySlider');
const text = document.getElementById('text');

text.innerHTML = '$' + slider.value + '.00';
slider.oninput = function () {
    text.innerHTML = '$' + slider.value + '.00';
}

slider.addEventListener('mousemove', () => {
    //var x = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    var x = ((slider.value / slider.max) * 100)
    slider.style.background = 'linear-gradient(90deg, rgb(16,213,194)' + x + '%, rgb(238,242,251)' + x + '%)';
})