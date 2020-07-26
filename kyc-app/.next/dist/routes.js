"use strict";

var routes = require("next-routes")();

routes.add("/Banks/new", "/Banks/new").add("/Banks/:address", "/Banks/show") //: this part will be wild card a variable of source
.add("/Banks/:address/new", "/Banks/Customersadd").add("/Banks/:address/Customers/new", "/Banks/requests/new");
module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLGNBQ3FCLEFBRHJCLGNBRUcsQUFGSCxJQUVPLEFBRlAsbUJBRTBCLEFBRjFCLGVBRXlDLEFBRnpDO0NBR0csQUFISCxJQUdPLEFBSFAsdUJBRzhCLEFBSDlCLHVCQUlHLEFBSkgsSUFJTyxBQUpQLGlDQUl3QyxBQUp4QztBQUtBLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc2hpdmEvRG9jdW1lbnRzL3JlYWN0X3JldmljZS9reWMtYXBwIn0=