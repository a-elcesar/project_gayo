import React, { Component } from 'react'
class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div class="container">
                    {/* <a class="navbar-brand" href="index.html">Gayo<small>Coffee</small></a> */}
                    <img src='images/logo_transparent.png' width='70' alt='' />
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="oi oi-menu"></span> Menu
                    </button>
                    <div class="collapse navbar-collapse" id="ftco-nav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active"><a href="arabica" class="nav-link"><strong>Arabica</strong></a></li>
                            <li class="nav-item"><a href="robusta" class="nav-link"><strong>Robusta</strong></a></li>
                            <li class="nav-item"><a href="luwak" class="nav-link"><strong>Luwak</strong></a></li>
                            <li class="nav-item"><a href="blog" class="nav-link"><strong>Gayo 101</strong></a></li>
                            <li class="nav-item"><a href="about" class="nav-link"><strong>About</strong></a></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="room" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><strong>Shop</strong></a>
                                <div class="dropdown-menu" aria-labelledby="dropdown04">
                                    <a class="dropdown-item" href="arabica">Arabica</a>
                                    <a class="dropdown-item" href="robusta">Robusta</a>
                                    <a class="dropdown-item" href="luwak">Luwak</a>
                                    <a class="dropdown-item" href="checkout">Checkout</a>
                                </div>
                            </li>
                            <li class="nav-item"><a href="contact" class="nav-link"><strong>Contact</strong></a></li>
                            <li class="nav-item cart"><a href="cart" class="nav-link"><span class="icon icon-shopping_cart"></span><span class="bag d-flex justify-content-center align-items-center"><small>1</small></span></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar