import React, { Component } from 'react'
class Carousel extends Component {
    render() {
        return (
            <section class="home-slider owl-carousel">
                <div class="slider-item" style={{ backgroundImage: 'url(' + 'images/bg_1.jpg' + ')' }}>
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
                            <div class="col-md-8 col-sm-12 text-center ftco-animate">
                                <span class="subheading">Welcome</span>
                                <h1 class="mb-4">The Best Coffee Testing Experience</h1>
                                <p class="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <p><a href="order" class="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a> <a href="view" class="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="slider-item" style={{ backgroundImage: 'url(' + 'images/bg_2.jpg' + ')' }}>
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
                            <div class="col-md-8 col-sm-12 text-center ftco-animate">
                                <span class="subheading">Welcome</span>
                                <h1 class="mb-4">Amazing Taste &amp; Beautiful Place</h1>
                                <p class="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <p><a href="order" class="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a> <a href="view" class="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="slider-item" style={{ backgroundImage: 'url(' + 'images/about.jpg' + ')' }}>
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
                            <div class="col-md-8 col-sm-12 text-center ftco-animate">
                                <span class="subheading">Welcome</span>
                                <h1 class="mb-4">Creamy Hot and Ready to Serve</h1>
                                <p class="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <p><a href="order" class="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a> <a href="view" class="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Carousel