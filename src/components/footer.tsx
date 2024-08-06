'use client'

import clsx from "clsx";
import { Zilla_Slab } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const zillaSlab = Zilla_Slab({
    subsets: ['latin'],
    weight: ['700'],
})

const Footer = () => {
    const pathname = usePathname()

    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p><span className={clsx(zillaSlab.className, 'is-italic', 'is-text-weight-bold mr-1')}>InScrompT</span> Tech (OPC) Pvt. Ltd.</p>
                <p>Managed and owned by <a href="https://alphaman.me" target="_blank" className='brand-accent-color'>Karan Sanjeev</a></p>
            </div>

            <div className="content mt-4 has-text-centered">
                <p><small>CIN: U63112TN2023OPC166309</small> | <small>GSTIN: 33AAHCI4532K1ZK</small></p>
            </div>

            <nav className="mt-4 tabs is-small is-centered">
                <ul>
                    <li className={clsx({ 'is-active': pathname === '/terms-and-conditions' })}>
                        <Link href="/terms-and-conditions">Terms and Conditions</Link>
                    </li>
                    <li className={clsx({ 'is-active': pathname === '/privacy-policy' })}>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li className={clsx({ 'is-active': pathname === '/shipping-policy' })}>
                        <Link href="/shipping-policy">Shipping Policy</Link>
                    </li>
                    <li className={clsx({ 'is-active': pathname === '/cancellation-and-refunds' })}>
                        <Link href="/cancellation-and-refunds">Cancellation and Refunds</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;
