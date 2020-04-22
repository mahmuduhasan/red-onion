import React from 'react';
import './Search.css'
import Background from '../../images/bannerbackground.png'
const Search = () => {
    return (
        <div className="search">
            <img src={Background} alt=""/>
            <div className="searchItems">
                <h1>Best food waiting for your Belly!</h1>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search food item"/>
                    <div className="input-group-append">
                        <button className="btn btn-danger" type="button">Search</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Search;