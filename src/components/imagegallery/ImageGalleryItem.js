import { Component } from "react";
import styles from './ImageGallery.module.css'
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
    state = {
        data: this.props.data,
    }

    render() {
        return <>
            { 
                this.props.data.map((img => {
                 return <li className={styles.ImageGalleryItem} key={img.id}>
                <img  src={img.webformatURL} alt='' className={styles.ImageGalleryItemImage} onClick={() => this.props.toggleModal(img)} />
                </li> 
                    }))
                }
            </>
    }
}
ImageGalleryItem.propTypes = {
    toggleModal: PropTypes.func,
    data: PropTypes.array,
}