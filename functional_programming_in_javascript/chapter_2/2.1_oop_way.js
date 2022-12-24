// Listing 2.1 oop paradigm

class Person {
  constructor(firstname, lastname, ssn) {
    this.firstname = firstname;
    this.firstname = lastname;
    this.ssn = ssn;
    this.address = null;
    this.birthYear = null
  }

  // get ssn() {
  //   return this.ssn;
  // }

  // get firstname() {
  //   return this.firstname;
  // }

  // get lastname() {
  //   return this.lastname;
  // }

  // get address() {
  //   return this.address;
  // }

  // get birthYear() {
  //   return this.birthYear;
  // }

  // set birthYear(year) {
  //   this.birthYear = year;
  // }

  // set address(addr) {
  //   this.address = addr;
  // }

  peopleInSameCountry(friends) {
    const result = [];
    for(let idx in friends) {
      const friend = friends[idx];
      if(this.address.country === friend.address.country) {
        result.push(friend);
      }
    }
    return result;
  }
}

class Student extends Person {
  constructor(firstname, lastname, ssn, school) {
    super(firstname, lastname, ssn)
    this.school = school;
  }

  // get school() {
  //   return this.school;
  // }

  peopleInSameCountryAndSchool(friends) {
    const closeFriends = super.peopleInSameCountry(friends);

    const result = [];
    for(let idx in closeFriends) {
      const friend = closeFriends[idx];
      if(this.school === friend.school) {
        result.push(friend);
      }
    }
    return result;
  }
}

class Address {
  constructor(country, buildingNo = '', streetNo = '', city = '') {
    this.buildingNo = buildingNo;
    this.streetNo = streetNo;
    this.city = city;
    this.country = country;
  }

  get address(){
    return this.buildingNo + ' ' +  this.streetNo + ' ' +  this.city + ' ' + this.country +  '.'
  }
}

const curry = new Student('Haskell', 'Curry',
     '111-11-1111', 'Penn State');
curry.address = new Address('US');

const turing = new Student('Alan', 'Turing',
     '222-22-2222', 'Princeton');
turing.address = new Address('England');

const church = new Student('Alonzo', 'Church',
   '333-33-3333', 'Princeton');
church.address = new Address('US');

const kleene = new Student('Stephen', 'Kleene',
    '444-44-4444', 'Princeton');
kleene.address = new Address('US');

const closePeople = church.peopleInSameCountryAndSchool([curry, turing, kleene]);
console.log(closePeople);
