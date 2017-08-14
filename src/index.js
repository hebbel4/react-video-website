import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAkStW0cMrB5DYMZiYj9KnwIgRvFlaT690';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            //works when key and value are same
            this.setState({ videos });
        });
    }

    render() {
        return (
        <div>
            <SearchBar />
            <VideoList videos={this.state.videos} bb={'bb'}/>
        </div>
        );
    }

}

ReactDOM.render(<App />, document.querySelector('.container'));