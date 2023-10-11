import Cardlist from "../../components/Cardlist/Cardlist"
import Navbar from "../../components/Navbar/Navbar"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getCountries } from "../../Redux/Actions"
import { useParams } from "react-router-dom"

const Home = () => {
    const {id} = useParams()
    console.log(id)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])

    return (
        <div>
            <Navbar />
            <Cardlist />
        </div>
    )
}

export default Home