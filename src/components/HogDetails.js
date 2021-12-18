import React from "react";

function HogDetails({hog}) {
    const {greased, weight, "highest medal achieved": medal} = hog
    return (
        <div className="description">
            <strong>{greased ? 'Greased' : 'Nongreased'}</strong>
            <p>
                Highest medal achieved: <strong>{medal}</strong>
            </p>
            <p>Weight: {weight}</p>
        </div>
    )

}

export default HogDetails