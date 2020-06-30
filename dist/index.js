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
  componentId: "sc-1tkdkkd-0"
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
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "avenir next", avenir, helvetica, "helvetica neue", ubuntu, roboto, noto, "segoe ui", arial, sans-serif;',
    headings: '"Poppins", sans-serif;'
  },
  colors: {
    white: '#fefefe',
    black: 'hsla(250, 15%, 8%, 1)',
    grey: {
      darkest: 'hsla(250, 15%, 25%, 1)',
      darker: 'hsla(250, 15%, 40%, 1)',
      dark: 'hsla(250, 15%, 50%, 1)',
      mid: 'hsla(250, 15%, 60%, 1)',
      light: 'hsla(250, 15%, 70%, 1)',
      lighter: 'hsla(250, 15%, 80%, 1)',
      lightest: 'hsla(250, 15%, 85%, 1)',
      offwhite: 'hsla(250, 15%, 96%, 1)'
    },
    primary: {
      darkest: 'hsla(270, 60%, 20%, 1)',
      darker: 'hsla(270, 60%, 30%, 1)',
      dark: 'hsla(270, 60%, 40%, 1)',
      mid: 'hsla(270, 60%, 50%, 1)',
      light: 'hsla(270, 60%, 58%, 1)',
      lighter: 'hsla(270, 50%, 70%, 1)',
      lightest: 'hsla(270, 50%, 80%, 1)',
      offwhite: 'hsla(270, 60%, 90%, 1)'
    },
    secondary: {
      darkest: 'hsla(250, 30%, 15%, 1)',
      darker: 'hsla(250, 30%, 20%, 1)',
      dark: 'hsla(250, 30%, 30%, 1)',
      mid: 'hsla(250, 30%, 35%, 1)',
      light: 'hsla(250, 30%, 40%, 1)',
      lighter: 'hsla(250, 30%, 65%, 1)',
      lightest: 'hsla(250, 30%, 75%, 1)',
      offwhite: 'hsla(250, 30%, 85%, 1)'
    },
    tertiary: {
      darkest: 'hsla(200, 85%, 20%, 1)',
      darker: 'hsla(200, 85%, 40%, 1)',
      dark: 'hsla(200, 85%, 50%, 1)',
      mid: 'hsla(200, 85%, 60%, 1)',
      light: 'hsla(200, 85%, 70%, 1)',
      lighter: 'hsla(200, 85%, 80%, 1)',
      lightest: 'hsla(200, 85%, 90%, 1)'
    },
    aqua: {
      darkest: 'hsla(190, 40%, 20%, 1)',
      darker: 'hsla(190, 40%, 40%, 1)',
      dark: 'hsla(190, 40%, 50%, 1)',
      mid: 'hsla(190, 40%, 60%, 1)',
      light: 'hsla(190, 40%, 70%, 1)',
      lighter: 'hsla(190, 40%, 80%, 1)',
      lightest: 'hsla(190, 40%, 90%, 1)'
    },
    blue: {
      darkest: 'hsla(220, 40%, 20%, 1)',
      darker: 'hsla(220, 40%, 40%, 1)',
      dark: 'hsla(220, 40%, 50%, 1)',
      mid: 'hsla(220, 40%, 60%, 1)',
      light: 'hsla(220, 40%, 70%, 1)',
      lighter: 'hsla(220, 40%, 80%, 1)',
      lightest: 'hsla(220, 40%, 90%, 1)'
    },
    success: {
      darkest: 'hsla(120, 65%, 15%, 1)',
      darker: 'hsla(120, 65%, 25%, 1)',
      dark: 'hsla(120, 65%, 35%, 1)',
      mid: 'hsla(120, 65%, 45%, 1)',
      light: 'hsla(120, 65%, 53%, 1)',
      lighter: 'hsla(120, 65%, 65%, 1)',
      lightest: 'hsla(120, 65%, 75%, 1)',
      offwhite: 'hsla(120, 65%, 90%, 1)'
    },
    warning: {
      darkest: 'hsla(5, 65%, 20%, 1)',
      darker: 'hsla(5, 65%, 30%, 1)',
      dark: 'hsla(5, 65%, 40%, 1)',
      mid: 'hsla(5, 65%, 50%, 1)',
      light: 'hsla(5, 75%, 60%, 1)',
      lighter: 'hsla(5, 75%, 70%, 1)',
      lightest: 'hsla(5, 75%, 80%, 1)'
    },
    gold: '#ffd700'
  },
  shadows: ['0 10px 40px -15px rgba(0, 0, 0, 0.8)', '0 10px 30px -5px rgba(0,0,0,0.3)'],
  spacing: ['5px', '10px', '20px', '40px', '60px', '80px'],
  borderRadius: ['4px', '8px', '16px', '24px'],
  "break": {
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
  componentId: "sc-1qkmlhz-0"
})(["", ""], function (p) {
  return p._css2;
});

function Col(_ref) {
  var children = _ref.children,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 1 : _ref$width;
  return /*#__PURE__*/React.createElement(_StyledDiv, {
    _css2: _styled.css(["box-sizing:border-box;flex:0 0 100%;@media screen and (min-width:", "){flex:0 0 ", ";}"], vars["break"].md, width * 100 + '%')
  }, children);
}

var _StyledDiv$1 = _styled__default("div").withConfig({
  displayName: "Cols___StyledDiv",
  componentId: "sc-1m0f9it-0"
})(["", ""], function (p) {
  return p._css2;
});

var _StyledDiv2 = _styled__default("div").withConfig({
  displayName: "Cols___StyledDiv2",
  componentId: "sc-1m0f9it-1"
})(["", ""], function (p) {
  return p._css3;
});

var Cols = function Cols(_ref) {
  var children = _ref.children,
      vAlign = _ref.vAlign,
      _ref$gutter = _ref.gutter,
      gutter = _ref$gutter === void 0 ? vars.spacing[2] : _ref$gutter,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "vAlign", "gutter"]);

  return /*#__PURE__*/React.createElement(_StyledDiv$1, {
    _css2: _styled.css(["overflow:hidden;"])
  }, /*#__PURE__*/React.createElement(_StyledDiv2, _extends({}, props, {
    _css3: _styled.css(["min-width:calc(100% - ", ");box-sizing:border-box;display:flex;flex-wrap:wrap;margin:-", ";& > *{padding:", ";}", ""], gutter * 2, gutter, gutter, vAlign === 'center' && _styled.css(["align-items:center;"]))
  }), children));
};

var _StyledDiv$2 = _styled__default("div").withConfig({
  displayName: "Container___StyledDiv",
  componentId: "sc-49g7a3-0"
})(["", ""], function (p) {
  return p._css2;
});

var Container = function Container(_ref) {
  var children = _ref.children,
      _ref$maxWidth = _ref.maxWidth,
      maxWidth = _ref$maxWidth === void 0 ? vars["break"].xxl : _ref$maxWidth,
      _ref$flush = _ref.flush,
      flush = _ref$flush === void 0 ? false : _ref$flush;
  return /*#__PURE__*/React.createElement(_StyledDiv$2, {
    _css2: _styled.css(["box-sizing:border-box;width:100%;max-width:", ";margin-left:auto;margin-right:auto;", ""], maxWidth, !flush && _styled.css(["padding-left:5vw;padding-right:5vw;"]))
  }, children);
};

var _StyledDiv$3 = _styled__default("div").withConfig({
  displayName: "Section___StyledDiv",
  componentId: "t0lcog-0"
})(["", ""], function (p) {
  return p._css2;
});

var Section = function Section(_ref) {
  var children = _ref.children,
      _ref$flush = _ref.flush,
      flush = _ref$flush === void 0 ? false : _ref$flush,
      _ref$minHeight = _ref.minHeight,
      minHeight = _ref$minHeight === void 0 ? 'auto' : _ref$minHeight,
      _ref$bg = _ref.bg,
      bg = _ref$bg === void 0 ? vars.colors.white : _ref$bg,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "flush", "minHeight", "bg"]);

  var getContrastingColor = function getContrastingColor(bg) {
    switch (bg) {
      case vars.colors.primary.mid:
        return vars.colors.white;

      default:
        return 'black';
    }
  };

  var headingColor = getContrastingColor(bg);
  return /*#__PURE__*/React.createElement(_StyledDiv$3, _extends({}, props, {
    _css2: _styled.css(["box-sizing:border-box;position:relative;min-height:", ";background-color:", ";display:flex;align-items:center;justify-content:center;", " .h1,.h2,.h3,.h4,.h5,.h6{color:", ";}"], minHeight, bg, !flush && _styled.css(["padding-top:5vw;padding-bottom:5vw;"]), headingColor)
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
