import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'app-object-literals',
  templateUrl: './object-literals.component.html',
  styleUrls: ['./object-literals.component.scss'],
})
export class ObjectLiteralsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  objectsBasics() {
    // Plain old JavaScript -> deprecated pattern
    const myPerson = new Object();
    // myPerson.smile = function() {
    //   console.log;
    // };

    const otherPerson = {} as any;
    otherPerson.smile = function () {
      console.log('i am smiling');
    };

    const person: any = { Id: 1, Name: 'Giro' };
    person.walk = () => console.log(`I am ${person.Name} and I'm walking`);

    person.walk();
  }

  enhancedObjectLiterals() {
    function getCarES5(make, model, value) {
      return {
        make: make,
        model: model,
        value: value,
      };
    }

    // Property shorthand
    function getCar(make, model, value) {
      return {
        make,
        model,
        value,
      };
    }

    const person: any = { Id: 1, Name: 'Alexander' };
    const cloned = { ...person }; //cloned using spread
    cloned.Name = 'Sabine';
  }

  destructuring() {
    let fullPerson = { firstName: 'John', name: 'Doe', age: 17 };
    let { firstName, age } = fullPerson;
    console.log(firstName + ', ' + age); //implicit cast of age
  }

  objAssign() {
    const obj = { name: 'Soi' };
    const clone = Object.assign({}, obj, {
      birth: format(new Date(), 'MMM d yy'),
    });
    console.log(clone);
  }

  valref() {
    const person: any = { Id: 1, Name: 'Alexander' };
    let myNumber = 100;

    function passArgs(nbr: number, pers: any) {
      nbr += 1;
      pers.Name = 'Alex';
    }

    passArgs(myNumber, person);
    console.log('result for myNumber & person:', myNumber, person);

    myNumber = 500;
    person.Name = 'Alexander';
    passArgs(myNumber, Object.assign({}, person));
    console.log(
      'result for myNumber & person using Object.assign():',
      myNumber,
      person
    );

    passArgs(myNumber, { ...person });
    console.log('result for myNumber & person using spread:', myNumber, person);
  }

  copyspread() {
    // Spred operator on arrays
    const [x, y, ...remaining] = [1, 2, 3, 4];
    console.log(x, y); // 1, 2,
    console.log(remaining);

    // Spread operator on objects
    const simplePerson = { name: 'Schnuppi' };
    const dataPerson = {
      birth: format(new Date(), 'MMM d yy'),
      job: 'dev dude',
    };
    const shallowClone = { ...dataPerson };
    const combinedPerson = { ...simplePerson, ...dataPerson };
    console.log(shallowClone, combinedPerson);
  }
}
