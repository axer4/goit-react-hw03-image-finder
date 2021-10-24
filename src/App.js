import axios from "axios";
import LoadMore from "./components/button/button";
import ImageGallery from "./components/imagegallery/ImageGallery";
import Loaders from "./components/loader/Loader";
import FetchImages from "./services/fetchImages";
import styles from './App.module.css'

const { Component } = require("react");
const { Searchbar } = require("./components/searchbar/Searchbar");

export default class App extends Component {
  state = {
    value: '',
    data: '',
    page: 1,
    loading: false,
  }
  onSubmit = (value) => {
    this.setState({
      value: value,
    })
  }
  nextPage = (page) => {
    this.setState({
      page: page,
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.value !== prevState.value) {
      this.setState({ loading: true })
      FetchImages(this.state.value)
        .then(response =>
          this.setState({
            data: response.data.hits
          })
      )
        .catch(err => console.log(err))
      .finally(() => this.setState({loading:false}))
    }
    else if (this.state.page !== prevState.page) {
       this.setState({loading: true})
      FetchImages(this.state.value, this.state.page)
        .then(response =>
          this.setState(prevState => ({
            data: [...prevState.data,...response.data.hits]
          }))
      )
      .catch(err => console.log(err))
      .finally(() => this.setState({loading:false}))
    }
    window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});
  }
  render() {

    return <div className = {styles.app}>
            <Searchbar onSubmit={this.onSubmit} />
      <ImageGallery data={this.state.data} />
      {this.state.loading && <Loaders/>}
      <LoadMore
        data={this.state.data}
        nextPage = {this.nextPage}
      />
      </div>
  }
}