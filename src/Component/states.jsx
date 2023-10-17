import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cities from './cities'
import Result from './result'
import { useNavigate } from 'react-router-dom'
const States = () => {
    const navigate = useNavigate();

    const [stateData, setStateData] = useState()
    const [cityData, setCityData] = useState()

    const [selectData, setSelectData] = useState({ state: "", city: "" })

    useEffect(() => {
        axios.get("https://api.minebrat.com/api/v1/states").then((response) => {
            setStateData(response.data);
        });


    }, [])
    
    const handleState = (e) => {
        selectData.state = e.target.selectedOptions[0].text
        setSelectData(selectData)

        const stateID = e.target.value
        axios.get(`https://api.minebrat.com/api/v1/states/cities/${stateID}`).then((response) => {
            // console.log("response", response.data);
            setCityData(response.data);
        });

    }

    const handleSubmit = () => {
        navigate("/result", { state: { state: selectData.state, city: selectData.city } })
    }
    const handleCity = (e) => {
        selectData.city = e.target.value
        setSelectData(selectData)
    }
    return (
        <div>
            <div style={{ margin: "5px" }}>
                <label>select State</label>
                <select onChange={handleState}>
                <option>Select State</option>
                    {stateData?.map((item) => {
                        return (
                            <option value={item.stateId} key={item.stateName}>{item.stateName}</option>
                        )
                    })}

                </select>
            </div>
            <div style={{ margin: "5px" }}>
                <label>select City</label>
                <select onChange={handleCity}>
                    {cityData?.map((item) => {
                        return (
                            <option value={item.cityName} label={item.cityName} key={item.cityId}>{item.cityName}</option>
                        )
                    })}
                </select>
            </div>
            <button onClick={handleSubmit} >submit</button>
        </div>
    )
}

export default States