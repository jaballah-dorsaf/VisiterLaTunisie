import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
//import Services from '../components/Services'
import Histoire from '../components/Histoire'
import PrincipalVille from '../components/PrincipalVille'

export default function Home(){
    return (
        <>
        <Hero>
         <Banner title="Visiter La Tunisie">
           <Link to='/villes' className="btn-primary">
                  villes
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
        <br />
        <Histoire />
        <PrincipalVille />
        
        </>
    );
};






