import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container-fluid">
				<div className="container">
					<Jumbotron />
				</div>
				<div className="container-fluid row d-flex justify-content-center gap-3 mt-3 m-auto col-lg-12 ">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
