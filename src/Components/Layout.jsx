import React from 'react'
import "../Components/Layout.css"
import vision from "../Image/vision.png";
import about from "../Image/about.png";
import salon from "../Image/salon.png";
import contact from "../Image/contact.png";

import { IoIosSend } from "react-icons/io";
import { NavLink } from 'react-router-dom';




const Layout = () => {
    return (
        <div className='container header'>
            <div className="row">
                <div className="col-12">
                    <h3>SNBA Consumers  </h3>
                    <p>Dashboard</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 ">
                    <ul className='menu'>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#vision">VISION</a></li>
                        <li><a href="#about">ABOUT US</a></li>
                        <li><a href="#services">SERVICES</a></li>
                        <li>BUSINESS</li>
                        <li><a href="#contact">CONTACT US</a></li>


                    </ul>

                </div>
            </div>

            <div className="row " id='Home'>
                <div className="col-12">

                    <br /><br />
                    <button>Home</button><br /><br />
                    <p>
                        Choose the best pricing for your lifestyle
                    </p>
                    <br />
                    <p style={{ color: "gray" }}>
                        (A plan for who are in extremely love with Eco Friendly System)
                    </p>
                    <br />
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                </div>
            </div><br /><br />

            <div className="row " id='vision'>
                <div className="col-12">

                    <br /><br />
                    <button>VISION</button><br /><br />

                    <br />
                    <p style={{ color: "gray" }}>
                        At SNBA, we strive to create a seamless and vibrant community where convenience, wellness, beauty, and dining meet. Our 99 Membership offers exclusive access to our Mart, Gym, Saloon, and Food Court, empowering members with quality services at unbeatable value. We aim to redefine lifestyle experiences by providing a holistic approach to health, beauty, shopping, and dining under one roof. Our vision is to be the go-to destination for those seeking convenience, quality, and a balanced life. Join us in transforming everyday living into something extraordinary.
                    </p>
                    <br />
                    <div className="vision">
                        <img src={vision} alt="img" className='img-fluid' />
                    </div>

                </div>
            </div><br /><br />

            <div className="row " id='about'>
                <div className="col-12">

                    <br /><br />
                    <button>ABOUT US</button><br /><br />
                    <br />
                    <h3>About Us</h3>
                    <br />
                    <p style={{ color: "gray" }}>
                        <b> Arana Groups</b> is a leading supermarket chain in India. We are proud to be an Indian-owned retailer, employing over 1000 team members across India. We are committed to providing our customers with good value, quality products, and exceptional customer service.
                    </p>
                    <p style={{ color: "gray" }}>
                        We are a family-owned business, and we take pride in our commitment to the communities that we serve and to the team members that make our business successful. We are committed to providing our customers with a wide variety of products, and we are constantly looking for ways to expand our product range to meet our customers' needs.
                    </p>
                    <p style={{ color: "gray" }}>
                        We are committed to providing our customers with a wide variety of products, and we are constantly looking for ways to expand our product range to meet our customers' needs.
                    </p>
                    <h3 style={{ color: "red" }}>Our Journey</h3>
                    <p style={{ color: "gray" }}>
                        Since our inception, we've grown and evolved, overcoming challenges and seizing opportunities. Our journey is a narrative of resilience, success, and a commitment to making a meaningful impact in every community we touch.
                    </p>

                    <p style={{ color: "gray" }}>
                        AARNA GROUPS IN AN INITIATIVE FOR SOCIETY IN WHICH COUNSUMER CAN PURCHASE OUALITY PRODCUTS AND SERVICES IN ONE ROOF, AT MINIMUM COST.
                    </p>
                    <br />
                    <h3 style={{ color: "red" }}>At Our Restaurant</h3>
                    <p style={{ color: "gray" }}>
                        We invite you to embark on a culinary journey that transcends the ordinary. Nestled in the heart of Raipur, Chhattisgarh, we are more than just a restaurant; we are a celebration of flavors, a haven for food enthusiasts, and a gathering place for those who appreciate the art of gastronomy.
                    </p>
                    <br />
                    <div className="vision">
                        <img src={about} alt="img" className='img-fluid' />
                    </div>


                </div>
            </div>
            <div className="row " id='services'>
                <div className="col-12">

                    <br /><br />
                    <button>SERVICES</button><br /><br />

                    <br />
                    <h3 style={{ color: "red" }}>At our Salon</h3>
                    <p style={{ color: "gray" }}>
                        We believe that beauty is not just skin deep; it's an expression of individuality and self-care. Nestled in the heart of Raipur, Chhattisgarh, we have been dedicated to providing a sanctuary for relaxation, rejuvenation, and transformative beauty experiences since 2018.
                    </p>
                    <br />
                    <div className="vision">
                        <img src={salon} alt="img" className='img-fluid' />
                    </div><br /><br />

                    <h3>Services</h3><br />
                    <h5 style={{ color: "red" }}>Grocery</h5>
                    <p style={{ color: "gray" }}>
                        We believe that beauty is not just skin deep; it's an expression of individuality and self-care. Nestled in the heart Discover a world of fresh, high-quality groceries at our Grocery Store. We take pride in offering you a wide range of products to meet all your daily needs. Shop with us and experience the joy of saving while enjoying top-notch products.
                        <br /><br />
                        <b> Exclusive Grocery Discounts <br />
                            ✂ Discount Range</b> <b style={{ color: "red" }}>: From 15% to 90%</b>

                    </p>
                    <br />
                    <h5 style={{ color: "red" }}>Food, Restaurant & Sweets</h5>
                    <p style={{ color: "gray" }}>
                        Indulge in a culinary journey with our delectable offerings in Food, Restaurant, and Sweets. Whether you're a food enthusiast or have a sweet tooth, we have something special for everyone.
                        <br /><br />
                        <b> Exclusive Discountsbr <br />
                            ✂ Discount Available:
                        </b> <b style={{ color: "red" }}>Up To 25%</b>

                    </p>
                    <br />

                    <h5 style={{ color: "red" }}>Salon Services</h5>
                    <p style={{ color: "gray" }}>
                        Pamper yourself with our luxurious Salon Services designed to enhance your beauty and well-being. At Our Salon, we offer a range of services to make you look and feel your best.
                        <br /><br />
                        <b> Exclusive Discountsbr <br />
                            ✂ Discount Available:
                        </b> <b style={{ color: "red" }}>Up To 75%</b>

                    </p>
                    <br />
                    <h5 style={{ color: "red" }}>Gym Services</h5>
                    <p style={{ color: "gray" }}>
                        Elevate your fitness journey with our comprehensive Gym Services at Our Gym. We are committed to helping you achieve your health and wellness goals through professional guidance and state-of-the-art facilities.
                        <br /><br />
                        <b> Exclusive Discountsbr <br />
                            ✂ Discount Available:
                        </b> <b style={{ color: "red" }}>Up To 75%</b>

                    </p>
                    <br />

                    <div style={{ backgroundColor: "rgb(240,240,240)" }} className="sections">
                        <h1>Aarna Mart</h1><br />
                        <div className="main">
                            <div style={{ border: " 10px solid rgb(247,180,0)" }} className="">
                                <h3 style={{ color: "rgb(247,180,0)" }}>Affordable Subscription</h3>
                                <p>Aarna Mart offers an unbeatable subscription for just ₹99/month. This low-cost membership unlocks fantastic savings, ensuring that you can shop for your essentials without straining your budget or compromising quality.</p>
                            </div>
                            <div style={{ border: " 10px solid rgb(231,106,155)" }} className="">
                                <h3 style={{ color: "rgb(231,106,155)" }}>Massive Discounts</h3>
                                <p>Enjoy discounts ranging from 10% to 90% on a wide variety of products at Aarna Mart! Our pricing strategy ensures that you save significantly on grocery bills, making shopping both smart and affordable.</p>
                            </div>
                            <div style={{ border: " 10px solid rgb(69,188,128)" }} className="">
                                <h3 style={{ color: "  rgb(69,188,128)" }}>Quality Products</h3>
                                <p>
                                    At Aarna Mart, quality is our priority. We carefully select fresh, high-quality items to meet your needs, ensuring that you receive only the best products every time you shop with us.
                                </p>
                            </div>
                            <div style={{ border: " 10px solid rgb(61,167,182)" }} className="">
                                <h3 style={{ color: "  rgb(61,167,182)" }}>Convenient Shopping</h3>
                                <p>Aarna Mart provides a seamless shopping experience with well-organized aisles, friendly staff, and quick checkout options, making it easy for you to find everything you need, whether in-store or online.</p>
                            </div>

                        </div>

                    </div>

                    <div className="sections"><br /><br />
                        <h1>Aarna Gym</h1><br />
                        <div className="main">
                            <div style={{ border: " 10px solid rgb(247,180,0)" }} className="">
                                <h3 style={{ color: "rgb(247,180,0)" }}>Affordable Subscription</h3>
                                <p>Join Aarna Gym for just ₹99/month and gain access to exceptional fitness resources! This affordable subscription empowers you to prioritize your health without overspending while reaping the benefits of our facilities.</p>
                            </div>
                            <div style={{ border: " 10px solid rgb(231,106,155)" }} className="">
                                <h3 style={{ color: "rgb(231,106,155)" }}>Huge Savings</h3>
                                <p>With a remarkable 75% off on all memberships, Aarna Gym offers incredible value! Experience top-notch fitness classes and expert training at a fraction of the regular price, making your fitness journey budget-friendly.</p>
                            </div>
                            <div style={{ border: " 10px solid rgb(69,188,128)" }} className="">
                                <h3 style={{ color: "  rgb(69,188,128)" }}>Quality Facilities</h3>
                                <p>
                                    Aarna Gym is equipped with state-of-the-art facilities and high-quality equipment. Our commitment to providing an exceptional workout environment ensures that you have everything you need to achieve your fitness goals.
                                </p>
                            </div>
                            <div style={{ border: " 10px solid rgb(61,167,182)" }} className="">
                                <h3 style={{ color: "  rgb(61,167,182)" }}>Expert Guidance</h3>
                                <p>Our knowledgeable trainers are dedicated to helping you succeed. They provide personalized workout plans and support, ensuring that you stay motivated and on track towards achieving your health and fitness objectives.</p>
                            </div>

                        </div>

                    </div>
                    <br /><br /><br /><br />

                    <div style={{ backgroundColor: "rgb(240,240,240)" }} className="sections">
                        <h1>Aarna Unisex Salon</h1><br />
                        <div className="main">
                            <div style={{ border: " 10px solid rgb(247,180,0)" }} className="">
                                <h3 style={{ color: "rgb(247,180,0)" }}>Affordable Subscription</h3>
                                <p>At Aarna Unisex Salon, our subscription is only ₹99/month. This membership offers incredible value, allowing you to access premium beauty services without breaking the bank, making self-care more accessible than ever.</p>
                            </div>
                            <div style={{ border: " 10px solid rgb(231,106,155)" }} className="">
                                <h3 style={{ color: "rgb(231,106,155)" }}>Amazing Discounts</h3>
                                <p>Enjoy a generous 75% off on all salon services! This significant discount allows you to indulge in expert haircuts, stylish makeovers, and relaxing treatments without straining your budget, ensuring you always look your best.</p>
                            </div>
                            <div style={{ border: " 10px solid rgb(69,188,128)" }} className="">
                                <h3 style={{ color: "  rgb(69,188,128)" }}>Quality Services</h3>
                                <p>
                                    We prioritize quality at Aarna Unisex Salon. Our skilled professionals use high-quality products and techniques to ensure you receive the best possible care, resulting in a fantastic salon experience every time you visit.
                                </p>
                            </div>
                            <div style={{ border: " 10px solid rgb(61,167,182)" }} className="">
                                <h3 style={{ color: "  rgb(61,167,182)" }}>Trendy Styles</h3>
                                <p>Stay updated with the latest beauty trends! Our stylists are trained in modern techniques and styles, ensuring you leave the salon looking fresh and fabulous, ready to turn heads wherever you go.</p>
                            </div>

                        </div>

                    </div>


                    <div className="sections"><br /><br />
                        <h1>Aarna Food Court</h1><br />
                        <div className="main">
                            <div style={{ border: " 10px solid rgb(247,180,0)" }} className="">
                                <h3 style={{ color: "rgb(247,180,0)" }}>Affordable Subscription</h3>
                                <p>Aarna Food Court offers an affordable subscription for just ₹99/month! This low-cost option provides access to delicious meals and exclusive offers, making dining out more economical and enjoyable for everyone.</p>
                            </div>
                            <div style={{ border: " 10px solid rgb(231,106,155)" }} className="">
                                <h3 style={{ color: "rgb(231,106,155)" }}>Delicious Discounts</h3>
                                <p>Enjoy a tasty 25% discount on all food items! This fantastic offer makes it easy to indulge in a variety of cuisines while keeping your dining budget in check, perfect for food lovers.</p>
                            </div>
                            <div style={{ border: " 10px solid rgb(69,188,128)" }} className="">
                                <h3 style={{ color: "  rgb(69,188,128)" }}>Quality Ingredients</h3>
                                <p>
                                    At Aarna Food Court, we prioritize quality. Our chefs use fresh, high-quality ingredients to create mouth-watering dishes, ensuring that every meal is not only delicious but also nutritious for our valued customers.
                                </p>
                            </div>
                            <div style={{ border: " 10px solid rgb(61,167,182)" }} className="">
                                <h3 style={{ color: "  rgb(61,167,182)" }}>Variety Of Choices</h3>
                                <p>Experience a diverse menu featuring a wide range of cuisines! Aarna Food Court caters to all taste buds, making it the perfect spot for families and friends to enjoy a delicious meal together.</p>
                            </div>

                        </div>

                    </div>
                    <br /><br />






                </div>

            </div><br /><br />

            <div style={{ backgroundColor: "rgb(240,240,240)" }} className="row">
                <div className="col-12 email">
                    <div className="">
                        <p>Join our 10,000+ subscribers and get access to the latest offers & grab the <br /> oppurtunity to save more than Rs. 2000 1</p>
                    </div>
                    <div className='input-box'>
                        <div className="">
                            <input type="text" placeholder='Enter Email' />
                        </div>
                        <div className="icon">
                            <IoIosSend />
                        </div>
                    </div>
                </div>


            </div><br /><br /><br />

            <div className="row">
                <div className="col-12 imgage">
                    <h1>Img</h1>
                </div>
            </div>
            <br /><br /><br />
            <div className="row" id='contact'>
                <div className="col-4">

                    <div className="contact">
                        <div className="">
                            <button>CONTACT US</button><br /><br /><br />
                            <p style={{ color: "rgb(144, 143, 144)" }}>
                                <span style={{ color: "black" }}> Head Office:</span> SNBA Consumers,<br />
                                Mansarowar Bhawan, NIT Roadbr <br />
                                Raipur, Chhattisgarh – 492001 <br />
                                <span style={{ color: "black", textDecoration: "underline" }}> Web:</span> www.snbaconsumers.com <br />
                                <span style={{ color: "black", textDecoration: "underline" }}> Mail:</span> info@snbaconsumers.com <br />
                                <span style={{ color: "black", textDecoration: "underline" }}> Contact:</span> +91 910 09 222 890

                            </p>

                            <button>TERMS & CONDITION</button>
                        </div>

                    </div>
                </div>
                <div className="col-8">
                    <div className="contact_img">
                        <img src={contact} alt="img" className='  img-fluid' />
                    </div>
                </div>
            </div>


            <br /><br /><br /><br />

        </div>
    )
}

export default Layout
