import React, { useEffect, useState } from "react";
import Rating from "./rating";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import ModalExemple from "./modalExemple";

const ListHotel = (props) => {
  const [modal, setModal] = useState(false);
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    const getHotel = async () => {
      const result = await axios.get("http://localhost:8001/hotel");
      setHotel(result.data);
    };
    getHotel();
  }, []);
  const toggle = () => setModal(!modal);
  console.log(hotel);
  
  return (
    <>
      <Button className="btn-add" onClick={toggle} color="success">
        Ajouter un Hôtel
      </Button>
      <br />
      <br />
      <Row>
        {hotel &&
          hotel
            .filter((el) =>
              el.titre?.toUpperCase().includes(props.searchtitre.toUpperCase())
            )
            .filter((el) => el.rating >= props.searchrating) &&
          hotel.map((e, index) => (
            <Col sm="3" key={index} style={{ marginBottom: "20px" }}>
              <Card className="card-movie">
              <CardTitle>{e.title}</CardTitle>
              <CardSubtitle>{e.ville}</CardSubtitle>
              <CardText className="card-desc">{e.description}</CardText>
                    <Button color="primary">Edit</Button>{" "}
                    <Button
                      color="danger"
                      onClick={() => props.onDeleteHotel(index)}>
                      Delete
                    </Button>{" "}
              
              <Rating rating={e.rating} />
              <CardImg
                  top
                  src={e.image} 
                  alt={`Card image ${index}`}
                  height="50%"
                />
              
              <CardBody body="true">
              <div>{e.adresse}</div>
              <div>{e.availableData}</div>
              
                <Button color="primary">Edit</Button>{" "}
                <Button
                  color="danger"
                  onClick={() => props.onDeleteHotel(index)}
                >
                  Delete
                </Button>{" "}
               </CardBody>
            </Card>
            </Col>
          ))}

        {/* {hotel && hotel
          .filter((el) =>
            el.titre?.toUpperCase().includes(props.searchtitre.toUpperCase())
          )
          .filter((el) => el.rating >= props.searchrating)
          .map((element, index) => (
            <Col sm="3" key={index} style={{ marginBottom: "20px" }}>
              <Card className="card-movie">
                <Rating rating={element.rating} />
                <CardImg
                  top
                  src={element.image}
                  alt={`Card image ${index}`}
                  height="50%"
                />
                <CardBody body="true">
                  <CardTitle>{element.title}</CardTitle>
                  <CardSubtitle>{element.ville}</CardSubtitle>
                  <CardText className="card-desc">
                    {element.description}
                  </CardText>
                  <div>
                    <Button color="primary">Edit</Button>{" "}
                    <Button
                      color="danger"
                      onClick={() => props.onDeleteHotel(index)}
                    >
                      Delete
                    </Button>{" "}
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))} */}
      </Row>

      <ModalExemple
        toggle={toggle}
        modal={modal}
        onAddHotel={props.onAddHotel}
        setTitre={props.setTitre}
        setAdresse={props.setAdresse}
        setVille={props.setVille}
        setDescription={props.setDescription}
        setImage={props.setImage}
        setRating={props.setRating}
      />
    </>
  );
};
export default ListHotel;
