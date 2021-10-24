/*************************************DATA************************************************/
var topologyData = {
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
/*1. instantiate NeXt app
----------------------------------------
This is an abstraction for NeXt apps, and there are usually quite a few things we do with it:
*/
var app = new nx.ui.Application();

/*2. configuration object for next
---------------------------------
changing the settings here helps us manipulate the behavor of the map
*/
var topologyConfig = {
  // special configuration for nodes
  nodeConfig: {
    label: "model.name",
    iconType: "router",
  },
  // special configuration for links
  linkConfig: {
    linkType: "curve",
  },
  // if true, the nodes' icons are shown, otherwise a user sees a dot instead
  showIcon: true,
  // automatically compute the position of nodes
  dataProcessor: "force", // you pretty much always need this or the UI will not start off at a good state
};

//3. instantiate Topology class
var topology = new nx.graphic.Topology(topologyConfig);
//4. load topology data from app/data.js
topology.data(topologyData);

//5. bind the topology object to the app
topology.attach(app);
//6. app must run inside a specific container. In our case this is the one with id="topology-container"
app.container(document.getElementById("topology-container"));
