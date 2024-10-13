import React from 'react'
import api from '../../component/api'

const Movies = () => {

    const data = api();
    console.log(data);





    return (
        <div>Movies</div>
    )
}

export default Movies