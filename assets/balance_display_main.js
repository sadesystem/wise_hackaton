fetch('../data/current_balance.json')
    .then(response => response.json())
    .then(data => {
        const balanceElement = document.querySelector('.balance');
        if (balanceElement) {
            balanceElement.textContent = `${data.balance}€`;
        }
    })
    .catch(error => console.error('Error loading balance:', error));
