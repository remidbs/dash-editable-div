webpackHotUpdatedash_editable_div("main",{

/***/ "./src/lib/components/EditableDiv.react.js":
/*!*************************************************!*\
  !*** ./src/lib/components/EditableDiv.react.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditableDiv; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/**
 * EditableDiv is div component with editable
 * content storing its innerHTML in the state.
 */

var EditableDiv = /*#__PURE__*/function (_Component) {
  _inherits(EditableDiv, _Component);

  var _super = _createSuper(EditableDiv);

  function EditableDiv(props) {
    var _this;

    _classCallCheck(this, EditableDiv);

    _this = _super.call(this, props);
    _this.state = {
      value: props.children.innerHTML
    };
    return _this;
  }

  _createClass(EditableDiv, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          setProps = _this$props.setProps,
          children = _this$props.children,
          style = _this$props.style,
          className = _this$props.className;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id,
        contentEditable: true,
        style: style,
        className: className,
        suppressContentEditableWarning: true,
        onInput: function onInput(e) {
          return setProps({
            value: e.target.innerHTML
          });
        }
      }, children);
    }
  }]);

  return EditableDiv;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


EditableDiv.defaultProps = {};
EditableDiv.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The div innerHTML.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The chilren components
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Defines CSS styles which will override styles previously set.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2VkaXRhYmxlX2Rpdi8uL3NyYy9saWIvY29tcG9uZW50cy9FZGl0YWJsZURpdi5yZWFjdC5qcyJdLCJuYW1lcyI6WyJFZGl0YWJsZURpdiIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImNoaWxkcmVuIiwiaW5uZXJIVE1MIiwiaWQiLCJzZXRQcm9wcyIsInN0eWxlIiwiY2xhc3NOYW1lIiwiZSIsInRhcmdldCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9iamVjdCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztJQUNxQkEsVzs7Ozs7QUFDakIsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxXQUFLLEVBQUVGLEtBQUssQ0FBQ0csUUFBTixDQUFlQztBQURiLEtBQWI7QUFGZTtBQUtsQjs7Ozs2QkFFUTtBQUFBLHdCQUM4QyxLQUFLSixLQURuRDtBQUFBLFVBQ0VLLEVBREYsZUFDRUEsRUFERjtBQUFBLFVBQ01DLFFBRE4sZUFDTUEsUUFETjtBQUFBLFVBQ2dCSCxRQURoQixlQUNnQkEsUUFEaEI7QUFBQSxVQUMwQkksS0FEMUIsZUFDMEJBLEtBRDFCO0FBQUEsVUFDaUNDLFNBRGpDLGVBQ2lDQSxTQURqQztBQUdMLDBCQUNJO0FBQ0ksVUFBRSxFQUFFSCxFQURSO0FBRUksdUJBQWUsTUFGbkI7QUFHSSxhQUFLLEVBQUVFLEtBSFg7QUFJSSxpQkFBUyxFQUFFQyxTQUpmO0FBS0ksc0NBQThCLEVBQUUsSUFMcEM7QUFNSSxlQUFPLEVBQUUsaUJBQUNDLENBQUQ7QUFBQSxpQkFBT0gsUUFBUSxDQUFDO0FBQUNKLGlCQUFLLEVBQUVPLENBQUMsQ0FBQ0MsTUFBRixDQUFTTjtBQUFqQixXQUFELENBQWY7QUFBQTtBQU5iLFNBUUtELFFBUkwsQ0FESjtBQVlIOzs7O0VBdkJvQ1EsK0M7OztBQTBCekNaLFdBQVcsQ0FBQ2EsWUFBWixHQUEyQixFQUEzQjtBQUVBYixXQUFXLENBQUNjLFNBQVosR0FBd0I7QUFDcEI7QUFDSjtBQUNBO0FBQ0lSLElBQUUsRUFBRVMsaURBQVMsQ0FBQ0MsTUFKTTs7QUFNcEI7QUFDSjtBQUNBO0FBQ0liLE9BQUssRUFBRVksaURBQVMsQ0FBQ0MsTUFURzs7QUFXcEI7QUFDSjtBQUNBO0FBQ0laLFVBQVEsRUFBRVcsaURBQVMsQ0FBQ0UsTUFkQTs7QUFnQnBCO0FBQ0o7QUFDQTtBQUNBO0FBQ0lWLFVBQVEsRUFBRVEsaURBQVMsQ0FBQ0csSUFwQkE7O0FBc0JwQjtBQUNKO0FBQ0E7QUFDSVQsV0FBUyxFQUFFTSxpREFBUyxDQUFDQyxNQXpCRDs7QUEyQnBCO0FBQ0o7QUFDQTtBQUNJUixPQUFLLEVBQUVPLGlEQUFTLENBQUNFO0FBOUJHLENBQXhCLEMiLCJmaWxlIjoiN2Q0ZjBlYi1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogRWRpdGFibGVEaXYgaXMgZGl2IGNvbXBvbmVudCB3aXRoIGVkaXRhYmxlXG4gKiBjb250ZW50IHN0b3JpbmcgaXRzIGlubmVySFRNTCBpbiB0aGUgc3RhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRhYmxlRGl2IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMuY2hpbGRyZW4uaW5uZXJIVE1MLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2lkLCBzZXRQcm9wcywgY2hpbGRyZW4sIHN0eWxlLCBjbGFzc05hbWV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICBjb250ZW50RWRpdGFibGVcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nPXt0cnVlfVxuICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhlKSA9PiBzZXRQcm9wcyh7dmFsdWU6IGUudGFyZ2V0LmlubmVySFRNTH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRWRpdGFibGVEaXYuZGVmYXVsdFByb3BzID0ge307XG5cbkVkaXRhYmxlRGl2LnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBkaXYgaW5uZXJIVE1MLlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNoaWxyZW4gY29tcG9uZW50c1xuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXG4gICAgICovXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogT2Z0ZW4gdXNlZCB3aXRoIENTUyB0byBzdHlsZSBlbGVtZW50cyB3aXRoIGNvbW1vbiBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgQ1NTIHN0eWxlcyB3aGljaCB3aWxsIG92ZXJyaWRlIHN0eWxlcyBwcmV2aW91c2x5IHNldC5cbiAgICAgKi9cbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9