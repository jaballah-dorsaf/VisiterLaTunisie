import React from 'react'
import PrincipalVille from '../components/PrincipalVille'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

const Villes = () => {
    return (
       <>
         
        <Hero hero = "roomsHeroV">
            <Banner title="Nos Villes" subtitle=" ">
                <Link to='/' className="btn-primary" >
                    Accueil
                </Link>
                
                <Link to='/hotel' className="btn-primary" >
                    Hotels
                </Link>
                <Link to='/hotels' className="btn-primary" >
                    chambre
             </Link> 
             <Link to='/login' className="btn-primary" >
                    Register
                </Link>
            </Banner>
        </Hero>
        <PrincipalVille />
        </>
    )
};

export default Villes
