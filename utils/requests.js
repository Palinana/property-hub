// for deployment, to not throw an error
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all properties
async function fetchProperties({ showFeatured = false } = {} ) {
    try {
        // Handle the case where the domain is not available yet
        if (!apiDomain) {
            return [];
        }

        res.setHeader('Cache-Control', 'no-store');

        const res = await fetch(`${apiDomain}/properties${showFeatured ? '/featured' : ''}`);

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    } catch (error) {
        console.log(error);
        return [];
    }
}

// Fetch single property
async function fetchProperty(id) {
    try {
        // Handle the case where the domain is not available yet
        if (!apiDomain) {
            return null;
        }

        const res = await fetch(`${apiDomain}/properties/${id}`);

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        return res.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}

export { fetchProperties, fetchProperty };
