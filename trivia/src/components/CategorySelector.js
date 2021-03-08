import React from 'react';
import categories from '../Categories'

export default function CategorySelector({ category, chooseCategory }) {

    return (
        <div className="category-selector">
            <p>Select Category</p>
            <select value={category} onChange={e => chooseCategory(e.target.value)}>
                {categories.map((category, index) => (
                    <option key={index} value={category.id}>
                        {category.name}
                    </option>
                )

                )

                }
            </select>



        </div>

    );
}