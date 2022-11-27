// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3, 1.6, 1.5, -2.6];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrBy2(arr) {
    const resultX2 = [];
    for (let i = 0; i < arr.length; i++) {
      resultX2[i] = arr[i] * 2;
    }
    return resultX2;
  }
  console.log({
    numbers,
    result: mulArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
  function powerArrBy2(arr) {
    const resultPoweBy2 = [];
    for (let i = 0; i < arr.length; i++) {
      resultPoweBy2[i] = arr[i] ** 2;
    }
    return resultPoweBy2;
  }
  console.log({
    numbers,
    result: powerArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrElementsByIndex(arr) {
    const resultMulByIndex = [];
    for (let i = 0; i < arr.length; i++) {
      resultMulByIndex[i] = arr[i] * i;
    }
    return resultMulByIndex;
  }
  console.log({
    numbers,
    resultArr: mulArrElementsByIndex(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
  function filterPositives(arr) {
    const resultPositives = [];
    for (let i = 0; i < arr.length; i++) {
      if (numbers[i] > 0) {
        resultPositives.push(arr[i]);
      }
    } return resultPositives;

  }

  console.log({
    numbers,
    result: filterPositives(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  function filterNegatives(arr) {
    const resultPositives = [];
    for (let i = 0; i < arr.length; i++) {
      if (numbers[i] < 0) {
        resultPositives.push(arr[i]);
      }
    }
    return resultPositives;
  }
  console.log({
    numbers,
    result: filterNegatives(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  function filterEquals(arr) {
    const resultEquals = [];
    for (let i = 0; i < arr.length; i++) {
      if (numbers[i] % 2 == 0) {
        resultEquals.push(arr[i]);
      }
    }
    return resultEquals;
  }
  console.log({
    numbers,
    result: filterEquals(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  function filterOdds(arr) {
    const resultOdds = [];
    for (let i = 0; i < arr.length; i++) {
      if (numbers[i] % 2 != 0) {
        resultOdds.push(arr[i]);
      }
    }
    return resultOdds;
  }
  console.log({
    numbers,
    result: filterOdds(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
  function arrAbsoluteValues(arr) {
    const resultArr = [];
    for (let i = 0; i < arr.length; i += 1) {
      let element = arr[i];
      if (element < 0) element *= -1;

      resultArr.push(element);
    }

    return resultArr;
  }

  console.log('---');
  console.log({
    numbers,
    result: arrAbsoluteValues(numbers)
  });
  console.log('---');
}
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
  function powArrElementsByIndex(arr) {
    const resultPoweBy2 = [];
    for (let i = 0; i < arr.length; i++) {
      resultPoweBy2[i] = arr[i] ** i;
    }
    return resultPoweBy2;
  }

  console.log({
    numbers,
    result: powArrElementsByIndex(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  function filterNaturals(arr) {
    const resultNaturals = [];
    for (let i = 0; i < arr.length; i++) {
      if (numbers[i] > 0) {
        resultNaturals.push(arr[i]);
      }
    }
    return resultNaturals;
  }
  console.log({
    numbers,
    result: filterNaturals(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
  function round(arr) {
    const roundedNumbers = [];
    let roundedNumbersIndex = 0;

    for (let i = 0; i < arr.length; i++) {
      const currentNumber = arr[i];

      if (currentNumber <= 0) {
        continue;
      }

      const remainder = currentNumber % 1;
      let whole = currentNumber - remainder;
      
      let result;
      if (remainder >= 0.5) {
        result = whole + 1;
      } else {
        result = whole;
      }

      roundedNumbers[currentResultArrIndex] = result
      roundedNumbersIndex++;
    }

    return roundedNumbers;
  }

  console.log({
    numbers,
    result: round(numbers)
  })
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
  function filterEverySecond(arr) {
    const resultEverySecond = [];
    for (let i = 0; i < arr.length; i += 2) {
      resultEverySecond.push(arr[i]);
    }
    return resultEverySecond;
  }


  console.log({
    numbers,
    result: filterEverySecond(numbers)
  });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  function filterEverySecond(arr) {
    let resultEverySecond = [];
    for (let i = 0; i < arr.length; i += 5) {
      resultEverySecond.push(arr[i]);
    }
    return resultEverySecond;
  }


  console.log({
    numbers,
    result: filterEverySecond(numbers)
  });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
      const result = '[' + i + '] ' + '=> ' + arr[i];
      console.log(result)
    }
  }
  console.log({
    numbers,
    result: printArr(numbers)
  })
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  function sumArr(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  }

  console.log({
    numbers,
    result: sumArr(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  function avgArr(arr) {
    let total = 0;
    let count = arr.length;

    for (let i = 0; i < arr.length; i++) {
      total += arr[i];

    }
    return total / count;
  }

  console.log({
    numbers,
    result: avgArr(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  function arrMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    return max;
  }

  console.log({
    numbers,
    result: arrMax(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  function arrMax(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
      }
    }
    return min;
  }

  console.log({
    numbers,
    result: arrMax(numbers)
  });
}
console.log('---');
console.groupEnd();
