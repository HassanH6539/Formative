const data = [
  'Aston Martin',
  'Pagani',
  'BMW',
  'Alpha Romeo',
  'Zenovo',
  'Mclaren',
  'Nissan',
  'Dodge',
  'Chevorlet',
  'Audi'
]

function search () {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase()
  const searchResults = document.getElementById('searchResults')

  searchResults.innerHTML = ''

  if (searchTerm.trim() === '') {
    searchResults.innerHTML = 'Please enter the name of a car brand'
    return
  }

  const results = data.filter(item => item.toLowerCase().includes(searchTerm))

  if (results.length === 0) {
    searchResults.innerHTML = 'No results found.'
  } else {
    const ul = document.createElement('ul')
    results.forEach(result => {
      const li = document.createElement('li')
      li.textContent = result
      ul.appendChild(li)
    })
    searchResults.appendChild(ul)
  }
}
