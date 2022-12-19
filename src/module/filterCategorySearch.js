import filterByCategory from "./filterByCategory.js";
import searchFilter from "./searchFilter.js";
const filterCategorySearch = (data, categories, search) => {
  const filterCategories = filterByCategory(data, categories)
  const filter = searchFilter(search, filterCategories)
  return filter
}
export default filterCategorySearch;
