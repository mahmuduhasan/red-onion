import React from 'react';
import './Food.css';
import { Link } from 'react-router-dom';

const Food = (props) => {
    const { photo, name, description, price } = props.item;
    return (
        <div>
            <div className="food">
                <Link className="nav-link text-secondary" to={"/food/"+name}>
                    <div className="row d-flex justify-content-center align-items-center">
                                <img src={photo} alt="" className="card-img-top" />
                                <div className="description">
                                    <h5>{name}</h5>
                                    <p>{description}</p>
                                    <h4>${price}</h4>
                                </div>
                    </div>
                </Link> 
            </div>
        </div>
    );
};

export default Food;