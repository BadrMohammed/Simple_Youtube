import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/VideoDetail';


const API_KEY="AIzaSyCek-KHwtl1x4N0IzN62HVjPpeRRtc8yXc";




class App extends Component {
    constructor(props)
    {
        super(props);
        this.state={videos:[],selectedVideo:null}

       this.videoSearh('');
    }

    videoSearh(term)
    {
        YTSearch({
            key:API_KEY,
            term:term
        },
        (videos)=>{
           this.setState({
               videos:videos,selectedVideo:videos[0]
            } );
        
        });
    }


    render() { 
        return (
                  <div className="container">
                      <br/>
                    <SearchBar onSearchTermChange={term=>this.videoSearh(term)}/>
                    <VideoDetail video={this.state.selectedVideo}/>
                   
                    <VideoList onVideoSelect={selectedVideo=>this.setState({selectedVideo})} videos={this.state.videos}/> 
                </div>
              );
    }
}
 



ReactDOM.render(
<App/>,
document.getElementById('root')
)