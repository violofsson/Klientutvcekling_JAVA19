function separateTax(finalPrice, taxPercentage) {
    let taxFactor = 1 + (Number(taxPercentage) / 100);
    let taxAmount = Number(finalPrice) / taxFactor;
    let originalPrice = finalPrice - taxAmount;
    return [originalPrice, taxAmount];
}

let finalPrice = prompt("Pris inkl moms?");
let taxPercentage = prompt("Procentsats för moms?");
let separated = separateTax(finalPrice, taxPercentage);
alert("Pris före skatt: " + separated[0] + " kr.\nMoms: " + separated[1] + ".");