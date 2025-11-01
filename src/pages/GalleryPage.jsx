import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Image, X } from 'lucide-react';
import GalleryBC from '../components/breadcrumbs/GalleryBC';
import axios from 'axios';

// ==================== ImageGalleryItem ====================
const ImageGalleryItem = ({ image, onClick, onImageLoad }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [naturalDimensions, setNaturalDimensions] = useState({ width: 0, height: 0 });
    const imgRef = useRef(null);

    // Lazy load using IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsLoaded(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) observer.observe(imgRef.current);

        return () => {
            if (imgRef.current) observer.unobserve(imgRef.current);
        };
    }, []);

    const handleImageLoad = (e) => {
        const img = e.target;
        const dimensions = {
            width: img.naturalWidth,
            height: img.naturalHeight
        };
        setNaturalDimensions(dimensions);
        onImageLoad(image.id, dimensions);
    };

    // Calculate aspect ratio for placeholder
    const aspectRatio = naturalDimensions.width && naturalDimensions.height 
        ? naturalDimensions.width / naturalDimensions.height 
        : 1;

    return (
        <div
            ref={imgRef}
            className="relative overflow-hidden rounded-xl shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl break-inside-avoid mb-6 group"
            onClick={() => onClick(image)}
        >
            {isLoaded ? (
                <>
                    <img
                        src={image.url}
                        alt={image.title || 'Gallery Image'}
                        className="w-full h-auto object-contain transition-opacity duration-500"
                        loading="lazy"
                        onLoad={handleImageLoad}
                        style={{
                            display: 'block',
                        }}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                        <p className="text-white text-lg font-semibold border-b-2 border-amber-400">
                            {image.title || 'Hospital Image'}
                        </p>
                    </div>
                </>
            ) : (
                <div
                    className="relative w-full bg-gray-200 animate-pulse text-gray-500 rounded-xl"
                    style={{ 
                        aspectRatio: aspectRatio,
                        minHeight: '150px'
                    }}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image size={40} />
                    </div>
                </div>
            )}
        </div>
    );
};

// ==================== Lightbox Modal ====================
const Lightbox = ({ image, onClose }) => {
    if (!image) return null;

    return (
        <div
            className="fixed inset-0 z-9999999 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-4 transition-opacity duration-300"
            onClick={onClose}
        >
            <div
                className="relative max-w-4xl w-full max-h-[90vh] rounded-xl shadow-2xl overflow-hidden transition-transform duration-300 transform scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-99999 p-2 bg-white/30 backdrop-blur-md rounded-full text-white hover:bg-white/50 transition-colors"
                    aria-label="Close image viewer"
                >
                    <X size={24} />
                </button>

                {/* Image */}
                <img
                    src={image.url}
                    alt={image.title || 'Gallery Image'}
                    className="w-full h-auto max-h-[90vh] object-contain rounded-xl"
                />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-center">
                    <h2 className="text-xl font-light text-white">{image.title || 'Hospital Image'}</h2>
                </div>
            </div>
        </div>
    );
};

// ==================== Main App ====================
const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageDimensions, setImageDimensions] = useState({});
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchImageData = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get(
                "https://app.prabhatmemorialhospital.com/api/gallery"
            );
            
            // Transform the API response to match the expected format
            const transformedImages = response.data.map((item, index) => ({
                id: item.id || index + 1, // Use database ID or fallback to index
                url: item.image_url || item.url, // Adjust based on your API response structure
                title: item.title || item.caption || `Hospital Image ${index + 1}`
            }));
            
            setImages(transformedImages);
        } catch (err) {
            console.error('Error fetching images:', err);
            setError('Failed to load images. Please try again later.');
            setImages([]); // Set empty array on error
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImageData();
    }, []);

    const handleImageClick = useCallback((image) => {
        setSelectedImage(image);
    }, []);

    const handleCloseLightbox = useCallback(() => {
        setSelectedImage(null);
    }, []);

    const handleImageLoad = useCallback((imageId, dimensions) => {
        setImageDimensions(prev => ({
            ...prev,
            [imageId]: dimensions
        }));
    }, []);

    // Disable background scroll when lightbox is open
    useEffect(() => {
        if (selectedImage) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    // Loading state
    if (loading) {
        return (
            <>
                <GalleryBC />
                <div className="min-h-screen bg-gray-50 font-inter text-gray-800 p-4 sm:p-8">
                    <div className="flex justify-center items-center h-64">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                            <p className="mt-4 text-gray-600">Loading gallery...</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    // Error state
    if (error) {
        return (
            <>
                <GalleryBC />
                <div className="min-h-screen bg-gray-50 font-inter text-gray-800 p-4 sm:p-8">
                    <div className="flex justify-center items-center h-64">
                        <div className="text-center text-red-600">
                            <p className="text-lg">{error}</p>
                            <button 
                                onClick={fetchImageData}
                                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <GalleryBC />
            <div className="min-h-screen bg-gray-50 font-inter text-gray-800 p-4 sm:p-8 ">
                {/* <header className="text-center mb-12 pt-8">
                  <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                        Dr Prabhat Memorial Hiramati Hospital
                    </h1> 
                    <p className="mt-2 text-lg text-gray-600">
                        Explore our Hospital, events, and activities through our image gallery
                    </p>
                </header> */}
                
                <main>
                    {images.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No images found in the gallery.</p>
                        </div>
                    ) : (
                        // Responsive Masonry Layout
                        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
                            {images.map((image) => (
                                <ImageGalleryItem
                                    key={image.id}
                                    image={image}
                                    onClick={handleImageClick}
                                    onImageLoad={handleImageLoad}
                                />
                            ))}
                        </div>
                    )}
                </main>

                {/* Lightbox Viewer */}
                <Lightbox image={selectedImage} onClose={handleCloseLightbox} />
            </div>
        </>
    );
};

export default GalleryPage;