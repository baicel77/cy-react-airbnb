const theme = {
  primary: '#ff385c',
  second: '#00848A',
  text: {
    primary: '#484848',
    second: '#222',
  },
  mixin: {
    boxShadow: `
      transition: all .2s;
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, .18);
      }
    `
  }
}

export default theme