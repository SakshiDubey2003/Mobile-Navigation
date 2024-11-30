const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contents[idx].classList.add('show')

        console.log(contents[idx]);
    })
})

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}


function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
}

document.addEventListener('keydown', (e) => {
    const activeIndex = [...listItems].findIndex(item => item.classList.contains('active'));
    if (e.key === 'ArrowRight') {
        let nextIndex = (activeIndex + 1) % listItems.length;
        listItems[nextIndex].click();
    } else if (e.key === 'ArrowLeft') {
        let prevIndex = (activeIndex - 1 + listItems.length) % listItems.length;
        listItems[prevIndex].click();
    }
});


// Get references to the elements
const notification = document.getElementById('notification');
const closeBtn = document.getElementById('close-btn');

// Get the Blog tab
const blogTab = [...document.querySelectorAll('nav ul li')].find(item =>
    item.querySelector('p').textContent.trim() === 'Blog'
);

// Show the notification when Blog tab is clicked
blogTab.addEventListener('click', () => {
    notification.style.display = 'block'; // Show notification
});

// Hide the notification when the close button is clicked
closeBtn.addEventListener('click', () => {
    notification.style.display = 'none'; // Hide notification
});
