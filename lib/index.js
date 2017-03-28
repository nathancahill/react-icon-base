'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var IconBase = function IconBase(_ref, _ref2) {
  var _ref2$reactIconBase = _ref2.reactIconBase,
      reactIconBase = _ref2$reactIconBase === undefined ? {} : _ref2$reactIconBase;

  var children = _ref.children,
      color = _ref.color,
      size = _ref.size,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ['children', 'color', 'size', 'style']);

  var computedSize = size || reactIconBase.size || '1em';
  return _react2.default.createElement('svg', _extends({
    children: children,
    fill: 'currentColor',
    preserveAspectRatio: 'xMidYMid meet',
    height: computedSize,
    width: computedSize
  }, reactIconBase, props, {
    style: _extends({
      verticalAlign: 'middle',
      color: color || reactIconBase.color
    }, reactIconBase.style || {}, style)
  }));
};

IconBase.propTypes = {
  color: _react2.default.PropTypes.string,
  size: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  style: _react2.default.PropTypes.object
};

IconBase.contextTypes = {
  reactIconBase: _react2.default.PropTypes.shape(IconBase.propTypes)
};

exports.default = IconBase;
module.exports = exports['default'];