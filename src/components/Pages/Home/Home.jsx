import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="flex justify-end ">
                <div className="bg-[#f6f6f6] w-1/3 flex justify-evenly h-8 items-center rounded-bl-full pl-3 ">
                    <Link className="font-primary text-sm ">About</Link>
                    <Link className="font-primary text-sm">Careers</Link>
                    <Link className="font-primary text-sm">News and stories</Link>
                    <Link className="font-primary text-sm">Contact us</Link>
                </div>
            </div>
            {/* <div className="w-[200px] flex flex-col justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="-mb-14 " width="200px" viewBox="0 0 963 488" version="1.1" data-arp-injected="true">
                    <title>Artboard</title>
                    <g id="Artboard" stroke="none" >
                        <g id="Group-Copy">
                            <polyline id="Fill-3" fill="#E42313" points="538 63.9969313 474.00537 63.9969313 474.00537 0 409.996931 0 409.996931 63.9969313 346 63.9969313 346 128.00537 409.996931 128.00537 409.996931 192 474.00537 192 474.00537 128.00537 538 128.00537 538 63.9969313" />
                        </g>
                    </g>
                </svg>
                <p className="font-primary font-bold text-3xl -ml-5">DCDH</p>
            </div> */}
        </div>
    );
};

export default Home;