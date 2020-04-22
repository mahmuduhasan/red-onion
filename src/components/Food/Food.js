import React from 'react';
import './Food.css';

const Food = (props) => {
    console.log(props);
    const {photo, name, description,price} = props.item;
    return (
        <div>
                <div  className="food row d-flex justify-content-center align-items-center">
                    <button>
                        <img src={photo} alt="" className="card-img-top"/>
                        <div className="description">
                            <h5>{name}</h5>
                            <p>{description}</p>
                            <h4>${price}</h4>
                        </div>
                    </button>
                </div>
        </div>
    );
};

export default Food;