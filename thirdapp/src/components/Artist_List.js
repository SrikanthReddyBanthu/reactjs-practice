import React from 'react';

const ArtistList = (props) => {

    const showlist = ({artistData}) => {
        if(artistData){
            return artistData.map((item) => {
                return(
                    <div>{item.name}</div>
                )
            })
        }
    }
    return(
        <div className="artists_list">
            <h4>Top Old Artists</h4>
            {showlist(props)}
        </div>
    )
}

export default ArtistList;