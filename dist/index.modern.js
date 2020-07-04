import _styled, { css } from 'styled-components';
import React from 'react';

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

var _StyledImg = _styled("img").withConfig({
  displayName: "BgImg___StyledImg",
  componentId: "fpmroz-0"
})(["", ""], function (p) {
  return p._css2;
});

var BgImg = function BgImg(_ref) {
  var props = _objectWithoutPropertiesLoose(_ref, ["ratio"]);

  return /*#__PURE__*/React.createElement(_StyledImg, _extends({
    alt: "",
    loading: "lazy"
  }, props, {
    _css2: css(["box-sizing:border-box;object-fit:cover;object-position:50% 50%;position:absolute;top:0;right:0;bottom:0;left:0;height:100%;width:100%;opacity:1;transition:all 0.2s ease-in-out;"])
  }));
};

var defaults = {
  space: ['0', '2em', '4em'],
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

var _StyledDiv = _styled("div").withConfig({
  displayName: "Col___StyledDiv",
  componentId: "sc-163x1ar-0"
})(["", ""], function (p) {
  return p._css2;
});

function Col(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 1 : _ref$width,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "children", "width"]);

  var widths = Array.isArray(width) ? width : [{
    size: '0px',
    width: width
  }];
  return /*#__PURE__*/React.createElement(_StyledDiv, _extends({
    className: className
  }, props, {
    _css2: css(["box-sizing:border-box;flex:0 0 100%;", ""], widths.map(function (w) {
      return css(["@media screen and (min-width:", "){width:", ";flex:0 0 ", ";}"], w.size, w.width * 100 + '%', w.width * 100 + '%');
    }))
  }), children);
}

var _StyledDiv$1 = _styled("div").withConfig({
  displayName: "Cols___StyledDiv",
  componentId: "j1gxv4-0"
})(["", ""], function (p) {
  return p._css2;
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "Cols___StyledDiv2",
  componentId: "j1gxv4-1"
})(["", ""], function (p) {
  return p._css3;
});

var Cols = function Cols(_ref) {
  var children = _ref.children,
      vAlign = _ref.vAlign,
      flip = _ref.flip,
      _ref$space = _ref.space,
      space = _ref$space === void 0 ? defaults.space[1] : _ref$space,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "vAlign", "flip", "space"]);

  return /*#__PURE__*/React.createElement(_StyledDiv$1, {
    _css2: css(["overflow:hidden;"])
  }, /*#__PURE__*/React.createElement(_StyledDiv2, _extends({}, props, {
    _css3: css(["min-width:100%;box-sizing:border-box;display:flex;flex-wrap:wrap;", " ", " ", ""], vAlign === 'center' && css(["align-items:center;"]), flip && css(["flex-direction:column-reverse;"]), space && css(["margin:-", ";& > *{padding:", ";}"], space, space))
  }), children));
};

var _StyledDiv$2 = _styled("div").withConfig({
  displayName: "Container___StyledDiv",
  componentId: "cosp5m-0"
})(["", ""], function (p) {
  return p._css2;
});

var Container = function Container(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? defaults.size.lg : _ref$size,
      flush = _ref.flush,
      left = _ref.left,
      right = _ref.right,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "children", "size", "space", "flush", "left", "right"]);

  return /*#__PURE__*/React.createElement(_StyledDiv$2, _extends({
    className: className
  }, props, {
    _css2: css(["box-sizing:border-box;width:100%;max-width:", ";margin-left:auto;margin-right:auto;position:relative;", " ", " ", ""], size, !flush && css(["padding-left:calc(3.5vw + 24px);padding-right:calc(3.5vw + 24px);"]), left && css(["margin-left:0;"]), right && css(["margin-right:0;"]))
  }), children);
};

var _StyledDiv$3 = _styled("div").withConfig({
  displayName: "Section___StyledDiv",
  componentId: "sc-1wtj1q0-0"
})(["", ""], function (p) {
  return p._css2;
});

var Section = function Section(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 'auto' : _ref$height,
      bg = _ref.bg,
      flush = _ref.flush,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "children", "height", "bg", "space", "flush"]);

  return /*#__PURE__*/React.createElement(_StyledDiv$3, _extends({
    className: className
  }, props, {
    _css2: css(["box-sizing:border-box;position:relative;min-height:", ";background-color:", ";display:flex;align-items:center;justify-content:center;", ""], height, bg, !flush && css(["padding-top:40px;padding-bottom:40px;@media screen and (min-width:400px){padding-top:5vw;padding-bottom:5vw;}"]))
  }), children);
};

var _StyledDiv$4 = _styled("div").withConfig({
  displayName: "Box___StyledDiv",
  componentId: "wtiqff-0"
})(["", ""], function (p) {
  return p._css2;
});

var Box = function Box(_ref) {
  var children = _ref.children,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 'auto' : _ref$height,
      bg = _ref.bg,
      _ref$vSpace = _ref.vSpace,
      vSpace = _ref$vSpace === void 0 ? defaults.space[2] : _ref$vSpace,
      width = _ref.width,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "height", "bg", "hSpace", "vSpace", "width"]);

  return /*#__PURE__*/React.createElement(_StyledDiv$4, _extends({}, props, {
    _css2: css(["box-sizing:border-box;position:relative;min-height:", ";background-color:", ";display:flex;align-items:center;justify-content:center;", ""], height, bg, vSpace && css(["padding-top:", ";padding-bottom:", ";"], vSpace, vSpace))
  }), /*#__PURE__*/React.createElement(Container, {
    size: width,
    space: vSpace
  }, children));
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

export { BgImg, Box, Col, Cols, Container, H, Section };
//# sourceMappingURL=index.modern.js.map
