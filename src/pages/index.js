import React , {useState} from 'react'
import Sidebar from '../components/SideBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeSection from '../components/HomeSection'

const Home = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toogle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toogle={toogle}/>
            <Navbar toogle={toogle}/>
            <HomeSection/>
            <Footer/>
        </>
    )
}

export default Home
