console.group("21. Sukurkite funkciją, kuri ištrintų pirmą surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
    function removeFirstLetterA(str) {
        return str.replace('a', '');
    }
    console.log('---');
    console.log({
        'labas': removeFirstLetterA('labas'),
        'kempiniukas': removeFirstLetterA('kempiniukas'),
        '123123': removeFirstLetterA('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("22. Sukurkite funkciją, kuri ištrintų paskutinę surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
    function removeLastLetterA(str) {
        let result = '';
        let letterNotFound = true;
        for (let i = str.length - 1; i >= 0; i--) {
            if (letterNotFound && str[i] === 'a') {
                letterNotFound = false;
            } else {
                result += str[i];
            }
        }
        return result.split('').reverse().join('');
    }
    console.log('---');
    console.log({
        'labas': removeLastLetterA('labas'),
        'kempiniukas': removeLastLetterA('kempiniukas'),
        '123123': removeLastLetterA('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("23. Sukurkite funkciją, kuri ištrintų visus 'a' raidės pasikartojimus žodyje");
{
    function removeAllOccurencesOfLetterA(str) {
        return str.replace(/a/ig, '');
    }
    console.log('---');
    console.log({
        'labas': removeAllOccurencesOfLetterA('labas'),
        'kempiniukas': removeAllOccurencesOfLetterA('kempiniukas'),
        '123123': removeAllOccurencesOfLetterA('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("24. Sukurkite funkciją, kuri ištrintų visus, vartotojo įvestos raidės pasikartojimus žodyje");
{
    function removeAllOccurencesOfLetter(str, letter) {
        return str.replaceAll(letter, '');
    }
    console.log('---');
    console.log({
        'labas, a': removeAllOccurencesOfLetter('labas', 'a'),
        'kempiniukas, i': removeAllOccurencesOfLetter('kempiniukas', 'i'),
        '123123, 3': removeAllOccurencesOfLetter('123123', '3'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

// 25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.group("25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.");
{
    function filterLetters(str, lettersToRemove) {
        for (let i = 0; i < lettersToRemove.length; i++) {
            let letter = lettersToRemove[i];
           str = str.replaceAll(letter, '');
        }
        return str;


    }
    console.log('---');
    const str = filterLetters('Brangakmienio paveikslas', ['a', 'i']);
    console.log(str);
    console.log('---');
}
console.groupEnd();
console.log();

console.group("26. Sukurkite funkciją, kuri pirmu parametrų priimą sakinį, kiekvieną tarpą pakeičia brūkšneliu ir grąžina pakeistą sakinį");
{
    function replaceSpaceWithDash(str) {
       return str.replaceAll(' ', '-')
    }
    console.log('---');
    console.log({
        'viens du trys': replaceSpaceWithDash('viens du trys'),
        'as tave myliu': replaceSpaceWithDash('as tave myliu'),
        'Bairis seniuk': replaceSpaceWithDash('Bairis seniuk'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("27. Sukurkite funkciją, kuri pirmu parametru priima sakinį, ir kiekvieno žodžio pirmają raidę padaro didžiąja");
{
    function capitalize(str) {
       const firstCharToUpperCase = str.charAt(0).toUpperCase() + str.slice(1);
       return firstCharToUpperCase;
    }
    console.log('---');
    console.log({
        'viens du trys': capitalize('viens du trys'),
        'as tave myliu': capitalize('as tave myliu'),
        'Bairis seniuk': capitalize('Bairis seniuk'),
    })
    console.log('---');
}
console.groupEnd();