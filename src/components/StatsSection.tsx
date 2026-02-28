import { useNavigate } from 'react-router-dom';
import './StatsSection.css';

const StatsSection = () => {
    const navigate = useNavigate();

    const stats = [
        {
            number: '1000+',
            label: 'Satisfied Clients',
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            ),
            color: '#EC4899',
            delay: '0s'
        },
        {
            number: '1500+',
            label: 'Orders Delivered',
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
            ),
            color: '#06B6D4',
            delay: '0.1s'
        },
        {
            number: '30+',
            label: 'Years of Experience',
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
            ),
            color: '#F97316',
            delay: '0.2s'
        },
        {
            number: '100+',
            label: 'Team Members',
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            ),
            color: '#10B981',
            delay: '0.3s'
        }
    ];

    const handleEnquireClick = () => {
        navigate('/contact');
        // Scroll to top of contact page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="stats-section">
            <div className="stats-container">
                <div className="stats-content">
                    <div className="stats-text">
                        <h2 className="stats-title">
                            The Best Paints, the Best <span className="gradient-text">Hands & Your Ideas</span>
                        </h2>
                        <p className="stats-description">
                            With decades of experience in the paint and coating industry, we've built a reputation
                            for excellence. Our commitment to quality and customer satisfaction has made us the
                            preferred choice for thousands of clients across various industries.
                        </p>
                        <button
                            className="stats-cta-button"
                            onClick={handleEnquireClick}
                        >
                            Enquire Now
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="stats-cards">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="stat-card"
                                style={{
                                    '--card-color': stat.color,
                                    animationDelay: stat.delay
                                } as React.CSSProperties}
                            >
                                <div className="stat-icon">
                                    {stat.icon}
                                </div>
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
