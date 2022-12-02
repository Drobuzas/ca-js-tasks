console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
    class Player {

        constructor(name, age, height, weight) {
            this.name = name;
            this.age = age;
            this.height = height;
            this.weight = weight;
        }

        getAge() {
            return `${this.name} is age ${this.age}`;
        }

        getHeight() {
            return `${this.name} is ${this.height}cm`;
        }

        getWeight() {
            return `${this.name} weighs ${this.weight}`;
        }
    }
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
    class Calculator {
        add(a, b) {
            return a + b;
        }
        subtract(a, b) {
            return a - b;
        }
        multiply(a, b) {
            return a * b;
        }
        divide(a, b) {
            return a / b;
        }
    }
}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
    class Employee {
        constructor(firstname, lastname) {
            this.firstname = firstname
            this.lastname = lastname
            this.fullname = `${first.name} ${last.name}`;
            this.email = `${first.name}.${lastname}@company.com`.toLowerCase();
        }
    }
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        compareAge(other) {
            if (this.age === other.age) {
                return `${other.name} is the same age as me.`
            } else if (this.age > other.age) {
                return `${other.name} is younger than me.`
            } else {
                return `${other.name} is older than me.`
            }
        }
    }
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
    class Rectangle {
        constructor(sideA, sideB) {
            this.sideA = sideA;
            this.sideB = sideB;
        }
        getArea() { return this.sideA * this.sideB };
        getPerimeter() { return (this.sideA + this.sideB) * 2 };
    }
    class Circle {
        constructor(radius) {
            this.radius = radius;
        }
        getArea() {
            return Math.PI * this.radius ** 2;
        }
        getPerimeter() {
            return 2 * Math.PI * this.radius;
        }
    }

    // unquote and use run to test these cases
    let q = new Circle(4.44);
    console.log(q.getArea());
    console.log(q.getPerimeter());

}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
    class Name {
        constructor(f, l) {
            this.fname = f[0].toUpperCase() + f.slice(1).toLowerCase();
            this.lname = l[0].toUpperCase() + l.slice(1).toLowerCase();
            this.fullname = `${this.fname} ${this.lname}`;
            this.initials = `${this.fname[0]}.${this.lname[0]}`;
        }
    }
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
    function sweetestIcecream(arr) {
        let max = 0;
        for (let i = 0; i < arr.length; i += 1);
        max = Math.max(max, flavor[`${arr[i].flavor}`] + arr[i].numSprinkles);
        return max;
    }

    let flavor = {
        Plain: 0,
        Vanilla: 5,
        ChocolateChip: 5,
        Strawberry: 10,
        Chocolate: 10
    }
}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
    class OnesThreesNines {
        constructor(num) {
            this.num = num;
        }
        get ones() {
            return this.num / 1;
        }
        get threes() {
            return Math.floor(this.num / 3);
        }
        get nines() {
            return Math.floor(this.num / 9);
        }
    }
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
    class User {
        constructor(username) {
            this.username = username;
            User.userCount++;
        }
    }

    User.userCount = 0;
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
    class Book{
        constructor(title, author){
            this.title = title;
            this.author = author;
        }
        getTitle() {
            return `Title: ${this.title}`;
        }
        getAuthor() {
            return `Author: ${this.author}`
        }
    }
    const PP = new Book('Pride and Prejudice', 'Jane Austen');
    const H = new Book ('Hamlet', 'William Shakespeare');
    const WP = new Book('War and Peace', 'Leo Tolstoy');
}
console.groupEnd();