const makeListStyle = (styles: BaseObject) => ({
  padding: '0',
  margin: '0 0 10px 0',
  listStyle: 'none',
  textAlign: 'left',
  ...styles,
});

export default makeListStyle;
