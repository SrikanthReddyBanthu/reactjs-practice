import React from 'react';
import {Link} from 'react-router-dom';

const ArtistList = (props) => {

    const showList = ({artistData}) => {
        if (artistData) {
            return artistData.map((item) => {

            	const style = {
					background: `url('/images/covers/${item.cover}.jpg') no-repeat`
            	}

                return(
                	<Link key={item.id} to={`/artist/${item.id}`} className="artist_item" style={style}>
                    	<div>{item.name}</div>
                    </Link>
                )
            })
        }
    }

    return(
        <div className="artist_list">
            <h4>Top Old Artists</h4>
            {showList(props)}
        </div>
    )
}

export default ArtistList;