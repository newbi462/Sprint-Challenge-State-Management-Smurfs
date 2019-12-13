import React, { useContext }  from 'react';

import { SmurfContext } from "./../contexts/SmurfContext";

export const MapSmurf = () => {
	const { smurfsApiDate } = useContext(SmurfContext);

	return (
		<>
    <div className="smuffCard">
			{smurfsApiDate.map((smurf,index) => (
				<>
        <h2>{smurf.name}</h2>
        <ul>
          <li>{smurf.age}</li>
          <li>{smurf.height}</li>
        </ul>
        </>
			))}
		</div>
    </>
	);
};
