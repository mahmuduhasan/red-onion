import React from 'react';
import './Food.css';

const Food = (props) => {
    console.log(props);
    const {photo, name, description,price} = props.item;
    return (
        <div>
            <div className="food">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center">
                            <img src={photo} alt="" className="card-img-top"/>
                            <div className="card-body">
                                <h5>{name}</h5>
                                <p>{description}</p>
                                <h4>${price}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;