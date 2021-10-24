// https://github.com/NeXt-UI/next-tutorials/blob/master/tutorials/tutorial-006-03.md

var app = new nx.ui.Application();
var contactsData = [
  {
    name: "John",
    phone: "+1(555)1234567",
  },
  {
    name: "Jack",
    phone: "+1(555)9991100",
  },
];

nx.define("ContactList", nx.ui.Component, {
  view: {
    tag: "ul",
    props: {
      // items to iterate on
      items: "{#contacts}",

      // template for iterations (will remain the same for the items)
      template: {
        tag: "li",
        content: [
          {
            tag: "span",
            content: "{name}",
            props: {
              style: "font-weight: bold;",
            },
          },
          {
            tag: "span",
            content: ": ",
          },
          {
            tag: "span",
            content: "{phone}",
          },
        ],
      },
      props: {
        // any HTML attributes go here
      },
    },
  },
  properties: {
    contacts: null,
  },
});

/**
1. Define the UI component ^.
    It will be a <ul> with multiple <li> items

2. Create the ContactsList component
3. Pass contactsData into the contactsList components `contact` property.
*/
var contactList = new ContactList();
contactList.contacts(contactsData);
contactList.attach(app);
