// External JS - scripts.js

// Sample auction items data for display
const auctionItems = [
    {
        id: 1,
        title: "Vintage Rolex Watch",
        description: "A timeless classic with original parts.",
        image: "https://images.unsplash.com/photo-1508163222969-8156e6ae2ff5?auto=format&fit=crop&w=600&q=80",
        highestBid: 12000
    },
    {
        id: 2,
        title: "Antique Diamond Necklace",
        description: "Elegant necklace from the Victorian era.",
        image: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?auto=format&fit=crop&w=600&q=80",
        highestBid: 25000
    },
    {
        id: 3,
        title: "Luxury Sports Car Model",
        description: "A scale model of a famous sports car.",
        image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80",
        highestBid: 4000
    }
];


function renderAuctions() {
    const auctionList = document.querySelector('.auction-list');
    auctionList.innerHTML = '';
    auctionItems.forEach(item => {
        const auctionItem = document.createElement('div');
        auctionItem.classList.add('auction-item');

        auctionItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <p>Highest Bid: $${item.highestBid.toLocaleString()}</p>
            <button class="bid-button" data-id="${item.id}">Place Bid</button>
        `;
        auctionList.appendChild(auctionItem);
    });

    
    const bidButtons = document.querySelectorAll('.bid-button');
    bidButtons.forEach(button => {
        button.addEventListener('click', handleBidClick);
    });
}

function handleBidClick(event) {
    const id = Number(event.target.dataset.id);
    const item = auctionItems.find(i => i.id === id);
    const bid = prompt(`Enter your bid for ${item.title} (Current highest: $${item.highestBid.toLocaleString()}):`);
    const bidValue = Number(bid);

    if (bidValue && bidValue > item.highestBid) {
        item.highestBid = bidValue;
        alert(`Bid placed successfully! New highest bid for ${item.title} is $${item.highestBid.toLocaleString()}.`);
        renderAuctions();
    } else if(bidValue <= item.highestBid) {
        alert('Your bid must be higher than the current highest bid.');
    } else {
        alert('Invalid bid amount.');
    }
}

const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const statusDiv = document.getElementById('form-status');
    statusDiv.textContent = 'Thank you for contacting us! We will get back to you soon.';
    form.reset();
});


renderAuctions();

