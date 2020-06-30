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

const defaults = {
  space: ['0', '2.5em', '5em'],
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
  width = 1,
  ...props
}) {
  return /*#__PURE__*/React.createElement(_StyledDiv, Object.assign({}, props, {
    _css2: css(["box-sizing:border-box;flex:0 0 100%;@media screen and (min-width:", "){width:", ";flex:0 0 ", ";}"], defaults.size.md, width * 100 + '%', width * 100 + '%')
  }), children);
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
  space: _space = defaults.space[1],
  ...props
}) => /*#__PURE__*/React.createElement(_StyledDiv$1, {
  _css2: css(["overflow:hidden;"])
}, /*#__PURE__*/React.createElement(_StyledDiv2, Object.assign({}, props, {
  _css3: css(["min-width:100%;box-sizing:border-box;display:flex;flex-wrap:wrap;", " ", ""], vAlign === 'center' && css(["align-items:center;"]), _space && css(["margin:-", ";& > *{padding:", ";}"], _space, _space))
}), children));

var _StyledDiv$2 = _styled("div").withConfig({
  displayName: "Container___StyledDiv",
  componentId: "sc-15n1cc7-0"
})(["", ""], p => p._css2);

const Container = ({
  children,
  size: _size = defaults.size.lg,
  space: _space = defaults.space[2],
  ...props
}) => {
  return /*#__PURE__*/React.createElement(_StyledDiv$2, Object.assign({}, props, {
    _css2: css(["box-sizing:border-box;width:100%;max-width:", ";margin-left:auto;margin-right:auto;", ""], _size, _space && css(["padding-left:", ";padding-right:", ";"], _space, _space))
  }), children);
};

var _StyledDiv$3 = _styled("div").withConfig({
  displayName: "Section___StyledDiv",
  componentId: "sc-19iyajk-0"
})(["", ""], p => p._css2);

const Section = ({
  children,
  height: _height = 'auto',
  bg,
  space: _space = defaults.space[2],
  ...props
}) => {
  return /*#__PURE__*/React.createElement(_StyledDiv$3, Object.assign({}, props, {
    _css2: css(["box-sizing:border-box;position:relative;min-height:", ";background-color:", ";display:flex;align-items:center;justify-content:center;", ""], _height, bg, _space && css(["padding-top:", ";padding-bottom:", ";"], _space, _space))
  }), children);
};

var _StyledDiv$4 = _styled("div").withConfig({
  displayName: "Box___StyledDiv",
  componentId: "sc-17iadpk-0"
})(["", ""], p => p._css2);

const Box = ({
  children,
  height: _height = 'auto',
  bg,
  hSpace: _hSpace = defaults.space[2],
  vSpace: _vSpace = defaults.space[2],
  width,
  ...props
}) => {
  return /*#__PURE__*/React.createElement(_StyledDiv$4, Object.assign({}, props, {
    _css2: css(["box-sizing:border-box;position:relative;min-height:", ";background-color:", ";display:flex;align-items:center;justify-content:center;", ""], _height, bg, _vSpace && css(["padding-top:", ";padding-bottom:", ";"], _vSpace, _vSpace))
  }), /*#__PURE__*/React.createElement(Container, {
    size: width,
    space: _vSpace
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
