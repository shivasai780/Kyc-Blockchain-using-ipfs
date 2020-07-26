"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _Bank = require("./build/Bank.json");

var _Bank2 = _interopRequireDefault(_Bank);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Bank2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2JhbmsuanMiXSwibmFtZXMiOlsid2ViMyIsImJhbmsiLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFpQixBQUFqQixBQUVBOzs7Ozs7a0JBQWUsVUFBQyxBQUFELFNBQWEsQUFDMUI7U0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FBc0IsS0FBSyxBQUFMLE1BQVcsZUFBSyxBQUFoQixBQUF0QixZQUFrRCxBQUFsRCxBQUFQLEFBQ0Q7QUFGRCIsImZpbGUiOiJiYW5rLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3NoaXZhL0RvY3VtZW50cy9yZWFjdF9yZXZpY2Uva3ljLWFwcCJ9