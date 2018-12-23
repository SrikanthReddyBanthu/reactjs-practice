import React from 'react';

const Albumlist = (props) =>  {
    const showList = ({albums}) => {
        if(albums){
            return albums.map((data,index) => {
                return(
                    <img key={index} src={`/images/albums/${data.cover}.jpg`}/>
                )
            })
        }
    }

    return (
        <div className="album_list">
        {showList(props)}
        </div>
    )
}

export default Albumlist;