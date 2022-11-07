import Link from 'next/link';
import Image from 'next/image'; // funket ikke?

const Navbar = () => {
    return(
        <nav>
            <div className="logo">
            <img src= "/dice.png" alt="site logo" width={80} height={80} />
            </div> 
            <Link href="/">Hjem</Link>

            
        </nav>
    );
}

export default Navbar;
