function timeToMixJuice(juice) {
    switch (juice) {
        case "Pure Strawberry Joy":
            return 0.5;
        case "Energizer":
        case "Green Garden":
            return 1.5;
        case "Tropical Island":
            return 3;
        case "All or Nothing":
            return 5;
        default:
            return 2.5;
    }
}

function limesToCut(wedges, limes) {
    const wedgesPerLime = { "S": 6, "M": 8, "L": 10 };
    let totalWedges = 0;
    let limesCount = 0;

    const arrLimes = limes.split(",");

    for (let i = 0; i < arrLimes.length; i++) {
        totalWedges += wedgesPerLime[arrLimes[i].toUpperCase()];
        limesCount++;
        if (totalWedges >= wedges) {
            break;
        }
    }

    return limesCount;
}

function remainingOrders(minutesLeft, orders) {
    const orders = ["Pure Strawberry Joy", "Pure Strawberry Joy", "Vitality", "Tropical Island", "All or Nothing", "All or Nothing", "Green Garden", "Limetime"];
    let remainingOrders = [];
    let orderStarted = false;

    for (let i = 0; i < orders.length; i++) {
        let juice = orders[i];
        let timeToMix = timeToMixJuice(juice);

        if (minutesLeft < timeToMix && !orderStarted) {
            remainingOrders = orders.slice(i);
            break;
        }

        minutesLeft -= timeToMix;
        if (minutesLeft < 0) {
            orderStarted = true;
        }
    }

    return remainingOrders;
}