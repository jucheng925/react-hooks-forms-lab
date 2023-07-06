import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [formName, setFormName] = useState("")
  const [formCategory, setFormCategory] = useState("Produce")
  console.log(formName)
  function handleFormName(event) {
    setFormName(event.target.value)
  }

  function handleFormCategory(event) {
    setFormCategory(event.target.value)
  }

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
        <input type="text" name="name" value={formName} onChange={handleFormName} />
      </label>

      <label>
        Category:
        <select name="category" value={formCategory} onChange={handleFormCategory}>
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
