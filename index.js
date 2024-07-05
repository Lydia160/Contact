function submitForm(event) {
    event.preventDefault()
    const toaster = document.getElementById('toaster')
    toaster.style.display = 'block';

    setTimeout(() => {
        toaster.style.opacity = '0';
        toaster.style.display = 'hidden';
    }, 3000)

    setTimeout(() =>{

    }, 3000)
};

document.getElementById('form').addEventListener('submit', submitForm)
