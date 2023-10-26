const notifications = document.querySelectorAll('.notification-bar');
const markAll = document.querySelector('.mark-all');

markAll.addEventListener('click', () => {
    notifications.forEach(notification => {
        notification.classList.add('read');
        const dot = notification.querySelector('.dot')
        if(dot){
            dot.style.display = 'none';
        }
    })
})

notifications.forEach(notification => {
    notification.addEventListener('click', () => {
        notification.classList.add('read');
        const dot = notification.querySelector('.dot')
        if(dot){
            dot.style.display = 'none';
        }
    })
})