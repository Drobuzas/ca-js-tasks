console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    const drinks1 = [
        { name: 'lemonade', price: 90 },
        { name: 'lime', price: 432 },
        { name: 'peach', price: 23 }
    ];

    function sortDrinkByPrice(drinks) {
        return drinks.sort((a, b) => a.price > b.price ? 1 : -1);
    }
    const result = sortDrinkByPrice(drinks1);
    console.log(result)
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    function addName(obj, name, value) {
        obj[name] = value;
        return obj;
    }

    const obj = {}
    const obj2 = { piano: 500 }

    console.log(addName(obj, "Brutus", 300))
    console.log(addName(obj2, "Brutus", 400))
    console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440))
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
    function generation(x, y) {
        if (x === 0) {
            return 'me!'
        }

        let result = '';

        if (x > 0) {
            if (y === 'm') {
                result += 'son';
            } else {
                result += 'daughter';
            }
        } else {
            if (y === 'm') {
                result += 'father';
            } else {
                result += 'mother';
            }
        }

        if (x < 0) {
            x *= -1
        }

        if (x > 1) {
            result = 'grand' + result;
        }
        if (x > 2) {
            for (let i = 2; i < x; i++) {
                result = 'great ' + result
            }
        }

        return result;
    }
    console.log(generation(3, 'm'));
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
    function maximumScore(tiles) {
        let sum = 0;

        for (let i = 0; i < tiles.length; i += 1) {
            const tile = tiles[i];

            sum += tile.score;
        }

        return sum;
    }

    const tiles = [
        { tile: "N", score: 1 },
        { tile: "K", score: 5 },
        { tile: "Z", score: 10 },
        { tile: "X", score: 8 },
        { tile: "D", score: 2 },
        { tile: "A", score: 1 },
        { tile: "E", score: 1 }
    ];

    const result = maximumScore(tiles);

    console.log(result);
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
    function calculateDifference(obj, limit) {
        let sum = 0;
        for (let prop in obj) {
            sum = sum + obj[prop];
        }
        return sum - limit
    }

    const obj = { skate: 20000, painting: 30000, shoes: 1 }
    console.log(calculateDifference(obj, 45000));

}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
    function toArray(obj) {
        const result = [];
        let i = 0;
        for (const key in obj) {
            result[i] = [key, obj[key]];
            i += 1;
        }

        return result;
    }

    // function toArray(obj) {
    //   return Object.entries(obj);
    // }

    const arr1 = toArray({ a: 1, b: 2, c: 6 });
    const arr2 = toArray({ shrimp: 15, tots: 122 });

    console.log(arr1);
    console.log(arr2);
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
    function inkLevels(inks) {
	  let minInk;
      for(const prop in inks){
        const currentInk = inks[prop]
        if(!minInk || currentInk < minInk){
            minInk = currentInk;
        }
      }
      return minInk;
    }

    // var result = inkLevels({
    //     "cyan": 6543,
    //     "magenta": 74543,
    //     "yellow": 2345678
    // });

    // console.log(result);
}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
    function calculateLosses(obj) {
        let total = 0;
        for(const prop in obj){
            total = total + obj[prop];
        }
        return total > 0 ? total : 'Lucky you!';
    }
}
console.groupEnd();