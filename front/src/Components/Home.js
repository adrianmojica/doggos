import React, { useState, useEffect } from 'react';
import Logo from './Assets/doggo.jpg';
import './Styles/Home.scss'
import axios from 'axios';
import List from './List';

function Home(props){

	const [ data, setData ] = useState();
	const [searchTerm, setSearchTerm] = useState("");
	const [results,setResults] = useState();
	const [error, setError]= useState([]);
	const [classN, setClassN]=useState("hidden");

	useEffect(() => {
    const getDogs = async () => {
        try {
            let mounted = true;
						let dat=[];
            if(mounted){
              const res = await axios.get('http://localhost:3000/dogs/');
							setData(res.data.message);
							if(searchTerm && data){

								var arraycontains = (myKeys.indexOf(searchTerm) > -1);
								var index = myKeys.indexOf(searchTerm);

								if(arraycontains){
									dat.push(myKeys[index]);

									setResults(searchTerm);
									setClassN('hidden');
								} else {
								
									setClassN('show');
									setError("No Results Found with term "+ searchTerm);
									setResults();
								}
							}
            }
        } catch (err) {
        
        }
    }
    getDogs();
	},[searchTerm]);

	let myKeys;
	if(data){
		myKeys = Object.keys(data);
	}

	
	function Search(evt){
		setSearchTerm(evt.target.value);
	}


	

	function submitForm(evt){
		evt.preventDefault();
	}

	return (
		<>
		<div className="col">
		</div>
		<div className="col">
			<div className="card dog-card">
				<img src={Logo} className="logo-image" alt="..."/>
					<div className="card-body">
						<div className="container-fluid main">
							<form onSubmit={submitForm}>
								<div className="form-group">
									<input className="form-control" id="search"  type="text" name="search" placeholder="Search Breeds" onChange={Search}  />
								</div>
							</form>
							<div className={"alert alert-danger "+ classN} role="alert">
								{error}
							</div>
							<List items={data} results={results}/>
						</div>
					</div>
				</div>
		</div>

		<div className="col">

		</div>
		</>
	);
}

export default Home;


