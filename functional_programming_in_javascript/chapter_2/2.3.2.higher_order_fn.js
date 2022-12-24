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

  get address() {
    return this.address;
  }

  // get birthYear() {
  //   return this.birthYear;
  // }

  // set birthYear(year) {
  //   this.birthYear = year;
  // }

  set address(addr) {
    this.address = addr;
  }

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

const sahl = new Person("Sahl", "abdelrahman", "123-33-65")
sahl.address = new Address("US")

const tarek = new Person("tarek", "Mohsen", "111-11-11")
tarek.address = new Address("US")

const leila = new Person("Leila", "abdelrahman", "555-55-22")
leila.address = new Address("EG")

// procedual way to find the people live in US out of group of people
const printPeopleInUS = (people) => {
  for (const person of people) {
    if(person.address.country === "US") {
      console.log(person);
    }
  }
}

printPeopleInUS([sahl, tarek, leila])
///////////////////////////////////////
// what if want to print people in any country
// procedual way
const printPeople1 = (people, country) => {
  for (const person of people) {
    if(person.address.country === country) {
      console.log(person);
    }
  }
}

printPeople1([sahl, tarek, leila], "US")
///////////////////////////////////////
// what if we want to print it to file
// procedual way
const printPeople2 = (people, country, printer) => {
  for (const person of people) {
    if(person.address.country === country) {
      printer(person);
    }
  }
}

printPeople2([sahl, tarek, leila], "US", console.log)
///////////////////////////////////////
// The problem above we didn't abstract the logic enough in each step.
// More decoubling is needed so we can print to a file & search in country
const printPeople4 = (people, selector, printer) => {
  people.forEach(person => {
    if(selector(person)) {
      printer(person)
    }
  });
}

const inCountry = (person) => country => person.address.country === country

printPeople4([sahl, tarek, leila], inCountry("US"), console.log)

