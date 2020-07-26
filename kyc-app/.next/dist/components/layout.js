"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _header = require("./header");

var _header2 = _interopRequireDefault(_header);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/shiva/Documents/react_revice/kyc-app/components/layout.js";
//display common elements
//campaighn list is child of layout

exports.default = function (props) {
  return _react2.default.createElement(_semanticUiReact.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Campaighn Factory")), _react2.default.createElement(_header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), props.children);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiSGVhZGVyIiwiSGVhZCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQ1A7Ozs7Ozs7QUFOQTtBQUNBOztrQkFLZSxVQUFBLEFBQUMsT0FBVSxBQUN4Qjt5QkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBO1NBQ0UsQUFDTSxBQUNKO1VBRkYsQUFFTzs7Z0JBRlA7a0JBREYsQUFDRSxBQUlBO0FBSkE7QUFDRSxzQkFHRixjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FOSixBQUNFLEFBS0UsQUFHRix1Q0FBQSxBQUFDOztnQkFBRDtrQkFURixBQVNFLEFBRUM7QUFGRDtBQUFBLFlBVkosQUFDRSxBQVdTLEFBR1o7QUFoQkQiLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3NoaXZhL0RvY3VtZW50cy9yZWFjdF9yZXZpY2Uva3ljLWFwcCJ9