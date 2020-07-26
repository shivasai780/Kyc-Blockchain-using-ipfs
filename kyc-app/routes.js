const routes = require("next-routes")();

routes
  .add("/Banks/new", "/Banks/new")
  .add("/Banks/:address", "/Banks/show") //: this part will be wild card a variable of source
  .add("/Banks/:address/new", "/Banks/Customersadd")
  .add("/Banks/:address/Customers/new", "/Banks/requests/new");
module.exports = routes;
