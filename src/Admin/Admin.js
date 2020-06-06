import React, { useState } from "react";
import ListHotel from "../Hotel/listHotel"
import SearchHotel from "../Hotel/SearchHotel"



export default function Admin() {
  const [listHotel, setListHotel] = useState([
    {
      titre: "Hôtel La Palmeraie Tozeur",
      adresse:"L'aéroport de Nefta est à 3 km de l'établissement Tozeur",
      ville: "Tozeur",
      description:
      "Doté d'une piscine extérieure ouverte en saison et d'un spa, l'établissement La Palmeraie Hôtel & Spa est situé à Tozeur. Vous pourrez profiter du bar sur place Un parking privé gratuit est disponible sur place.",
      image: "https://www.hellohotels.tn/images/hotels/La-Palmeraie-Tozeur.jpg",
      rating: 4
    },
    {
      titre: "El Mouradi El Menzah",
      adresse:"Zone Touristique Yasmine Hammamet, Hammamet 8050 Tunisie",
      ville: "Hammamet",
      description:
        "L'hôtel dispose de nombreux atouts, tels qu'un service de chambre et une conciergerie. La piscine et le petit déjeuner inclus contribueront à rendre votre séjour encore plus spécial. Si vous êtes véhiculé, sachez que l'El Mouradi El Menzah propose parking gratuit.",
      image: "https://media-cdn.tripadvisor.com/media/photo-o/04/ab/29/62/el-mouradi-el-menzah.jpg",
      rating: 5
    },
    {
      titre: "Regency Tunis Hotel Gammarth",
      adresse:"2078 La Marsa, Gammarth, Tunisie",
      ville: "Gammarth",
      description:
        "Regency Tunis Hotel dispose de chambres avec Wi-Fi gratuit, un minibar et une TV par satellite, offrant des vues sur le lac ou la Mer Méditerranée. Les invités à l'hôtel peuvent profiter d'une vue sensationnelle.",
      image: "https://www.hellohotels.tn/images/hotels/RegencyTunis.jpg",
      rating: 5
    }

  ]);
  
  const [titre, setTitre] = useState("");
  const [adresse,setAdresse]= useState("");
  const [ville, setVille] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [searchtitre, setSearchTitre] = useState("");
  const [searchrating, setSearchRating] = useState("");

  const searchHotelByTitre = item => {
    setSearchTitre(item);
  };
  const searchHotelByRating = item => {
    setSearchRating(item);
  };

  const onAddHotel = () => {
    setListHotel([...listHotel, { titre, adresse, ville, description, image, rating }]);
    setTitre("");
    setAdresse("");
    setVille("");
    setDescription("");
    setImage("");
    setRating("");
  };
  const onEditHotel = () => {
    setListHotel([...listHotel, { titre, adresse, ville, description, image, rating }]);
    setTitre("");
    setAdresse("");
    setVille("");
    setDescription("");
    setImage("");
    setRating("");
  };
  const onDeleteHotel = i => {
    setListHotel(listHotel.filter((item, j) => i !== j));
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Bienvenue admin</h1>
      <br />
      <SearchHotel
        searchHotelByTitre={searchHotelByTitre}
        searchHotelByRating={searchHotelByRating}
      />
      <br />
      <br />
      <ListHotel
        listHotel={listHotel}
        onAddHotel={onAddHotel}
        onEditHotel={onEditHotel}
        onDeleteHotel={onDeleteHotel}
        setTitre={setTitre}
        setAdresse={setAdresse}
        setVille={setVille}
        setDescription={setDescription}
        setImage={setImage}
        setRating={setRating}
        searchtitre={searchtitre}
        searchrating={searchrating}
      />

    </div>
  );
}
