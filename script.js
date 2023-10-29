const notifications = document.querySelectorAll('.notification-bar');
const markAll = document.querySelector('.mark-all');
const notificationNum = document.getElementById('number')
const messageEl = document.querySelector('.message');
const privateEl = document.querySelector('.private');

var numNotifications = parseInt(notificationNum.textContent);


markAll.addEventListener('click', () => {
    notifications.forEach(notification => {
        notification.classList.add('read');
        const dot = notification.querySelector('.dot')
        if(dot){
            dot.style.display = 'none';
        }
    })
    numNotifications = 0;
    updateNotificationNumber();
})


function updateNotificationNumber(){
    notificationNum.textContent = numNotifications;
}
privateEl.addEventListener('click', () => {
    messageEl.classList.toggle('hide');

})

notifications.forEach(notification => {
    notification.addEventListener('click', () => {
        if(!notification.classList.contains('read')){
            numNotifications--;
            updateNotificationNumber();
        }
        notification.classList.add('read');
        const dot = notification.querySelector('.dot')
        if(dot){
            dot.style.display = 'none';
        }
    })
})