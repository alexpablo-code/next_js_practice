import Link from "next/link";
const Header = () => {
    return (
        <header>
            <div>
                <div className="logo">
                    <Link href='/'>Ninja List</Link>
                </div>
                <div className="links">
                    <Link href='/about'>About</Link>
                    <Link href='/about/team'>Our Team</Link>
                    <Link href='/code/repos'>Code</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
