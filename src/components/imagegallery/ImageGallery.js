import { Component } from "react";
import Modal from "../modal/Modal";
import ImageGalleryItem from "./ImageGalleryItem";
import styles from './ImageGallery.module.css'
import PropTypes from 'prop-types';

export default class ImageGallery extends Component {
    state = {
        isOpenModal: false,
        largeImage : '',
    }
    componentDidUpdate(prevProps, prevState) {
        window.addEventListener('keydown', this.keyDownListener)
    }
    keyDownListener = (key) => {
        if (key.code === `Escape`) {
            this.onCloseModal();
        }
    }
    toggleModal = (img) => {
        this.setState(prevState => ({
            isOpenModal: !prevState.isOpenModal,
            largeImage : img.largeImageURL,
        }))
    }
    onCloseModal = () => {
        this.setState(prevState => ({
         isOpenModal: !prevState.isOpenModal,
        }))
    }
    render() {
        return <ul className = {styles.ImageGallery} key = 'id'>
            { this.props.data.length > 0 && 
                <ImageGalleryItem toggleModal={this.toggleModal} data={this.props.data} />}
            <Modal isOpen={this.state.isOpenModal}
                onCloseModal={this.onCloseModal}
                largeImage = {this.state.largeImage}
            />
        </ul>
    }
}
ImageGallery.propTypes = {
    data : PropTypes.array,
}