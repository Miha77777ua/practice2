import React from "react";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery.jsx";
import api from "./api/api.js";

class App extends React.Component {
  state = {
    gifs: [],
    keyword: "",
    notLoaded: true,
  }

  loadGifs = async (ev) => {
    ev.preventDefault();

    if (this.state.keyword !== "") {
      const data = await api.getGifs(this.state.keyword);

      this.setState({
        gifs: data,
        notLoaded: false,
      });
    }
  }

  updateKeyword = (ev) => {
    this.setState({
      keyword: ev.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <Searchbar loadGifs={this.loadGifs} keyword={this.state.keyword} updateKeyword={this.updateKeyword} />
        <ImageGallery data={this.state.gifs} notLoaded={this.state.notLoaded} />
      </div>
    );
  }
}

export default App;
