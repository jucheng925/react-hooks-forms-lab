import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addNewItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("")
  const [formName, setFormName] = useState("")
  const [formCategory, setFormCategory] = useState("Produce")

  

  function handleFormName(event) {
    setFormName(event.target.value)
  }

  function handleFormCategory(event) {
    setFormCategory(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  const itemsToSearch = items.find(item => searchTerm.toLowerCase() === item.name.toLowerCase())
  
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm 
          onItemFormSubmit={addNewItems} 
          onFormName={handleFormName} 
          onFormCategory={handleFormCategory} 
          formName={formName} 
          formCategory={formCategory}
          setFormName={setFormName}
          setFormCategory={setFormCategory} />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        searchTerm={searchTerm}
        onSearchChange={handleSearch}
      />
      <ul className="Items">
        {itemsToSearch === undefined ? 
            itemsToDisplay.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            )) : 
            <Item key={itemsToSearch.id} name={itemsToSearch.name} category={itemsToSearch.category} />
        }
      </ul>
    </div>
  )
}

export default ShoppingList;
