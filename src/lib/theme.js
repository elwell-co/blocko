export const vars = {
  fonts: {
    body:
      '-apple-system, BlinkMacSystemFont, "avenir next", avenir, helvetica, "helvetica neue", ubuntu, roboto, noto, "segoe ui", arial, sans-serif;',
    // headings: '-apple-system, BlinkMacSystemFont, "avenir next", avenir, helvetica, "helvetica neue", ubuntu, roboto, noto, "segoe ui", arial, sans-serif;',
    // body: '"Open Sans", sans-serif;',
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
      // darkest: 'hsla(160, 40%, 20%, 1)',
      // darker: 'hsla(160, 40%, 40%, 1)',
      // dark: 'hsla(160, 40%, 50%, 1)',
      // mid: 'hsla(160, 40%, 60%, 1)',
      // light: 'hsla(160, 40%, 70%, 1)',
      // lighter: 'hsla(160, 40%, 80%, 1)',
      // lightest: 'hsla(160, 40%, 90%, 1)'
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
  shadows: [
    '0 10px 40px -15px rgba(0, 0, 0, 0.8)',
    '0 10px 30px -5px rgba(0,0,0,0.3)'
  ],
  spacing: ['5px', '10px', '20px', '40px', '60px', '80px'],
  // spacing: ['.8rem', '1.6rem', '2rem', '4rem'],
  // borderRadius: ['6px', '12px', '24px'],
  borderRadius: ['4px', '8px', '16px', '24px'],
  break: {
    xs: '400px',
    sm: '560px',
    md: '780px',
    lg: '960px',
    xl: '1200px',
    xxl: '1500px'
  }
  // media: {
  //   mobile: rules => css`
  //     @media (max-width: 400px) {
  //       ${rules};
  //     }
  //   `,
  //   tablet: rules => css`
  //     @media (min-width: 400px) {
  //       ${rules};
  //     }
  //   `,
  //   desktop: rules => css`
  //     @media (min-width: 800px) {
  //       ${rules};
  //     }
  //   `
  // }
}
