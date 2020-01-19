export const stringifyItem = ({ itemName, id, completed }): string => {
  const item: string = `
    <li class="list__item" id="${id}">
      <button class="list__item-checkbox ${completed ? 'list__item-checkbox--active' : ''}"}>&check;</button>
      <input type="text" class="list__item-textfield" value="${itemName}">
      <button class="list__item-delete-button">Delete</button>
    </li>
  `

  return item
}
