import React, {Component} from 'react';
import { REQ_URL } from '../constents/ApiUrl';

import Albumlist from './Album_List';
import Header from './Header';


class Artist extends Component {
    constructor(props){
        super(props)

        this.state={
            artist: ''
        }
    }

    componentDidMount(){
        fetch(`${REQ_URL}/${this.props.match.params.artistId}`,{
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
                <Header/>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{background:`url('/images/covers/${this.state.artist.cover}.jpg') no-repeat`}}></span>
                    </div>
                    <div className="bio">
                        {this.state.artist.bio}
                    </div>
                    <Albumlist albums={this.state.artist.albums}/>
                </div>
            </div>
        )
    }
}

export default Artist;