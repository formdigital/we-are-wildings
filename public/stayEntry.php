<?php $page = "stay"; $invertHeader = "true"; include "includes/header.php"; ?>

<div class="hero heroFull">
    <div class="heroMain px-1 py-5">
        <h1 class="serif uppercase font-size-4xl fadeInReveal">Tawny Barn</h1>
        <div class="tagList fadeInReveal">
            <div class="btn btnStroke btnSm btnStatic">Sleeps 6</div>
            <div class="btn btnStroke btnSm btnStatic">3 Bedrooms</div>
            <div class="btn btnStroke btnSm btnStatic">4 Beds</div>
            <div class="btn btnStroke btnSm btnStatic">2 Bathrooms</div>
            <div class="btn btnStroke btnSm btnStatic">Private outdoor wood-fired hot tub</div>
        </div>
    </div>
    <div class="heroBg">
        <img src="https://placehold.co/1600x900">
    </div>
</div>

<div class="pageNavContainer">

    <div class="pageNav pageNavSticky has-book-btn">

        <div class="pageNavDropdown">
            <div class="dropdown">
                <button class="btn btnSecondary pageNavLink" data-target="#description">Description</button>
                <button class="btn btnSecondary pageNavLink" data-target="#amenities">Amenities</button>
                <button class="btn btnSecondary pageNavLink" data-target="#gallery">Gallery</button>
                <button class="btn btnSecondary pageNavLink" data-target="#pets">Pets</button>
                <button class="btn btnSecondary pageNavLink" data-target="#floorPlan">Floor Plan</button>
                <button class="btn btnSecondary pageNavLink" data-target="#location">Location</button>
                <button class="btn btnSecondary pageNavLink" data-target="#reviews">Reviews</button>
            </div>
            <button class="toggle">
                <span class="label">Jump to section</span>
                <svg><use href="images/icons.svg#plus"/></svg>
            </button>
        </div>

        <div class="pageNavCarousel">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <button class="btn btnSm btnBare pageNavLink" data-target="#description">Description</button>
                </div>
                <div class="swiper-slide">
                    <button class="btn btnSm btnBare pageNavLink" data-target="#amenities">Amenities</button>
                </div>
                <div class="swiper-slide">
                    <button class="btn btnSm btnBare pageNavLink" data-target="#gallery">Gallery</button>
                </div>
                <div class="swiper-slide">
                    <button class="btn btnSm btnBare pageNavLink" data-target="#pets">Pets</button>
                </div>
                <div class="swiper-slide">
                    <button class="btn btnSm btnBare pageNavLink" data-target="#floorPlan">Floor Plan</button>
                </div>
                <div class="swiper-slide">
                    <button class="btn btnSm btnBare pageNavLink" data-target="#location">Location</button>
                </div>
                <div class="swiper-slide">
                    <button class="btn btnSm btnBare pageNavLink" data-target="#reviews">Reviews</button>
                </div>
            </div>
            <button class="prev"><svg><use href="images/icons.svg#circle-arrow-left"/></svg></button>
            <button class="next"><svg><use href="images/icons.svg#circle-arrow-right"/></svg></button>
        </div>

        <div class="book-btn">
            <button class="btn pageNavLink" data-target="#booking">Book now</button>
        </div>

    </div>

    <div class="px-1 py-6 overflow-hidden">
        <div class="container no-gutters">
            <div class="row justify-center">
                <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 articleMain">
                    <div class="richtext articleBody fadeInReveal" id="description">
                        <h2>Description</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis mauris nulla. Aliquam scelerisque justo at lobortis sagittis. Suspendisse finibus nec libero non facilisis. Cras faucibus molestie neque vel sodales. Nunc vulputate ligula dolor, pretium ornare nisi suscipit non. Integer vel placerat ante. Sed euismod enim nec tellus laoreet, quis sodales leo tincidunt. Suspendisse blandit efficitur nisi, eget feugiat turpis blandit id. Fusce vel ipsum id neque faucibus ultrices ac id velit. Nam faucibus laoreet tellus quis posuere. Etiam sagittis nec quam eu accumsan. Praesent in metus et odio tincidunt gravida. In a risus sollicitudin, finibus purus sit amet, pellentesque lorem. Curabitur quis tincidunt massa. Mauris cursus varius porta. Fusce metus lorem, blandit in porttitor sit amet, hendrerit quis dolor.</p>
                    </div>
                    <div class="articleBreak fadeInReveal"></div>
                    <div class="richtext articleBody fadeInReveal" id="amenities">
                        <h2>Amenities</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis mauris nulla. Aliquam scelerisque justo at lobortis sagittis. Suspendisse finibus nec libero non facilisis. Cras faucibus molestie neque vel sodales. Nunc vulputate ligula dolor, pretium ornare nisi suscipit non. Integer vel placerat ante. Sed euismod enim nec tellus laoreet, quis sodales leo tincidunt. Suspendisse blandit efficitur nisi, eget feugiat turpis blandit id. Fusce vel ipsum id neque faucibus ultrices ac id velit. Nam faucibus laoreet tellus quis posuere. Etiam sagittis nec quam eu accumsan. Praesent in metus et odio tincidunt gravida. In a risus sollicitudin, finibus purus sit amet, pellentesque lorem. Curabitur quis tincidunt massa. Mauris cursus varius porta. Fusce metus lorem, blandit in porttitor sit amet, hendrerit quis dolor.</p>
                    </div>
                </div>
                <div class="articleGalleryFull fadeInReveal" id="gallery">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="https://picsum.photos/id/12/1500/1000">
                        </div>
                        <div class="swiper-slide">
                            <img src="https://picsum.photos/id/13/1200/1200">
                        </div>
                        <div class="swiper-slide">
                            <img src="https://picsum.photos/id/14/1200/1500">
                        </div>
                        <div class="swiper-slide">
                            <img src="https://picsum.photos/id/15/1500/1200">
                        </div>
                    </div>
                    <div class="carouselFooter fadeInReveal">
                        <div class="nav">
                            <button class="prev"><svg><use href="images/icons.svg#arrow-left"/></svg></button>
                            <button class="next"><svg><use href="images/icons.svg#arrow-right"/></svg></button>
                        </div>
                        <div class="scrollbar"></div>
                    </div>
                </div>
                <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 articleMain">
                    <div class="richtext articleBody fadeInReveal" id="pets">
                        <h2>Pet Friendly</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis mauris nulla. Aliquam scelerisque justo at lobortis sagittis. Suspendisse finibus nec libero non facilisis. Cras faucibus molestie neque vel sodales. Nunc vulputate ligula dolor, pretium ornare nisi suscipit non. Integer vel placerat ante. Sed euismod enim nec tellus laoreet, quis sodales leo tincidunt. Suspendisse blandit efficitur nisi, eget feugiat turpis blandit id. Fusce vel ipsum id neque faucibus ultrices ac id velit. Nam faucibus laoreet tellus quis posuere. Etiam sagittis nec quam eu accumsan. Praesent in metus et odio tincidunt gravida. In a risus sollicitudin, finibus purus sit amet, pellentesque lorem please read our <a href="#">Dog Policy</a> for more information.</p>
                    </div>
                    <div class="articleImage fadeInReveal">
                        <img src="https://picsum.photos/id/11/1500/1000">
                    </div>
                    <div class="articleBreak fadeInReveal"></div>
                    <div class="richtext articleBody fadeInReveal" id="floorPlan">
                        <h2>Floor Plan</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis mauris nulla. Aliquam scelerisque justo at lobortis sagittis. Suspendisse finibus nec libero non facilisis. Cras faucibus molestie neque vel sodales. Nunc vulputate ligula dolor, pretium ornare nisi suscipit non. Integer vel placerat ante. Sed euismod enim nec tellus laoreet, quis sodales leo tincidunt. Suspendisse blandit efficitur nisi, eget feugiat turpis blandit id. Fusce vel ipsum id neque faucibus ultrices ac id velit. Nam faucibus laoreet tellus quis posuere. Etiam sagittis nec quam eu accumsan. Praesent in metus et odio tincidunt gravida. In a risus sollicitudin, finibus purus sit amet, pellentesque lorem. Curabitur quis tincidunt massa. Mauris cursus varius porta. Fusce metus lorem, blandit in porttitor sit amet, hendrerit quis dolor.</p>
                    </div>
                    <div class="articleImage fadeInReveal">
                        <img src="https://picsum.photos/id/11/1500/1000">
                    </div>
                    <div class="articleBreak fadeInReveal"></div>
                    <div class="richtext articleBody fadeInReveal" id="location">
                        <h2>Location</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis mauris nulla. Aliquam scelerisque justo at lobortis sagittis. Suspendisse finibus nec libero non facilisis. Cras faucibus molestie neque vel sodales. Nunc vulputate ligula dolor, pretium ornare nisi suscipit non. Integer vel placerat ante. Sed euismod enim nec tellus laoreet, quis sodales leo tincidunt. Suspendisse blandit efficitur nisi, eget feugiat turpis blandit id. Fusce vel ipsum id neque faucibus ultrices ac id velit. Nam faucibus laoreet tellus quis posuere. Etiam sagittis nec quam eu accumsan. Praesent in metus et odio tincidunt gravida. In a risus sollicitudin, finibus purus sit amet, pellentesque lorem. Curabitur quis tincidunt massa. Mauris cursus varius porta. Fusce metus lorem, blandit in porttitor sit amet, hendrerit quis dolor.</p>
                    </div>
                    <div class="articleImage fadeInReveal">
                        <img src="https://picsum.photos/id/11/1500/1000">
                    </div>
                    <div class="articleLinks fadeInReveal">
                        <a class="articleLinksItem" href="#">
                            <span class="label">Example external link</span>
                            <span class="icon"><svg><use href="images/icons.svg#external"/></svg></span>
                        </a>
                        <a class="articleLinksItem" href="#">
                            <span class="label">Example internal link</span>
                            <span class="icon"><svg><use href="images/icons.svg#arrow-right"/></svg></span>
                        </a>
                        <a class="articleLinksItem" href="#">
                            <span class="label">Example download link</span>
                            <span class="icon"><svg><use href="images/icons.svg#download"/></svg></span>
                        </a>
                    </div>
                    <div class="articleBreak fadeInReveal"></div>
                    <div class="richtext articleBody fadeInReveal" id="reviews">
                        <h2>Reviews</h2>
                    </div>
                    <div class="articleReviews fadeInReveal">
                        <div class="articleReviewsCarousel">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="quote">“Suspendisse finibus nec libero non facilisis. Cras faucibus molestie neque vel sodales. Nunc vulputate ligula dolor, pretium ornare nisi suscipit non. Integer vel placerat ante. Sed euismod enim nec tellus laoreet, quis sodales leo tincidunt. Suspendisse blandit efficitur nisi, eget feugiat turpis blandit id. Fusce vel ipsum id neque faucibus ultrices ac id velit.”</div>
                                    <div class="details">
                                        <div class="ref">The Jones Family, July 2024</div>
                                        <div class="rating">
                                            <span class="filled"></span>
                                            <span class="filled"></span>
                                            <span class="filled"></span>
                                            <span class="filled"></span>
                                            <span class="filled"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="quote">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat tellus neque, vitae faucibus sapien lacinia et.”</div>
                                    <div class="details">
                                        <div class="ref">The Button Family, August 2024</div>
                                        <div class="rating">
                                            <span class="filled"></span>
                                            <span class="filled"></span>
                                            <span class="filled"></span>
                                            <span class="filled"></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="quote">“Nunc vulputate ligula dolor, pretium ornare nisi suscipit non. Integer vel placerat ante. Sed euismod enim nec tellus laoreet, quis sodales leo tincidunt. Suspendisse blandit efficitur nisi, eget feugiat turpis blandit id.”</div>
                                    <div class="details">
                                        <div class="ref">The Smith Family, June 2024</div>
                                        <div class="rating">
                                            <span class="filled"></span>
                                            <span class="filled"></span>
                                            <span class="filled"></span>
                                            <span class="filled"></span>
                                            <span class="filled"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carouselFooter">
                            <div class="nav">
                                <button class="prev"><svg><use href="images/icons.svg#arrow-left"/></svg></button>
                                <button class="next"><svg><use href="images/icons.svg#arrow-right"/></svg></button>
                            </div>
                            <div class="articleReviewsPagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<div class="px-1 py-6 bg-green" id="booking">
    <h2 class="serif uppercase font-size-2xl text-center fadeInReveal">Book your stay</h2>
</div>

<?php include "includes/footer.php"; ?>