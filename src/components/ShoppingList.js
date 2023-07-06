import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ search, setSearchTerm] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  const itemsToSearch = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

  
  const itemsToDisplay = itemsToSearch.filter((item) => {
    if (selectedCategory === "All") return true
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addNewItem} />
      <Filter
        onCategoryChange={handleCategoryChange} 
        search={search}
        onSearchChange={handleSearch}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
        ))
        }
      </ul>
    </div>
  )
}

export default ShoppingList;
