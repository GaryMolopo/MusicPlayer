import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    //initialize
    state={
        videos=[],
        selectedVideo=null
    }

    //get data from api
    handleSubmit=async (termFromSearchBar)=>{
        const term= await youtube.get('/search',{
            q:termFromSearchBar
        })
        //change state of videos
        this.setState({
            videos:response.data.items
        })
    }
    //
    handleVideoSelect=(video)=>{
        this.setState({
            selectedVideo:video
        })
    }

    render() {
        //set handleSubmit to prop
        return (
            <div className='ui container' style={{marginTop: '1em'}}>
            {/*getting term from SearchBar using prop*/}
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            {/*displaying selected video*/ }
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;