import React from "react";


function List({items, results}){
	
		let keys=[];
		if(items){
			 keys = Object.keys(items);
		}

		function renderData(items, results){

			if(results){
				return <li key="item" className="list-group-item" ><a href={"/dogs/"+ results}>{results}</a></li>
			} else {
				return keys.map(listitem => (
					<li key={listitem+Math.random()} className="list-group-item" ><a href={"/dogs/"+ listitem}>{listitem}</a></li>
				))
			}

		}


	return (
		<>
        {/* create list with items received from props */}
         <ul className="list-group">
          {renderData(items,results)}
        </ul>
        </>
	);
}

export default List;