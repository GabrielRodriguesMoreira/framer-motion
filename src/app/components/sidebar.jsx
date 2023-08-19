import { ChatBubbleIcon, BookmarkFilledIcon, Cross1Icon } from '@radix-ui/react-icons'
export default function Sidenar({ closeSidebar }) {
    const contacts = [
        {
            id: 1,
            name: "Contact 1",
            imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2Fdc%2F92%2F2f%2Fdc922f71cae4c90366baec52345f2ec7.jpg",
            status: "online", // "online", "offline", "away"
        },
        {
            id: 2,
            name: "Contact 2",
            imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2Fdc%2F92%2F2f%2Fdc922f71cae4c90366baec52345f2ec7.jpg",

            status: "offline",
        },
        {
            id: 3,
            name: "Contact 2",
            imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2Fdc%2F92%2F2f%2Fdc922f71cae4c90366baec52345f2ec7.jpg",

            status: "away",
        },
    ];
    const you = {
        id: 0,
        name: "Henry Calvin",
        imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2Fdc%2F92%2F2f%2Fdc922f71cae4c90366baec52345f2ec7.jpg",
        status: "online",
    }
    return (
        <aside className="fixed w-64 p-3 h-full right-0 top-0 bg-gradient-to-b from-yellow-300 to-yellow-500 dark:from-zinc-500 dark:to-zinc-900">
            <div className="w-full flex justify-end mb-5 ">
                <Cross1Icon onClick={closeSidebar} className='bg-white dark:bg-zinc-800 dark:text-white rounded-full p-1 h-6 w-6 cursor-pointer shadow-md' />
            </div>
            <section className='flex justify-between items-center border-b-2 pb-4 mb-4 border-yellow-700 dark:border-zinc-700'>
                <div>
                    <p className='font-medium text-lg'>{you.name}</p>
                    <p
                        className={`flex items-center space-x-1 text-md text-green-500`}
                    >
                        <BookmarkFilledIcon /> {you.status}
                    </p>
                </div>
                <img src={you.imageURL} alt="your profile pic"  className='rounded-full w-20 h-20 border-2 border-yellow-50' />
            </section>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id} className="flex justify-between mb-2 rounded-xl bg-white dark:bg-black dark:text-white shadow-md px-2 py-1">
                        <div className='flex space-x-2 items-center'>
                            <img
                                src={contact.imageURL}
                                alt={`Profile of ${contact.name}`}
                                className="w-10 h-10 rounded-full border-yellow-600 dark:border-gray-300 border-2"
                            />
                            <div>
                                <p className="font-semibold">{contact.name}</p>
                                <p
                                    className={`flex items-center space-x-1 text-sm ${contact.status === "online"
                                        ? "text-green-500"
                                        : contact.status === "offline"
                                            ? "text-gray-400"
                                            : "text-yellow-500"
                                        }`}
                                >
                                    <BookmarkFilledIcon /> {contact.status}
                                </p>
                            </div>
                        </div>
                        <button>
                            <ChatBubbleIcon />
                        </button>
                    </li>
                ))}
            </ul>
        </aside >
    );
}