import React, {Component} from 'react';

import Banner from '../components/Banner';
import ArtistList from '../components/Artist_List';

const URL_ARTIST= 'http://localhost:8900/artists';

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            artist: ''
        }
    }

    componentDidMount(){
        fetch(URL_ARTIST,{
            method:'GET'
        })
        .then(response =>  response.json())
        .then(data => {
            this.setState({
                artist: data
            })
        })
    }

    render(){
        return(
            <div>
               <Banner></Banner>
               <ArtistList artistData={this.state.artist}></ArtistList>
            </div>
        )
    }
}


export default Home;