function Filter(props) {
  const { setFilteredText, placeholder } = props

  const changeFilter = (e) => setFilteredText(e.target.value);

  return (
    <input
      className="Filter"
      type="text"
      placeholder={`Search by ${placeholder}`}
      onChange={changeFilter}
    />
  );
}

export default Filter;
