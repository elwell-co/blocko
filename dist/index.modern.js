import _styled, { css } from 'styled-components';
import React from 'react';

var _StyledImg = _styled("img").withConfig({
  displayName: "BgImg___StyledImg",
  componentId: "sc-1tkdkkd-0"
})(["", ""], p => p._css2);

const BgImg = ({
  ratio,
  ...props
}) => {
  return /*#__PURE__*/React.createElement(_StyledImg, Object.assign({
    alt: "",
    loading: "lazy"
  }, props, {
    _css2: css(["box-sizing:border-box;object-fit:cover;object-position:50% 50%;position:absolute;top:0;right:0;bottom:0;left:0;height:100%;width:100%;opacity:1;transition:all 0.2s ease-in-out;"])
  }));
};

const vars = {
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
  break: {
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
  componentId: "sc-1qkmlhz-0"
})(["", ""], p => p._css2);

function Col({
  children,
  width = 1
}) {
  return /*#__PURE__*/React.createElement(_StyledDiv, {
    _css2: css(["box-sizing:border-box;flex:0 0 100%;@media screen and (min-width:", "){flex:0 0 ", ";}"], vars.break.md, width * 100 + '%')
  }, children);
}

var _StyledDiv$1 = _styled("div").withConfig({
  displayName: "Cols___StyledDiv",
  componentId: "sc-1m0f9it-0"
})(["", ""], p => p._css2);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "Cols___StyledDiv2",
  componentId: "sc-1m0f9it-1"
})(["", ""], p => p._css3);

const Cols = ({
  children,
  vAlign,
  gutter: _gutter = vars.spacing[2],
  ...props
}) => /*#__PURE__*/React.createElement(_StyledDiv$1, {
  _css2: css(["overflow:hidden;"])
}, /*#__PURE__*/React.createElement(_StyledDiv2, Object.assign({}, props, {
  _css3: css(["min-width:calc(100% - ", ");box-sizing:border-box;display:flex;flex-wrap:wrap;margin:-", ";& > *{padding:", ";}", ""], _gutter * 2, _gutter, _gutter, vAlign === 'center' && css(["align-items:center;"]))
}), children));

var _StyledDiv$2 = _styled("div").withConfig({
  displayName: "Container___StyledDiv",
  componentId: "sc-49g7a3-0"
})(["", ""], p => p._css2);

const Container = ({
  children,
  maxWidth: _maxWidth = vars.break.xxl,
  flush: _flush = false
}) => {
  return /*#__PURE__*/React.createElement(_StyledDiv$2, {
    _css2: css(["box-sizing:border-box;width:100%;max-width:", ";margin-left:auto;margin-right:auto;", ""], _maxWidth, !_flush && css(["padding-left:5vw;padding-right:5vw;"]))
  }, children);
};

var _StyledDiv$3 = _styled("div").withConfig({
  displayName: "Section___StyledDiv",
  componentId: "t0lcog-0"
})(["", ""], p => p._css2);

const Section = ({
  children,
  flush: _flush = false,
  minHeight: _minHeight = 'auto',
  bg: _bg = vars.colors.white,
  ...props
}) => {
  const getContrastingColor = bg => {
    switch (bg) {
      case vars.colors.primary.mid:
        return vars.colors.white;

      default:
        return 'black';
    }
  };

  const headingColor = getContrastingColor(_bg);
  return /*#__PURE__*/React.createElement(_StyledDiv$3, Object.assign({}, props, {
    _css2: css(["box-sizing:border-box;position:relative;min-height:", ";background-color:", ";display:flex;align-items:center;justify-content:center;", " .h1,.h2,.h3,.h4,.h5,.h6{color:", ";}"], _minHeight, _bg, !_flush && css(["padding-top:5vw;padding-bottom:5vw;"]), headingColor)
  }), children);
};

const H = ({
  children,
  level: _level = 3,
  size: _size = _level
}) => {
  const Tag = 'h' + _level;
  return /*#__PURE__*/React.createElement(Tag, {
    className: 'h' + _size
  }, children);
};

export { BgImg, Col, Cols, Container, H, Section };
//# sourceMappingURL=index.modern.js.map
