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
            <div class="backdrop"></div>
            <div class="dropdown">
                <div class="dropdown-container">
                    <button class="btn btnSecondary pageNavLink" data-target="description">Description</button>
                    <button class="btn btnSecondary pageNavLink" data-target="amenities">Amenities</button>
                    <button class="btn btnSecondary pageNavLink" data-target="gallery">Gallery</button>
                    <button class="btn btnSecondary pageNavLink" data-target="pets">Pets</button>
                    <button class="btn btnSecondary pageNavLink" data-target="floorPlan">Floor Plan</button>
                    <button class="btn btnSecondary pageNavLink" data-target="location">Location</button>
                    <button class="btn btnSecondary pageNavLink" data-target="reviews">Reviews</button>
                </div>
            </div>
            <button class="toggle">
                <span class="label">Jump to section</span>
                <svg><use href="images/icons.svg#plus"/></svg>
            </button>
        </div>

        <div class="pageNavCarousel">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <button class="btn btnSm btnBare pageNavLink" data-target="description">Description</button>
                </div>
                <div class="swiper-slide">
                    <button class="btn btnSm btnBare pageNavLink" data-target="amenities">Amenities</button>
                </div>
                <div class="swiper-slide">
                    <button class="btn btnSm btnBare pageNavLink" data-target="gallery">Gallery</button>
                </div>
                <div class="swiper-slide">
                    <button class="btn btnSm btnBare pageNavLink" data-target="pets">Pets</button>
                </div>
                <div class="swiper-slide">
                    <button class="btn btnSm btnBare pageNavLink" data-target="floorPlan">Floor Plan</button>
                </div>
                <div class="swiper-slide">
                    <button class="btn btnSm btnBare pageNavLink" data-target="location">Location</button>
                </div>
                <div class="swiper-slide">
                    <button class="btn btnSm btnBare pageNavLink" data-target="reviews">Reviews</button>
                </div>
            </div>
            <button class="prev"><svg><use href="images/icons.svg#circle-arrow-left"/></svg></button>
            <button class="next"><svg><use href="images/icons.svg#circle-arrow-right"/></svg></button>
        </div>

        <div class="book-btn">
            <button class="btn pageNavLink" data-target="booking">Book now</button>
        </div>

    </div>

    <div class="px-1 py-5 overflow-hidden">
        <div class="container no-gutters">
            <div class="row justify-center">
                <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 articleMain">
                    <div class="richtext articleBody fadeInReveal pageNavTarget" id="description">
                        <h2>Description</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis mauris nulla. Aliquam scelerisque justo at lobortis sagittis. Suspendisse finibus nec libero non facilisis. Cras faucibus molestie neque vel sodales. Nunc vulputate ligula dolor, pretium ornare nisi suscipit non. Integer vel placerat ante. Sed euismod enim nec tellus laoreet, quis sodales leo tincidunt. Suspendisse blandit efficitur nisi, eget feugiat turpis blandit id. Fusce vel ipsum id neque faucibus ultrices ac id velit. Nam faucibus laoreet tellus quis posuere. Etiam sagittis nec quam eu accumsan. Praesent in metus et odio tincidunt gravida. In a risus sollicitudin, finibus purus sit amet, pellentesque lorem. Curabitur quis tincidunt massa. Mauris cursus varius porta. Fusce metus lorem, blandit in porttitor sit amet, hendrerit quis dolor.</p>
                    </div>
                    <div class="articleBreak fadeInReveal"></div>
                    <div class="richtext articleBody fadeInReveal pageNavTarget" id="amenities">
                        <h2>Amenities</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis mauris nulla. Aliquam scelerisque justo at lobortis sagittis. Suspendisse finibus nec libero non facilisis. Cras faucibus molestie neque vel sodales. Nunc vulputate ligula dolor, pretium ornare nisi suscipit non. Integer vel placerat ante. Sed euismod enim nec tellus laoreet, quis sodales leo tincidunt. Suspendisse blandit efficitur nisi, eget feugiat turpis blandit id. Fusce vel ipsum id neque faucibus ultrices ac id velit. Nam faucibus laoreet tellus quis posuere. Etiam sagittis nec quam eu accumsan. Praesent in metus et odio tincidunt gravida. In a risus sollicitudin, finibus purus sit amet, pellentesque lorem. Curabitur quis tincidunt massa. Mauris cursus varius porta. Fusce metus lorem, blandit in porttitor sit amet, hendrerit quis dolor.</p>
                    </div>
                    <div class="amenitiesList">
                        <div class="amenitiesListCollapse">
                            <div class="amenitiesListContainer">
                                <div class="amenitiesListItem">
                                    <div class="icon">
                                        <svg><use href="images/icons.svg#amenities-sleeps"/></svg>
                                    </div>
                                    <div class="text">Sleeps 6</div>
                                </div>
                                <div class="amenitiesListItem">
                                    <div class="icon">
                                        <svg><use href="images/icons.svg#amenities-bed"/></svg>
                                    </div>
                                    <div class="text">3 Beds</div>
                                </div>
                                <div class="amenitiesListItem">
                                    <div class="icon">
                                        <svg><use href="images/icons.svg#amenities-house"/></svg>
                                    </div>
                                    <div class="text">Single Floor Dwelling</div>
                                </div>
                                <div class="amenitiesListItem">
                                    <div class="icon">
                                        <svg><use href="images/icons.svg#amenities-bed"/></svg>
                                    </div>
                                    <div class="text">1 x Super King Master with Ensuite Shower Room</div>
                                </div>
                                <div class="amenitiesListItem">
                                    <div class="icon">
                                        <svg><use href="images/icons.svg#amenities-bed"/></svg>
                                    </div>
                                    <div class="text">1 x Super King Zip and Link</div>
                                </div>
                                <div class="amenitiesListItem">
                                    <div class="icon">
                                        <svg><use href="images/icons.svg#amenities-bed"/></svg>
                                    </div>
                                    <div class="text">1 x Bunkroom Sleeping 2 (bunk beds for all ages)</div>
                                </div>
                                <div class="amenitiesListItem">
                                    <div class="icon">
                                        <svg><use href="images/icons.svg#amenities-bathroom"/></svg>
                                    </div>
                                    <div class="text">1 x main bathroom (with bath)</div>
                                </div>
                                <div class="amenitiesListItem">
                                    <div class="icon">
                                        <svg><use href="images/icons.svg#amenities-pets"/></svg>
                                    </div>
                                    <div class="text">We welcome up to 2 well behaved dog (additional fee applies)</div>
                                </div>
                                <div class="amenitiesListItem">
                                    <div class="icon">
                                        <svg><use href="images/icons.svg#amenities-hot-tub"/></svg>
                                    </div>
                                    <div class="text">Hot Tub</div>
                                </div>
                                <div class="amenitiesListItem">
                                    <div class="icon">
                                        <svg><use href="images/icons.svg#amenities-dining"/></svg>
                                    </div>
                                    <div class="text">Open plan lounge/kitchen/diner</div>
                                </div>
                                <div class="amenitiesListItem">
                                    <div class="icon">
                                        <svg><use href="images/icons.svg#amenities-kitchen"/></svg>
                                    </div>
                                    <div class="text">Fully equipped kitchen (including Nespresso machine, dishwasher and washing machine)</div>
                                </div>
                                <div class="amenitiesListItem">
                                    <div class="icon">
                                        <svg><use href="images/icons.svg#amenities-outdoor-dining"/></svg>
                                    </div>
                                    <div class="text">Outdoor eating area</div>
                                </div>
                                <div class="amenitiesListItem">
                                    <div class="icon">
                                        <svg><use href="images/icons.svg#amenities-wifi"/></svg>
                                    </div>
                                    <div class="text">Wi-Fi</div>
                                </div>
                                <div class="amenitiesListItem">
                                    <div class="icon">
                                        <svg><use href="images/icons.svg#amenities-gift"/></svg>
                                    </div>
                                    <div class="text">Welcome Basket</div>
                                </div>
                                <div class="amenitiesListItem">
                                    <div class="icon">
                                        <svg><use href="images/icons.svg#amenities-ev-charging"/></svg>
                                    </div>
                                    <div class="text">Electric car charge points</div>
                                </div>
                                <div class="amenitiesListItem">
                                    <div class="icon">
                                        <svg><use href="images/icons.svg#amenities-radio"/></svg>
                                    </div>
                                    <div class="text">Roberts Radio</div>
                                </div>
                                <div class="amenitiesListItem">
                                    <div class="icon">
                                        <svg><use href="images/icons.svg#amenities-tv"/></svg>
                                    </div>
                                    <div class="text">Smart TVs</div>
                                </div>
                                <div class="amenitiesListItem">
                                    <div class="icon">
                                        <svg><use href="images/icons.svg#amenities-hairdryer"/></svg>
                                    </div>
                                    <div class="text">Hairdryer</div>
                                </div>
                                <div class="amenitiesListItem">
                                    <div class="icon">
                                        <svg><use href="images/icons.svg#amenities-wheelchair"/></svg>
                                    </div>
                                    <div class="text">Wheelchair accessible</div>
                                </div>
                            </div>
                        </div>
                        <button class="amenitiesListBtn btn btnSm btnStroke">
                            <span class="label">View more</span>
                            <svg><use href="images/icons.svg#dropdown-arrow"/></svg>
                        </button>
                    </div>
                </div>
                <div class="articleGalleryFull fadeInReveal pageNavTarget" id="gallery">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <a href="https://picsum.photos/id/12/1500/1000" data-fancybox="gallery">
                                <img src="https://picsum.photos/id/12/1500/1000">
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="https://picsum.photos/id/13/1200/1200" data-fancybox="gallery">
                                <img src="https://picsum.photos/id/13/1200/1200">
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="https://picsum.photos/id/14/1200/1500" data-fancybox="gallery">
                                <img src="https://picsum.photos/id/14/1200/1500">
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a href="https://picsum.photos/id/15/1500/1200" data-fancybox="gallery">
                                <img src="https://picsum.photos/id/15/1500/1200">
                            </a>
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
                    <div class="richtext articleBody fadeInReveal pageNavTarget" id="pets">
                        <h2>Pet Friendly</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis mauris nulla. Aliquam scelerisque justo at lobortis sagittis. Suspendisse finibus nec libero non facilisis. Cras faucibus molestie neque vel sodales. Nunc vulputate ligula dolor, pretium ornare nisi suscipit non. Integer vel placerat ante. Sed euismod enim nec tellus laoreet, quis sodales leo tincidunt. Suspendisse blandit efficitur nisi, eget feugiat turpis blandit id. Fusce vel ipsum id neque faucibus ultrices ac id velit. Nam faucibus laoreet tellus quis posuere. Etiam sagittis nec quam eu accumsan. Praesent in metus et odio tincidunt gravida. In a risus sollicitudin, finibus purus sit amet, pellentesque lorem please read our <a href="#">Dog Policy</a> for more information.</p>
                    </div>
                    <div class="articleImage fadeInReveal">
                        <img src="https://picsum.photos/id/11/1500/1000">
                    </div>
                    <div class="articleBreak fadeInReveal"></div>
                    <div class="richtext articleBody fadeInReveal pageNavTarget" id="floorPlan">
                        <h2>Floor Plan</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis mauris nulla. Aliquam scelerisque justo at lobortis sagittis. Suspendisse finibus nec libero non facilisis. Cras faucibus molestie neque vel sodales. Nunc vulputate ligula dolor, pretium ornare nisi suscipit non. Integer vel placerat ante. Sed euismod enim nec tellus laoreet, quis sodales leo tincidunt. Suspendisse blandit efficitur nisi, eget feugiat turpis blandit id. Fusce vel ipsum id neque faucibus ultrices ac id velit. Nam faucibus laoreet tellus quis posuere. Etiam sagittis nec quam eu accumsan. Praesent in metus et odio tincidunt gravida. In a risus sollicitudin, finibus purus sit amet, pellentesque lorem. Curabitur quis tincidunt massa. Mauris cursus varius porta. Fusce metus lorem, blandit in porttitor sit amet, hendrerit quis dolor.</p>
                    </div>
                    <div class="articleImage fadeInReveal">
                        <img src="https://picsum.photos/id/11/1500/1000">
                    </div>
                    <div class="articleBreak fadeInReveal"></div>
                    <div class="richtext articleBody fadeInReveal pageNavTarget" id="location">
                        <h2>Location</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis mauris nulla. Aliquam scelerisque justo at lobortis sagittis. Suspendisse finibus nec libero non facilisis. Cras faucibus molestie neque vel sodales. Nunc vulputate ligula dolor, pretium ornare nisi suscipit non. Integer vel placerat ante. Sed euismod enim nec tellus laoreet, quis sodales leo tincidunt. Suspendisse blandit efficitur nisi, eget feugiat turpis blandit id. Fusce vel ipsum id neque faucibus ultrices ac id velit. Nam faucibus laoreet tellus quis posuere. Etiam sagittis nec quam eu accumsan. Praesent in metus et odio tincidunt gravida. In a risus sollicitudin, finibus purus sit amet, pellentesque lorem. Curabitur quis tincidunt massa. Mauris cursus varius porta. Fusce metus lorem, blandit in porttitor sit amet, hendrerit quis dolor.</p>
                    </div>
                    <div class="articleMap fadeInReveal">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.3776474029232!2d-4.249687722422004!3d55.856113973122696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48884554df7c8dbd%3A0xcd2765787951a903!2sForm%20Digital!5e0!3m2!1sen!2suk!4v1725614154360!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                    <div class="richtext articleBody fadeInReveal pageNavTarget" id="reviews">
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

<div class="px-1 py-4 bg-green pageNavTarget" id="booking">
    <div class="container no-gutters text-center">
        <div class="row justify-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                <h2 class="serif uppercase font-size-2xl fadeInReveal">Book your stay</h2>
                <div class="supercontrolEmbed" data-calendar-key="3BA6D7EE6151C45EDA3D810D9EAA58A9A72C66C4F09702F7A149ED9053FC93F6922459BA9B30FC00548DD35FB666361DACE2502BE0AAA26D"
                    data-calendar-widescreen-months="2"
                    data-calendar-property-id="580474"
                    data-calendar-departure-picker="true">
                    Your widget will appear here.
                </div>
                <script src="https://secure.supercontrol.co.uk/components/embed.js"></script>
            </div>
        </div>
    </div>
</div>

<?php include "includes/footer.php"; ?>