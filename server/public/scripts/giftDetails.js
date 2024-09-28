const renderDetails = async (giftId) => {
    const response = await fetch(`/gifts`); // Fetch all gifts
    const data = await response.json();
    const gift = data.find(g => g.id === parseInt(giftId)); // Find the specific gift

    const detailsContent = document.getElementById('details-content');
    const titleElement = document.getElementById('title-name');

    if (gift) {
        titleElement.textContent = `BookNook - ${gift.name}`;

        const card = document.createElement('div');
        card.classList.add('card');

        const topContainer = document.createElement('div');
        topContainer.classList.add('top-container');
        topContainer.style.backgroundImage = `url(${gift.image})`; // Set background image

        const bottomContainer = document.createElement('div');
        bottomContainer.classList.add('bottom-container');

        const name = document.createElement('h3');
        name.textContent = gift.name;
        bottomContainer.appendChild(name);

        const pricePoint = document.createElement('p');
        pricePoint.textContent = `Price: ${gift.pricePoint}`;
        bottomContainer.appendChild(pricePoint);

        const audience = document.createElement('p');
        audience.textContent = `Great For: ${gift.audience}`;
        bottomContainer.appendChild(audience);

        const description = document.createElement('p');
        description.textContent = gift.description;
        bottomContainer.appendChild(description);

        const submittedBy = document.createElement('p');
        submittedBy.textContent = `Submitted By: ${gift.submittedBy}`;
        bottomContainer.appendChild(submittedBy);

        card.appendChild(topContainer);
        card.appendChild(bottomContainer);

        detailsContent.innerHTML = ''; // Clear existing content
        detailsContent.appendChild(card);
    } else {
        titleElement.textContent = 'BookNook - Book Not Found';
        const message = document.createElement('h2');
        message.textContent = 'No Details Available 😢';
        detailsContent.innerHTML = ''; // Clear existing content
        detailsContent.appendChild(message);
    }
}

// Call renderDetails with the giftId from the URL
const urlParams = new URLSearchParams(window.location.search);
const giftId = urlParams.get('id');
if (giftId) {
    renderDetails(giftId);
}
