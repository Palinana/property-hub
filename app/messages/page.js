import MessageCard from "@/components/Messages/MessageCard";
import connectDB from '@/config/database';
import Message from '@/models/Message';
import { convertToSerializeableObject } from '@/utils/convertToObject';
import { getSessionUser } from '@/utils/getSessionUser';

const MessagesPage = async () => {
    // Connect to DB on the server
    await connectDB();

    // Fetch session user on the server
    const sessionUser = await getSessionUser();
    
    // Handle case where the user is not logged in (no session)
    if (!sessionUser) {
        return (
            <section className="bg-blue-50">
                <div className="container m-auto py-24 max-w-6xl">
                    <h1 className="text-3xl font-bold">You must be logged in to view messages.</h1>
                </div>
            </section>
        );
    }

    const { userId } = sessionUser;

    // Fetch messages for the user (read and unread)
    const readMessages = await Message.find({ recipient: userId, read: true })
        .sort({ createdAt: -1 })
        .populate('sender', 'username')
        .populate('property', 'name')
        .lean();

    const unreadMessages = await Message.find({ recipient: userId, read: false })
        .sort({ createdAt: -1 })
        .populate('sender', 'username')
        .populate('property', 'name')
        .lean();

    // Combine and serialize messages
    const messages = [...unreadMessages, ...readMessages].map((messageDoc) => {
        const message = convertToSerializeableObject(messageDoc);
        message.sender = convertToSerializeableObject(messageDoc.sender);
        message.property = convertToSerializeableObject(messageDoc.property);
        return message;
    });

    return (
        <section className="bg-blue-50">
            <div className="container m-auto py-24 max-w-6xl">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <h1 className="text-3xl font-bold mb-4">Your Messages</h1>
                    <div className="space-y-4">
                        {messages.length === 0 ? (
                            <p>You have no messages</p>
                        ) : (
                            messages.map((message) => (
                                <MessageCard key={message._id} message={message} />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MessagesPage;