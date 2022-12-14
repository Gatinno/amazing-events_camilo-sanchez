const renderCategoriesCheckbox = (categories, container) => {
  let html = ''
  categories.forEach(category => {
    html += `
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="${category}" value="${category}">
      <label class="form-check-label" for="${category}">${category}</label>
    </div>
    `
  });
  container.innerHTML = html
}
export default renderCategoriesCheckbox