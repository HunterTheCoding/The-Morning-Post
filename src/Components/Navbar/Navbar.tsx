import Marquee from "react-fast-marquee";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="div-h">
            <header>
                <h1>Your News Website</h1>
                <img src="https://via.placeholder.com/100" alt="logo" />
            </header>

            <nav>
                <a href="#">Home</a>
                <a href="#">World</a>
                <a href="#">Politics</a>
                <a href="#">Business
                    <ul>
                        <li><a href="#">business 1</a></li>
                        <li><a href="#">business 2</a></li>
                        <li><a href="#">business 3</a></li>
                    </ul>
                </a>
                <a href="#">Sports
                    <ul>
                        <li><a href="#">Football</a></li>
                        <li><a href="#">Basketball</a></li>
                        <li><a href="#">Baseball</a></li>
                    </ul>
                </a>
                <a href="#">Entertainment
                    <ul>
                        <li><a href="#">Entertainment 1</a></li>
                        <li><a href="#">Entertainment 2</a></li>
                        <li><a href="#">Entertainment 3</a></li>
                    </ul>
                </a>
                <a href="#">Technology</a>
                <a href="#">Opinion
                    <ul>
                        <li><a href="#">Opinion 1</a></li>
                        <li><a href="#">Opinion 2</a></li>
                        <li><a href="#">Opinion 3</a></li>
                    </ul>
                </a>
            </nav>
            <div className="text-black flex">
                Breaking News:
                <Marquee>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lectus nec turpis consequat
                    posuere.
                </Marquee>
            </div>
        </div>
    );
};

export default Navbar;