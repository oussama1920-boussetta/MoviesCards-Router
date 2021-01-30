import React, { useState, useEffect } from 'react';



function Trailer({ cardinfo, match }) {

    console.log(cardinfo)
    console.log('match', match)
    const [product, setProduct] = useState({})

    useEffect(() => {
        setProduct(cardinfo.find((prod) => prod.id === +match.params.id))
    }, [])

    return (
        <div className='Tla'>
            <h1> {product.titre}</h1>
            <img className='Img' src={product.image} />
            <div className='res'>
            <h2>Synopsis: <br></br> {product.synopsis}</h2>
           
            <iframe className='video' src={product.url} />
            </div>
        </div>
    )

};




export default Trailer 
