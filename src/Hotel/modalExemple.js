import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";

const ModalExemple = props => {
  const onChangeTitre = event => {
    props.setTitre(event.target.value);
  };
  const onChangeAdresse = event => {
    props.setAdresse(event.target.value);
  }; 
  const onChangeVille = event => {
    props.setVille(event.target.value);
  };
  const onChangeDescription = event => {
    props.setDescription(event.target.value);
  };
  const onChangeImage = event => {
    props.setImage(event.target.value);
  };
  const onChangeRating = event => {
    props.setRating(event.target.value);
  };

  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle} style={{marginLeft:'20px',color:'#5c5959'}}>Ajouter un Hôtel</ModalHeader>
        <ModalBody className="modal-body">
          <Input
            type="text"
            placeholder="Titre"
            name="titre"
            onChange={onChangeTitre}
          />
          <Input
          type="text"
          placeholder="Adresse"
          name="adresse"
          onChange={onChangeAdresse}
        />
          <Input
            type="text"
            placeholder="ville"
            name="ville"
            onChange={onChangeVille}
          />
          <Input
            type="text"
            placeholder="Description"
            image="description"
            onChange={onChangeDescription}
          />
          <Input
            type="text"
            placeholder="image"
            name="image"
            onChange={onChangeImage}
          />
          <Input
            type="number"
            placeholder="rating"
            name="rating"
            onChange={onChangeRating}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              props.onAddHotel();
              props.toggle();
            }}
            style={{marginLeft:'20px'}}
          >
            Save
          </Button>{" "}
          <Button color="secondary" onClick={props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExemple;
