import React from 'react'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getCountrieById } from '../../Redux/Actions'
import Contend from '../../components/Contend/Contend'
import Navbar from '../../components/Navbar/Navbar'
import { useParams } from 'react-router-dom'

const Detail = () => {

    const dispatch = useDispatch()
    const { id } = useParams

    console.log(id);

    useEffect(() => {
        dispatch(getCountrieById(id))
    }, [dispatch, id])

    return (
        <div>
            <Navbar />
            <Contend />
        </div>
    )
}

export default Detail