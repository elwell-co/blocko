import _styled, { css } from 'styled-components';
import React from 'react';

var _StyledImg = _styled("img").withConfig({
  displayName: "BgImg___StyledImg",
  componentId: "sc-14h7406-0"
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
  componentId: "sc-1qixbma-0"
})(["", ""], p => p._css2);

function Col({
  children,
  width = 1
}) {
  return /*#__PURE__*/React.createElement(_StyledDiv, {
    _css2: css(["box-sizing:border-box;flex:0 0 100%;@media screen and (min-width:", "){flex:0 0 ", ";}"], vars.size.md, width * 100 + '%')
  }, children);
}

var _StyledDiv$1 = _styled("div").withConfig({
  displayName: "Cols___StyledDiv",
  componentId: "ecrkrv-0"
})(["", ""], p => p._css2);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "Cols___StyledDiv2",
  componentId: "ecrkrv-1"
})(["", ""], p => p._css3);

const Cols = ({
  children,
  vAlign,
  gutter: _gutter = vars.spacing[1],
  ...props
}) => /*#__PURE__*/React.createElement(_StyledDiv$1, {
  _css2: css(["overflow:hidden;"])
}, /*#__PURE__*/React.createElement(_StyledDiv2, Object.assign({}, props, {
  _css3: css(["min-width:calc(100% - ", ");box-sizing:border-box;display:flex;flex-wrap:wrap;margin:-", ";& > *{padding:", ";}", ""], _gutter * 2, _gutter, _gutter, vAlign === 'center' && css(["align-items:center;"]))
}), children));

var _StyledDiv$2 = _styled("div").withConfig({
  displayName: "Container___StyledDiv",
  componentId: "sc-15n1cc7-0"
})(["", ""], p => p._css2);

const Container = ({
  children,
  maxWidth: _maxWidth = vars.size.xxl,
  flush: _flush = false
}) => {
  return /*#__PURE__*/React.createElement(_StyledDiv$2, {
    _css2: css(["box-sizing:border-box;width:100%;max-width:", ";margin-left:auto;margin-right:auto;", ""], _maxWidth, !_flush && css(["padding-left:5vw;padding-right:5vw;"]))
  }, children);
};

var _StyledDiv$3 = _styled("div").withConfig({
  displayName: "Section___StyledDiv",
  componentId: "sc-19iyajk-0"
})(["", ""], p => p._css2);

const Section = ({
  children,
  minHeight: _minHeight = 'auto',
  bg,
  spacing,
  ...props
}) => {
  return /*#__PURE__*/React.createElement(_StyledDiv$3, Object.assign({}, props, {
    _css2: css(["box-sizing:border-box;position:relative;min-height:", ";background-color:", ";display:flex;align-items:center;justify-content:center;", ""], _minHeight, bg, spacing && css(["padding-top:", ";padding-bottom:", ";"], vars.spacing[spacing], vars.spacing[spacing]))
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
