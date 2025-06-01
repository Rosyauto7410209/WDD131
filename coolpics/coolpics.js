/**
 * TOGGLE MENU
 * this function is invoked when the menu button is clicked
 * (see the event handler below)
 */
function toggleMenu() {
    // store a reference to the <nav> element
    const navItems = document.querySelector('nav');

    // you'd need to create a style rule for this class in your CSS file
    // something like this will work:
    // .show {
    //     display: none;
    // }
    navItems.classList.toggle('show');
}

const menu = document.getElementById('menu-button');

/**
 * HANDLE RESIZE
 * similar to the function above, this function is invoked on the window resize
 * event (see the event handler below)
 */
function handleResize() {
    // get the first element with a class of "navItems"
    const navItems = document.querySelector('.navItems');

    if (window.innerWidth > 1000) {
        // hide the menu when the window size is greater than 1000px
        menu.style.display = 'none';
        // but we want the button to be displayed so users can click to view the
        // menu if desired
        navItems.classList.add('show');
    } else {
        // then the opposite when the window is 1000px or less
        menu.style.display = 'block';
        navItems.classList.remove('show');
    }
}

// we need a <dialog> element to show/hide
// this element will contain the large image and a "close" button
const modal = document.createElement('dialog');

// this is what we'll be adding the the <dialog> element that was created above
modal.innerHTML = `
    <img id='modalImage' src=' alt='>
    <button class='close-viewer'>X</button>
`;

// and this is how we add it!
document.body.appendChild(modal);

// store references to the elements that will appear in the <dialog> modal
// (next two lines)
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('button');

// click handler for the modal "close" button
closeButton.addEventListener('click', () => modal.close());

/**
 * SHOW MODAL
 * @param {Object} event e
 * @returns null
 */
function showModal(event) {
    // clicked image
    const clickedImg = event.target;

    // early termination control
    // exit the function here if there is no image
    if (!clickedImg) { return };

    // get the "src" and "alt" attributes from the clicked image
    const src = clickedImg.getAttribute('src');
    const alt = clickedImg.getAttribute('alt');
    // construct a route for the full-sized image
    const fullSrc = src.split('-')[0] + '-full.jpeg';

    // append the data above to the modal image we created earlier
    modalImage.src = fullSrc;
    modalImage.alt = alt;

    // show the modal
    modal.showModal();
}

// get the first element with a class of "gallery"
const gallery = document.querySelector('.gallery');

// event handlers
menu.addEventListener('click', toggleMenu);
window.addEventListener('resize', handleResize);
gallery.addEventListener('click', showModal);
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});