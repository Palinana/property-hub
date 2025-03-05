import PropertyCard from '@/components/Property/PropertyCard';
import connectDB from '@/config/database';
import User from '@/models/User';
import { getSessionUser } from '@/utils/getSessionUser';

const SavedPropertiesPage = async () => {
    // Connect to the database on the server side
    await connectDB();

    // Get the session user data on the server
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
        throw new Error('User session is required');
    }

    const { userId } = sessionUser;

    // Query the database for the user's saved properties (bookmarks)
    const { bookmarks } = await User.findById(userId)
        .populate('bookmarks')
        .lean();

    return (
        <section className='px-4 py-6'>
            <div className='container-xl lg:container m-auto px-4 py-6'>
                <h1 className='text-2xl mb-4'>Saved Properties</h1>
                {bookmarks.length === 0 ? (
                    <p>No saved properties</p>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {bookmarks.map((property) => (
                            <PropertyCard key={property._id} property={property} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default SavedPropertiesPage;
