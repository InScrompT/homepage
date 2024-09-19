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
                    <a href="https://blog.alphaman.me/" className="navbar-item">
                        Blog
                    </a>
                    <span className="navbar-item">
                        <Link href="/hire-us" className="button brand-accent-background">
                            Hire Us
                        </Link>
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
