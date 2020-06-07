import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
//import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class Chambre extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
          slug: this.props.match.params.slug,
          defaultBcg: defaultBcg
        };
      }
      static contextType = RoomContext;
    
      // componentDidMount() {
      //   console.log(this.props);
      // }
      render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
    
        if (!room) {
          return (
            <div className="error">
              <h3> aucune telle chambre n'a pu être trouvée ...</h3>
              <Link to="/rooms" className="btn-primary">
              Retour aux chambres
              </Link>
            </div>
          );
        }
        const {
          name,
          description,
          capacity,
          size,
          price,
          extras,
          breakfast,
          pets,
          images
        } = room;
        const [mainImg, ...defaultImg] = images;
        console.log(defaultImg);
    
        return (
          <>
            <StyledHero img={mainImg || this.state.defaultBcg}>
              <Banner title={`${name} room`}>
                <Link to="/hotels" className="btn-primary">
                Retour aux chambres
                </Link>
              </Banner>
            </StyledHero>
            <section className="single-room">
              <div className="single-room-images">
                {defaultImg.map((item, index) => (
                  <img key={index} src={item} alt={name} />
                ))}
              </div>
              <div className="single-room-info">
                <article className="desc">
                  <h3>détails</h3>
                  <p>{description}</p>
                </article>
                <article className="info">
                  <h3>info</h3>
                  <h6>prix : {price}DT</h6>
                  <h6>Taille : {size} m2</h6>
                  <h6>
                    capacité maximale :
                    {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                  </h6>
                  <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                  <h6>{breakfast && "free breakfast included"}</h6>
                </article>
              </div>
            </section>
            <section className="room-extras">
              <h6>Suppléments </h6>
              <ul className="extras">
                {extras.map((item, index) => {
                 return <li key={index}>- {item}</li>;
                })}
              </ul>
            </section>
          </>
        );
      }
    }
    