import React from 'react'
import { css } from 'styled-components/macro'

// import { vars } from '../lib/theme';

const BgImg = ({ ratio, ...props }) => {
  return (
    <img
      alt=''
      loading='lazy'
      css={css`
        box-sizing: border-box;
        object-fit: cover;
        object-position: 50% 50%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        opacity: 1;
        transition: all 0.2s ease-in-out;
      `}
      {...props}
    />
  )
}

export default BgImg
