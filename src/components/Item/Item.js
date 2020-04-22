import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Item.css'
import Food from '../Food/Food';
const Item = () => {
    const [item,setItem] = useState(fakeData);
    const [foodCategory, setFoodCategory] = useState("lunch");

    const selectedCategory = item.filter(item => item.category === foodCategory );
    console.log(selectedCategory);
    return (
        <div>
            <div className="container">
                <nav>
                    <ul className="nav justify-content-center">
                        <button onClick={() => setFoodCategory("breakfast")} className="nav-item">
                            <span  to="breakfast">Breakfast</span>
                        </button>
                        <button onClick={() => setFoodCategory("lunch")} className="nav-item">
                            <span to="breakfast">Lunch</span>
                        </button>
                        <button onClick={() => setFoodCategory("dinner")} className="nav-item">
                            <span to="breakfast">Dinner</span>
                        </button>
                    </ul>
                </nav>
                <div className="row">
                        {
                            selectedCategory.map(food => <Food item={food}></Food>)
                        }
                </div>
            </div>
            {

            }
        </div>
    );
};

export default Item;