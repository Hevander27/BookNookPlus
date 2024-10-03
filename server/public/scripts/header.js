/*
 * File: header.js
 * Description: This script dynamically generates and appends a styled header for a webpage, specifically for a website called "BookNook". 
 *              The header consists of a left section with a logo and title, and a right section with a navigation button. 
 *              Clicking the "Home" button navigates the user back to the homepage ('/').
 * 
 * Detailed Functionality:
 * - The `header` element of the webpage is selected using `document.querySelector('header')`.
 * - A `headerContainer` `<div>` is created to hold both the left and right sections of the header.
 * - **Left Section (headerLeft)**:
 *     - Contains an image (`headerLogo`) that represents the logo of the site, with the source set to `/books.png`.
 *     - Contains a heading (`headerTitle`) displaying the title of the website, "BookNook".
 *     - Both elements are appended to the `headerLeft` `<div>`.
 * - **Right Section (headerRight)**:
 *     - Contains a button (`headerButton`) labeled "Home".
 *     - An event listener is attached to the button, which, when clicked, navigates the user to the root URL ('/'), simulating a homepage navigation.
 *     - The button is appended to the `headerRight` `<div>`.
 * - Both `headerLeft` and `headerRight` sections are appended to `headerContainer`, which is then appended to the main `header` element of the webpage.
 * 
 * Key DOM Manipulation:
 * - `document.createElement`: Used to create new HTML elements dynamically (`div`, `img`, `h1`, `button`).
 * - `Element.appendChild`: Appends child elements like the logo, title, and button to the appropriate container divs.
 * - `Element.className`: Assigns CSS class names to elements for styling purposes (e.g., 'header-container', 'header-left', 'header-right').
 * - `addEventListener`: Adds an event listener to the "Home" button to handle click events and perform a navigation action.
 * 
 * Error Handling:
 * - No explicit error handling is implemented in this script. It assumes that the `header` element exists and that the resources (such as the image `/books.png`) are available.
 * 
 * Usage Example:
 * - Include this script in an HTML page with a `<header>` element, and ensure that a CSS file is present to style the `header-container`, `header-left`, and `header-right` classes.
 * - The image `books.png` should be available at the specified path.
 * 
 * References:
 * - DOM Manipulation: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
 * - Event Handling: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * 
 * Author: [Your Name]
 * Date: [Date]
 */

const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerLogo = document.createElement('img')
headerLogo.src = '/books.png'

const headerTitle = document.createElement('h1')
headerTitle.textContent = 'BookNook'

headerLeft.appendChild(headerLogo)
headerLeft.appendChild(headerTitle)

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerButton = document.createElement('Home')
headerButton.textContent = 'Home'

headerButton.addEventListener('click', function handleClick(event) {
	window.location = '/'
})    

headerRight.appendChild(headerButton)

headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

header.appendChild(headerContainer)

