function memoryOption(isIncreasing) {
    const extraMemory = document.getElementById('memory-option');
    let extraMemoryPrice = parseInt(extraMemory.innerText);
    if (isIncreasing == true) {
        extraMemory.innerText = 180;
    } else if (isIncreasing == false) {
        extraMemory.innerText = 0;
    }
    extraMemoryPrice = parseInt(extraMemory.innerText);
    calculateTotal();
    document.getElementById('apply-btn').removeAttribute("disabled", true);
};
document.getElementById('memory-16gb').addEventListener('click', function () {

    memoryOption(true);

});
document.getElementById('memory-8gb').addEventListener('click', function () {

    memoryOption(false);

});
//  Delivery Options 
function deliveryOptions(deliveryOptions) {
    const deliveryOption = document.getElementById('delivery-option');
    let deliveryCharges = deliveryOption.innerText;
    if (deliveryOptions == 'free-delivery') {
        deliveryOption.innerText = 0;
    } else if (deliveryOptions == 'argent-delivery') {
        deliveryOption.innerText = 20;
    }
    deliveryCharges = parseInt(deliveryOption.innerText);
    calculateTotal();
    document.getElementById('apply-btn').removeAttribute("disabled", true);
}
document.getElementById('free-delivery').addEventListener('click', function () {
    deliveryOptions('free-delivery');
})
document.getElementById('argent-delivery').addEventListener('click', function () {
    deliveryOptions('argent-delivery');
})

// ssd Options
function ssdOption(isIncreasing) {
    const extrStorage = document.getElementById('storage-option');
    let extrStoragePrice = extrStorage.innerText;
    if (isIncreasing == 'ssd-256gb') {
        extrStorage.innerText = 0;
    }
    else if (isIncreasing == 'ssd-512gb') {
        extrStorage.innerText = 100;
    } else if (isIncreasing == 'ssd-1tb') {
        extrStorage.innerText = 180;
    }
    extrStoragePrice = parseInt(extrStorage.innerText);
    calculateTotal();
    document.getElementById('apply-btn').removeAttribute("disabled", true);
};
document.getElementById('ssd-256gb').addEventListener('click', function () {
    ssdOption('ssd-256gb');
});
document.getElementById('ssd-512gb').addEventListener('click', function () {
    ssdOption('ssd-512gb');
});
document.getElementById('ssd-1tb').addEventListener('click', function () {
    ssdOption('ssd-1tb');

});

function getPriceValue(product) {
    const priceText = document.getElementById(product + '-option').innerText;
    const price = parseInt(priceText);
    return price;
}

function calculateTotal() {
    const extraMemoryPrice = getPriceValue('memory');
    const extrStoragePrice = getPriceValue('storage');
    const deliveryCharges = getPriceValue('delivery');
    const total = 1299 + extraMemoryPrice + extrStoragePrice + deliveryCharges;

    document.getElementById('total-price').innerText = total;
    document.getElementById('promo-price').innerText = total;

}

// Promo code 
document.getElementById('apply-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input').value;
    const promoPriceText = document.getElementById('promo-price').innerText;
    const promoPrice = parseFloat(promoPriceText);
    if (promoInput == 'h') {
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