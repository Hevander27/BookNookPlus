const renderGift = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    
    const response = await fetch('/gifts')
    const data = await response.json()
    
    const giftContent = document.getElementById('gift-content')
    
    let gift
    
    if (data) {
      gift = data.find(gift => gift.id === requestedID)
    }
    
    if (gift) {
      console.log("giftData", gift)
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

  renderGift()