import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import './SingleItem.css'
import OtherItem from '../OtherItem/OtherItem';

const SingleItem = () => {
    const {productName} = useParams();
    const item = fakeData.find(food => food.name === productName);
    const filterItem =fakeData.filter(itemFilter => itemFilter.category === item.category);
    const otherItem = filterItem.filter(other => other.name !== item.name);
    return (
        <div className="container">
            <div className="container">
                <div className="single-item card text-dark row d-flex justify-content-center">
                    <div className="item-design">
                        <div>
                            <img className="card-img" src={item.photo} alt=""/>
                        </div>
                        <div className="single-item-description card-img-overlay">
                            <h3 className="card-title">{item.name}</h3>
                            <h5 className="card-text">{item.description}</h5>
                            <h4 className="card-text">${item.price}</h4>
                            <button className="btn btn-danger">Add</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    otherItem.map(food => <OtherItem item={food}></OtherItem>)
                }
            </div>
        </div>
    );
};

export default SingleItem;