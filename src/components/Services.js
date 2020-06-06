import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Tilte from './Title'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"cocktail gratuit",
                info:"petit dejeuner,salade gratuit"
            },
            {
                icon:<FaHiking/>,
                title:"Randonnée sans fin",
                info:"petit dejeuner,salade gratuit"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Navette gratuite",
                info:"petit dejeuner,salade gratuit"
            },
            {
                icon:<FaBeer/>,
                title:"thé luxe",
                info:"petit dejeuner,salade gratuit"
            }

        ]
    }
    render() {
        return (
            <section className= "services">
                <Tilte title="services" />
                <div className= "services-center">
                    {this.state.services.map( (item,index) =>{
                        return (<article key= {index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        );
                    } )}

                </div>
            </section>
        )
    }
}
