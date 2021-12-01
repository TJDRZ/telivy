function Filter(props) {
  const changeFilter = (e) => {
    props.setFilteredText(e.target.value);
  };

  return (
    <input type="text" placeholder="Search by name" onChange={changeFilter} />
  );
}

export default Filter;
