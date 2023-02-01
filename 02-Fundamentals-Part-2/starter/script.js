"use strict";

// "Jonas has 3 friends, and his best friend is called michael"

// const jonas = ["Michael", "Bob", "Andrew"];

// console.log(
//   `Jonas has ${jonas.length} friends, and his best friend is called ${jonas[0]}`
// );

const jonas = {
  firstName: "Jonas",
  lastName: "Schmiddenten",
  job: "teacher",
  dateOfBirth: 1991,
  hasDriversLincense: false,

  getSummary: function () {
    return `${this.firstName} is a 46 year old ${this.job}, and ${
      this.hasDriversLincense ? "has" : "does not"
    } has a driver's lincese`;
  },
};

console.log(jonas.getSummary());
