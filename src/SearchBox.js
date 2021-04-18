import React from 'react';

const SearchBox = (searchChange, searchFeild) => {
    return(
        <div>
            <input type='search' 
            placeholder='Search robots...' className='bg-lightest-blue b--green pa1 ma2'
            onchange='onSearchChange'
            />
        </div>
    )

}

export default SearchBox;