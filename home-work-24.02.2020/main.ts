interface Man<T> {
  name: string
  surname: string
  age: T
  getAge: () => T
}

class Student<T> implements Man<T> {
  name: string
  surname: string
  age: T

  constructor(name: string, surname: string, age: T) {
    this.name = name
    this.surname = surname
    this.age = age
  }

  getAge () : T {
    return this.age
  }
}

const studentWithStringAge = new Student('Vlad', 'Kevlyak', 'twenty eight');
console.log(studentWithStringAge.age);

const studentWithNumberAge = new Student('Pavel', 'Kevlyak', 21);
console.log(studentWithNumberAge.age);