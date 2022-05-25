import React from 'react';

const SearchBar = ({setSearch}) => {
    return (
        <div className={'mb-5 input-group'}>
            <div className={'form-outline'}>
                <input type={'search'}
                       className={'form-control'}
                       placeholder={'Search tender'}
                       onChange={e => {setSearch(e.target.value)}}
                />
            </div>

        </div>
    );
};

export default SearchBar;