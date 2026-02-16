import './BrochurePage.css';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/structuredData';

interface Brochure {
    title: string;
    description: string;
    fileSize: string;
    fileName: string;
}

const BrochurePage = () => {
    const R2_BASE_URL = "https://pub-e73e54ec7cf741bfa344f464ccfb26f0.r2.dev";

    const brochures: Brochure[] = [
        {
            title: "Product Details",
            description: "Complete product specifications and details",
            fileSize: "238.02 KB",
            fileName: "Product Details.pdf"
        },
        {
            title: "Automotive Coatings",
            description: "Premium automotive paint solutions and finishes",
            fileSize: "369.6 KB",
            fileName: "Automotive.pdf"
        },
        {
            title: "Decorative Coatings",
            description: "Beautiful decorative coating solutions for all surfaces",
            fileSize: "332.4 KB",
            fileName: "Decorative.pdf"
        },
        {
            title: "Industrial Coatings",
            description: "Technical specifications for industrial applications",
            fileSize: "398.91 KB",
            fileName: "Industrial.pdf"
        },
        {
            title: "Hammertone Finishes",
            description: "Distinctive hammertone texture coating solutions",
            fileSize: "353.22 KB",
            fileName: "Hammertone.pdf"
        },
        {
            title: "Melamine Glossy",
            description: "High-gloss melamine coating products",
            fileSize: "569.35 KB",
            fileName: "Melamine Glossy.pdf"
        },
        {
            title: "Melamine Matt",
            description: "Premium matte finish melamine coatings",
            fileSize: "388.67 KB",
            fileName: "Melamine Matt.pdf"
        },
        {
            title: "Melamine Sealer",
            description: "Professional melamine sealing solutions",
            fileSize: "386.81 KB",
            fileName: "melamine sealer.pdf"
        },
        {
            title: "PU Matt Finish",
            description: "Polyurethane matte finish coating products",
            fileSize: "263.64 KB",
            fileName: "PU Matt.pdf"
        },
        {
            title: "PU Sealer",
            description: "High-performance polyurethane sealer solutions",
            fileSize: "260.98 KB",
            fileName: "PU Sealer.pdf"
        }
    ];

    const handleDownload = (fileName: string, title: string) => {
        const downloadUrl = `${R2_BASE_URL}/${encodeURIComponent(fileName)}`;

        // Create a temporary anchor element to trigger download
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = fileName;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        console.log(`Downloading: ${title} from ${downloadUrl}`);
    };

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Brochures', url: '/brochure' },
    ]);

    return (
        <>
            <SEO
                title="Download Product Brochures - Technical Specifications | Yashwanth Colour Coatings"
                description="Download detailed PDF brochures for our industrial, automotive, and decorative coatings. Get technical specifications, application guides, and product information."
                keywords="coating brochures, paint catalog, technical specifications, product PDF, coating documentation, Chennai paint brochures"
                canonicalUrl="/brochure"
                structuredData={breadcrumbSchema}
            />
            <div className="brochure-page">
                <div className="brochure-container">
                    <div className="brochure-header">
                        <h1 className="brochure-title">Download Brochures</h1>
                        <p className="brochure-subtitle">
                            Access our comprehensive product catalogues and technical guides
                        </p>
                    </div>

                    <div className="brochure-grid">
                        {brochures.map((brochure, index) => (
                            <div key={index} className="brochure-card">
                                <div className="brochure-card__icon">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>

                                <div className="brochure-card__content">
                                    <h3 className="brochure-card__title">{brochure.title}</h3>
                                    <p className="brochure-card__description">{brochure.description}</p>
                                    <span className="brochure-card__size">PDF • {brochure.fileSize}</span>
                                </div>

                                <button
                                    className="brochure-card__button"
                                    onClick={() => handleDownload(brochure.fileName, brochure.title)}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Download</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrochurePage;

