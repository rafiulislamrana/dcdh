import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <div>
            {/* <div className="flex justify-end ">
                <div className="bg-[#f6f6f6] w-1/3 flex justify-evenly h-8 items-center rounded-bl-full pl-3 ">
                    <Link className="font-primary text-sm text-[#6e6e6e]">About</Link>
                    <Link className="font-primary text-sm text-[#6e6e6e]">Careers</Link>
                    <Link className="font-primary text-sm text-[#6e6e6e]">News and stories</Link>
                    <Link className="font-primary text-sm text-[#6e6e6e]">Contact us</Link>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="w-[200px] flex flex-col justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="-mb-14 " width="200px" viewBox="0 0 963 488" version="1.1" data-arp-injected="true">
                        <title>Artboard</title>
                        <g id="Artboard" stroke="none" >
                            <g id="Group-Copy">
                                <polyline id="Fill-3" fill="#E42313" points="538 63.9969313 474.00537 63.9969313 474.00537 0 409.996931 0 409.996931 63.9969313 346 63.9969313 346 128.00537 409.996931 128.00537 409.996931 192 474.00537 192 474.00537 128.00537 538 128.00537 538 63.9969313" />
                            </g>
                        </g>
                    </svg>
                    <p className="font-primary font-bold text-3xl -ml-5">DCDH</p>
                </div>
                <div className="flex gap-8 items-center">
                    <div className="flex gap-5">
                        <Link className="font-primary font-medium">About</Link>
                        <Link className="font-primary font-medium">News and stories</Link>
                        <Link className="font-primary font-medium">Careers</Link>
                        <Link className="font-primary font-medium">Contact us</Link>
                    </div>
                    <FaSearch />
                    <div>
                        <button className="btn bg-button text-white mr-3">Login / Register</button>
                    </div>
                </div>
            </div> */}


            <div className="flex">
                <div className="shadow py-2 rounded-ee-full pr-3">
                    <div className="w-[200px] flex flex-col justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="-mb-14 " width="200px" viewBox="0 0 963 488" version="1.1" data-arp-injected="true">
                            <title>Artboard</title>
                            <g id="Artboard" stroke="none" >
                                <g id="Group-Copy">
                                    <polyline id="Fill-3" fill="#E42313" points="538 63.9969313 474.00537 63.9969313 474.00537 0 409.996931 0 409.996931 63.9969313 346 63.9969313 346 128.00537 409.996931 128.00537 409.996931 192 474.00537 192 474.00537 128.00537 538 128.00537 538 63.9969313" />
                                </g>
                            </g>
                        </svg>
                        <p className="font-primary font-bold text-3xl -ml-5">DCDH</p>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="flex justify-end ">
                        <div className="bg-[#f6f6f6] max-w-fit flex justify-evenly gap-6 px-6 h-8 items-center rounded-bl-full">
                            <Link className="font-primary text-sm text-[#6e6e6e]">About</Link>
                            <Link className="font-primary text-sm text-[#6e6e6e]">Careers</Link>
                            <Link className="font-primary text-sm text-[#6e6e6e]">News and stories</Link>
                            <Link className="font-primary text-sm text-[#6e6e6e]">Contact us</Link>
                        </div>
                    </div>

                    <div className="flex gap-8 items-center justify-end mt-3">
                        <div className="flex gap-8">
                            <Link className="font-primary font-medium">About</Link>
                            <Link className="font-primary font-medium">News and stories</Link>
                            <Link className="font-primary font-medium">Careers</Link>
                            <Link className="font-primary font-medium">Contact us</Link>
                        </div>
                        <FaSearch />
                        <div>
                            <button className="btn border-button text-primary mr-3 font-primary px-5">Login / Register</button>
                            <button className="btn bg-button text-white mr-3 font-primary px-5">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Header;