import React from "react";
import Header from "../components/Header";
import 'react-slideshow-image/dist/styles.css';
import "../styles/main.css";

import CustomSlider from "../components/custom.slider";

import imagen1 from "../images/image1.jpg";
import imagen2 from "../images/image2.jpg";
import imagen3 from "../images/image3.jpg";

const Home = () => {
	const images = [imagen1, imagen2, imagen3];

	return (
		<>
			<Header />
			<div className="home">
				<div>
					<h1 className="homeTittle">BIENVENIDOS A BARBERCI</h1>
					<p className="homeText">
						Descubre la experiencia perfecta en cortes de cabello.
					</p>
				</div>

				<CustomSlider>
					{images.map((image, index) => {
						return <img key={index} src={image} alt={`Slide ${index + 1}`} />;
					})}
				</CustomSlider>
			</div>
		</>
	);
};

export default Home;
