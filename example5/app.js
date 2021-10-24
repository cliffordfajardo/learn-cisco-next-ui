// Tutorial URL: https://github.com/NeXt-UI/next-tutorials/blob/master/tutorials/tutorial-006.md

/*************************************** Start Part 1: Creating UI with Next Components *******************************************
The UI i module in NeXt that offers a way to create your own UIs in NeXt. 
The class `nx.ui` and its subclasses accomplish the entire thing. The most important concept that goes along with it is view.
*/

// nx.define("MyComponent1", nx.ui.Component, {
//   view: {
//     //  Good for single child
//     content: {
//       // This is similar to React's createElement. However, in React, we use JSX to avoid having to write functions of objects like this:
//       // <a href="http://example.com">hello</a>
//       tag: "a",
//       content: "hello",
//       props: {
//         href: "http://example.com",
//       },
//     },
//   },
// });

// /*
// 1. Create a component
// 2. Create an app
// 3. Attach the new view to the app.
// */
// var myComponent2 = new MyComponent1();
// var app1 = new nx.ui.Application();
// myComponent2.attach(app1);

// nx.define("MyComponent2", nx.ui.Component, {
//   view: {
//     // Array syntax: Just a wrapper for multiple children. Cannot have props. Useful for multiple siblings.
//     content: [
//       {
//         tag: "div",
//         content: "man",
//         props: {
//           style: "color: #f00;",
//         },
//       },
//       {
//         tag: "div",
//         content: "woman",
//         props: {
//           style: "color: #f00;",
//         },
//       },
//     ],
//   },
// });
// var myComponent2 = new MyComponent2();
// var app2 = new nx.ui.Application();
// // myComponent2.attach(app2);
// myComponent2.attach(app1);

//************************************************************** */ Example 2:  More complex UI with lots of elements
nx.define("ExampleForm", nx.ui.Component, {
  properties: {
    name: "Jack",
  },
  view: {
    /*
        <input>
        <div>
            <span style="font-weight:bold;"> Name: </span>
            <span> </span>
        </div>
    */
    content: [
      {
        tag: "input",
        props: {
          value: "{#name}",
        },
      },
      {
        tag: "div",
        content: [
          {
            tag: "span",
            content: "Name: ",
            props: {
              style: "font-weight: bold;",
            },
          },
          {
            tag: "span",
            content: "{#name}",
          },
        ],
      },
    ],
  },
});
// Next has 2 way data binding so when you update the input field it updates the other associated DOM nodes as well
var app = new nx.ui.Application();
var form = new ExampleForm();
form.attach(app);
