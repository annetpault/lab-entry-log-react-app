import React, { useEffect, useState } from 'react'

import axios from 'axios'

const ViewLog = () => {
    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:3000/view-lab").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                            <div className="card" >

                                                    <table className="table table-bordered">
                                                        <tbody>
                                                            <tr>
                                                                <th>Name</th>
                                                                <td>{value.name}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Department</th>
                                                                <td>{value.department}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Semester</th>
                                                                <td>{value.semester}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Course</th>
                                                                <td>{value.course}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>System Number</th>
                                                                <td>{value.systemNo}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Login Time</th>
                                                                <td>{value.loginTime}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Logout Time</th>
                                                                <td>{value.logoutTime}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Date</th>
                                                                <td>{value.date}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                       
                                    )
                                }
                            )}

                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default ViewLog