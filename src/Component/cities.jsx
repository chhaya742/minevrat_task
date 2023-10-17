import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Cities = ({stateID}) => {
    const [cityData, setCityData] = useState()


    useEffect(() => {
        axios.get(`https://api.minebrat.com/api/v1/states/cities/${stateID}`).then((response) => {
            console.log(response.data);
            setCityData(response.data);
        });

    }, [])

    return (
        <div>
            <select>
                <label>select City</label>
                {cityData.map((item) => {
                    return (
                        <option>{item.cityName}</option>
                    )
                })}

            </select>
        </div>
    )
}

export default Cities