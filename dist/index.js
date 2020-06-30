function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
var React = _interopDefault(require('react'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _StyledImg = _styled__default("img").withConfig({
  displayName: "BgImg___StyledImg",
  componentId: "sc-14h7406-0"
})(["", ""], function (p) {
  return p._css2;
});

var BgImg = function BgImg(_ref) {
  var props = _objectWithoutPropertiesLoose(_ref, ["ratio"]);

  return /*#__PURE__*/React.createElement(_StyledImg, _extends({
    alt: "",
    loading: "lazy"
  }, props, {
    _css2: _styled.css(["box-sizing:border-box;object-fit:cover;object-position:50% 50%;position:absolute;top:0;right:0;bottom:0;left:0;height:100%;width:100%;opacity:1;transition:all 0.2s ease-in-out;"])
  }));
};

var vars = {
  spacing: ['0', '4px', '8px', '16px', '32px', '64px', '96px'],
  size: {
    xs: '400px',
    sm: '560px',
    md: '780px',
    lg: '960px',
    xl: '1200px',
    xxl: '1500px'
  }
};

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "Col___StyledDiv",
  componentId: "sc-1qixbma-0"
})(["", ""], function (p) {
  return p._css2;
});

function Col(_ref) {
  var children = _ref.children,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 1 : _ref$width;
  return /*#__PURE__*/React.createElement(_StyledDiv, {
    _css2: _styled.css(["box-sizing:border-box;flex:0 0 100%;@media screen and (min-width:", "){flex:0 0 ", ";}"], vars.size.md, width * 100 + '%')
  }, children);
}

var _StyledDiv$1 = _styled__default("div").withConfig({
  displayName: "Cols___StyledDiv",
  componentId: "ecrkrv-0"
})(["", ""], function (p) {
  return p._css2;
});

var _StyledDiv2 = _styled__default("div").withConfig({
  displayName: "Cols___StyledDiv2",
  componentId: "ecrkrv-1"
})(["", ""], function (p) {
  return p._css3;
});

var Cols = function Cols(_ref) {
  var children = _ref.children,
      vAlign = _ref.vAlign,
      _ref$gutter = _ref.gutter,
      gutter = _ref$gutter === void 0 ? vars.spacing[1] : _ref$gutter,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "vAlign", "gutter"]);

  return /*#__PURE__*/React.createElement(_StyledDiv$1, {
    _css2: _styled.css(["overflow:hidden;"])
  }, /*#__PURE__*/React.createElement(_StyledDiv2, _extends({}, props, {
    _css3: _styled.css(["min-width:calc(100% - ", ");box-sizing:border-box;display:flex;flex-wrap:wrap;margin:-", ";& > *{padding:", ";}", ""], gutter * 2, gutter, gutter, vAlign === 'center' && _styled.css(["align-items:center;"]))
  }), children));
};

var _StyledDiv$2 = _styled__default("div").withConfig({
  displayName: "Container___StyledDiv",
  componentId: "sc-15n1cc7-0"
})(["", ""], function (p) {
  return p._css2;
});

var Container = function Container(_ref) {
  var children = _ref.children,
      _ref$maxWidth = _ref.maxWidth,
      maxWidth = _ref$maxWidth === void 0 ? vars.size.xxl : _ref$maxWidth,
      _ref$flush = _ref.flush,
      flush = _ref$flush === void 0 ? false : _ref$flush;
  return /*#__PURE__*/React.createElement(_StyledDiv$2, {
    _css2: _styled.css(["box-sizing:border-box;width:100%;max-width:", ";margin-left:auto;margin-right:auto;", ""], maxWidth, !flush && _styled.css(["padding-left:5vw;padding-right:5vw;"]))
  }, children);
};

var _StyledDiv$3 = _styled__default("div").withConfig({
  displayName: "Section___StyledDiv",
  componentId: "sc-19iyajk-0"
})(["", ""], function (p) {
  return p._css2;
});

var Section = function Section(_ref) {
  var children = _ref.children,
      _ref$minHeight = _ref.minHeight,
      minHeight = _ref$minHeight === void 0 ? 'auto' : _ref$minHeight,
      bg = _ref.bg,
      spacing = _ref.spacing,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "minHeight", "bg", "spacing"]);

  return /*#__PURE__*/React.createElement(_StyledDiv$3, _extends({}, props, {
    _css2: _styled.css(["box-sizing:border-box;position:relative;min-height:", ";background-color:", ";display:flex;align-items:center;justify-content:center;", ""], minHeight, bg, spacing && _styled.css(["padding-top:", ";padding-bottom:", ";"], vars.spacing[spacing], vars.spacing[spacing]))
  }), children);
};

var H = function H(_ref) {
  var children = _ref.children,
      _ref$level = _ref.level,
      level = _ref$level === void 0 ? 3 : _ref$level,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? level : _ref$size;
  var Tag = 'h' + level;
  return /*#__PURE__*/React.createElement(Tag, {
    className: 'h' + size
  }, children);
};

exports.BgImg = BgImg;
exports.Col = Col;
exports.Cols = Cols;
exports.Container = Container;
exports.H = H;
exports.Section = Section;
//# sourceMappingURL=index.js.map
