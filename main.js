
//our blog
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        alert('More content coming soon!');
    });
});
//news
document.getElementById("addEventBtn").addEventListener("click", function() {
    const eventList = document.querySelector('.event-list');
    const newEvent = document.createElement('div');
    newEvent.classList.add('event-item');
    newEvent.innerHTML = `
        <h3>New Event Title</h3>
        <p>Details about the new event will go here.</p>
        <span class="event-date">Date: May 10, 2024</span>
    `;
    eventList.appendChild(newEvent);
});
//booking
function openPaymentModal(event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById('paymentModal').style.display = 'block';
}

function closePaymentModal() {
    document.getElementById('paymentModal').style.display = 'none';
}

// Show payment method based on selection
document.getElementById('paymentMethod').addEventListener('change', function () {
    const selectedMethod = this.value;

    // Hide all payment info sections
    document.querySelectorAll('.payment-info').forEach(info => info.style.display = 'none');

    // Show the selected payment info
    if (selectedMethod === 'mpesa') {
        document.getElementById('mpesaInfo').style.display = 'block';
    } else if (selectedMethod === 'paypal') {
        document.getElementById('paypalInfo').style.display = 'block';
    } else if (selectedMethod === 'credit-card') {
        document.getElementById('creditCardInfo').style.display = 'block';
    }
});




  
  