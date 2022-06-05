import React, { useEffect, useState } from 'react'
import './Admin_Event_View.css'
import Axios from 'axios'
// import {Link, useNavigate} from 'react-router-dom'
import { Admin_AddEvent } from './Admin_AddEvent'

export const Admin_Event_View = () => {
    let [hold, setHold] = useState([])
    let [ren, setRen] = useState("first")
    let url = "http://localhost:8000/view"
    useEffect(() => {
        Axios.get(url)
            .then((res) => {
                setHold(res.data);
                // res.data.forEach(element => {
                //     console.log(element.nam)
                // });
            })
    }, [])
    // console.log(hold[0].nam)
    // hold.map(ele => { console.log(ele.nam) })
    let redec = () => {
        setRen("admin")
    }
    return (
        <>
            <div className="container">
                {ren==="first" && <div className="content">
                    <div><h1>Dashboard</h1></div>
                    <div className="cards">
                        {
                            hold.map(ele => {
                                return (
                                    <div className="card">
                                        <h2>{ele.nam}</h2>
                                        <p>{ele.des}</p>
                                        <button type="button" className="btn btn-outline-warning">Warning</button>
                                    </div>
                                )
                            })
                        }
                        <div className="card" id='adder' onClick={redec}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                            </svg>
                        </div>
                    </div>
                </div>}
                {ren === "admin" && <Admin_AddEvent />}
            </div>
        </>
    )
}
