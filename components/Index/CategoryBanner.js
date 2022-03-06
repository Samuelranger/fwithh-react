import Link from 'next/link';

const CategoryBanner = () => {
    return(
        <div className="grocery-categories-banner-area">
            <div className="ui grid">
                <div className="four wide column">
                    <div className="single-grocery-categories-box">
                        {/* <img src="https://res.cloudinary.com/dev-empty/image/upload/v1590006640/grocery-category1.jpg" alt="category"/> */}
                        <img src="https://res.cloudinary.com/rangelinks-tech/image/upload/v1646529901/bruno-kelzer-LvySG1hvuzI-unsplash_yd8jvy.jpg" alt="category"/>

                        <div className="content">
                            <span>50% OFF</span>
                            <h3>Women Clothings</h3>
                            <Link href="/products?term=grocery">
                                <a className="default-btn">Shop Now</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="four wide column">
                    <div className="single-grocery-categories-box">
                        <img src="https://res.cloudinary.com/rangelinks-tech/image/upload/v1646529901/bruno-kelzer-LvySG1hvuzI-unsplash_yd8jvy.jpg" alt="category"/>

                        <div className="content">
                            <span>40% OFF</span>
                            <h3>Men Clothings</h3>
                            <Link href="/products?term=grocery">
                                <a className="default-btn">Shop Now</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="four wide column">
                    <div className="single-grocery-categories-box">
                        <img src="https://res.cloudinary.com/rangelinks-tech/image/upload/v1646529901/bruno-kelzer-LvySG1hvuzI-unsplash_yd8jvy.jpg" alt="category"/>

                        <div className="content">
                            <span>30% OFF</span>
                            <h3>Baby Clothings</h3>
                            <Link href="/products?term=grocery">
                                <a className="default-btn">Shop Now</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="four wide column">
                    <div className="single-grocery-categories-box">
                        <img src="https://res.cloudinary.com/rangelinks-tech/image/upload/v1646529901/bruno-kelzer-LvySG1hvuzI-unsplash_yd8jvy.jpg" alt="category"/>

                        <div className="content">
                            <span>20% OFF</span>
                            <h3>Children Wears</h3>
                            <Link href="/products?term=grocery">
                                <a className="default-btn">Shop Now</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryBanner;