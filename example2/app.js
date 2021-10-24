// TUTORIAL URL:
// github.com/NeXt-UI/next-tutorials/blob/master/tutorials/tutorial-004-03.md
// https://github.com/NeXt-UI/next-tutorials/blob/master/tutorials/tutorial-004-04.md
/*************************************DATA************************************************/
https: var topologyData = {
  nodes: [
    {
      id: 0,
      name: "New York",
    },
    {
      id: 1,
      name: "Los Angeles",
    },
    {
      id: 2,
      name: "Houston",
    },
  ],
  links: [
    {
      // Connect New York to LA
      source: 0,
      target: 1,
    },
    {
      // Connect New York to Houson
      source: 0,
      target: 2,
    },
    {
      // Connect Houston to Newyork
      source: 2,
      target: 0,
    },
  ],
};

/************************************* APP START************************************************/
//1. instantiate NeXt app
// var app = new nx.ui.Application();

// //2. configuration object for next
// var topologyConfig = {
//   // special configuration for nodes
//   nodeConfig: {
//     label: "model.name",
//     iconType: "router",
//   },
//   // special configuration for links
//   linkConfig: {
//     linkType: "curve",
//   },
//   // if true, the nodes' icons are shown, otherwise a user sees a dot instead
//   showIcon: true,
//   // automatically compute the position of nodes
//   dataProcessor: "force", // you pretty much always need this or the UI will not start off at a good state
// };

// //3. instantiate Topology class
// var topology = new nx.graphic.Topology(topologyConfig);
// //4. load topology data from app/data.js
// topology.data(topologyData);

// //5. bind the topology object to the app
// topology.attach(app);
// //6. app must run inside a specific container. In our case this is the one with id="topology-container"
// app.container(document.getElementById("topology-container"));

/************************************* Part 1: Intro to classes in NextUI  ************************************************
This section demonstrates how to create classes within the NextUI framework using `nx.define`
*/

/*
This will create a new class or global constructior function on the window object called `Person`
*/
const Person = nx.define("Person", {
  properties: {
    // pre-set properties
    firstName: "John",
    lastName: "Smith",
    age: 30,
  },
  methods: {
    init() {
      this.newProp = "newPropValue";
    },
    // this methods reads the properties and extract the first letters of first and last names, contatenating them afterwards
    getInitials() {
      var initials = this.firstName().charAt(0) + this.lastName().charAt(0);
      return initials;
    },
    getFirstName() {
      return this.firstName();
    },
  },
});

// console.log(`What does nx.define("Person", {...}) return?`);
// console.log(`window.Person: `, window.Person);

// const person = new Person();
// console.log(`person:`, {
//   firstName1: person.firstName, // this wont work, this is a function. To get the `name` create a getter
//   firstName2: person.firstName(),
//   initials: person.getInitials(),
// });

/************************************* Part 2: Classes with inheritence ************************************************
 This section covers how to reuse classes you previously defined.
*/
const Mammal = nx.define("Mammal", {
  properties: {
    bloodType: "warm blood",
    type: "",
  },
  methods: {
    // just a random method
    greet: function () {
      console.log(`I am a mammal`);
    },
  },
});

const Dog = nx.define("Dog", Mammal, {
  properties: {
    type: "dog",
  },
  methods: {
    greet: function () {
      console.log(`BARK`);
    },
  },
});

// var mammal = new Mammal();
// var dog = new Dog();
// console.log(`mammal.type() ===`, mammal.type()); // ''
// console.log(`dog.type() ===`, dog.type()); // 'dog'
// dog.greet(); // "BARK"

/************************************* Part 2: Static Class with members ************************************************
 This section covers how to define:
 1. Static classes: a singleton which means that it is an instance of itself and cannot have any copies. They cannot be inherited.
 2. Static members (methods, properties..): 

Why static classes?
Sometimes programmers use singletons as configuration across the app, for utility classes and testing.
*/

// A static class cannot be instantiated with `new` it will error.
const AuthService = nx.define("AuthService", {
  static: true,
  properties: {
    prop1: "prop1 value",
  },
  methods: {
    getUser: function () {
      return { name: "clifford" };
    },
  },
});
// console.log(`AuthService.prop1 === `, AuthService.prop1());
// console.log(`AuthService.getUser === `, AuthService.getUser());

//You can create a non-static class which has static members:
const Logger = nx.define("Logger", {
  statics: {
    version: 1.0,
    logMessage: function () {
      console.log("logMessage() ==== ", "HELLO WORLD");
    },
  },
});

console.log(`Logger.version === `, Logger.version);
