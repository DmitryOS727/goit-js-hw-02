function getShippingCost(country) {
    const priceChina = 100;
    const priceChile = 250;
    const priceAustralia = 170;
    const priceJamaica = 120;
    const canDeliver = `Shipping to ${country} will cost ${priceAustralia} credits`
    const noDelivery = "Sorry, there is no delivery to your country"

    switch (country) {
        case "Australia":
            return canDeliver
        case "Germany":
            return noDelivery
        case "China":
            return canDeliver     
        case "Chile":
            return canDeliver       
        case "Jamaica":
            return canDeliver
        case "Sweden":
            return noDelivery
}


}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"