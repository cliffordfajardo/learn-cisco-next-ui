// Tutorial URL: https://github.com/NeXt-UI/next-tutorials/blob/master/tutorials/tutorial-005.md

/************************************ START Part 1: Event Listeners *****************************
NeXt helps you track the events initialized by both user and runtime. 
The user events include click, double-click, dragging and so on.
The runtime events may be literally anything like end of HTTP request. 
What that means is that you are free to design specific behavior, or modify existing.
*/

/*
1. Setup an empty class & instantiate it
2. Register an custom event called 'myEvent` on the `foo` instance
3. Emit an event off of `foo` to trigger the `myEvent` listener.
*/
nx.define("SimpleClass", {});
var foo = new SimpleClass();

foo.on("myEvent", function (sender, data) {
  console.log(data);
});
// foo.fire("myEvent"); // undefined
// foo.fire("myEvent", "hey");

/************************************ START Part 2: Watchers *****************************/
/*
1. Setup  a class with properties and a `watcher`. A `watcher` is a type of event listener that tracks any change of variables value
2. Instantiate the class. Set the name from `John` to `Jack`
   This will trigger the `watcher` function for the `name` property to be called.

NOTE: nx.Observable provides special interfaces for watchers, that's why you need to inherit the class.
*/
nx.define("WatcherExample", nx.Observable, {
  properties: {
    name: {
      value: "John",
      /**
				pName: property name
				pValue: new value
				pOldValue: old value
			*/
      watcher: function (pName, pValue, pOldValue) {
        console.log(
          `[WATCHER for name]: old value: ${pOldValue} -- new value ${pValue}`
        );
      },
    },
  },
});

var foo = new WatcherExample();
foo.name("Jack");
foo.name("Sam");
