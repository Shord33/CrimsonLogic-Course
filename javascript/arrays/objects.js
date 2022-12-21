let dog ={
    dogName: "javascript",
    weight: 2.4,
    color: "brown",
    breed: "Pug",
    age: 3,
    burglarBiter: true
};
let dogColor1 = dog.color
dogColor1
dog.color = "grey"
let ageVar = "age"
console.log(dog[ageVar]) //cannot dot notation
// object within object
let company = { companyName: "Healthy Candy",
                activity: "food manufacturing",
                address: {
                    street: "2nd street",
                    number: "123",
                    zipcode: "33116",
                    city: "Miami",
                    state: "Florida"
                  },
                  yearOfEstablishment: 2021 
                };
console.log(company.address.street)  
//array in object
company = { companyName: "Healthy Candy",
                activities: ["food manufacturing", 
"improving kids' health", "manufacturing toys"],
                address: {
                  street: "2nd street",
                  number: "123",
                  zipcode: "33116",
                  city: "Miami",
                  state: "Florida"
                },
                yearOfEstablishment: 2021 

            };
let activity = company.activities[1]
//object in array
let addresses = [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
  }];
  console.log(addresses[0].state)

  //objects in array in objects
  company = { companyName: "Healthy Candy",
                    activities: [ "food manufacturing", 
"improving kids' health", 
"manufacturing toys"],
                    address: [{
                      street: "2nd street",
                      number: "123",
                      zipcode: "33116",
                      city: "Miami",
                      state: "Florida"
                    },
                    {
                      street: "1st West avenue",
                      number: "5",
                      zipcode: "75001",
                      city: "Addison",
                      state: "Texas"
                    }],
                    yearOfEstablishment: 2021
                };

let streetName = company.address[0].street
streetName                
