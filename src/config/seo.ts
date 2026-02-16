export const getSiteUrl = (): string => {
    if (typeof window !== 'undefined') {
        return window.location.origin;
    }
    return '';
};

export const getCanonicalUrl = (path: string): string => {
    const siteUrl = getSiteUrl();
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${siteUrl}${cleanPath}`;
};
