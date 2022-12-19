const template = (firstElement, secondElement, thirdElement) => {
  let html = `
    <tr class="border border-1 text-center">
      <td class="border border-1">${firstElement}</td>
      <td class="border border-1">${secondElement}</td>
      <td class="border border-1">${thirdElement}</td>
    </tr>
  `
  return html
}
const renderTableUpcomingPast = (array, container) => {
  let html = ''
  array.forEach(element => {
    html += template(element.name, `$${element.revenue}`, `${element.percentAssistance}%`)
  });
  container.innerHTML = html
}
export {template, renderTableUpcomingPast}