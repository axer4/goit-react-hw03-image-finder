import styles from './Searchbar.module.css'
import PropTypes from 'prop-types';
const { Component } = require("react");
export class Searchbar extends Component {
  state = {
    value: '',
  }
  handleChange = (e) => {
    this.setState({
      value : e.currentTarget.value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value)
  }
  render() {
    return <header className={styles.searchbar}>
      <form className={styles.SearchForm} onSubmit = {this.handleSubmit}>
        <button type="submit" className={styles.SearchButton}>
          <span className={styles.SearchFormLabel}>Search</span>
    </button>
    <input
      className={styles.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange = {this.handleChange}
    />
  </form>
</header>
    }
}
Searchbar.propTypes = {
  onSubmit:PropTypes.func,
}