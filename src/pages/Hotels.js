import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import ChambreVedette from '../components/ChambreVedette'
import RoomContainer from '../components/RoomContainer'


 const hotels = () => {

        return (
            <div>
           <Hero hero = "roomsHero">
            <Banner title="Nos Chambre" subtitle="Dans un Hotel de luxe à partir de 800 DT ">
                <Link to='/' className="btn-primary" >
                Accueil
                </Link>
                <Link to='/villes' className="btn-primary" >
                    Villes
                </Link>     
                <Link to='/hotel' className="btn-primary" >
                    Hotels
             </Link> 
               <Link to='/login' className="btn-primary" >
                    Registrer
                </Link> 
            </Banner>
        </Hero>
        <Services />
        <ChambreVedette />
        <RoomContainer />
            </div>
        );
    };


export default hotels;