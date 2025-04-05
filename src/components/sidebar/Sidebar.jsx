import React from 'react'
import VectorIcon from '../../assets/settings-window.png';

const Sidebar = ({ onClose }) => {
    const navigation = [
        {
            href: 'javascript:void(0)',
            name: 'Dashboard',
            icon: (
                <svg
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[20px] h-[20px] text-white"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                    />
                </svg>
            ),
        },
        {
            href: 'javascript:void(0)',
            name: 'Attendance',
            icon: (
                <svg
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[20px] h-[20px] text-gray-600"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
                    />
                </svg>
            ),
        },
        {
            href: 'javascript:void(0)',
            name: 'Account',
            icon: (
                <svg
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[20px] h-[20px] text-gray-600"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                </svg>
            ),
        },
        // ... keep other navigation items the same ...
    ];

    const navsFooter = [
        {
            href: 'javascript:void(0)',
            name: 'Logout',
            icon: (
                <svg
                    width="23"
                    height="23"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[23px] h-[23px] text-black"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                </svg>
            ),
        },
    ];

    return (
        <nav className="w-full h-full border-r pt-7 lg:w-[289px] bg-white">
            <div className="flex flex-col h-full">
                <div className="h-10 flex items-center px-7 relative">
                    <a href="javascript:void(0)" className="flex items-center gap-3">
                        <img
                            src={VectorIcon}
                            width={30}
                            height={400}
                            className="mx-auto"
                            alt="Vector Icon"
                        />
                        <h3 className="font-bold text-[22px] font-mon">Dashboard</h3>
                    </a>
                    {/* Mobile Close Button */}
                    <button
                        onClick={onClose}
                        className="lg:hidden absolute right-4 text-gray-600"
                    >
                        <svg
                            width="24"
                            height="24"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex-1 flex flex-col h-full overflow-auto">
                    <ul className="px-4 text-sm font-medium flex-1 pt-10">
                        {navigation.map((item, idx) => (
                            <li
                                key={idx}
                                className={`${
                                    item.name === 'Dashboard' ? 'text-[#043873]' : ''
                                } mb-5`}
                            >
                                <a
                                    href={item.href}
                                    className={`flex items-center text-[12px] gap-x-4 p-2 rounded-lg hover:bg-gray-200 active:bg-gray-200 duration-150 ${
                                        item.name === 'Dashboard' ? 'bg-[#043873] text-white text-[12px] hover:bg-green-500' : 'text-gray-600'
                                    }`}
                                >
                                    <div>{item.icon}</div>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <ul className="px-4 pb-4 text-sm font-medium">
                            {navsFooter.map((item, idx) => (
                                <li key={idx}>
                                    <a
                                        href={item.href}
                                        className="flex items-center gap-x-2 text-black text-[18px] p-2 rounded-lg hover:bg-gray-200 active:bg-gray-200 duration-150"
                                    >
                                        <div className="text-black">{item.icon}</div>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar