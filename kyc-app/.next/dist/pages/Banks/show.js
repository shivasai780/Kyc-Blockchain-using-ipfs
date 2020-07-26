"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _bank = require("../../ethereum/bank.js");

var _bank2 = _interopRequireDefault(_bank);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require("semantic-ui-react");

var _layout = require("../../components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/shiva/Documents/react_revice/kyc-app/pages/Banks/show.js?entry";

/*const campaighindex =new Campaighnindex();
static campaighnindex.getintialprops
campaighindex.render()*/

var ShowCustomers = function (_Component) {
  (0, _inherits3.default)(ShowCustomers, _Component);

  function ShowCustomers() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ShowCustomers);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ShowCustomers.__proto__ || (0, _getPrototypeOf2.default)(ShowCustomers)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading: false,
      user: "",
      rating: null,
      rateuser: "",
      loading1: false
    }, _this.DeleteCustomer = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts, Bank1;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                console.log(_this.state.user);
                _context.next = 4;
                return _web2.default.eth.getAccounts();

              case 4:
                accounts = _context.sent;
                Bank1 = (0, _bank2.default)(_this.props.address);

                _this.setState({ loading: true });
                _context.prev = 7;
                _context.next = 10;
                return Bank1.methods.Delete_Customer(_this.state.user).send({ from: accounts[0] });

              case 10:
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](7);

                console.log(_context.t0.message);

              case 15:
                _this.setState({ loading: false });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[7, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.RateUser = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var accounts, Bank2;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                console.log(_this.state.rateuser, _this.state.rating);
                _context2.next = 4;
                return _web2.default.eth.getAccounts();

              case 4:
                accounts = _context2.sent;
                Bank2 = (0, _bank2.default)(_this.props.address);

                _this.setState({ loading1: true });
                _context2.prev = 7;
                _context2.next = 10;
                return Bank2.methods.rate_users(_this.state.rateuser, _this.state.rating).send({ from: accounts[0] });

              case 10:
                _context2.next = 15;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](7);

                console.log(_context2.t0.message);

              case 15:
                _this.setState({ loading1: false });

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[7, 12]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ShowCustomers, [{
    key: "renderCustomers",
    value: function renderCustomers() {
      var items = this.props.array.map(function (address) {
        return {
          header: address,
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { columns: 2, relaxed: "very", stackable: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "Customers"), this.renderCustomers()), _react2.default.createElement(_semanticUiReact.Grid.Column, { verticalalign: "middle", __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_routes.Link, { route: "/Banks/" + this.props.address + "/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        content: "Register Customer",
        icon: "add circle",
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }))), _react2.default.createElement(_semanticUiReact.Divider, { horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), _react2.default.createElement(_semanticUiReact.Input, {
        floated: "right",
        placeholder: "address",
        onChange: function onChange(event) {
          return _this3.setState({ user: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        primary: true,
        onClick: this.DeleteCustomer,
        loading: this.state.loading,
        size: "Large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "Delete user"), _react2.default.createElement(_semanticUiReact.Divider, { horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), _react2.default.createElement(_semanticUiReact.Input, {
        action: "Adress",
        floated: "right",
        placeholder: "Adress",
        onChange: function onChange(event) {
          return _this3.setState({ rateuser: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), _react2.default.createElement(_semanticUiReact.Input, {
        action: "Limit5",
        floated: "right",
        placeholder: "number",
        onChange: function onChange(event) {
          return _this3.setState({ rating: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        primary: true,
        size: "Large",
        onClick: this.RateUser,
        loading: this.state.loading1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, "Rate user"))), _react2.default.createElement(_semanticUiReact.Divider, { vertical: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }))));
    }
  }], [{
    key: "getInitialProps",

    //static is class function .function is asssigned to the calss itself not for the instance
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
        var address, Bank, array;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log(props.query.address);
                address = props.query.address;

                console.log((0, _bank2.default)(address));
                Bank = (0, _bank2.default)(address);

                console.log(Bank);
                _context3.next = 7;
                return Bank.methods.get_noofcustomers().call();

              case 7:
                array = _context3.sent;

                console.log(array);
                return _context3.abrupt("return", { array: array, address: address });

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getInitialProps(_x3) {
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ShowCustomers;
}(_react.Component);

exports.default = ShowCustomers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0JhbmtzL3Nob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJiYW5rIiwid2ViMyIsIkxhYmVsIiwiQ2FyZCIsIkJ1dHRvbiIsIklucHV0IiwiU2VnbWVudCIsIkdyaWQiLCJEaXZpZGVyIiwiTGF5b3V0IiwiTGluayIsIlNob3dDdXN0b21lcnMiLCJzdGF0ZSIsImxvYWRpbmciLCJ1c2VyIiwicmF0aW5nIiwicmF0ZXVzZXIiLCJsb2FkaW5nMSIsIkRlbGV0ZUN1c3RvbWVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiQmFuazEiLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsIm1ldGhvZHMiLCJEZWxldGVfQ3VzdG9tZXIiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJSYXRlVXNlciIsIkJhbmsyIiwicmF0ZV91c2VycyIsIml0ZW1zIiwiYXJyYXkiLCJtYXAiLCJoZWFkZXIiLCJmbHVpZCIsInJlbmRlckN1c3RvbWVycyIsInRhcmdldCIsInZhbHVlIiwicXVlcnkiLCJCYW5rIiwiZ2V0X25vb2ZjdXN0b21lcnMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOzs7Ozs7QUFDckI7Ozs7SUFHTSxBOzs7Ozs7Ozs7Ozs7Ozs7ME5BYUosQTtlQUFRLEFBQ0csQUFDVDtZQUZNLEFBRUEsQUFDTjtjQUhNLEFBR0UsQUFDUjtnQkFKTSxBQUlJLEFBQ1Y7Z0JBTE0sQUFLSSxBO0FBTEosQUFDTixhQWVGLEE7MkZBQWlCLGlCQUFBLEFBQU8sT0FBUDtz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QUFBQztpQkFBRCxBQUVFO2NBRkYsQUFFTyxBQUNMO2lCQUFTLEtBSFgsQUFHZ0IsQUFDZDtpQkFBUyxLQUFBLEFBQUssTUFKaEIsQUFJc0I7O29CQUp0QjtzQkFBQTtBQUFBO0FBQ0UsU0FuRFIsQUFDRSxBQUtFLEFBNENFLEFBVUosZ0NBQUEsQUFBQywwQ0FBUSxVQUFUO29CQUFBO3NCQS9EUixBQUNFLEFBQ0UsQUFDRSxBQTRERSxBQUtUO0FBTFM7Ozs7U0ExSFY7Ozs7NkcsQUFDNkI7Ozs7O21CQUMzQjt3QkFBQSxBQUFRLElBQUksTUFBQSxBQUFNLE1BQWxCLEFBQXdCLEFBQ2xCO0EsMEJBQVUsTUFBQSxBQUFNLE1BQU0sQSxBQUM1Qjs7d0JBQUEsQUFBUSxJQUFJLG9CQUFaLEFBQVksQUFBSyxBQUNYO0EsdUJBQU8sb0JBQUEsQUFBSyxBLEFBQ2xCOzt3QkFBQSxBQUFRLElBQVIsQUFBWTs7dUJBQ1EsS0FBQSxBQUFLLFFBQUwsQUFBYSxvQixBQUFiLEFBQWlDOzttQkFBL0M7QSxrQ0FFTjs7d0JBQUEsQUFBUSxJQUFSLEFBQVk7a0RBQ0wsRUFBRSxPQUFGLE9BQVMsU0FBVCxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWGlCLEEsQUFrSTVCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvc2hpdmEvRG9jdW1lbnRzL3JlYWN0X3JldmljZS9reWMtYXBwIn0=