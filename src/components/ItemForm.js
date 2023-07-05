import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit, formCategory, formName, onFormName, onFormCategory }) {
  function handleSubmit(event) {
    event.preventDefault()
    const formNewItem = {
        id: uuid(),
        name: formName,
        category: formCategory
    }
    onItemFormSubmit(formNewItem)
  }


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formName} onChange={onFormName} />
      </label>

      <label>
        Category:
        <select name="category" value={formCategory} onChange={onFormCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
