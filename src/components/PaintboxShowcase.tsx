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
        {
            image: new URL('../assets/Paintbox/Paint box 1.png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_orange.png', import.meta.url).href,
            color: '#F5A623'
        },
        {
            image: new URL('../assets/Paintbox/Paint box 1-1.png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_blue.png', import.meta.url).href,
            color: '#4A90E2'
        },
        {
            image: new URL('../assets/Paintbox/Paint box 1-2.png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_green.png', import.meta.url).href,
            color: '#7ED321'
        },
        {
            image: new URL('../assets/Paintbox/Paint box 1-3.png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_purple.png', import.meta.url).href,
            color: '#9013FE'
        },
        {
            image: new URL('../assets/Paintbox/Paint box 1-4.png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_pink.png', import.meta.url).href,
            color: '#FF6B9D'
        },
        {
            image: new URL('../assets/Paintbox/Paint box 1-5.png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_blue.png', import.meta.url).href,
            color: '#4A90E2'
        },
        {
            image: new URL('../assets/Paintbox/Paint box 1-6.png', import.meta.url).href,
            texture: new URL('../assets/Paintbox/icon_texture_orange.png', import.meta.url).href,
            color: '#F5A623'
        }
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
                                        alt="Paint Collection"
                                        className="paintbox-image"
                                    />
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
