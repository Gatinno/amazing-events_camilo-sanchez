const searchFilter = (value, data) =>
	data.filter((event) =>
		event.name.toLowerCase().includes(value.toLowerCase())
	);
export default searchFilter;
