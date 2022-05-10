function nonConstructibleChange(coins) {
    let minimumChange = 0;

    coins.sort((coin, next) => coin - next);

    coins.forEach(coin => {
        if (coin > minimumChange + 1) {
            return minimumChange + 1;
        }

        minimumChange += coin;
    });

    return minimumChange + 1;
}

module.exports = nonConstructibleChange;



