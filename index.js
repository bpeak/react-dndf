"use strict";

var PropTypes = require('prop-types');

var wrapperDefaultStyle = require('./styles/wrapperDefaultStyle');

var inputFileStyle = require('./styles/inputFileStyle');

var contentsContainerStyle = require('./styles/contentsContainerStyle');

var sampleContentsStyle = require('./styles/sampleContentsStyle');

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ReactDNDF = function ReactDNDF(React) {
  var SampleCover = function SampleCover() {
    return React.createElement("div", {
      style: sampleContentsStyle
    }, "Drag And Drop Files");
  };

  var DropZone =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(DropZone, _React$Component);

    function DropZone(props) {
      var _this;

      _classCallCheck(this, DropZone);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DropZone).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "onInputFileChange", function () {
        _this.props.onFileChange(_this.refs.inputFile.files);

        _this.clearInput();
      });

      _defineProperty(_assertThisInitialized(_this), "clearInput", function () {
        _this.refs.inputFile.value = null;
      });

      return _this;
    }

    _createClass(DropZone, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            wrapperStyle = _this$props.wrapperStyle,
            accept = _this$props.accept,
            children = _this$props.children;
        var onInputFileChange = this.onInputFileChange;
        return React.createElement("div", {
          className: className,
          style: wrapperStyle ? Object.assign(wrapperStyle, {
            position: "relative"
          }) : wrapperDefaultStyle
        }, React.createElement("input", {
          ref: "inputFile",
          style: inputFileStyle,
          type: "file",
          accept: accept || "*",
          onChange: onInputFileChange
        }), React.createElement("div", {
          style: contentsContainerStyle
        }, children || React.createElement(SampleCover, null)));
      }
    }]);

    return DropZone;
  }(React.Component);

  DropZone.propTypes = {
    accpet: PropTypes.string,
    onFileChange: PropTypes.func.isRequired
  };
  return DropZone;
};

module.exports = ReactDNDF;