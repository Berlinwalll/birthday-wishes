function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === 'avgvsst') {
        window.location.href = 'birthday.html';
    } else {
        alert('Incorrect password. Please try again.');
    }
}
