// ﻿------------------------------------ 1 Dalis ------------------------------------ 
// 1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų:
//   - name
//   - surname
//   - age
//   - height
//   - weight
//   - sex
const people = [
    {
        name: 'Jonas',
        surname: 'Jonaitis',
        age: 16,
        height: 1.80,
        weight: 80,
        sex: 'male',
    },
    {
        name: 'Šakė',
        surname: 'Lėkštutė',
        age: 20,
        height: 1.60,
        weight: 55,
        sex: 'female',
    },
    {
        name: 'Duonis',
        surname: 'Batoninas',
        age: 36,
        height: 1.90,
        weight: 100,
        sex: 'male',
    },
    {
        name: 'Jaukas',
        surname: 'Žūklėnas',
        age: 45,
        height: 2.01,
        weight: 70,
        sex: 'male',
    },
    {
        name: 'Tundra',
        surname: 'Stepytė',
        age: 17,
        height: 1.75,
        weight: 100,
        sex: 'female',
    },
    {
        name: 'Maklius',
        surname: 'Dirbinskas',
        age: 67,
        height: 1.65,
        weight: 100,
        sex: 'male',
    },
    {
        name: 'Sakas',
        surname: 'Eglinskas',
        age: 18,
        height: 1.93,
        weight: 110,
        sex: 'male',
    },
    {
        name: 'Vandenis',
        surname: 'Sūrimas',
        age: 55,
        height: 1.80,
        weight: 80,
        sex: 'male',
    },

]
console.group('1. Atspausdinti kiekvieną elementą');
// 2. Panaudojant array.forEach:

people.forEach(person => {
    console.log(person);
})
console.groupEnd();

console.group('2. Atspausdinti kiekvieno elemento pilną vardą')


people.forEach(person => {
    console.log(`Vardas: ${person.name} Pavardė ${person.surname}`);
})

console.groupEnd();

console.group('3. Atspausdinti kiekvieno elemento kūno masės indeksą')

people.forEach(person => {
    const bmi = person.weight / (person.height * person.height);
    console.log(`${person.name} BMI yra: ${bmi}`);
});
console.groupEnd();

console.group('4. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:');
console.group('- kurių vardas ilgesnis nei 6 simboliai')

const longNames = people.filter(person => {
    return person.name.length > 6;
})
longNames.forEach(person => {
    console.log(person);
})
console.groupEnd();

console.group('- kurių svoris didesnis nei 80kg');
const heavyWeight = people.filter(person => {
    return person.weight > 80;
})
heavyWeight.forEach(person => {
    console.log(person);
})
console.groupEnd();
console.group('- kurie aukštesni nei 185cm');

const highAsAKite = people.filter(person => {
    return person.height > 185;
})

highAsAKite.forEach(person => {
    console.log(person);
})
console.groupEnd();
console.groupEnd();
console.group('5. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti');
console.group('- ūgius');

const peopleHeights = people.map(person => person.height);
console.log(peopleHeights);
console.groupEnd();

console.group('- svorius');

const peopleWeights = people.map(person => person.weight);
console.log(peopleWeights);

console.groupEnd();
console.group(' - ūgius, svorius ir amžius : [{height, weight, age}, ...]');

const peopleHeightsWeightsAge = people.map(person => ({
    height: person.height,
    weight: person.weight,
    age: person.age,
}))

console.log(peopleHeightsWeightsAge);
console.groupEnd();

console.group('- KMI indeksus');

const peopleKMI = people.map(person => {
    return person.weight / (person.height * person.height);
})
console.log(peopleKMI);

console.groupEnd();
console.group('- KMI indeksus ir amžius')

const peopleKMIAge = people.map(person => {
    const kmi = person.weight / (person.height * person.height);
    return {
        age: person.age,
        kmi: kmi,
    }
})
console.log(peopleKMIAge);
console.groupEnd();

console.group('5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti');
console.group(' - svorių vidurkį')

const totalWeight = people.reduce((sum, person) => sum + person.weight, 0);
const avgWeight = totalWeight / people.length;
console.log(avgWeight);

console.groupEnd();
console.group(' - ūgio vidurkį')

const totalHeight = people.reduce((sum, person) => sum + person.height, 0);
const avgHeight = totalHeight / people.length;
console.log(avgHeight);

console.groupEnd();
console.groupEnd();
console.groupEnd();
console.log('------------------------------------ 2 Dalis ------------------------------------')

// 0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:
//     Person klasėje:
//     - sukurti vidinį metodą: getBMI();     // suskaičiuoja kūno masės indeksą
//     - sukurti vidinį metodą: toString();   // atspausdina žmogų su esamom savybėm

class Person {
    name;
    surname;
    age;
    height;
    weight;
    sex;

    constructor(name, surname, age, height, weight, sex) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.sex = sex;

    }

    get KMI() {
       
        return this.weight / (this.height * this.height);

    }

    get toString() {
        console.log(this.getKMI)
        return `${this.name} ${this.surname} ${this.age} ${this.height} ${this.weight} ${this.sex} ${this.KMI}`
    }
   
}

const persons = people.map((person) => new Person(person.name, person.surname, person.age, person.height, person.weight, person.sex));


console.group('1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg');

const femalesOnly = persons.filter(person => person.sex === 'female' && person.age < 20 && person.weight > 70);
console.log(femalesOnly);

console.groupEnd();
console.group('2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5');

const oldMenUnderweight = persons.filter((person) => person.sex === 'male' && person.age > 25 && person.KMI < 18.5);

console.log(oldMenUnderweight);

console.groupEnd();
console.group('3. Atrinkti vaikus, su antsvoriu (KMI > 30)');

const childrenOverweigth = persons.filter((person) => person.age < 18 && person.KMI > 30);
console.log(childrenOverweigth);

console.groupEnd();
console.group('4. Atrinkti pensininkus, su antsvoriu (KMI > 30)');

const oldOverweightPeople = persons.filter((person) => person.age > 65 && person.KMI > 30);
console.log(oldOverweightPeople);

console.groupEnd();
console.group('5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]');

const peopleWithNormalKMI = persons.filter((person) => person.KMI < 25 && person.KMI > 18.5);
console.log(peopleWithNormalKMI);

console.groupEnd();

// ------------------------------------ 3 Dalis -------------------------------------
// Peržiūrėti video:
// https://www.youtube.com/watch?v=JaMCxVWtW58

// Geras Žaidimas pasitreniravimui:
//   https://www.typing.com/student/game/tommyq

// Rekomenduoju pasikartoti greitasias komandas