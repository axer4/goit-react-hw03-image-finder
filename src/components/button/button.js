import { Component } from "react";
import styles from './button.module.css'
import PropTypes from 'prop-types';

export default class LoadMore extends Component {
    state = {
      page: 1,
    }
    nextBtnPage = () => {
        this.setState(prevState => ({
            page: prevState.page +1,
        }))
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.page !== prevState.page) {
            this.props.nextPage(this.state.page)
        }
    }
    render() {
        return (<>
            {this.props.data.length > 0 &&
                <button onClick={this.nextBtnPage} type="button" className = {styles.Button}>Load More</button>}
        </>)
    }
}
LoadMore.propTypes = {
    nextPage: PropTypes.func
}