import './FounderSection.css';
import founderImg from '../assets/founder.jpeg';

const FounderSection = () => {
    return (
        <section className="founder-section" id="founder">
            {/* Decorative background blobs */}
            <div className="founder-blob founder-blob--1" aria-hidden="true" />
            <div className="founder-blob founder-blob--2" aria-hidden="true" />

            <div className="founder-container">
                {/* Left — Photo */}
                <div className="founder-image-col">
                    <div className="founder-image-frame">
                        <div className="founder-image-glow" aria-hidden="true" />
                        <div className="founder-image-border" aria-hidden="true" />
                        <img
                            src={founderImg}
                            alt="C. Sundramoorthy — Founder, Yashwanth Colour Coatings"
                            className="founder-photo"
                        />
                        {/* Name badge below photo */}
                        <div className="founder-badge">
                            <span className="founder-badge-name">C. Sundramoorthy</span>
                            <span className="founder-badge-title">Founder &amp; Managing Director</span>
                        </div>
                    </div>
                </div>

                {/* Right — Content */}
                <div className="founder-content-col">
                    <div className="founder-eyebrow">
                        <span className="founder-eyebrow-line" aria-hidden="true" />
                        <span className="founder-eyebrow-text">Meet the Visionary</span>
                    </div>

                    <h2 className="founder-heading">
                        Built on <span className="founder-heading-accent">Passion,</span><br />
                        Driven by <span className="founder-heading-accent">Quality</span>
                    </h2>

                    <p className="founder-lead">
                        With over <strong>30 years of expertise</strong> in the colour coatings industry,
                        Mr. C. Sundramoorthy has dedicated his life to crafting coatings that protect,
                        beautify, and endure.
                    </p>

                    <div className="founder-story">
                        <p>
                            What began as a deep-rooted passion for colour and craftsmanship has grown into
                            one of Chennai's most trusted names in industrial, automotive, and decorative
                            coatings. Under his visionary leadership, Yashwanth Colour Coatings has
                            consistently delivered premium-quality products — from Hi-Gloss Synthetic
                            Enamels to advanced 2K PU coatings — trusted by contractors, industries, and
                            homeowners alike.
                        </p>
                        <p>
                            His philosophy is simple: <em>"Every surface deserves the best protection."</em>
                            This conviction drives every formula, every product, and every customer
                            relationship that Yashwanth Colour Coatings proudly upholds.
                        </p>
                    </div>

                    {/* Stats strip */}
                    <div className="founder-stats">
                        <div className="founder-stat">
                            <span className="founder-stat-number">30<span className="founder-stat-plus">+</span></span>
                            <span className="founder-stat-label">Years of Experience</span>
                        </div>
                        <div className="founder-stat-divider" aria-hidden="true" />
                        <div className="founder-stat">
                            <span className="founder-stat-number">20<span className="founder-stat-plus">+</span></span>
                            <span className="founder-stat-label">Premium Products</span>
                        </div>
                        <div className="founder-stat-divider" aria-hidden="true" />
                        <div className="founder-stat">
                            <span className="founder-stat-number">500<span className="founder-stat-plus">+</span></span>
                            <span className="founder-stat-label">Happy Clients</span>
                        </div>
                    </div>

                    {/* Signature quote */}
                    <blockquote className="founder-quote">
                        <span className="founder-quote-mark">"</span>
                        Every surface deserves the finest protection — that is our promise, our pride.
                        <span className="founder-quote-mark">"</span>
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;
