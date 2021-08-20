// Main function 
function memoryOption(product, option) {
    const extraCharges = document.getElementById(product + '-option');
    let extraMemoryPrice = parseInt(extraCharges.innerText);
    // Memory Section 
    if (option == 'memory-16gb') {
        extraCharges.innerText = 180;
    } else if (option == 'memory-8gb') {
        extraCharges.innerText = 0;
    }
    // delivery Section 
    if (option == 'argent-delivery') {
        extraCharges.innerText = 20;
    } else if (option == 'free-delivery') {
        extraCharges.innerText = 0;
    }
    // Storage Section 
    if (option == 'ssd-256gb') {
        extraCharges.innerText = 0;
    }
    else if (option == 'ssd-512gb') {
        extraCharges.innerText = 100;
    } else if (option == 'ssd-1tb') {
        extraCharges.innerText = 180;
    }
    calculateTotal();
    document.getElementById('apply-btn').removeAttribute("disabled", true);

    document.getElementById('promo-text').innerText = 'Add Promo code';
    document.getElementById('promo-text').style.color = '#333';
};
document.getElementById('memory-16gb').addEventListener('click', function () {
    memoryOption('memory', 'memory-16gb');
});
document.getElementById('memory-8gb').addEventListener('click', function () {
    memoryOption('memory', 'memory-8gb');
});
document.getElementById('free-delivery').addEventListener('click', function () {
    // deliveryOptions('free-delivery');
    memoryOption('delivery', 'free-delivery');
});
document.getElementById('argent-delivery').addEventListener('click', function () {
    memoryOption('delivery', 'argent-delivery');
});
document.getElementById('ssd-256gb').addEventListener('click', function () {
    memoryOption('storage', 'ssd-256gb');
});
document.getElementById('ssd-512gb').addEventListener('click', function () {
    memoryOption('storage', 'ssd-512gb');
});
document.getElementById('ssd-1tb').addEventListener('click', function () {
    memoryOption('storage', 'ssd-1tb');

});


// geting Price 
function getPriceValue(product) {
    const priceText = document.getElementById(product + '-option').innerText;
    const price = parseInt(priceText);
    return price;
}
// Calculate Total Price 
function calculateTotal() {
    const extraMemoryPrice = getPriceValue('memory');
    const extrStoragePrice = getPriceValue('storage');
    const deliveryCharges = getPriceValue('delivery');
    const total = 1299 + extraMemoryPrice + extrStoragePrice + deliveryCharges;

    document.getElementById('total-price').innerText = total;
    document.getElementById('promo-price').innerText = total;

}

// Promo code options
document.getElementById('apply-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input').value;
    const promoPriceText = document.getElementById('promo-price').innerText;
    const promoPrice = parseFloat(promoPriceText);
    if (promoInput == 'stevekaku') {
        document.getElementById('promo-price').innerText = promoPrice * .8;
        document.getElementById('promo-input').value = '';
        document.getElementById('apply-btn').setAttribute("disabled", true);
        document.getElementById('promo-text').innerText = 'Promo Code Added';
        document.getElementById('promo-text').style.color = 'green';
    } else {
        document.getElementById('promo-price').innerText = promoPrice;
        document.getElementById('promo-text').innerText = 'Please Insert a valid Promo!';
        document.getElementById('promo-text').style.color = 'red';
    }
})