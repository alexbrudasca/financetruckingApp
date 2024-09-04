AOS.init();



const openNotification = document.getElementById('openNotification')
const notificationBox = document.querySelector('.notification-box')
const notificationNumber = document.getElementById('notificationNumber')


openNotification.addEventListener('click',()=>{

    notificationBox.classList.toggle('hidden')

    notificationNumber.classList.add('hidden')
})

const currentBalance = document.querySelector('.currentBalance')
const hideAmount = document.querySelector('#showBalance')

hideAmount.addEventListener('click',()=>{

    currentBalance.classList.toggle('blurred')

})

const logInbutton = document.getElementById('loginButton')
const password = document.getElementById('password')
const username = document.getElementById('username')
const main = document.querySelector('main')
const login_container = document.querySelector('.login_container')
const content = document.querySelector('.wrapper')
const displayName = document.querySelector('#name')

logInbutton.addEventListener('click', ()=>{
    // alert('test')

    if(password.value.trim() === "" || username.value.trim() === ""){
        Swal.fire({
            title: 'Error!',
            text: 'Please enter username and password',
            icon: 'error',
            confirmButtonText: 'Ok',
            width:'100%',
            toast:true,
          })
    }else{
        main.classList.remove('hidden')
        content.classList.add('hidden')
        Swal.fire({
            title: 'Passed',
            text: 'Successfully logged in',
            icon: 'success',
            confirmButtonText: 'Ok'
    
          })
          setInterval(()=>{
              swal.close();  

          },1500)
    }

    displayName.textContent = username.value
})

// TO DO SEE MORE LIST


// see more
document.getElementById('seeMore').addEventListener('click', function () {

    const moreUsers = document.getElementById('moreUsers');
    moreUsers.classList.toggle('hidden');
    this.innerText = moreUsers.classList.contains('hidden') ? 'See more' : 'See less';
});



const settingsButton = document.getElementById('settingsButton')
const wrapper = document.querySelector('.wrapper')

settingsButton.addEventListener('click', () => {
    main.classList.remove('hidden');

    // Display the wrapper by removing the 'hidden' class
    wrapper.classList.remove('hidden');

    username.value  = ''
    password.value = ''
});