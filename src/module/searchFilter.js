const searchFilter = (
	value,
	data
) => 
	value.length
		? data.filter((event) =>
				event.name.toLowerCase().includes(value.toLowerCase())
		  )
		: data
export default searchFilter;
