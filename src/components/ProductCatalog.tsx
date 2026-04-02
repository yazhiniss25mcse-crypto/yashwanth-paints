import './ProductCatalog.css';

interface Product {
    id: number;
    name: string;
    category: string;
    image: string;
}

const products: Product[] = [
    { id: 1,  name: 'Suriya',               category: 'Hi-Gloss Super Synthetic Enamel',    image: '/products/product-1.png'  },
    { id: 2,  name: 'Sangai Lac',           category: 'Hi-Gloss Super Synthetic Enamel',    image: '/products/product-2.png'  },
    { id: 3,  name: 'Sangai Lac',           category: 'High Gloss Enamel',                  image: '/products/product-3.png'  },
    { id: 4,  name: 'Skythane',             category: '2K PU Tech',                         image: '/products/product-4.png'  },
    { id: 5,  name: 'Rattai',               category: 'Hi-Gloss Enamel',                    image: '/products/product-5.png'  },
    { id: 6,  name: 'Suriyalux',            category: 'Hi-Gloss Super Synthetic Enamel',    image: '/products/product-6.png'  },
    { id: 7,  name: 'Skyone Autofine',      category: 'Automotive Paints',                  image: '/products/product-7.png'  },
    { id: 8,  name: 'Skyone Autofine',      category: 'Premium Car Finish',                 image: '/products/product-8.png'  },
    { id: 9,  name: 'Skyone Autoline',      category: 'Glossy Automotive Paint',            image: '/products/product-9.png'  },
    { id: 10, name: 'Sangai Lac',           category: 'Hi-Gloss Super Synthetic Enamel',    image: '/products/product-10.png' },
    { id: 11, name: 'Skyone Skythane',      category: '2K PU Tech Coating',                 image: '/products/product-11.png' },
    { id: 12, name: 'Opex Ultra+',          category: 'Premium Wall Finish',                image: '/products/product-12.png' },
    { id: 13, name: 'Damp Faith',           category: 'Damp Proof Coating',                 image: '/products/product-13.png' },
    { id: 14, name: 'Damp Guard',           category: 'Waterproof Coating',                 image: '/products/product-14.png' },
    { id: 15, name: 'Crack Fill',           category: 'Wall Crack Filler',                  image: '/products/product-15.png' },
    { id: 16, name: 'Trustcare',            category: 'Exterior Emulsion',                  image: '/products/product-16.png' },
    { id: 17, name: 'Axex',                 category: 'Dust Proof Coating',                 image: '/products/product-17.png' },
    { id: 18, name: 'Acrylic Wall Putty',   category: 'Interior Grade Putty',               image: '/products/product-18.png' },
    { id: 19, name: 'Ultracare',            category: 'Wall Finish Emulsion',               image: '/products/product-19.png' },
    { id: 20, name: 'Sparx Emulsion',       category: 'Interior / Exterior Emulsion',       image: '/products/product-20.png' },
];

const ProductCatalog = () => {
    return (
        <section className="product-catalog-section" id="product-catalog">
            {/* Decorative background elements */}
            <div className="catalog-bg-blob catalog-bg-blob--1" aria-hidden="true" />
            <div className="catalog-bg-blob catalog-bg-blob--2" aria-hidden="true" />

            <div className="product-catalog-container">
                {/* Header */}
                <div className="catalog-header">
                    <h2 className="catalog-title">
                        Our Complete <span className="catalog-title-accent">Paint Range</span>
                    </h2>
                    <p className="catalog-subtitle">
                        20 premium products crafted for industrial, automotive &amp; decorative excellence
                    </p>
                </div>

                {/* Product Grid */}
                <div className="catalog-grid" role="list" aria-label="Paint product catalog">
                    {products.map((product) => (
                        <article
                            key={product.id}
                            className="catalog-card"
                            role="listitem"
                            aria-label={`Product ${product.id}: ${product.name}`}
                        >
                            {/* Number Badge */}
                            <div className="catalog-badge" aria-label={`Product number ${product.id}`}>
                                {product.id}
                            </div>

                            {/* Image Container */}
                            <div className="catalog-image-wrapper">
                                <img
                                    src={product.image}
                                    alt={`${product.name} - ${product.category}`}
                                    className="catalog-image"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="catalog-info">
                                <h3 className="catalog-product-name">{product.name}</h3>
                                <p className="catalog-product-category">{product.category}</p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Footer note */}
                <div className="catalog-footer-note">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span>All products are manufactured by Yashwanth Colour Coatings. Contact us for pricing &amp; availability.</span>
                </div>
            </div>
        </section>
    );
};

export default ProductCatalog;
