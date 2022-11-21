import React, {Fragment, useEffect, useState} from "react";
import {GetData} from "../backendAPI/getData"
import { DeleteData } from "../backendAPI/deleteData";
import {useParams} from 'react-router-dom'
import EditTable from "./editTable";

const Tables = () =>{
    const url = useParams();
    const [table, setTables]  = useState([]);

    const deleteCountry = async (cname) =>{
        setTables(table.filter(c => c.cname !== cname));
        await DeleteData.deleteDataFromCountry(cname)
    }
    const fetchTables = async () =>{
        await GetData.getDataFromCountry().then((res, err) =>{
            if (!err){
                setTables(res);
            } else {
                console.error(err);
            }
        })
    }
    useEffect(()=>{
        fetchTables();
    }, [])
    console.log(table);
    return (
        <>
            <Fragment>
            <h1 className="text-center">Country Table</h1>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                    <th scope="col">Country</th>
                    <th scope="col">Population</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((country) => (
                            <tr key={country.cname}>
                            <td>{country.cname}</td>
                            <td>{country.population}</td>
                            <td><EditTable country={country}/></td>
                            <td>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => deleteCountry(country.cname)}    
                                >
                                    DELETE
                                </button>
                            </td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
            </Fragment>
        </>
    )
}

export default Tables;