export interface Product {
    id: string;
    name: string;
    description: string;
    category: string;
    images: string[];
    keyFeatures: string[];
    idealApplications: string[];
    specifications: {
        [key: string]: string;
    };
    ctaText?: string;
}

export const products: Product[] = [
    // INDUSTRIAL COATINGS
    {
        id: 'skythane-2k-polyurethane-industrial',
        name: 'Skythane 2K Polyurethane Coating',
        description: 'Skythane 2K Polyurethane Coating is a two-component polyurethane coating engineered for superior durability and long-term protection of metal surfaces. It provides excellent weather resistance, chemical resistance, and gloss retention.',
        category: 'Industrial',
        images: [
            'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80',
            'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80',
            'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&q=80'
        ],
        keyFeatures: [
            'Excellent weather & UV resistance',
            'Strong adhesion and toughness',
            'Resistant to chemicals & abrasion',
            'High gloss & colour retention'
        ],
        idealApplications: [
            'Steel structures',
            'Industrial machinery',
            'Commercial metal installations',
            'Outdoor metal surfaces'
        ],
        specifications: {
            'System': '2K polyurethane system',
            'Suitability': 'Indoor & outdoor',
            'Finish Options': 'Multiple finish options',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Request Skythane Quote'
    },
    {
        id: 'skyroxy-2k-epoxy-coating',
        name: 'Skyroxy 2K Epoxy Coating',
        description: 'Skyroxy 2K Epoxy Coating is a two-component epoxy coating designed for heavy-duty industrial protection. It provides excellent adhesion, surface hardness, and resistance against chemicals, abrasion, and moisture, making it ideal for demanding industrial environments.',
        category: 'Industrial',
        images: [
            'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
            'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80'
        ],
        keyFeatures: [
            'Excellent corrosion resistance',
            'High abrasion & chemical resistance',
            'Strong adhesion on concrete & metal',
            'Long service life'
        ],
        idealApplications: [
            'Industrial floors & warehouses',
            'Machinery & equipment',
            'Steel structures & metal surfaces',
            'Factories & commercial facilities'
        ],
        specifications: {
            'System': 'Two-component epoxy',
            'Finish Options': 'Gloss / Semi-gloss / Matt',
            'Strength': 'High mechanical strength',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Enquire for Skyroxy Epoxy Solutions'
    },

    // AUTOMOTIVE COATINGS
    {
        id: 'auto-fine-coatings-1k',
        name: 'Auto Fine Coatings (1K)',
        description: 'Auto Fine Coatings is a high-gloss single-component (1K) synthetic enamel developed for automotive bodyworks and metal parts. It offers smooth flow, rich appearance, and fast air-drying performance.',
        category: 'Automotive',
        images: [
            'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80'
        ],
        keyFeatures: [
            'Deep gloss finish',
            'Smooth flow & levelling',
            'Scratch resistant finish',
            'Fast air drying'
        ],
        idealApplications: [
            'Cars & bikes',
            'Automotive body panels',
            'Metal gates & components',
            'Decorative metal finishes'
        ],
        specifications: {
            'Type': 'Single-component (1K) synthetic enamel',
            'Formulation': 'Multiple color options',
            'Application': 'Spray application recommended',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Get Automotive Colour Options'
    },
    {
        id: 'skythane-2k-polyurethane-oem',
        name: 'Skythane 2K Polyurethane Coating (OEM)',
        description: 'Skythane 2K Polyurethane Coating (OEM) is a premium two-component polyurethane coating specifically formulated for OEM automotive applications. It delivers exceptional durability, superior finish quality, and long-lasting protection.',
        category: 'Automotive',
        images: [
            'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80',
            'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80'
        ],
        keyFeatures: [
            'OEM-grade quality',
            'Excellent weather & UV resistance',
            'Superior gloss retention',
            'High chemical resistance'
        ],
        idealApplications: [
            'OEM automotive manufacturing',
            'Premium automotive refinishing',
            'Commercial vehicle coating',
            'High-end automotive applications'
        ],
        specifications: {
            'System': '2K polyurethane system',
            'Grade': 'OEM specification',
            'Finish': 'High gloss',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Request OEM Coating Details'
    },

    // WOOD COATINGS
    {
        id: 'melamine-sealer',
        name: 'Melamine Sealer',
        description: 'Melamine Sealer is a base coat designed to fill wood pores and create a smooth foundation before applying melamine matt or glossy finishes.',
        category: 'Wood',
        images: [
            'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80',
            'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80',
            'https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=800&q=80'
        ],
        keyFeatures: [
            'Excellent pore filling',
            'Improves topcoat adhesion',
            'Prevents sinkage & shrinkage',
            'Smooth surface preparation'
        ],
        idealApplications: [
            'Wooden furniture preparation',
            'Interior wood surfaces',
            'Pre-finish coating',
            'Wood surface smoothing'
        ],
        specifications: {
            'System': 'Two-pack sealer system',
            'Drying': 'Fast drying',
            'Sanding': 'Easy sanding',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Request Sealer Information'
    },
    {
        id: 'melamine-matt-finish',
        name: 'Melamine Matt',
        description: 'Melamine Matt is a two-pack wood coating that provides a smooth, low-sheen finish for modern interior furniture designs.',
        category: 'Wood',
        images: [
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
        ],
        keyFeatures: [
            'Elegant matt appearance',
            'Non-reflective finish',
            'Smooth & uniform surface',
            'Durable interior coating'
        ],
        idealApplications: [
            'Furniture',
            'Wooden doors',
            'Cabinets & panels',
            'Modern interior designs'
        ],
        specifications: {
            'System': 'Two-component melamine system',
            'Gloss': 'Matt finish',
            'Application': 'Professional application recommended',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Enquire for Matt Wood Finish'
    },
    {
        id: 'melamine-glossy-finish',
        name: 'Melamine Glossy',
        description: 'Melamine Glossy is a high-gloss two-pack wood coating designed for premium furniture and interior wooden surfaces. It delivers a smooth, mirror-like finish with excellent durability.',
        category: 'Wood',
        images: [
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
            'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80'
        ],
        keyFeatures: [
            'High gloss & rich finish',
            'Smooth surface levelling',
            'Good scratch resistance',
            'Long-lasting appearance'
        ],
        idealApplications: [
            'Wooden furniture',
            'Cabinets & wardrobes',
            'Doors & panels',
            'Interior wood décor'
        ],
        specifications: {
            'System': 'Two-pack melamine system',
            'Use': 'Interior use recommended',
            'Application': 'Spray or brush application',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Get Glossy Wood Finish Details'
    },
    {
        id: 'skythane-2k-polyurethane-sealer',
        name: 'Skythane 2K Polyurethane Sealer',
        description: 'Skythane 2K Polyurethane Sealer is a two-component polyurethane base coat used to seal wood surfaces and provide an ideal foundation for Skythane matt or glossy topcoats.',
        category: 'Wood',
        images: [
            'https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=800&q=80',
            'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80',
            'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80'
        ],
        keyFeatures: [
            'Excellent adhesion',
            'High build & easy sanding',
            'Improves final finish quality',
            'Moisture resistance'
        ],
        idealApplications: [
            'Wooden furniture',
            'Premium interior woodworks',
            'High-durability coating systems',
            'PU finish preparation'
        ],
        specifications: {
            'System': '2K polyurethane system',
            'Drying': 'Fast drying & sandable',
            'Application': 'Spray application ideal',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Get Skythane Sealer Details'
    },
    {
        id: 'skythane-2k-polyurethane-matt',
        name: 'Skythane 2K Polyurethane Matt',
        description: 'Skythane 2K Polyurethane Matt is a premium two-component polyurethane wood coating that provides a sophisticated matt finish with exceptional durability and protection.',
        category: 'Wood',
        images: [
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
        ],
        keyFeatures: [
            'Premium matt finish',
            'Excellent durability',
            'Superior scratch resistance',
            'UV & moisture protection'
        ],
        idealApplications: [
            'High-end furniture',
            'Premium wooden doors',
            'Luxury cabinets',
            'Contemporary interior designs'
        ],
        specifications: {
            'System': '2K polyurethane system',
            'Gloss': 'Matt finish',
            'Application': 'Professional spray application',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Request Skythane Matt Quote'
    },
    {
        id: 'skythane-2k-polyurethane-glossy',
        name: 'Skythane 2K Polyurethane Glossy',
        description: 'Skythane 2K Polyurethane Glossy is a premium two-component polyurethane wood coating that delivers a brilliant high-gloss finish with outstanding durability and long-term protection.',
        category: 'Wood',
        images: [
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
            'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80'
        ],
        keyFeatures: [
            'Brilliant high-gloss finish',
            'Exceptional durability',
            'Superior scratch & stain resistance',
            'Long-lasting gloss retention'
        ],
        idealApplications: [
            'Premium furniture',
            'Luxury wooden surfaces',
            'High-end cabinets & wardrobes',
            'Decorative wood finishes'
        ],
        specifications: {
            'System': '2K polyurethane system',
            'Gloss': 'High gloss finish',
            'Application': 'Professional spray application',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Get Skythane Glossy Details'
    }
];

export const getProductById = (id: string): Product | undefined => {
    return products.find(product => product.id === id);
};
