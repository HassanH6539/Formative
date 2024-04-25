document.getElementById('itemForm').addEventListener('submit', function (e) {
  e.preventDefault() // Prevent the default form submission

  // Get the value from the input
  const itemInput = document.getElementById('itemInput')
  const newItem = itemInput.value.trim()

  if (newItem) {
    // Create a new list item and add it to the list
    const itemList = document.getElementById('itemList')
    const li = document.createElement('li')
    li.textContent = newItem
    itemList.appendChild(li)

    // Clear the input after adding
    itemInput.value = ''
  }
})
