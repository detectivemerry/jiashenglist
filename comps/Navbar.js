import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
    <nav>
        <div className = "logo">
            {/* <img src= "/24A02226.jpg" /> */}
            <Image src = "/24A02226.jpg" width = {128} height = {77}/>
        </div>
        <Link href ="/"><a>Home</a></Link>
        <Link href ="/about"><a>About</a></Link>
        <Link href ="/jiashengs"><a>Jiasheng Listing</a></Link>    
        
    </nav> );
}
 
export default Navbar;