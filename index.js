
AOS.init();

// DOM Elements
const openNotification = document.getElementById('openNotification');
const notificationBox = document.querySelector('.notification-box');
const notificationNumber = document.getElementById('notificationNumber');
const currentBalance = document.querySelector('.currentBalance');
const hideAmount = document.querySelector('#showBalance');
const logInbutton = document.getElementById('loginButton');
const password = document.getElementById('password');
const username = document.getElementById('username');
const main = document.querySelector('main');
const wrapper = document.querySelector('.wrapper'); // Use .wrapper for both login and main content
const displayName = document.querySelector('#name');
const settingsButton = document.getElementById('settingsButton');
const logoutButton = document.getElementById('logoutButton');

let isLoggedIn = false;

openNotification.addEventListener('click', () => {
    notificationBox.classList.toggle('hidden');
    notificationNumber.classList.add('hidden');
});

hideAmount.addEventListener('click', () => {
    currentBalance.classList.toggle('blurred');
});


logInbutton.addEventListener('click', () => {
    if (password.value.trim() === "" || username.value.trim() === "") {
        Swal.fire({
            title: 'Error!',
            text: 'Please enter username and password',
            icon: 'error',
            confirmButtonText: 'Ok',
            width: '100%',
            toast: true,
        });
    }
    else if (password.value.length < 6) {
        Swal.fire({
            title: 'Error!',
            text: 'Password must be at least 6 characters long',
            icon: 'error',
            confirmButtonText: 'Ok',
            width: '100%',
            toast: true,

        });
    }
    else {
        // Set login state
        isLoggedIn = true;
        main.classList.remove('hidden');
        wrapper.classList.add('hidden'); 
        Swal.fire({
            title: 'Passed',
            text: 'Successfully logged in',
            icon: 'success',
            confirmButtonText: 'Ok'
        });
        setTimeout(() => {
            swal.close();
        }, 1500);

        displayName.textContent = username.value;
    }
});

// See More/Less
document.getElementById('seeMore').addEventListener('click', function () {
    const moreUsers = document.getElementById('moreUsers');
    moreUsers.classList.toggle('hidden');
    this.innerText = moreUsers.classList.contains('hidden') ? 'See more' : 'See less';
});

settingsButton.addEventListener('click', () => {
    if (isLoggedIn) {
        
        main.classList.add('hidden');
        wrapper.classList.remove('hidden'); 
        username.value = '';
        password.value = '';
        isLoggedIn = false; 

        Swal.fire({
            title: 'Logged Out',
            text: 'You have been logged out successfully.',
            icon: 'info',
            confirmButtonText: 'Ok',
            width: '100%',
            toast: true,
        });
    } else {

        main.classList.add('hidden');
        wrapper.class.remove('hidden');
    }
});


logoutButton.addEventListener('click', () => {

    main.classList.add('hidden');
    wrapper.classList.remove('hidden');
    username.value = '';
    password.value = '';
    displayName.textContent = '';

    isLoggedIn = false;

    Swal.fire({
        title: 'Logged Out',
        text: 'You have been logged out successfully.',
        icon: 'info',
        confirmButtonText: 'Ok',
        width: '100%',
        toast: true,
    });
});
