"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _Kyc = require("./build/Kyc.json");

var _Kyc2 = _interopRequireDefault(_Kyc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_Kyc2.default.interface), "0xdb3a2D05bF82680FC55C77D88a13B42674b939Cb");
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL0t5Yy5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwia3ljIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQWdCLEFBQWhCOzs7Ozs7QUFDQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ2YsS0FBSyxBQUFMLE1BQVcsY0FBSSxBQUFmLEFBRGUsWUFFZixBQUZlLEFBQWpCLEFBSUE7a0JBQWUsQUFBZiIsImZpbGUiOiJLeWMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc2hpdmEvRG9jdW1lbnRzL3JlYWN0X3JldmljZS9reWMtYXBwIn0=