
console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  const elementsArray = ['first', 'second', 'middle1', 'middle2', 'middle3', 'secondToLast', 'last'];

  function getFirstElement(arr) {
    return arr[0]
  }
  console.log(getFirstElement(elementsArray))

}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  const elementsArray = ['first', 'second', 'middle1', 'middle2', 'middle3', 'secondToLast', 'last'];

  function removeFirstReturnFirst(arr) {

    return arr.shift();
  }
  console.log(removeFirstReturnFirst(elementsArray));
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  const elementsArray = ['first', 'second', 'middle1', 'middle2', 'middle3', 'secondToLast', 'last'];

  function returnLast(arr) {
    const lastIndex = arr.length - 1
    return arr[lastIndex]
  }
  console.log(returnLast(elementsArray));
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  const elementsArray = ['first', 'second', 'middle1', 'middle2', 'middle3', 'secondToLast', 'last'];

  function removeLastReturnLast(arr) {

    return arr.pop();

  }

  console.log(removeLastReturnLast(elementsArray));
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  const elementsArray = ['first', 'second', 'middle1', 'middle2', 'middle3', 'secondToLast', 'last'];

  function numberOfElements(arr) {
    let elements = arr.length;
    return elements;
  }

  console.log(numberOfElements(elementsArray));
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  const elementsArray = ['first', 'second', 'middle1', 'middle2', 'middle3', 'secondToLast', 'last'];

  function getLastElementIndex(arr) {
    return arr.length - 1;
  }

  const result = getLastElementIndex(elementsArray);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  const elementsArray = ['first', 'second', 'middle1', 'middle2', 'middle3', 'secondToLast', 'last'];

  function printEachIndexInRows(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(i);
    }
  }

  printEachIndexInRows(elementsArray);
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  const elementsArray = ['first', 'second', 'middle1', 'middle2', 'middle3', 'secondToLast', 'last'];

  function printEachElement(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  // function printEachElementForEach(arr){   <--- Patogesnis budas atspausdinti visus masyvo elementus.
  //   array.forEach(element => {
  //     console.log(element)
  //   });
  // }

  printEachElement(elementsArray);
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  const elementsArray = ['first', 'second', 'middle1', 'middle2', 'middle3', 'secondToLast', 'last'];

  function printEachElement(arr) {
    for (let i = 0; i < arr.length; i++) {
      const result = '[' + i + '] ' + '=> ' + arr[i];
      console.log(result)
    }
  }
  printEachElement(elementsArray);
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  const elementsArray = ['first', 'second', 'middle1', 'middle2', 'middle3', 'secondToLast', 'last'];

  function printElementsBackwards(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log(arr[i]);
    }
  }
  printElementsBackwards(elementsArray);
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  const elementsArray = ['first', 'second', 'middle1', 'middle2', 'middle3', 'secondToLast', 'last'];

  function printElementsInRow(arr) {
    let inRow = '';
    for (let i = 0; i < arr.length; i++) {
      inRow = inRow + i + ' ';
    }
    console.log(inRow);
  }
  printElementsInRow(elementsArray);
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  const elementsArray = ['first', 'second', 'middle1', 'middle2', 'middle3', 'secondToLast', 'last'];

  function printElementsInRow(arr) {
    let inRow = '';
    for (let i = 0; i < arr.length; i++) {
      inRow = inRow + arr[i] + ' ';
    }
    console.log(inRow);
  }
  printElementsInRow(elementsArray);

}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  const elementsArray = ['first', 'second', 'middle1', 'middle2', 'middle3', 'secondToLast', 'last'];


  function printElementsInRow(arr) {
    let inRow = '';
    for (let i = 0; i < arr.length; i++) {
      inRow = inRow + '[' + i + ']=>' + arr[i] + ' ';
      
    }
    console.log(inRow);
  }
  printElementsInRow(elementsArray);
}
console.groupEnd();
