import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';


function Detail(){

    const {dog} = useParams();
    const [images, setImages] = useState([]);

    useEffect(() => {
        const getDogs = async () => {
                try {
                        let mounted = true;
                        if(mounted){
                        if(dog !== ""){
                            const res = await axios.get('https://dog.ceo/api/breed/'+dog+'/images/random/4');
                            
                            setImages(res.data.message);
                            console.log(res.data.message);
                        }

                        }
                } catch (err) {
                
                }
        }
        getDogs();
    },[dog]);



	return (
		<>
		
<div className="col">
		</div>
		<div className="col">
			<div className="card dog-card">
				<h5>{dog}</h5>
					<div className="card-body">
					<div className="container-fluid">
					<ul className="doggo-list d-flex">
							{images.map(listitem => (
								<li key={dog+Math.random()}className="dog-image "><img className="doggo img-fluid" alt={dog+'image'} src={listitem	}></img></li>
							))}
					</ul>
				</div>
        
        <a href="/Home">Back to Search</a>
					</div>
				</div>
		</div>

		<div className="col">

		</div>		
    </>
	);
}

export default Detail;


