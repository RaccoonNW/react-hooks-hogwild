import React from "react";
import HogCard from "./HogCard"

function HogList({hogs, search}) {

    const hogList = hogs.map(hog => (
        <HogCard
            key={hog.name}
            hog={hog}
        />
    ))

    const filteredHogs = hogList.filter(hog => hog.key.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="ui three stackable cards">
            {search === "" ? hogList : filteredHogs}
        </div>
    )
}

export default HogList