import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { getMembers } from "../services/memberService";
import Loader from "./Loader";
import NoData from "./NoData";
import MemberDetails from "./MemberDetails";
import bracLogo2 from "../images/BRAC-logo.png";

const SearchBox = () => {
    const [members, setMembers] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [member, setMember] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searching, setSearching] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadMembers = async () => {
            try {
                const data = await getMembers();
                setMembers(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadMembers();
    }, []);

    const handleSearch = () => {
        const value = keyword.trim();

        if (!value) {
            setMember(null);
            setError("Please enter NID or Birth Certificate Number.");
            return;
        }

        setSearching(true);

        setTimeout(() => {
            const found = members.find(
                (item) =>
                    String(item.nid) === value ||
                    String(item.birthCertificateNo) === value
            );

            if (found) {
                setMember(found);
                setError("");
            } else {
                setMember(null);
                setError("No member found.");
            }

            setSearching(false);
        }, 300);
    };

    return (
        <div className="min-h-screen bg-base-200 w-full flex justify-center items-start p-5">

            {/* Main Container */}
            <div className="w-full px-3 sm:px-5 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-6">

                {/* Search Card */}
                <div className=" bg-base-100 shadow-2xl rounded-2xl w-full">

                    <div className="card-body p-2 md:p-8 lg:p-10">
                        {/* Logo */}
                        <div className="flex  w-full md:w-auto">
                            <img
                                src={bracLogo2}
                                alt="BRAC Logo"
                                className="w-20 md:w-32 lg:w-36"
                            />
                        </div>

                        {/* Header */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-5">



                            {/* Title */}
                            <div className="flex-1 text-center">

                                <h1 className="text-3xl sm:text-2xl lg:text-5xl font-bold text-primary">
                                    Member Insight
                                </h1>

                                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                                    Search member using National ID or Birth Certificate Number
                                </p>

                            </div>

                            {/* Right Side */}
                            <div className="hidden md:block w-32"></div>

                        </div>

                        {/* Search Area */}

                        <div className="mt-6 lg:mt-10 w-full">

                            <div className="flex flex-col md:flex-row gap-4">

                                <input
                                    type="text"
                                    placeholder="Enter NID or Birth Certificate Number"
                                    className="
                                                w-full
                                                h-14
                                                text-base
                                                bg-transparent
                                                border-0
                                                border-b-2
                                                 border-pink-300
                                                rounded-none
                                                outline-none
                                                focus:outline-none
                                                focus:ring-0
                                                focus:border-primary
                                                px-2
                                                "
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleSearch();
                                        }
                                    }}
                                />

                                <button
                                    onClick={handleSearch}
                                    className="btn h-14 px-6 lg:px-10 rounded-lg border-0 text-white text-base font-semibold
                                        bg-gradient-to-r from-[#EC008C] via-[#E6007E] to-[#B4006B]
                                        hover:scale-105 hover:shadow-xl
                                        transition-all duration-300 ease-in-out"
                                >
                                    <FaSearch className="mr-2" />
                                    Search
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Loader */}

                {loading && (
                    <div className="mt-10">
                        <Loader />
                    </div>
                )}

                {searching && (
                    <div className="mt-10">
                        <Loader />
                    </div>
                )}

                {/* Error */}

                {!loading && error && (
                    <div className="mt-8">
                        <NoData message={error} />
                    </div>
                )}

                {/* Member Details */}

                {member && (
                    <div className="mt-8 w-full">
                        <MemberDetails member={member} />
                    </div>
                )}

            </div>

        </div>
    );
};

export default SearchBox;