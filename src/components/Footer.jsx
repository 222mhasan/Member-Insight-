import bracLogo from "../images/BRAC-logo.png";

const Footer = () => {
    return (
        <footer className="mt-10 border-t border-pink-200 bg-base-200 px-3">
            <div className="flex items-center justify-center gap-4 py-5">
                <img
                    src={bracLogo}
                    alt="BRAC"
                    className="h-7 w-auto"
                />

                <p className="text-[12px] md:text-sm text-gray-500 text-center">
                    © {new Date().getFullYear()} Member Insight. All Rights Reserved by Technology, Microfinance.
                </p>

                <div className="h-5 w-px bg-gray-300"></div>



            </div>
        </footer>
    );
};

export default Footer;