export class Person {
  age: number;
  name: string;
  wealth?: string;
  // state?: WorkLifeBalance;
  state?: 'HappySheep' | 'Unsatisfied' | 'ReadyForRevolution';
  lastname?: string;
  gender: string;
  married?: boolean;
  imgUrl?: string;
  email?: string;
  address?: Address;
}

// export enum WorkLifeBalance {
//   Happy,
//   Unsatisfied,
//   ReadyForRevolution,
// }

export class Address {
  street: string;
  city: string;
  postalCode: string;
}
