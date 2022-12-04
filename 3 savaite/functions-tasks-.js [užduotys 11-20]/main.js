console.group("11. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių");
{
  function isEvenNumberOfLetters(str) {
    return str.length % 2 == 0;

  }
  console.log('---');
  console.log({
    'labas': isEvenNumberOfLetters('labas'),
    'kempės': isEvenNumberOfLetters('kempės'),
    '123123': isEvenNumberOfLetters('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("12. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje");
{
  function getNumberOfVowels(str) {
    const count = str.match(/[a ą e ė i y o u]/gi).length;
    return count;
  }
  console.log('---');
  console.log({
    'aaaaa': getNumberOfVowels('aaaaa'),
    'sasasasa': getNumberOfVowels('sasasasa'),
    'aeyuioąčė': getNumberOfVowels('aeyuioąčė'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("13. Sukurkite funkciją, kuri grąžina priebalsių kiekį žodyje");
{
  function getNumberOfConsonants(str) {
    let consonantsCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== 'a' && str[i] !== 'ą' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o'
        && str[i] !== 'o' && str[i] !== 'u' && str[i] !== 'ė' && str[i] !== 'į'
        && str[i] !== 'y')
        consonantsCount++;
    }
    return (consonantsCount);
  }
  console.log('---');
  console.log({
    'aaaaa': getNumberOfConsonants('aaaaa'),
    'sasasasa': getNumberOfConsonants('sasasasa'),
    'aeyuioąčė': getNumberOfConsonants('aeyuioąčė'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("14. Sukurkite funkciją, kuri grąžina <true>, jeigu NĖRA skaitmenų");
{
  function isOnlyLetters(str) {
    const lettersOnly = (/^[a-z A-Z ė]+$/).test(str);
    return lettersOnly
  }


  console.log('---');
  console.log({
    'labas': isOnlyLetters('labas'),
    'kempės': isOnlyLetters('kempės'),
    '123123': isOnlyLetters('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("15. Sukurkite funkciją, kuri grąžina 'a' raidžių kiekį žodyje");
{
  function letterACount(str) {
    const count = (str.match(/a/g) || []).length;
    return count;
  }
  console.log('---');
  console.log({
    'labas': letterACount('labas'),
    'kempės': letterACount('kempės'),
    '123123': letterACount('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("16. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje");
{
  function letterCount(str, searchLetter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == searchLetter) {
        count += 1;
      }
    }
    return count;
  }
  console.log('---');
  console.log({
    'labas, a': letterCount('labas', 'a'),
    'kempės, k': letterCount('kempės', 'k'),
    '123123, z': letterCount('123123', 'z'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("17. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) 'a' raidės vietą žodyje");
{
  function indexOfLetterA(str) {
    return str.indexOf('a', 0)
  }
  console.log('---');
  console.log({
    'labas': indexOfLetterA('labas'),
    'kempės': indexOfLetterA('kempės'),
    '123123': indexOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("18. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) vartotojo perduotos raidės vietą žodyje");
{
  function indexOfLetter(str, searchLetter) {
    return str.indexOf(searchLetter, 0);
  }
  console.log('---');
  console.log({
    'labas, a': indexOfLetter('labas', 'a'),
    'kempės, k': indexOfLetter('kempės', 'k'),
    '123123, z': indexOfLetter('123123', 'z'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("19. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais 'a' raidės pasikartojimais žodyje");
{
  function indexesOfLetterA(str) {
    const result = [];
    const element = 'a';

    let i = str.indexOf(element);
    while (i !== -1){
      result.push(i);
      i = str.indexOf(element, i + 1);
    }
    return [result];
  }
  console.log('---');
  console.log({
    'labas': indexesOfLetterA('labas'),
    'kempės': indexesOfLetterA('kempės'),
    '123123': indexesOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("20. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais vartotojo įvestos raidės pasikartojimais žodyje");
{

  function indexesOfLetter(str, searchSymbol) {
    const search = str[searchSymbol] ?? searchSymbol;
    const letterRegex = new RegExp(search);
    const foundResults = str.search(letterRegex);
    return foundResults;
  }


  console.log('---');
  console.log({
    'labas, a': indexesOfLetter('labas', 'a'),
    'kempės, m': indexesOfLetter('kempės', 'm'),
    '123123, 2': indexesOfLetter('123123', '2'),
  })
  console.log('---');
}
console.groupEnd();
console.log();