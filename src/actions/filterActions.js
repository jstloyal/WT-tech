export const setTextFilter = keyword => ({
    type: 'SET_TEXT_FILTER',
    payload: keyword
});

export const setBrandFilter = brand => ({
    type: 'SET_BRAND_FILTER',
    payload: brand
});

export const setMinPriceFilter = min => ({
    type: 'SET_MIN_PRICE_FILTER',
    payload: min
});

export const setMaxPriceFilter = max => ({
    type: 'SET_MAX_PRICE_FILTER',
    payload: max
});

export const resetFilter = () => ({
    type: 'RESET_FILTER'
});

  

export const clearRecentSearch = () => ({
    type: 'CLEAR_RECENT_SEARCH'
});

export const removeSelectedRecent = keyword => ({
    type: 'REMOVE_SELECTED_RECENT',
    payload: keyword
});

export const applyFilter = filters => ({
    type: 'APPLY_FILTER',
    payload: filters
});
