nexport interface Product {
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
            'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
            'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=800&q=80',
            'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80'
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
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
            'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80'
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
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
            'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80'
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
            'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80',
            'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80',
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
            'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&q=80',
            'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80',
            'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80'
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
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80'
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
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
            'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80',
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
            'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80',
            'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&q=80',
            'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80'
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
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
            'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80'
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
            'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
            'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80'
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
    },

    // Additional Wood Coatings
    {
        id: 'nc-sanding-sealer',
        name: 'NC Sanding Sealer',
        description: 'NC Sanding Sealer is a nitrocellulose-based sealer designed for wood surface preparation. It provides excellent pore filling and creates a smooth foundation for topcoats.',
        category: 'Wood',
        images: [
            'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&q=80',
            'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80',
            'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80'
        ],
        keyFeatures: [
            'Fast drying',
            'Easy sanding',
            'Good pore filling',
            'Excellent adhesion'
        ],
        idealApplications: [
            'Furniture preparation',
            'Interior woodwork',
            'Wood surface smoothing',
            'Pre-finish coating'
        ],
        specifications: {
            'System': 'Nitrocellulose sealer',
            'Drying': 'Fast drying',
            'Sanding': 'Easy to sand',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Request NC Sealer Information'
    },
    {
        id: '2k-pu-sealer',
        name: '2K PU Sealer',
        description: '2K PU Sealer is a two-component polyurethane sealer for wood surfaces, providing superior build and durability for high-quality finishes.',
        category: 'Wood',
        images: [
            'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80',
            'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&q=80',
            'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80'
        ],
        keyFeatures: [
            'High build properties',
            'Excellent adhesion',
            'Superior durability',
            'Moisture resistance'
        ],
        idealApplications: [
            'Premium furniture',
            'High-end woodwork',
            'Durable wood finishes',
            'Professional applications'
        ],
        specifications: {
            'System': '2K polyurethane sealer',
            'Drying': 'Fast drying',
            'Application': 'Spray recommended',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Get 2K PU Sealer Details'
    },
    {
        id: 'nc-pu-matt',
        name: 'NC PU Matt',
        description: 'NC PU Matt is a nitrocellulose-based matt finish coating for wood, offering a smooth, non-reflective appearance with good durability.',
        category: 'Wood',
        images: [
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
        ],
        keyFeatures: [
            'Matt finish',
            'Fast drying',
            'Easy application',
            'Good durability'
        ],
        idealApplications: [
            'Furniture',
            'Interior woodwork',
            'Cabinets',
            'Modern designs'
        ],
        specifications: {
            'System': 'NC-based matt finish',
            'Gloss': 'Matt',
            'Application': 'Spray or brush',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Enquire for NC Matt Finish'
    },

    // ANTICORROSIVE & MARINE COATINGS
    {
        id: 'skypoxy-zinc-phosphate-primer',
        name: 'Skypoxy 2K Epoxy Zinc Phosphate Primer',
        description: 'Skypoxy 2K Epoxy Zinc Phosphate Primer is a two-component epoxy primer providing excellent corrosion protection for metal surfaces in industrial and marine environments.',
        category: 'Anticorrosive',
        images: [
            'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
            'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80'
        ],
        keyFeatures: [
            'Excellent corrosion resistance',
            'Strong adhesion',
            'Zinc phosphate protection',
            'Chemical resistant'
        ],
        idealApplications: [
            'Steel structures',
            'Industrial equipment',
            'Marine applications',
            'Metal surfaces'
        ],
        specifications: {
            'System': '2K epoxy primer',
            'Protection': 'Anticorrosive',
            'Application': 'Spray recommended',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Request Primer Quote'
    },
    {
        id: 'skypoxy-zinc-rich-primer',
        name: 'Skypoxy 2K Epoxy Zinc Rich Primer',
        description: 'Skypoxy 2K Epoxy Zinc Rich Primer offers superior cathodic protection with high zinc content, ideal for heavy-duty corrosion protection.',
        category: 'Anticorrosive',
        images: [
            'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
            'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80'
        ],
        keyFeatures: [
            'High zinc content',
            'Cathodic protection',
            'Maximum corrosion resistance',
            'Long-term durability'
        ],
        idealApplications: [
            'Heavy industrial structures',
            'Marine environments',
            'Offshore installations',
            'Critical metal protection'
        ],
        specifications: {
            'System': '2K epoxy zinc-rich',
            'Zinc Content': 'High',
            'Application': 'Professional spray',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Get Zinc Rich Primer Details'
    },
    {
        id: 'skypoxy-mio-primer',
        name: 'Skypoxy 2K Epoxy MIO Primer',
        description: 'Skypoxy 2K Epoxy MIO (Micaceous Iron Oxide) Primer provides excellent barrier protection and corrosion resistance for industrial and marine applications.',
        category: 'Anticorrosive',
        images: [
            'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
            'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80'
        ],
        keyFeatures: [
            'Micaceous iron oxide protection',
            'Excellent barrier properties',
            'Weather resistant',
            'Long-lasting protection'
        ],
        idealApplications: [
            'Marine structures',
            'Industrial plants',
            'Bridges and tanks',
            'Harsh environments'
        ],
        specifications: {
            'System': '2K epoxy MIO',
            'Protection': 'Barrier coating',
            'Application': 'Spray application',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Enquire for MIO Primer'
    },
    {
        id: 'anti-fouling-coating',
        name: 'Anti Fouling Coating',
        description: 'Anti Fouling Coating is a specialized marine coating designed to prevent marine organism growth on ship hulls and underwater structures.',
        category: 'Marine',
        images: [
            'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
            'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80'
        ],
        keyFeatures: [
            'Prevents marine growth',
            'Smooth hull performance',
            'Fuel efficiency',
            'Long-lasting protection'
        ],
        idealApplications: [
            'Ship hulls',
            'Underwater structures',
            'Marine vessels',
            'Offshore platforms'
        ],
        specifications: {
            'System': 'Anti-fouling coating',
            'Use': 'Marine applications',
            'Application': 'Professional application',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Request Marine Coating Info'
    },

    // PUTTY PRODUCTS
    {
        id: 'kp8-putty',
        name: 'KP8 Putty',
        description: 'KP8 Putty is a high-quality filling compound designed for surface preparation and repair work on various substrates.',
        category: 'Putty',
        images: [
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
            'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80',
            'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80'
        ],
        keyFeatures: [
            'Excellent filling properties',
            'Easy to sand',
            'Good adhesion',
            'Fast drying'
        ],
        idealApplications: [
            'Surface preparation',
            'Crack filling',
            'Dent repair',
            'General repair work'
        ],
        specifications: {
            'Type': 'Filling putty',
            'Drying': 'Fast drying',
            'Sanding': 'Easy sanding',
            'Pack Sizes': '1 Kg | 5 Kg | 20 Kg'
        },
        ctaText: 'Get KP8 Putty Details'
    },
    {
        id: 'nc-putty',
        name: 'NC Putty',
        description: 'NC Putty is a nitrocellulose-based putty for wood and metal surface preparation, offering fast drying and easy sanding properties.',
        category: 'Putty',
        images: [
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
            'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80',
            'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80'
        ],
        keyFeatures: [
            'Fast drying',
            'Easy application',
            'Good filling',
            'Sandable'
        ],
        idealApplications: [
            'Wood filling',
            'Metal preparation',
            'Surface smoothing',
            'Quick repairs'
        ],
        specifications: {
            'Type': 'NC-based putty',
            'Drying': 'Very fast',
            'Application': 'Brush or spatula',
            'Pack Sizes': '1 Kg | 5 Kg | 20 Kg'
        },
        ctaText: 'Request NC Putty Info'
    },
    {
        id: 'epoxy-putty',
        name: 'Epoxy Putty',
        description: 'Epoxy Putty is a two-component epoxy-based filler offering superior strength and durability for heavy-duty repair applications.',
        category: 'Putty',
        images: [
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
            'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80',
            'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80'
        ],
        keyFeatures: [
            'High strength',
            'Chemical resistant',
            'Durable repair',
            'Excellent adhesion'
        ],
        idealApplications: [
            'Metal repair',
            'Industrial applications',
            'Heavy-duty filling',
            'Structural repairs'
        ],
        specifications: {
            'Type': '2K epoxy putty',
            'Strength': 'High',
            'Application': 'Spatula application',
            'Pack Sizes': '1 Kg | 5 Kg | 20 Kg'
        },
        ctaText: 'Enquire for Epoxy Putty'
    },
    {
        id: 'polyester-putty',
        name: 'Polyester Putty',
        description: 'Polyester Putty is a two-component polyester-based filler widely used in automotive and industrial applications for surface preparation.',
        category: 'Putty',
        images: [
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
            'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80',
            'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80'
        ],
        keyFeatures: [
            'Fast curing',
            'Easy sanding',
            'Good filling properties',
            'Automotive grade'
        ],
        idealApplications: [
            'Automotive bodywork',
            'Dent filling',
            'Surface leveling',
            'Body repair'
        ],
        specifications: {
            'Type': '2K polyester putty',
            'Curing': 'Fast curing',
            'Sanding': 'Easy to sand',
            'Pack Sizes': '1 Kg | 5 Kg | 20 Kg'
        },
        ctaText: 'Get Polyester Putty Details'
    },

    // SPECIALTY COATINGS
    {
        id: 'plastic-coating',
        name: 'Plastic Coating',
        description: 'Plastic Coating is a specialized coating formulated for plastic substrates, providing excellent adhesion and durability on plastic surfaces.',
        category: 'Specialty',
        images: [
            'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80',
            'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80',
            'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&q=80'
        ],
        keyFeatures: [
            'Excellent plastic adhesion',
            'Flexible finish',
            'UV resistant',
            'Durable protection'
        ],
        idealApplications: [
            'Plastic components',
            'Automotive plastics',
            'Consumer products',
            'Plastic surfaces'
        ],
        specifications: {
            'System': 'Plastic adhesion coating',
            'Flexibility': 'High',
            'Application': 'Spray recommended',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Request Plastic Coating Info'
    },
    {
        id: 'glass-coating',
        name: 'Glass Coating',
        description: 'Glass Coating is a specialized coating for glass surfaces, offering protection and enhanced appearance for glass applications.',
        category: 'Specialty',
        images: [
            'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80',
            'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80',
            'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&q=80'
        ],
        keyFeatures: [
            'Glass adhesion',
            'Transparent or colored',
            'UV protection',
            'Scratch resistant'
        ],
        idealApplications: [
            'Glass surfaces',
            'Decorative glass',
            'Architectural glass',
            'Glass protection'
        ],
        specifications: {
            'System': 'Glass coating system',
            'Finish': 'Various options',
            'Application': 'Professional application',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Get Glass Coating Details'
    },
    {
        id: 'ss-coating',
        name: 'SS Coating',
        description: 'SS Coating is a specialized coating for stainless steel surfaces, providing enhanced protection and finish for stainless steel applications.',
        category: 'Specialty',
        images: [
            'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80',
            'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80',
            'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&q=80'
        ],
        keyFeatures: [
            'Stainless steel adhesion',
            'Corrosion protection',
            'Aesthetic finish',
            'Durable coating'
        ],
        idealApplications: [
            'Stainless steel surfaces',
            'Industrial equipment',
            'Architectural applications',
            'SS protection'
        ],
        specifications: {
            'System': 'SS coating system',
            'Protection': 'Enhanced',
            'Application': 'Spray application',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Enquire for SS Coating'
    },
    {
        id: 'soft-feel-lacquer',
        name: 'Soft Feel Lacquer',
        description: 'Soft Feel Lacquer is a specialty coating that provides a soft-touch, tactile finish for premium applications requiring a luxurious feel.',
        category: 'Specialty',
        images: [
            'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80',
            'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80',
            'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&q=80'
        ],
        keyFeatures: [
            'Soft-touch finish',
            'Premium feel',
            'Scratch resistant',
            'Unique texture'
        ],
        idealApplications: [
            'Premium products',
            'Consumer electronics',
            'Luxury items',
            'High-end finishes'
        ],
        specifications: {
            'System': 'Soft-feel coating',
            'Finish': 'Tactile soft-touch',
            'Application': 'Professional spray',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Request Soft Feel Info'
    },

    // AUTOMOTIVE COATINGS - Additional Products
    {
        id: 'auto-zinc-coating-1k',
        name: 'Auto Zinc Coating (1K)',
        description: 'Auto Zinc Coating is a single-component zinc-rich primer providing excellent corrosion protection for automotive applications.',
        category: 'Automotive',
        images: [
            'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80'
        ],
        keyFeatures: [
            'Zinc protection',
            'Single component',
            'Easy application',
            'Corrosion resistant'
        ],
        idealApplications: [
            'Automotive primers',
            'Metal protection',
            'Vehicle bodywork',
            'Rust prevention'
        ],
        specifications: {
            'Type': '1K zinc coating',
            'Application': 'Spray application',
            'Drying': 'Fast drying',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Get Auto Zinc Details'
    },
    {
        id: '2k-pu-enamel',
        name: '2K PU Enamel',
        description: '2K PU Enamel is a two-component polyurethane enamel offering superior finish and durability for automotive and industrial applications.',
        category: 'Automotive',
        images: [
            'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80'
        ],
        keyFeatures: [
            'High gloss finish',
            'Excellent durability',
            'Weather resistant',
            'Chemical resistant'
        ],
        idealApplications: [
            'Automotive finishing',
            'Industrial equipment',
            'Metal surfaces',
            'Premium applications'
        ],
        specifications: {
            'System': '2K polyurethane enamel',
            'Finish': 'High gloss',
            'Application': 'Spray application',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Request 2K PU Enamel Quote'
    },
    {
        id: 'skythane-2k-pu-primer',
        name: 'Skythane 2K PU Primer',
        description: 'Skythane 2K PU Primer is a two-component polyurethane primer providing excellent adhesion and corrosion protection for automotive applications.',
        category: 'Automotive',
        images: [
            'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80'
        ],
        keyFeatures: [
            'Excellent adhesion',
            'Corrosion protection',
            'Easy sanding',
            'High build'
        ],
        idealApplications: [
            'Automotive priming',
            'Surface preparation',
            'Metal protection',
            'Professional refinishing'
        ],
        specifications: {
            'System': '2K PU primer',
            'Build': 'High build',
            'Application': 'Spray application',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Get Skythane Primer Info'
    },
    {
        id: 'skythane-2k-pu-metallic',
        name: 'Skythane 2K PU Metallic Finish',
        description: 'Skythane 2K PU Metallic Finish is a premium two-component polyurethane coating with metallic effect, offering stunning appearance and durability.',
        category: 'Automotive',
        images: [
            'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80'
        ],
        keyFeatures: [
            'Metallic effect',
            'Premium finish',
            'Excellent durability',
            'UV resistant'
        ],
        idealApplications: [
            'Premium automotive',
            'Custom finishes',
            'Luxury vehicles',
            'Decorative applications'
        ],
        specifications: {
            'System': '2K PU metallic',
            'Effect': 'Metallic finish',
            'Application': 'Professional spray',
            'Pack Sizes': '1 Ltr | 4 Ltr | 20 Ltr'
        },
        ctaText: 'Request Metallic Finish Details'
    }
];

export const getProductById = (id: string): Product | undefined => {
    return products.find(product => product.id === id);
};
