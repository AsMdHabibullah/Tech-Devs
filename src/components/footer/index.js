import React from 'react';

const FooterComponent = () => {
    return (
        <section class="footer">
            <footer class="container footer-text">
                <div class="row">
                    <div class="col-xl-3 col-md-3 col-sm-12">
                        <div class="footer-text">
                            <a href="/">
                                <img src="/assets/images/logo.png" alt="logo" />
                            </a><p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation.</p>
                            <div class="social-icons">
                                <a href="/" class="btn btn-social btn-social-o twitter">
                                    <i class="fa fa-twitter" aria-hidden="true" />
                                </a>
                                <a href="/" class="btn btn-social btn-social-o linkedin">
                                    <i class="fa fa-linkedin" aria-hidden="true" />
                                </a>
                                <a href="/" class="btn btn-social btn-social-o facebook">
                                    <i class="fa fa-facebook-f" aria-hidden="true" />
                                </a>
                                <a href="/" class="btn btn-social btn-social-o skype">
                                    <i class="fa fa-skype" aria-hidden="true" />
                                </a>
                                <a href="/" class="btn btn-social btn-social-o pinterest">
                                    <i class="fa fa-pinterest-p" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-2 col-md-2 col-sm-12">
                        <div class="links">
                            <h3>Links</h3>
                            <ul class="">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/">About Us</a>
                                </li>
                                <li>
                                    <a href="/">Services</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-3 col-sm-12">
                        <div class="location">
                            <h3>Location</h3>
                            <ul>
                                <li>Excepteur sint occaecat cupidat non proident sunt.</li>
                                <li>
                                    <i class="fa fa-home" aria-hidden="true">
                                        1201 Park Street, Fifth Avenue
                                        </i>
                                </li>
                                <li>
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                    <a href="/">[88] 657 524 332</a>
                                </li>
                                <li>
                                    <i class="fa fa-fax" aria-hidden="true">
                                    </i>
                                    <a href="/">[837] 6340 23092 23</a>
                                </li>
                                <li>
                                    <i class="fa fa-envelope" aria-hidden="true">
                                    </i>
                                    <a href="mailto.html"> info@example.com </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="sidebar-wrapper">
                            <div class="single-sidebar">
                                <div class="wedgit-title">
                                    <h3>Popular Post</h3>
                                </div>
                                <ul class="popular-post">
                                    <li>
                                        <div class="img-holder">
                                            <img src="images/blog/sidebar/popular-post-1.png" alt="Awesome-Img" />
                                            <div class="overlay-style-one">
                                                <div class="box">
                                                    <div class="content">
                                                        <a href="/">
                                                            <i class="fa fa-link" aria-hidden="true">
                                                            </i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="title-holder">
                                            <a href="/">
                                                <h5 class="post-title">11 Things You Need to Know About Bitcoin – Bare Facts</h5>
                                            </a>
                                            <h6 class="post-date">December 14, 2017</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="img-holder">
                                            <img src="images/blog/sidebar/popular-post-2.png" alt="Awesome-Imag" />
                                            <div class="overlay-style-one">
                                                <div class="box">
                                                    <div class="content">
                                                        <a href="/">
                                                            <i class="fa fa-link" aria-hidden="true">
                                                            </i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="title-holder">
                                            <a href="/">
                                                <h5 class="post-title">What Comes After the Crypto Concurrency Bubble?</h5>
                                            </a>
                                            <h6 class="post-date">December 13, 2017</h6>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="copyright">
                    <hr />
                    <div class="row justify-content-center">
                        <div class="col-sm-12">
                            <div class="copyRight_text text-center">
                                <p> &copy; 2019 <a href="/">Tech-Team.</a>  All Right Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};


export default FooterComponent;
