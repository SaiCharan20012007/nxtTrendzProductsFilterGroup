import {AiOutlineSearch} from 'react-icons/ai'

import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    sendSearchValue,
    sendActiveCatId,
    activeCategory,
    sendActiveRatingId,
    activeRating,
    clearAllFilters,
  } = props

  const clearFilters = () => {
    clearAllFilters()
  }
  const sendCatId = Id => {
    sendActiveCatId(Id)
  }

  const sendRatingId = rId => {
    sendActiveRatingId(rId)
  }

  const onSearchClick = event => {
    if (event.key === 'Enter') {
      //   sendSearchInput(event.target.value)
      console.log(event.target.value)
      sendSearchValue(event.target.value)
    }
  }

  return (
    <div className="filters-group-container">
      <h1>Filters Group</h1>
      <div className="search-bar-container">
        <input
          type="search"
          placeholder="Search"
          className="search-bar"
          onKeyPress={onSearchClick}
        />
        <AiOutlineSearch className="search-icon" />
      </div>
      <h1 className="category-title">Category</h1>

      <ul className="cat-ul">
        {categoryOptions.map(eachCategory => {
          const isStyled =
            eachCategory.categoryId === activeCategory
              ? 'selected-category'
              : 'unselected-category'
          return (
            <li className="category-list-item">
              <button
                type="button"
                className={isStyled}
                onClick={() => sendCatId(eachCategory.categoryId)}
                key={eachCategory.categoryId}
              >
                <p>{eachCategory.name}</p>
              </button>
            </li>
          )
        })}
      </ul>
      <h1 className="category-title">Rating</h1>
      <ul className="cat-ul">
        {ratingsList.map(eachRating => {
          const isStyledR =
            eachRating.ratingId === activeRating
              ? 'selected-category'
              : 'unselected-category'

          return (
            <li className="category-list-item">
              <button
                type="button"
                className={isStyledR}
                onClick={() => sendRatingId(eachRating.ratingId)}
                key={eachRating.ratingId}
              >
                <img
                  src={eachRating.imageUrl}
                  alt={`rating ${eachRating.ratingId}`}
                  className="stars-img"
                />
                & up
              </button>
            </li>
          )
        })}
      </ul>
      <button type="button" className="clear-btn" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
