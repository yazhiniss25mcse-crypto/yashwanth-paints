import './PaintboxShowcase.css';
import { useRef } from 'react';

const PaintboxShowcase = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.offsetWidth * 0.8;
            const newScrollPosition = direction === 'left'
                ? carouselRef.current.scrollLeft - scrollAmount
                : carouselRef.current.scrollLeft + scrollAmount;

            carouselRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });
        }
    };

    const paintboxes = [
        // Original paint boxes (bucket photos)
        {
            image: new URL('../assets/Paintbox/Paint box 1.png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_orange.png', import.meta.url).href,
            color: '#F5A623',
            name: 'Ultra Plus',
            category: 'Premium Synthetic Enamel'
        },
        {
            image: new URL('../assets/Paintbox/Paint box 1-1.png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_blue.png', import.meta.url).href,
            color: '#4A90E2',
            name: 'Damp Guard',
            category: 'Waterproof Coating'
        },
        {
            image: new URL('../assets/Paintbox/Paint box 1-2.png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_green.png', import.meta.url).href,
            color: '#7ED321',
            name: 'Tingro Coat',
            category: 'Wood Finish Coating'
        },
        {
            image: new URL('../assets/Paintbox/Paint box 1-3.png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_purple.png', import.meta.url).href,
            color: '#9013FE',
            name: 'Skythane',
            category: '2K PU Tech Coating'
        },
        {
            image: new URL('../assets/Paintbox/Paint box 1-4.png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_pink.png', import.meta.url).href,
            color: '#FF6B9D',
            name: 'Sparx',
            category: 'Interior / Exterior Emulsion'
        },
        {
            image: new URL('../assets/Paintbox/Paint box 1-5.png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_blue.png', import.meta.url).href,
            color: '#4A90E2',
            name: 'Autofine',
            category: 'Automotive Paint'
        },
        {
            image: new URL('../assets/Paintbox/Paint box 1-6.png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_orange.png', import.meta.url).href,
            color: '#F5A623',
            name: 'Suriyalux',
            category: 'Hi-Gloss Synthetic Enamel'
        },
        // New paint boxes with contrasting backgrounds
        {
            image: new URL('../assets/Paintbox/New Image 1.png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_blue.png', import.meta.url).href,
            color: '#14B8A6',
            name: 'Sangai Lac',
            category: 'Hi-Gloss Super Synthetic Enamel'
        },
        {
            image: new URL('../assets/Paintbox/New Image 1-1.png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_red.png', import.meta.url).href,
            color: '#FF6F61',
            name: 'Suriya',
            category: 'Hi-Gloss Enamel'
        },
        {
            image: new URL('../assets/Paintbox/New Image 1-2.png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_purple.png', import.meta.url).href,
            color: '#6366F1',
            name: 'Skyone Autoline',
            category: 'Glossy Automotive Paint'
        },
        {
            image: new URL('../assets/Paintbox/New Image 1-3.png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_green.png', import.meta.url).href,
            color: '#84CC16',
            name: 'Rattai',
            category: 'Hi-Gloss Enamel'
        },
        {
            image: new URL('../assets/Paintbox/New Image 1-4.png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_pink.png', import.meta.url).href,
            color: '#EC4899',
            name: 'Opex Ultra+',
            category: 'Premium Wall Finish'
        },
        {
            image: new URL('../assets/Paintbox/New Image 1-5.png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_orange.png', import.meta.url).href,
            color: '#F59E0B',
            name: 'Trustcare',
            category: 'Exterior Emulsion'
        },
        // All 20 products from the Paint Range catalog
        {
            image: '/products/product-1.png',
            texture: new URL('../assets/Paintbox/icon_texture_purple.png', import.meta.url).href,
            color: '#7C3AED',
            name: 'Suriya',
            category: 'Hi-Gloss Super Synthetic Enamel'
        },
        {
            image: '/products/product-2.png',
            texture: new URL('../assets/Paintbox/icon_texture_red.png', import.meta.url).href,
            color: '#DC2626',
            name: 'Sangai Lac',
            category: 'Hi-Gloss Super Synthetic Enamel'
        },
        {
            image: '/products/product-3.png',
            texture: new URL('../assets/Paintbox/icon_texture_pink.png', import.meta.url).href,
            color: '#DB2777',
            name: 'Sangai Lac',
            category: 'High Gloss Enamel'
        },
        {
            image: '/products/product-4.png',
            texture: new URL('../assets/Paintbox/icon_texture_blue.png', import.meta.url).href,
            color: '#1D4ED8',
            name: 'Skythane',
            category: '2K PU Tech'
        },
        {
            image: '/products/product-5.png',
            texture: new URL('../assets/Paintbox/icon_texture_orange.png', import.meta.url).href,
            color: '#D97706',
            name: 'Rattai',
            category: 'Hi-Gloss Enamel'
        },
        {
            image: '/products/product-6.png',
            texture: new URL('../assets/Paintbox/icon_texture_green.png', import.meta.url).href,
            color: '#059669',
            name: 'Suriyalux',
            category: 'Hi-Gloss Super Synthetic Enamel'
        },
        {
            image: '/products/product-7.png',
            texture: new URL('../assets/Paintbox/icon_texture_blue.png', import.meta.url).href,
            color: '#0284C7',
            name: 'Skyone Autofine',
            category: 'Automotive Paints'
        },
        {
            image: '/products/product-8.png',
            texture: new URL('../assets/Paintbox/icon_texture_purple.png', import.meta.url).href,
            color: '#7C3AED',
            name: 'Skyone Autofine',
            category: 'Premium Car Finish'
        },
        {
            image: '/products/product-9.png',
            texture: new URL('../assets/Paintbox/icon_texture_green.png', import.meta.url).href,
            color: '#16A34A',
            name: 'Skyone Autoline',
            category: 'Glossy Automotive Paint'
        },
        {
            image: '/products/product-10.png',
            texture: new URL('../assets/Paintbox/icon_texture_red.png', import.meta.url).href,
            color: '#B91C1C',
            name: 'Sangai Lac',
            category: 'Hi-Gloss Super Synthetic Enamel'
        },
        {
            image: '/products/product-11.png',
            texture: new URL('../assets/Paintbox/icon_texture_blue.png', import.meta.url).href,
            color: '#1E40AF',
            name: 'Skyone Skythane',
            category: '2K PU Tech Coating'
        },
        {
            image: '/products/product-12.png',
            texture: new URL('../assets/Paintbox/icon_texture_orange.png', import.meta.url).href,
            color: '#EA580C',
            name: 'Opex Ultra+',
            category: 'Premium Wall Finish'
        },
        {
            image: '/products/product-13.png',
            texture: new URL('../assets/Paintbox/icon_texture_pink.png', import.meta.url).href,
            color: '#9D174D',
            name: 'Damp Faith',
            category: 'Damp Proof Coating'
        },
        {
            image: '/products/product-14.png',
            texture: new URL('../assets/Paintbox/icon_texture_blue.png', import.meta.url).href,
            color: '#0369A1',
            name: 'Damp Guard',
            category: 'Waterproof Coating'
        },
        {
            image: '/products/product-15.png',
            texture: new URL('../assets/Paintbox/icon_texture_green.png', import.meta.url).href,
            color: '#15803D',
            name: 'Crack Fill',
            category: 'Wall Crack Filler'
        },
        {
            image: '/products/product-16.png',
            texture: new URL('../assets/Paintbox/icon_texture_purple.png', import.meta.url).href,
            color: '#6D28D9',
            name: 'Trustcare',
            category: 'Exterior Emulsion'
        },
        {
            image: '/products/product-17.png',
            texture: new URL('../assets/Paintbox/icon_texture_orange.png', import.meta.url).href,
            color: '#C2410C',
            name: 'Axex',
            category: 'Dust Proof Coating'
        },
        {
            image: '/products/product-18.png',
            texture: new URL('../assets/Paintbox/icon_texture_red.png', import.meta.url).href,
            color: '#9F1239',
            name: 'Acrylic Wall Putty',
            category: 'Interior Grade Putty'
        },
        {
            image: '/products/product-19.png',
            texture: new URL('../assets/Paintbox/icon_texture_green.png', import.meta.url).href,
            color: '#065F46',
            name: 'Ultracare',
            category: 'Wall Finish Emulsion'
        },
        {
            image: '/products/product-20.png',
            texture: new URL('../assets/Paintbox/icon_texture_pink.png', import.meta.url).href,
            color: '#BE185D',
            name: 'Sparx Emulsion',
            category: 'Interior / Exterior Emulsion'
        },
    ];

    const floatingTextures = [
        { icon: new URL('../assets/Paintbox/icon_texture_blue.png', import.meta.url).href, top: '10%', left: '5%', delay: '0s' },
        { icon: new URL('../assets/Paintbox/icon_texture_orange.png', import.meta.url).href, top: '20%', right: '8%', delay: '0.5s' },
        { icon: new URL('../assets/Paintbox/icon_texture_green.png', import.meta.url).href, top: '60%', left: '3%', delay: '1s' },
        { icon: new URL('../assets/Paintbox/icon_texture_pink.png', import.meta.url).href, top: '70%', right: '5%', delay: '1.5s' },
        { icon: new URL('../assets/Paintbox/icon_texture_purple.png', import.meta.url).href, top: '40%', right: '10%', delay: '2s' },
        { icon: new URL('../assets/Paintbox/icon_texture_red.png', import.meta.url).href, top: '80%', left: '8%', delay: '2.5s' }
    ];

    return (
        <section className="paintbox-showcase-section">
            {/* Floating Texture Decorations */}
            <div className="floating-textures">
                {floatingTextures.map((texture, index) => (
                    <div
                        key={index}
                        className="floating-texture"
                        style={{
                            top: texture.top,
                            left: texture.left,
                            right: texture.right,
                            animationDelay: texture.delay
                        }}
                    >
                        <img src={texture.icon} alt="" />
                    </div>
                ))}
            </div>

            <div className="paintbox-showcase-container">
                <div className="showcase-header">
                    <h2 className="showcase-title">
                        Our <span className="gradient-text">Paint Collections</span>
                    </h2>
                    <p className="showcase-subtitle">
                        Discover premium quality paints for every surface and project
                    </p>
                </div>

                <div className="carousel-wrapper">
                    {/* Left Arrow */}
                    <button
                        className="carousel-arrow carousel-arrow-left"
                        onClick={() => scroll('left')}
                        aria-label="Scroll left"
                    >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Carousel */}
                    <div className="paintbox-carousel" ref={carouselRef}>
                        {paintboxes.map((box, index) => (
                            <div
                                key={index}
                                className="paintbox-item"
                                style={{
                                    '--box-color': box.color,
                                    animationDelay: `${index * 0.1}s`
                                } as React.CSSProperties}
                            >
                                <div className="paintbox-background">
                                    <img
                                        src={box.texture}
                                        alt="Texture"
                                        className="texture-pattern"
                                    />
                                    <div className="color-overlay"></div>
                                </div>
                                <div className="paintbox-content">
                                    <img
                                        src={box.image}
                                        alt={box.name || 'Paint Collection'}
                                        className="paintbox-image"
                                    />
                                    {box.name && (
                                        <div className="paintbox-label">
                                            <span className="paintbox-name">{box.name}</span>
                                            <span className="paintbox-category">{box.category}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        className="carousel-arrow carousel-arrow-right"
                        onClick={() => scroll('right')}
                        aria-label="Scroll right"
                    >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PaintboxShowcase;
