import React from "react"
import Link from "next/link";

const Footer = () => {
    return (
        <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 flex items-center justify-between"
        style={{color:"#ffa500"}}>
            <Link href="/" className="font-bold text-xl">TASTYSWIFT</Link>
            <p>© ALL RIGHTS RESERVED.</p>
        </div>
    );
};

export default Footer;