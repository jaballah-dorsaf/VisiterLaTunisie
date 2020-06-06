import React, { Component } from 'react'
import Hero from '../components/Hero'
import LoginRegister from '../components/LoginRegister'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'


export default class Login extends Component {
    render() {
        return (
            <div>
                 <Hero hero = "roomsHero">
            <Banner title="Register" subtitle=" ">
                <Link to='/' className="btn-primary" >
                    Accueil
                </Link>
                <Link to='/hotel' className="btn-primary" >
                    Hotels
                </Link>
                <Link to='/villes' className="btn-primary" >
                    Villes
                </Link>
                <Link to='/hotels' className="btn-primary" >
                    chambre
             </Link> 
            </Banner>
        </Hero>

            <LoginRegister />
            </div>
        )
    }
}
