/*
 * File: renderGifts.js
 * Description: This script dynamically renders a list of gift cards on a webpage by fetching data from an API. 
 *              Each card displays a gift's image, name, price point, target audience, and includes a "Read More" 
 *              link that directs the user to a detailed page for that gift. If no gifts are available, a fallback 
 *              message is shown to the user.
 * 
 * Detailed Functionality:
 * - The `renderGifts` function is declared as an asynchronous function, which handles the fetching and rendering of gift items.
 * - `fetch('/gifts')`: Sends a GET request to the '/gifts' API endpoint to retrieve a list of gifts in JSON format.
 * - If the request is successful, the gifts are processed:
 *      - For each gift, a card (`div`) element is created dynamically with a top container (holding the background image of the gift) and a bottom container (holding text-based information such as the gift's name, price, and audience).
 *      - Elements such as `h3` (for gift name), `p` (for price point and audience), and `a` (for a "Read More" button) are created and appended to the card.
 *      - The `card` element is appended to the `main-content` section of the webpage.
 * - If no gift data is returned, a fallback message ("No Gifts Available") is displayed instead of the gift cards.
 * 
 * Key DOM Manipulation:
 * - `document.createElement`: Used to create new HTML elements dynamically (e.g., `div`, `h3`, `p`, `a`).
 * - `Element.appendChild`: Appends the newly created elements (such as the gift details) to the appropriate parent element.
 * - `Element.classList.add`: Adds CSS classes to elements for styling purposes (e.g., 'card', 'top-container', 'bottom-container').
 * - `style.backgroundImage`: Sets the background image of the top container using the URL of the gift image.
 * 
 * Error Handling:
 * - If the data returned from the fetch request is falsy (e.g., if the response is empty), a fallback message is displayed to inform the user that no gifts are available.
 * 
 * Usage Example:
 * - Ensure you have an API available at '/gifts' that returns a JSON array of gift objects, each containing `image`, `name`, `pricePoint`, `audience`, and `id`.
 * 
 * References:
 * - Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 * - DOM Manipulation: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
 * - Template Literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 * 
 * Author: [Your Name]
 * Date: [Date]
 */

const renderGifts = async () => {
    const response = await fetch('/gifts')
    const data = await response.json()
    const mainContent = document.getElementById('main-content')

    if (data) {
      data.map(gift => {
        const card = document.createElement('div')
        card.classList.add('card')
        const topContainer = document.createElement('div')
        topContainer.classList.add('top-container')
        const bottomContainer = document.createElement('div')
        bottomContainer.classList.add('bottom-container')
        topContainer.style.backgroundImage = `url(${gift.image})`
        const name = document.createElement('h3')
        name.textContent = gift.name
        bottomContainer.appendChild(name)
        const pricePoint = document.createElement('p')
        pricePoint.textContent = 'Price: ' + gift.pricePoint
        bottomContainer.appendChild(pricePoint)
        const audience = document.createElement('p')
        audience.textContent = 'Great For: ' + gift.audience
        bottomContainer.appendChild(audience)
        const link = document.createElement('a')
        link.textContent = 'Read More >'
        link.setAttribute('role', 'button')
        link.href = `/gifts/${gift.id}`
        bottomContainer.appendChild(link)
        card.appendChild(topContainer)
        card.appendChild(bottomContainer)
        mainContent.appendChild(card)
      })
    }
    else {
      const message = document.createElement('h2')
      message.textContent = 'No Gifts Available 😞'
      mainContent.appendChild(message)
    }
   }
   
   const renderGift = async () => {
     const requestedID = parseInt(window.location.href.split('/').pop())
     
     const response = await fetch('/server/data/gifts')
     const data = await response.json()
     
     const giftContent = document.getElementById('gift-content')
     
     let gift
     
     if (data) {
       gift = data.find(gift => gift.id === requestedID)
     }
     
     if (gift) {
       document.querySelector('#gift-content img').src = gift.image
       document.getElementById('name').textContent = gift.name
       document.getElementById('submittedBy').textContent = gift.submittedBy
       document.getElementById('pricePoint').textContent = gift.pricePoint
       document.getElementById('audience').textContent = gift.audience
       document.getElementById('description').textContent = gift.description
       document.title = gift.name
     } else {
       const message = document.createElement('h2')
       message.textContent = 'No Gifts Available 😞'
       giftContent.appendChild(message)
     }
   }
   
   renderGifts()
   renderGift()