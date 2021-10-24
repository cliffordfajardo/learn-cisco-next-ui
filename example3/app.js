// TUTORIAL URL:
// https://github.com/NeXt-UI/next-tutorials/blob/master/tutorials/tutorial-004-05.md
/*************************************DATA************************************************/

// nx.define("DonorClass", nx.Observable, {
//   properties: {
//     donorProp: 100,
//   },
// });

// nx.define("SimpleBindingClass", nx.Observable, {
//   properties: {
//     donor: {
//       value: new DonorClass(),
//     },
//     // This is the only explicitly defined property, which is 10 by default. The rest of the props depend on this.
//     prop: 10,

//     prop1: {
//       // `prop1` is simply an alias for `prop`
//       value: nx.keyword.binding("prop"),
//     },

//     prop2: {
//       // prop2 is a "computed property" its values is computed from prop1 + applying our own logic.
//       value: nx.keyword.binding("prop1", function (prop1) {
//         return prop1 * 2;
//       }),
//     },

//     prop3: {
//       // A demonstration of a "computed property" using object syntax to pass in multiplw values to our callback
//       // prop3 is a "computed property" its values is computed from prop1 + prop2 +  applying our own logic.
//       value: nx.keyword.binding({
//         source: "prop1, prop2",
//         callback: function (prop1, prop2) {
//           return prop1 + prop2;
//         },
//       }),
//     },

//     // binding by path for external classes/objects
//     // essentially we are aliasing `prop4` to the value from DonorClasses's `donorProp`
//     prop4: {
//       value: nx.keyword.binding("donor.donorProp"),
//     },
//   },
// });

// var foo = new SimpleBindingClass();
// console.log("prop=", foo.prop()); // 10 - explicitly assigned
// console.log("prop1=", foo.prop1()); // 10 - implicitly points to prop
// console.log("prop2=", foo.prop2()); // 20 - doubles prop1
// console.log("prop3=", foo.prop3()); // 30 - sums up prop1 and prop2

// foo.prop(20); // we've set prop's value to 20

// console.log("prop1=", foo.prop1()); // 20
// console.log("prop2=", foo.prop2()); // 40
// console.log("prop3=", foo.prop3()); // 60

/*********************************************** Part 2: using "Dependencies" as opposed to "Basic Binding" syntax ***********************************************
  `Dependencies` offer the way to read and use the other properties' values to one or more of them.
  `Dependencies` work just the way the binders do, however they are simpler and do not require to unbind the property after use. 
  The functionality dependencies include is concatenation and interpolation of the values into the properties that depend on them.
*/

nx.define("DonorClass", nx.Observable, {
  properties: {
    donorProp: 100,
  },
});

nx.define("SimpleBindingClass", nx.Observable, {
  properties: {
    donor: {
      value: new DonorClass(),
    },
    // This is the only explicitly defined property, which is 10 by default. The rest of the props depend on this.
    prop: 10,

    prop1: {
      // `prop1` is simply an alias for `prop`
      value: nx.keyword.binding("prop"),
    },

    prop2: {
      // prop2 is a "computed property" its values is computed from prop1 + applying our own logic.
      value: nx.keyword.binding("prop1", function (prop1) {
        return prop1 * 2;
      }),
    },

    prop3: {
      // A demonstration of a "computed property" using object syntax to pass in multiplw values to our callback
      // prop3 is a "computed property" its values is computed from prop1 + prop2 +  applying our own logic.
      value: nx.keyword.binding({
        source: "prop1, prop2",
        callback: function (prop1, prop2) {
          return prop1 + prop2;
        },
      }),
    },

    // binding by path for external classes/objects
    // essentially we are aliasing `prop4` to the value from DonorClasses's `donorProp`
    prop4: {
      value: nx.keyword.binding("donor.donorProp"),
    },
  },
});

nx.define("DependBindingClass", nx.Observable, {
  properties: {
    simple: {
      value: function () {
        return new SimpleBindingClass();
      },
    },
    prop1: {
      dependencies: "simple.prop",
    },
    prop2: {
      dependencies: ["simple.prop1"],
      value: function (prop1) {
        return prop1 * 2;
      },
    },
    prop3: {
      dependencies: ["simple.prop1", "simple.prop2"],
      update: function (prop1, prop2) {
        this.prop3(prop1 + prop2);
      },
    },
  },
});

var foo = new DependBindingClass();
console.log("SimpleBindingClass.prop: ", foo.simple().prop()); // 10
console.log("prop1: ", foo.prop1()); // 10
console.log("prop2: ", foo.prop2()); // 20
console.log("prop3: ", foo.prop3()); // 30
