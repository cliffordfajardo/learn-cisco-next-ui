// Event Binding: https://github.com/NeXt-UI/next-tutorials/blob/master/tutorials/tutorial-006-02.md

nx.define("ExampleForm", nx.ui.Component, {
  properties: {
    name: "", // name to display
    tempName: "", // name to change from form
  },
  methods: {
    saveName: function () {
      this.name(this.tempName()); // use a setter over getter
    },
  },
  view: {
    /*
        <div>
            <input><button>Save</button>
        </div>
    */
    content: [
      {
        tag: "div",
        content: [
          {
            tag: "input",
            props: {
              value: "{#tempName}",
            },
          },
          {
            tag: "button",
            content: "Save",
            events: {
              click: "{#saveName}", // call the `saveName` method.
            },
          },
        ],
      },
      /*
        <div>
            <span style="font-weight: bold;">Name: </span>
            <span></span>
        </div>
      */
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

//create app
var app = new nx.ui.Application();
var form = new ExampleForm();
//attach topo to app;
form.attach(app);

// Example 7 shows how we can simplify creating multiple components with `templates`
