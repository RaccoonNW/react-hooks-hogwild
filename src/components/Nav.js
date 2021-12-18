import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({name, weight, search, setSearch}) => {

	function handleSearch(e) {
		setSearch(e.target.value)
	}
	
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<div>
                <input onChange={handleSearch} type="text" id="searchName" placeholder="Search name or weight"></input>
            </div>
		</div>
	);
};

export default Nav;
