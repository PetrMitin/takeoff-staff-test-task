import React, {ChangeEvent, FC} from 'react'
import { IContact } from '../utils/myInterfaces'

const SearchBar: FC<{setSearchClause: React.Dispatch<React.SetStateAction<string>>}> = props => {
    const handleSearchChange: React.ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        props.setSearchClause(event.target.value)
    }

    return (
        <div className="search-bar">
            <input onChange={handleSearchChange} placeholder='Search by email...' />
        </div>
    )
}

export default SearchBar