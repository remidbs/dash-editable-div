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

  function EditableDiv() {
    _classCallCheck(this, EditableDiv);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2VkaXRhYmxlX2Rpdi8uL3NyYy9saWIvY29tcG9uZW50cy9FZGl0YWJsZURpdi5yZWFjdC5qcyJdLCJuYW1lcyI6WyJFZGl0YWJsZURpdiIsInByb3BzIiwiaWQiLCJzZXRQcm9wcyIsImNoaWxkcmVuIiwic3R5bGUiLCJjbGFzc05hbWUiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJpbm5lckhUTUwiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvYmplY3QiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7SUFDcUJBLFc7Ozs7Ozs7Ozs7Ozs7NkJBQ1I7QUFBQSx3QkFDOEMsS0FBS0MsS0FEbkQ7QUFBQSxVQUNFQyxFQURGLGVBQ0VBLEVBREY7QUFBQSxVQUNNQyxRQUROLGVBQ01BLFFBRE47QUFBQSxVQUNnQkMsUUFEaEIsZUFDZ0JBLFFBRGhCO0FBQUEsVUFDMEJDLEtBRDFCLGVBQzBCQSxLQUQxQjtBQUFBLFVBQ2lDQyxTQURqQyxlQUNpQ0EsU0FEakM7QUFFTCwwQkFDSTtBQUNJLFVBQUUsRUFBRUosRUFEUjtBQUVJLHVCQUFlLE1BRm5CO0FBR0ksYUFBSyxFQUFFRyxLQUhYO0FBSUksaUJBQVMsRUFBRUMsU0FKZjtBQUtJLHNDQUE4QixFQUFFLElBTHBDO0FBTUksZUFBTyxFQUFFLGlCQUFDQyxDQUFEO0FBQUEsaUJBQU9KLFFBQVEsQ0FBQztBQUFDSyxpQkFBSyxFQUFFRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFBakIsV0FBRCxDQUFmO0FBQUE7QUFOYixTQVFLTixRQVJMLENBREo7QUFZSDs7OztFQWZvQ08sK0M7OztBQWtCekNYLFdBQVcsQ0FBQ1ksWUFBWixHQUEyQixFQUEzQjtBQUVBWixXQUFXLENBQUNhLFNBQVosR0FBd0I7QUFDcEI7QUFDSjtBQUNBO0FBQ0lYLElBQUUsRUFBRVksaURBQVMsQ0FBQ0MsTUFKTTs7QUFNcEI7QUFDSjtBQUNBO0FBQ0lQLE9BQUssRUFBRU0saURBQVMsQ0FBQ0MsTUFURzs7QUFXcEI7QUFDSjtBQUNBO0FBQ0lYLFVBQVEsRUFBRVUsaURBQVMsQ0FBQ0UsTUFkQTs7QUFnQnBCO0FBQ0o7QUFDQTtBQUNBO0FBQ0liLFVBQVEsRUFBRVcsaURBQVMsQ0FBQ0csSUFwQkE7O0FBc0JwQjtBQUNKO0FBQ0E7QUFDSVgsV0FBUyxFQUFFUSxpREFBUyxDQUFDQyxNQXpCRDs7QUEyQnBCO0FBQ0o7QUFDQTtBQUNJVixPQUFLLEVBQUVTLGlEQUFTLENBQUNFO0FBOUJHLENBQXhCLEMiLCJmaWxlIjoiYjIyYmYzMi1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogRWRpdGFibGVEaXYgaXMgZGl2IGNvbXBvbmVudCB3aXRoIGVkaXRhYmxlXG4gKiBjb250ZW50IHN0b3JpbmcgaXRzIGlubmVySFRNTCBpbiB0aGUgc3RhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRhYmxlRGl2IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpZCwgc2V0UHJvcHMsIGNoaWxkcmVuLCBzdHlsZSwgY2xhc3NOYW1lfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmc9e3RydWV9XG4gICAgICAgICAgICAgICAgb25JbnB1dD17KGUpID0+IHNldFByb3BzKHt2YWx1ZTogZS50YXJnZXQuaW5uZXJIVE1MfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5FZGl0YWJsZURpdi5kZWZhdWx0UHJvcHMgPSB7fTtcblxuRWRpdGFibGVEaXYucHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGRpdiBpbm5lckhUTUwuXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2hpbHJlbiBjb21wb25lbnRzXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBPZnRlbiB1c2VkIHdpdGggQ1NTIHRvIHN0eWxlIGVsZW1lbnRzIHdpdGggY29tbW9uIHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBDU1Mgc3R5bGVzIHdoaWNoIHdpbGwgb3ZlcnJpZGUgc3R5bGVzIHByZXZpb3VzbHkgc2V0LlxuICAgICAqL1xuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=