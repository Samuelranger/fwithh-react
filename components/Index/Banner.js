import Link from 'next/link';

const Banner = () => {
    return(
        <div className="grocery-main-banner">
            <div className="grocery-banner-content">
                <h1>Designers Delivered in 1 Hour</h1>
                <p>Look Awesome on Every Items Purchased</p>
                <h2>50% OFF</h2>
                <Link href="/products?term=grocery">
                    <a className="default-btn">Shop Now</a>
                </Link>
            </div>
        </div>
    );
}

export default Banner;