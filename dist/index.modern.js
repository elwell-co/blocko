import _styled, { css } from 'styled-components';
import React from 'react';

var _StyledImg = _styled("img").withConfig({
  displayName: "BgImg___StyledImg",
  componentId: "fpmroz-0"
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

const defaults = {
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
})(["", ""], p => p._css2);

function Col({
  className,
  children,
  width = [{
    0.5: defaults.size.md
  }],
  ...props
}) {
  const widths = Array.isArray(width) ? width : [{
    width: '0px'
  }];
  return /*#__PURE__*/React.createElement(_StyledDiv, Object.assign({
    className: className
  }, props, {
    _css2: css(["box-sizing:border-box;flex:0 0 100%;", ""], widths.map(w => css(["@media screen and (min-width:", "){width:", ";flex:0 0 ", ";}"], Object.values(w)[0], Object.keys(w)[0] * 100 + '%', Object.keys(w)[0] * 100 + '%')))
  }), children);
}

var _StyledDiv$1 = _styled("div").withConfig({
  displayName: "Cols___StyledDiv",
  componentId: "j1gxv4-0"
})(["", ""], p => p._css2);

const Cols = ({
  children,
  vAlign,
  flip,
  space,
  ...props
}) =>
/*#__PURE__*/
React.createElement(_StyledDiv$1, Object.assign({}, props, {
  _css2: css(["min-width:100%;box-sizing:border-box;display:flex;flex-wrap:wrap;", " ", " ", ""], vAlign === 'center' && css(["align-items:center;"]), flip && css(["flex-direction:row-reverse;"]), space && css(["margin:calc((3.5vw + 24px) * -", ");& > *{padding:calc((3.5vw + 24px) * ", ");}"], space / 2, space / 2))
}), children);

var _StyledDiv$2 = _styled("div").withConfig({
  displayName: "Container___StyledDiv",
  componentId: "cosp5m-0"
})(["", ""], p => p._css2);

const Container = ({
  className,
  children,
  width,
  space,
  left,
  right,
  ...props
}) => {
  return /*#__PURE__*/React.createElement(_StyledDiv$2, Object.assign({
    className: className
  }, props, {
    _css2: css(["box-sizing:border-box;width:100%;max-width:", ";margin-left:auto;margin-right:auto;position:relative;", " ", " ", ""], width, space && css(["padding-left:calc((3.5vw + 24px) * ", ");padding-right:calc((3.5vw + 24px) * ", ");"], space, space), left && css(["margin-left:0;"]), right && css(["margin-right:0;"]))
  }), children);
};

var _StyledDiv$3 = _styled("div").withConfig({
  displayName: "Section___StyledDiv",
  componentId: "sc-1wtj1q0-0"
})(["", ""], p => p._css2);

const Section = ({
  className,
  children,
  height: _height = 'auto',
  bg,
  space,
  flush,
  ...props
}) => {
  return /*#__PURE__*/React.createElement(_StyledDiv$3, Object.assign({
    className: className
  }, props, {
    _css2: css(["box-sizing:border-box;position:relative;min-height:", ";background-color:", ";display:flex;align-items:center;justify-content:center;", ""], _height, bg, space && css(["padding-top:calc((3.5vw + 24px) * ", ");padding-bottom:calc((3.5vw + 24px) * ", ");"], space, space))
  }), children);
};

const Box = ({
  children,
  height: _height = 'auto',
  bg,
  hSpace,
  vSpace,
  width,
  ...props
}) => {
  return /*#__PURE__*/React.createElement(Section, Object.assign({
    bg: bg,
    height: _height,
    space: vSpace
  }, props), /*#__PURE__*/React.createElement(Container, {
    width: width,
    space: hSpace
  }, children));
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

export { BgImg, Box, Col, Cols, Container, H, Section };
//# sourceMappingURL=index.modern.js.map
