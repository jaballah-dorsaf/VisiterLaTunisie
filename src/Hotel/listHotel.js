import React, { useState } from "react";
import Rating from "./rating";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";
import ModalExemple from "./modalExemple";


const ListHotel = props => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
    <Button className="btn-add" onClick={toggle} color="success">
        Ajouter un Hôtel
    </Button>
      <br />
      <br />
      <Row>
        {props.listHotel
          .filter(el =>
            el.titre.toUpperCase().includes(props.searchtitre.toUpperCase())
          )
          .filter(el => el.rating >= props.searchrating)
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
                  <CardTitle>{element.titre}</CardTitle>
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
          ))}
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
