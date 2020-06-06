import React from 'react'
import PrincipalHotel from '../components/PrincipalHotel'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

const Villes = () => {
    return (
       <>
         
        <Hero hero = "roomsHeroH">
            <Banner title="Nos Hotels" subtitle=" ">
                <Link to='/' className="btn-primary" >
                    Accueil
                </Link>
                <Link to='/villes' className="btn-primary" >
                    Villes
                </Link>
                <Link to='/hotels' className="btn-primary" >
                    chambre
             </Link> 
             <Link to='/login' className="btn-primary" >
                    Register
                </Link>
            </Banner>
        </Hero>
        <PrincipalHotel />
        </>
    )
};

export default Villes
