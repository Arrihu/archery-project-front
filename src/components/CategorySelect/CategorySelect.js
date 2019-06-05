import React, { useState, useEffect } from 'react'
import axios from 'axios'


const CategorySelect = () => {

    const [categorys, setCategorys] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3333/category')
            .then((response) => setCategorys(response.data.data))
    })

    return (
        <div>
            <select className='form-control'>
                <option>Pilih Category</option>
                {
                    categorys.map((category, i) =>
                        <option value={category.id} key={i}>{category.name}</option>    
                    )
                }
            </select>
        </div>
    )
}

export default CategorySelect