import React from "react";
import PropTypes from "prop-types"
import './SearchBar.css'
import '../../css/SearchHome.css'

const SearchBar = ({search, onChange}) => {

    return (
        <div>
            <input className="iptSearch" type="text" value={search} onChange={onChange}/>
        </div>
    )
};

SearchBar.propTypes={
    search: PropTypes.any.isRequired,
    onChange:PropTypes.func.isRequired,
    }

export default SearchBar;