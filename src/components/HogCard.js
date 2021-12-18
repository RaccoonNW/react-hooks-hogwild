import React, { useState } from "react";
import HogDetails from "./HogDetails";

function HogCard({hog, search}) {
    const [showDetails, setShowDetails] = useState(true)
    const {name, specialty, image} = hog

    let detailsText = showDetails ? "Show Details" : "Hide Details"

    function handleDetails(e) {
        setShowDetails(!showDetails)
    }



    return (
        <div className="ui card wide column pigTile">
            <div className="image">
                <img src={image} alt="hogPic"/>
            </div>
            <div className="content">
                <h3 className="header">{name}</h3>
                <div className="description">Specialty: {specialty}</div>
            </div>
            <div>
                <button onClick={handleDetails}>{detailsText}</button>
            </div>
            <div>
                {showDetails ? "" : <HogDetails hog={hog}/>}
            </div>
        </div>
    )
}

export default HogCard