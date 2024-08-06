'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()

    return (
        <nav className="navbar is-transparent">
            <div className="ml-4">
                <div className="navbar-brand">
                    {pathname !== '/' && (
                        <Link href="/" className="navbar-item">
                            Home
                        </Link>
                    )}
                    <a href="#" className="navbar-item">
                        Blog
                    </a>
                    <a href="#" className="navbar-item">
                        Portfolio
                    </a>
                    <span className="navbar-item">
                        <a className="button brand-accent-background">
                            Hire Us
                        </a>
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
