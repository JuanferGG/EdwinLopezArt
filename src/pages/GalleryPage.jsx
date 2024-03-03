import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

import { photos } from "../assets/PhotosGalerry";

import '../styles/GalleryStyles.css'
import VideosGallery from "../components/Pures/VideosGallery";

function GalleryPage() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    // Utilizamos useEffect para actualizar el título después de que el componente se haya montado
    useEffect(() => {
        document.title = "Gallery Page";
    }, []);

    return (
        <main>
            <NavBar />
            <div className="GalleryContainer" style={{ width: '95vw', height: 'fit-content', margin: 'auto', paddingTop: '5em', paddingBottom: '1em', minHeight: '100vh' }}>
                <h1 style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '4em', padding: '.2em 0' }}>Galeria Edwin F. Lopez</h1>
                <Gallery photos={photos} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen && (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    )}
                </ModalGateway>
            </div>
            <div className="pb-5">
                <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '4em', margin: '.7em 0'  }}>Videos Edwin Lopez</h2>
                <VideosGallery/>
            </div>
            <Footer />
        </main>
    );
}

export default GalleryPage;
