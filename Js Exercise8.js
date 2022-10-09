function basketballEquipment(input) {
    let oneYearSub = Number(input);

    let basketballShoes = oneYearSub - (0.4 * oneYearSub);
    let basketballOutfit  = basketballShoes - (0.2 * basketballShoes);
    let basketballBall = basketballOutfit * 0.25;
    let basketballAccessories = basketballBall * 0.20;

    let finalPrice = basketballShoes + basketballOutfit + basketballBall + basketballAccessories + oneYearSub;

    console.log(finalPrice);
}

basketballEquipment("365")
