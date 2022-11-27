const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
  function printPeople(arr) {
    console.log(`${arr.name} ${arr.surname}`);
  }

  people.forEach(printPeople);
}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu');
{
  function printPeople(arr) {
    console.log(`${arr.name} - ${arr.surname}`);
  }

  people.forEach(printPeople);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  function printNameSurnameStatus(person) {
    console.log(`${person.name}, ${person.surname}, ${person.married}`);
  }
  people.forEach(printNameSurnameStatus);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  function mapPerson(person) {
    return { 
      sex: person.sex, 
      income: person.income };
  }
  const result = people.map(mapPerson);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  function getNameSurnameGender(person){
    return{
      name: person.name,
      surname: person.surname,
      sex: person.sex
    }
  }
  const result = people.map(getNameSurnameGender);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  function isMale(person) {
    return person.sex === 'male';
  }
  const result = people.filter(isMale);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  function isFemale(person){
    return person.sex === 'female';
  }
  const result = people.filter(isFemale);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  function hasCar(person) {
    return person.hasCar;
  }
  function printNameSurname(person) {
    console.log(`${person.name}, ${person.surname}`);
  }
  people.filter(hasCar).forEach(printNameSurname);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  function isMarried(person) {
    return person.married;
  }
  const withRing = people.filter(isMarried);
  console.log(withRing);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  function reducePerson(result, person) {
    if (person.hasCar) {
      if (person.sex === 'male') {
        result.males += 1;
      } else {
        result.females += 1;
      }
    }
    return result;
  }

  const result = { males: 0, females: 0 };

  people.reduce(reducePerson, result);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  function getPersonWithIncome(person) {
    return {
      name: person.name,
      surname: person.surname,
      sex: person.sex,
      age: person.age,
      salary: person.income,
      married: person.married,
      hasCar: person.hasCar
    };
  }

  const result = people.map(getPersonWithIncome);
  console.log(result)
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
{
  function excludeNameSurnameGender(person){
    return{
      age: person.age,
      salary: person.salary,
      married: person.married,
      hasCar: person.hasCar
    }
  }
  const result = people.map(excludeNameSurnameGender);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  function getPersonFullName(person){
    
    return{
      fullname: `${person.name} ${person.surname}`,
      sex: person.sex,
      age: person.age,
      salary: person.income,
      married: person.married,
      hasCar: person.hasCar
    }
  }
  const result = people.map(getPersonFullName);
  console.log(result);
}
console.groupEnd();

