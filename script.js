const myInput = document.getElementById('myInput');
const phantom = document.getElementById('phantom');

myInput.addEventListener('focus', () => {
    phantom.style.display = 'block';
});

myInput.addEventListener('blur', () => {
    phantom.style.display = 'none';
});