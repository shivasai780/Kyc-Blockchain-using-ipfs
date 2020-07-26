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

var _Kyc = require("../ethereum/Kyc");

var _Kyc2 = _interopRequireDefault(_Kyc);

var _semanticUiReact = require("semantic-ui-react");

var _layout = require("../components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/shiva/Documents/react_revice/kyc-app/pages/index.js?entry";

/*const campaighindex =new Campaighnindex();
static campaighnindex.getintialprops
campaighindex.render()*/

var Camapighnindex = function (_Component) {
  (0, _inherits3.default)(Camapighnindex, _Component);

  function Camapighnindex() {
    (0, _classCallCheck3.default)(this, Camapighnindex);

    return (0, _possibleConstructorReturn3.default)(this, (Camapighnindex.__proto__ || (0, _getPrototypeOf2.default)(Camapighnindex)).apply(this, arguments));
  }

  (0, _createClass3.default)(Camapighnindex, [{
    key: "renderCampighns",

    /* async componentDidMount() {
      
    }*/
    value: function renderCampighns() {
      var items = this.props.campaighn.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: "/Banks/" + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          }, _react2.default.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          }, "View Bank")),
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "Banks"), _react2.default.createElement(_routes.Link, { route: "/Banks/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: "right",
        content: "Create Bank",
        icon: "add circle",
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }))), this.renderCampighns()));
    }
  }], [{
    key: "getInitialProps",

    //static is class function .function is asssigned to the calss itself not for the instance
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaighn;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _Kyc2.default.methods.getBankaddress().call();

              case 2:
                campaighn = _context.sent;

                console.log(campaighn);
                return _context.abrupt("return", { campaighn: campaighn });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Camapighnindex;
}(_react.Component);

exports.default = Camapighnindex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwia3ljIiwiQ2FyZCIsIkJ1dHRvbiIsIkxheW91dCIsIkxpbmsiLCJDYW1hcGlnaG5pbmRleCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnaG4iLCJtYXAiLCJhZGRyZXNzIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBpZ2hucyIsIm1ldGhvZHMiLCJnZXRCYW5rYWRkcmVzcyIsImNhbGwiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7Ozs7O0FBQ3JCOzs7O0lBR00sQTs7Ozs7Ozs7OztTQVFKOzs7OztzQ0FHa0IsQUFDaEI7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxVQUFBLEFBQUMsU0FBWSxBQUNsRDs7a0JBQU8sQUFDRyxBQUNSO3VDQUNFLEFBQUMsOEJBQUssbUJBQU4sQUFBdUI7d0JBQXZCOzBCQUFBLEFBQ0U7QUFERjtXQUFBLGtCQUNFLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxhQUpDLEFBR0gsQUFDRSxBQUdKO2lCQVBGLEFBQU8sQUFPRSxBQUVWO0FBVFEsQUFDTDtBQUZKLEFBQWMsQUFXZCxPQVhjOzJDQVdQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBRUEsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSwwQkFBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQztpQkFBRCxBQUNVLEFBQ1I7aUJBRkYsQUFFVSxBQUNSO2NBSEYsQUFHTyxBQUNMO2lCQUpGOztvQkFBQTtzQkFKTixBQUVFLEFBQ0UsQUFDRSxBQVNIO0FBVEc7QUFDRSxpQkFQWixBQUNFLEFBQ0UsQUFhRyxBQUFLLEFBSWI7OztTQTVDRDs7Ozs7Ozs7Ozs7dUJBRTBCLGNBQUEsQUFBSSxRQUFKLEFBQVksaUJBQWlCLEEsQUFBN0I7O21CQUFsQjtBLHFDQUNOOzt3QkFBQSxBQUFRLElBQVIsQUFBWTtpREFDTCxFQUFFLFdBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUxrQixBLEFBK0M3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9zaGl2YS9Eb2N1bWVudHMvcmVhY3RfcmV2aWNlL2t5Yy1hcHAifQ==