const customStyles ={
  valueContainer: () => ({
    height: 45,
    alignItems: 'center',
    display: 'flex',
  }),
  container: provided => ({
    ...provided,
    padding: 10,
    paddingLeft: 0,
  }),
  singleValue: provided => ({
    ...provided,
    padding: 10,
  }),
  placeholder: provided => ({
    ...provided,
    padding: 10,
  }),
  indicatorSeparator: provided => ({
    ...provided,
    backgroundColor: 'transparent',
  }),
};

export default customStyles;
