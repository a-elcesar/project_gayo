import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Intro from './components/Intro'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Carousel/>
        <Intro/>
        <section class="ftco-section">
          <div class="container">
            <div class="row justify-content-center mb-5 pb-3">
              <div class="col-md-7 heading-section ftco-animate text-center">
                <span class="subheading">Discover</span>
                <h2 class="mb-4">Best Coffee Sellers</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <div class="menu-entry">
                  <a href="home" class="img" style={{backgroundImage: 'url(' + 'images/menu-1.jpg' + ')'}}></a>
                  <div class="text text-center pt-4">
                    <h3><a href="home">Coffee Capuccino</a></h3>
                    <p>A small river named Duden flows by their place and supplies</p>
                    <p class="price"><span>$5.90</span></p>
                    <p><a href="home" class="btn btn-primary btn-outline-primary">Add to Cart</a></p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="menu-entry">
                  <a href="home" class="img" style={{backgroundImage: 'url(' + 'images/menu-2.jpg' + ')'}}></a>
                  <div class="text text-center pt-4">
                    <h3><a href="home">Coffee Capuccino</a></h3>
                    <p>A small river named Duden flows by their place and supplies</p>
                    <p class="price"><span>$5.90</span></p>
                    <p><a href="home" class="btn btn-primary btn-outline-primary">Add to Cart</a></p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="menu-entry">
                  <a href="home" class="img" style={{backgroundImage: 'url(' + 'images/menu-3.jpg' + ')'}}></a>
                  <div class="text text-center pt-4">
                    <h3><a href="home">Coffee Capuccino</a></h3>
                    <p>A small river named Duden flows by their place and supplies</p>
                    <p class="price"><span>$5.90</span></p>
                    <p><a href="home" class="btn btn-primary btn-outline-primary">Add to Cart</a></p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="menu-entry">
                  <a href="home" class="img" style={{backgroundImage: 'url(' + 'images/menu-4.jpg' + ')'}}></a>
                  <div class="text text-center pt-4">
                    <h3><a href="home">Coffee Capuccino</a></h3>
                    <p>A small river named Duden flows by their place and supplies</p>
                    <p class="price"><span>$5.90</span></p>
                    <p><a href="home" class="btn btn-primary btn-outline-primary">Add to Cart</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ini best seller */}
        <section class="ftco-menu">
          <div class="container">
            <div class="row justify-content-center mb-5">
              <div class="col-md-7 heading-section text-center ftco-animate">
                <span class="subheading">Discover</span>
                <h2 class="mb-4">Our Products</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
            <div class="row d-md-flex">
              <div class="col-lg-12 ftco-animate p-md-5">
                <div class="row">
                  <div class="col-md-12 nav-link-wrap mb-5">
                    <div class="nav ftco-animate nav-pills justify-content-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <a class="nav-link active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Main Dish</a>

                      <a class="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Drinks</a>

                      <a class="nav-link" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Desserts</a>
                    </div>
                  </div>
                  <div class="col-md-12 d-flex align-items-center">
                    
                    <div class="tab-content ftco-animate" id="v-pills-tabContent">

                      <div class="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">
                        <div class="row">
                          <div class="col-md-4 text-center">
                            <div class="menu-wrap">
                              <a href="home" class="menu-img img mb-4" style={{backgroundImage: 'url(' + 'images/dish-1.jpg' + ')'}}></a>
                              <div class="text">
                                <h3><a href="home">Grilled Beef</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                <p class="price"><span>$2.90</span></p>
                                <p><a href="home" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4 text-center">
                            <div class="menu-wrap">
                              <a href="home" class="menu-img img mb-4" style={{backgroundImage: 'url(' + 'images/dish-2.jpg' + ')'}}></a>
                              <div class="text">
                                <h3><a href="home">Grilled Beef</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                <p class="price"><span>$2.90</span></p>
                                <p><a href="home" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4 text-center">
                            <div class="menu-wrap">
                              <a href="home" class="menu-img img mb-4" style={{backgroundImage: 'url(' + 'images/dish-3.jpg' + ')'}}></a>
                              <div class="text">
                                <h3><a href="home">Grilled Beef</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                <p class="price"><span>$2.90</span></p>
                                <p><a href="home" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab">
                        <div class="row">
                          <div class="col-md-4 text-center">
                            <div class="menu-wrap">
                              <a href="home" class="menu-img img mb-4" style={{backgroundImage: 'url(' + 'images/drink-1.jpg' + ')'}}></a>
                              <div class="text">
                                <h3><a href="home">Lemonade Juice</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                <p class="price"><span>$2.90</span></p>
                                <p><a href="home" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4 text-center">
                            <div class="menu-wrap">
                              <a href="home" class="menu-img img mb-4" style={{backgroundImage: 'url(' + 'images/drink-2.jpg' + ')'}}></a>
                              <div class="text">
                                <h3><a href="home">Pineapple Juice</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                <p class="price"><span>$2.90</span></p>
                                <p><a href="home" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4 text-center">
                            <div class="menu-wrap">
                              <a href="home" class="menu-img img mb-4" style={{backgroundImage: 'url(' + 'images/drink-3.jpg' + ')'}}></a>
                              <div class="text">
                                <h3><a href="home">Soda Drinks</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                <p class="price"><span>$2.90</span></p>
                                <p><a href="home" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab">
                        <div class="row">
                          <div class="col-md-4 text-center">
                            <div class="menu-wrap">
                              <a href="home" class="menu-img img mb-4" style={{backgroundImage: 'url(' + 'images/dessert-1.jpg' + ')'}}></a>
                              <div class="text">
                                <h3><a href="home">Hot Cake Honey</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                <p class="price"><span>$2.90</span></p>
                                <p><a href="home" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4 text-center">
                            <div class="menu-wrap">
                              <a href="home" class="menu-img img mb-4" style={{backgroundImage: 'url(' + 'images/dessert-2.jpg' + ')'}}></a>
                              <div class="text">
                                <h3><a href="home">Hot Cake Honey</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                <p class="price"><span>$2.90</span></p>
                                <p><a href="home" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4 text-center">
                            <div class="menu-wrap">
                              <a href="home" class="menu-img img mb-4" style={{backgroundImage: 'url(' + 'images/dessert-3.jpg' + ')'}}></a>
                              <div class="text">
                                <h3><a href="home">Hot Cake Honey</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                <p class="price"><span>$2.90</span></p>
                                <p><a href="home" class="btn btn-primary btn-outline-primary">Add to cart</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ini other products */}
        <section class="ftco-counter ftco-bg-dark img" id="section-counter" style={{backgroundImage: 'url(' + 'images/bg_2.jpg' + ')'}} data-stellar-background-ratio="0.5">
          <div class="overlay"></div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-10">
                <div class="row">
                  <div class="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div class="block-18 text-center">
                      <div class="text">
                        <div class="icon"><span class="flaticon-coffee-cup"></span></div>
                        <strong class="number" data-number="100">0</strong>
                        <span>Coffee Branches</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div class="block-18 text-center">
                      <div class="text">
                        <div class="icon"><span class="flaticon-coffee-cup"></span></div>
                        <strong class="number" data-number="85">0</strong>
                        <span>Number of Awards</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div class="block-18 text-center">
                      <div class="text">
                        <div class="icon"><span class="flaticon-coffee-cup"></span></div>
                        <strong class="number" data-number="10567">0</strong>
                        <span>Happy Customer</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div class="block-18 text-center">
                      <div class="text">
                        <div class="icon"><span class="flaticon-coffee-cup"></span></div>
                        <strong class="number" data-number="900">0</strong>
                        <span>Staff</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ini milestone */}
        <section class="ftco-section ftco-services">
          <div class="container">
            <div class="row">
              <div class="col-md-4 ftco-animate">
                <div class="media d-block text-center block-6 services">
                  <div class="icon d-flex justify-content-center align-items-center mb-5">
                    <span class="flaticon-choices"></span>
                  </div>
                  <div class="media-body">
                    <h3 class="heading">Easy to Order</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>      
              </div>
              <div class="col-md-4 ftco-animate">
                <div class="media d-block text-center block-6 services">
                  <div class="icon d-flex justify-content-center align-items-center mb-5">
                    <span class="flaticon-delivery-truck"></span>
                  </div>
                  <div class="media-body">
                    <h3 class="heading">Fastest Delivery</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>      
              </div>
              <div class="col-md-4 ftco-animate">
                <div class="media d-block text-center block-6 services">
                  <div class="icon d-flex justify-content-center align-items-center mb-5">
                    <span class="flaticon-coffee-bean"></span></div>
                  <div class="media-body">
                    <h3 class="heading">Quality Coffee</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>    
              </div>
            </div>
          </div>
        </section>
        {/* ini advantages */}
        <section class="ftco-section img" id="ftco-testimony" style={{backgroundImage: 'url(' + 'images/bg_1.jpg' + ')'}}  data-stellar-background-ratio="0.5">
          <div class="overlay"></div>
          <div class="container">
            <div class="row justify-content-center mb-5">
              <div class="col-md-7 heading-section text-center ftco-animate">
                <span class="subheading">Testimony</span>
                <h2 class="mb-4">Customers Says</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
          </div>
          <div class="container-wrap">
            <div class="row d-flex no-gutters">
              <div class="col-lg align-self-sm-end ftco-animate">
                <div class="testimony">
                  <blockquote>
                      <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.&rdquo;</p>
                    </blockquote>
                    <div class="author d-flex mt-4">
                      <div class="image mr-3 align-self-center">
                        <img src="images/person_2.jpg" alt=""/>
                      </div>
                      <div class="name align-self-center">Louise Kelly <span class="position">Illustrator Designer</span></div>
                    </div>
                </div>
              </div>
              <div class="col-lg align-self-sm-end">
                <div class="testimony overlay">
                  <blockquote>
                      <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.&rdquo;</p>
                    </blockquote>
                    <div class="author d-flex mt-4">
                      <div class="image mr-3 align-self-center">
                        <img src="images/person_3.jpg" alt=""/>
                      </div>
                      <div class="name align-self-center">Louise Kelly <span class="position">Illustrator Designer</span></div>
                    </div>
                </div>
              </div>
              <div class="col-lg align-self-sm-end ftco-animate">
                <div class="testimony">
                  <blockquote>
                      <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small  line of blind text by the name. &rdquo;</p>
                    </blockquote>
                    <div class="author d-flex mt-4">
                      <div class="image mr-3 align-self-center">
                        <img src="images/person_4.jpg" alt=""/>
                      </div>
                      <div class="name align-self-center">Louise Kelly <span class="position">Illustrator Designer</span></div>
                    </div>
                </div>
              </div>
              <div class="col-lg align-self-sm-end">
                <div class="testimony overlay">
                  <blockquote>
                      <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however.&rdquo;</p>
                    </blockquote>
                    <div class="author d-flex mt-4">
                      <div class="image mr-3 align-self-center">
                        <img src="images/person_2.jpg" alt=""/>
                      </div>
                      <div class="name align-self-center">Louise Kelly <span class="position">Illustrator Designer</span></div>
                    </div>
                </div>
              </div>
              <div class="col-lg align-self-sm-end ftco-animate">
                <div class="testimony">
                  <blockquote>
                    <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small  line of blind text by the name. &rdquo;</p>
                  </blockquote>
                  <div class="author d-flex mt-4">
                    <div class="image mr-3 align-self-center">
                      <img src="images/person_3.jpg" alt=""/>
                    </div>
                    <div class="name align-self-center">Louise Kelly <span class="position">Illustrator Designer</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ini testimony */}
        <section class="ftco-appointment">
          <div class="overlay"></div>
          <div class="container-wrap">
            <div class="row no-gutters d-md-flex align-items-center">
              <div class="col-md-6 d-flex align-self-stretch">
                <div id="map"></div>
              </div>
              <div class="col-md-6 appointment ftco-animate">
                <h3 class="mb-3">Order Now</h3>
                <form action="#" class="appointment-form">
                  <div class="d-md-flex">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="First Name"/>
                    </div>
                    <div class="form-group ml-md-4">
                      <input type="text" class="form-control" placeholder="Last Name"/>
                    </div>
                  </div>
                  <div class="d-md-flex">
                    <div class="form-group">
                      <div class="input-wrap">
                        <div class="icon"><span class="ion-md-calendar"></span></div>
                        <input type="text" class="form-control appointment_date" placeholder="Date"/>
                      </div>
                    </div>
                    <div class="form-group ml-md-4">
                      <div class="input-wrap">
                        <div class="icon"><span class="ion-ios-clock"></span></div>
                        <input type="text" class="form-control appointment_time" placeholder="Time"/>
                      </div>
                    </div>
                    <div class="form-group ml-md-4">
                      <input type="text" class="form-control" placeholder="Phone"/>
                    </div>
                  </div>
                  <div class="d-md-flex">
                    <div class="form-group">
                      <textarea name="" id="" cols="30" rows="2" class="form-control" placeholder="Message"></textarea>
                    </div>
                    <div class="form-group ml-md-4">
                      <input type="submit" value="Order" class="btn btn-primary py-3 px-4"/>
                    </div>
                  </div>
                </form>
              </div>    			
            </div>
          </div>
        </section>
        {/* ini location + order */}
        <footer class="ftco-footer ftco-section img">
          <div class="overlay"></div>
          <div class="container">
            <div class="row mb-5">
              <div class="col-lg-3 col-md-6 mb-5 mb-md-5">
                <div class="ftco-footer-widget mb-4">
                  <h2 class="ftco-heading-2">About Us</h2>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                    <li class="ftco-animate"><a href="home"><span class="icon-whatsapp"></span></a></li>
                    <li class="ftco-animate"><a href="home"><span class="icon-facebook"></span></a></li>
                    <li class="ftco-animate"><a href="home"><span class="icon-instagram"></span></a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mb-5 mb-md-5">
                <div class="ftco-footer-widget mb-4">
                  <h2 class="ftco-heading-2">Recent Blog</h2>
                  <div class="block-21 mb-4 d-flex">
                    <a class="blog-img mr-4" style={{backgroundImage: 'url(' + 'images/image_1.jpg' + ')'}}></a>
                    <div class="text">
                      <h3 class="heading"><a href="home">Even the all-powerful Pointing has no control about</a></h3>
                      <div class="meta">
                        <div><a href="home"><span class="icon-calendar"></span> Sept 15, 2018</a></div>
                        <div><a href="home"><span class="icon-person"></span> Admin</a></div>
                        <div><a href="home"><span class="icon-chat"></span> 19</a></div>
                      </div>
                    </div>
                  </div>
                  <div class="block-21 mb-4 d-flex">
                    <a class="blog-img mr-4" style={{backgroundImage: 'url(' + 'images/image_2.jpg' + ')'}}></a>
                    <div class="text">
                      <h3 class="heading"><a href="home">Even the all-powerful Pointing has no control about</a></h3>
                      <div class="meta">
                        <div><a href="home"><span class="icon-calendar"></span> Sept 15, 2018</a></div>
                        <div><a href="home"><span class="icon-person"></span> Admin</a></div>
                        <div><a href="home"><span class="icon-chat"></span> 19</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 mb-5 mb-md-5">
                <div class="ftco-footer-widget mb-4 ml-md-4">
                  <h2 class="ftco-heading-2">Services</h2>
                  <ul class="list-unstyled">
                    <li><a href="home" class="py-2 d-block">Cooked</a></li>
                    <li><a href="home" class="py-2 d-block">Deliver</a></li>
                    <li><a href="home" class="py-2 d-block">Quality Foods</a></li>
                    <li><a href="home" class="py-2 d-block">Mixed</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 mb-5 mb-md-5">
                <div class="ftco-footer-widget mb-4">
                  <h2 class="ftco-heading-2">Have a Questions?</h2>
                  <div class="block-23 mb-3">
                    <ul>
                      <li><span class="icon icon-map-marker"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                      <li><a href="home"><span class="icon icon-phone"></span><span class="text">+2 392 3929 210</span></a></li>
                      <li><a href="home"><span class="icon icon-envelope"></span><span class="text">info@yourdomain.com</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 text-center">
                <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Edited by @a_elcesar | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" rel="noopener noreferrer" target="_blank">Colorlib</a> Template is licensed under CC BY 3.0.</p>
              </div>
            </div>
          </div>
        </footer>
        {/* ini footer */}
      </div>
    );
  }
}

export default App;