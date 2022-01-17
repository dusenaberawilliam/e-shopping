import React, { useState } from 'react'
import Filter from '../components/Filter'
import Product from '../components/Product'

import data from '../data'

const HomePage = () => {

    const [size, setSize] = useState()
    const [sort, setSort] = useState()

    const [proList, setProList] = useState(data)


    const sortProducts = (event) => {
        //impl
        console.log(event.target.value)
        setProList(proList.slice().sort((a, b) => event.target.value === "lowest" ? a.price > b.price ? 1 : -1 : event.target.value === "highest" ? a.price < b.price ? 1 : -1 : a._id < b._id ? 1 : -1))
    }
    const filterProducts = (event) => {
        //impl
        console.log(event.target.value)

        if (event.target.value === "") {
            setProList(data)
        } else {
            setProList(proList.filter((product) => product.availableSizes.indexOf(event.target.value) >= 0))
        }
    }

    return (
        <div className='content'>
            <div className="main">
                <Filter
                    count={proList.length}
                    size={size}
                    sort={sort}
                    filterProducts={filterProducts}
                    sortProducts={sortProducts}
                />
                <Product product={proList} />
            </div>
            <div className="sidebar">
                This is my cart
            </div>
        </div>
    )
}

export default HomePage
