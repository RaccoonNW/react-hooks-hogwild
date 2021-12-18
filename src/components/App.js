import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";

import hogs from "../porkers_data";

function App() {
	const [search, setSearch] = useState()

	console.log(search)
	return (
		<div className="App">
			<div>
				<Nav search={search} setSearch={setSearch} name={hogs.name} weight={hogs.weight} />
			</div>
			<div>
				<HogList search={search} hogs={hogs}/>
			</div>
		</div>
	);
}

export default App;
