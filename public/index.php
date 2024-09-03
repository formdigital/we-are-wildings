<?php $invertHeader = "true"; include "includes/header.php"; ?>

<div class="hero heroFull">
    <div class="heroMain px-1 py-5">
        <h1 class="subheading uppercase font-size-sm">Made in Lincolnshire</h1>
        <h2 class="serif uppercase font-size-4xl">Wild by Nature</h2>
    </div>
    <div class="heroFooter">
        <h3 class="subheading uppercase font-size-sm text-center">Book your stay</h3>
    </div>
    <div class="heroBg">
        <img src="https://placehold.co/1600x900">
    </div>
</div>

<div class="split">
    <div class="splitText px-1 py-4 justify-between">
        <div class="splitTextBlock">
            <h2 class="serif uppercase font-size-2xl text-block-9">Connect, unwind & discover</h2>
        </div>
        <div class="splitTextBlock">
            <div class="richtext text-block-30">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat tellus neque, vitae faucibus sapien lacinia et. Vivamus volutpat pretium urna sit amet convallis. Aliquam molestie, ipsum quis ullamcorper accumsan, sapien augue porta odio, eu tincidunt purus urna sit amet erat.</p>
            </div>
            <a class="btn" href="about.php">Explore further</a>
        </div>
    </div>
    <div class="splitMedia">
        <img src="https://placehold.co/1000x1200">
    </div>
</div>

<div class="px-1 bg-green overflow-hidden">
    <div class="pt-5 pb-4 text-center">
        <h2 class="serif uppercase font-size-2xl text-block-10">Stay with us</h2>
        <div class="richtext text-block-30">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat tellus neque, vitae faucibus sapien lacinia et.</p>
        </div>
    </div>
    <div class="accommodationCarousel">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <a class="accommodationCard" href="stayEntry.php">
                    <div class="content">
                        <div class="label btn btnSm">Sleeps 6</div>
                        <div class="title">Tawny Barn</div>
                    </div>
                    <div class="image">
                        <img src="https://placehold.co/1000x1200">
                    </div>
                </a>
            </div>
            <div class="swiper-slide">
                <a class="accommodationCard" href="stayEntry.php">
                    <div class="content">
                        <div class="label btn btnSm">Sleeps 2</div>
                        <div class="title">Shepherds Hut</div>
                    </div>
                    <div class="image">
                        <img src="https://placehold.co/1000x1200">
                    </div>
                </a>
            </div>
            <div class="swiper-slide">
                <a class="accommodationCard" href="stayEntry.php">
                    <div class="content">
                        <div class="label btn btnSm">Sleeps 6</div>
                        <div class="title">Merlin Barn</div>
                    </div>
                    <div class="image">
                        <img src="https://placehold.co/1000x1200">
                    </div>
                </a>
            </div>
            <div class="swiper-slide">
                <a class="accommodationCard" href="stayEntry.php">
                    <div class="content">
                        <div class="label btn btnSm">Sleeps 6</div>
                        <div class="title">Tawny Barn</div>
                    </div>
                    <div class="image">
                        <img src="https://placehold.co/1000x1200">
                    </div>
                </a>
            </div>
        </div>
        <div class="carouselFooter">
            <div class="nav">
                <button class="prev"><svg><use href="images/icons.svg#arrow-left"/></svg></button>
                <button class="next"><svg><use href="images/icons.svg#arrow-right"/></svg></button>
            </div>
            <div class="scrollbar"></div>
        </div>
    </div>
    <div class="py-3">
        <h3 class="subheading uppercase font-size-sm text-center">Book your stay</h3>
    </div>
</div>

<div class="px-1 overflow-hidden">
    <div class="pt-5 pb-4 text-center">
        <h2 class="subheading uppercase font-size-sm">The Latest</h2>
        <h3 class="newsCarouselFilter serif font-size-3xl uppercase">
            <button type="button" data-filter=".mix-category-news">News</button>
            <span>&</span>
            <button type="button" data-filter=".mix-category-events">Events</button>
        </h3>
    </div>
    <div class="newsCarousel">
        <div class="swiper-wrapper mix-container">
            <div class="swiper-slide mix mix-category-news">
                <a class="newsCard" href="newsEntry.php">
                    <div class="image">
                        <img src="https://picsum.photos/id/10/1000/1200">
                    </div>
                    <div class="details">
                        <div class="category">Journal</div>
                        <div class="date">11 Jul 2024</div>
                    </div>
                    <div class="title">Top 10 things to do whilst staying in Lincolnshire</div>
                </a>
            </div>
            <div class="swiper-slide mix mix-category-news">
                <a class="newsCard" href="newsEntry.php">
                    <div class="image">
                        <img src="https://picsum.photos/id/11/1000/1200">
                    </div>
                    <div class="details">
                        <div class="category">Offers</div>
                        <div class="date">07 Jul 2024</div>
                    </div>
                    <div class="title">Save now with 20% off autumn stays</div>
                </a>
            </div>
            <div class="swiper-slide mix mix-category-news">
                <a class="newsCard" href="newsEntry.php">
                    <div class="image">
                        <img src="https://picsum.photos/id/12/1000/1200">
                    </div>
                    <div class="details">
                        <div class="category">News</div>
                        <div class="date">23 Jun 2024</div>
                    </div>
                    <div class="title">Our first Shepherds Hut now available for booking</div>
                </a>
            </div>
            <div class="swiper-slide mix mix-category-news">
                <a class="newsCard" href="newsEntry.php">
                    <div class="image">
                        <img src="https://picsum.photos/id/13/1000/1200">
                    </div>
                    <div class="details">
                        <div class="category">Press</div>
                        <div class="date">02 Jun 2024</div>
                    </div>
                    <div class="title">Vogue magazine feature</div>
                </a>
            </div>
            <div class="swiper-slide mix mix-category-news">
                <a class="newsCard" href="newsEntry.php">
                    <div class="image">
                        <img src="https://picsum.photos/id/14/1000/1200">
                    </div>
                    <div class="details">
                        <div class="category">Journal</div>
                        <div class="date">14 May 2024</div>
                    </div>
                    <div class="title">Top 10 things to do whilst staying in Lincolnshire</div>
                </a>
            </div>
            <div class="swiper-slide mix mix-category-events">
                <a class="newsCard" href="newsEntry.php">
                    <div class="image">
                        <img src="https://picsum.photos/id/15/1000/1200">
                    </div>
                    <div class="details">
                        <div class="category">Events</div>
                        <div class="date">11 Jul 2024</div>
                    </div>
                    <div class="title">Event name</div>
                </a>
            </div>
            <div class="swiper-slide mix mix-category-events">
                <a class="newsCard" href="newsEntry.php">
                    <div class="image">
                        <img src="https://picsum.photos/id/16/1000/1200">
                    </div>
                    <div class="details">
                        <div class="category">Events</div>
                        <div class="date">07 Jul 2024</div>
                    </div>
                    <div class="title">Event name</div>
                </a>
            </div>
            <div class="swiper-slide mix mix-category-events">
                <a class="newsCard" href="newsEntry.php">
                    <div class="image">
                        <img src="https://picsum.photos/id/17/1000/1200">
                    </div>
                    <div class="details">
                        <div class="category">Events</div>
                        <div class="date">23 Jun 2024</div>
                    </div>
                    <div class="title">Event name</div>
                </a>
            </div>
            <div class="swiper-slide mix mix-category-events">
                <a class="newsCard" href="newsEntry.php">
                    <div class="image">
                        <img src="https://picsum.photos/id/18/1000/1200">
                    </div>
                    <div class="details">
                        <div class="category">Events</div>
                        <div class="date">02 Jun 2024</div>
                    </div>
                    <div class="title">Event name</div>
                </a>
            </div>
            <div class="swiper-slide mix mix-category-events">
                <a class="newsCard" href="newsEntry.php">
                    <div class="image">
                        <img src="https://picsum.photos/id/19/1000/1200">
                    </div>
                    <div class="details">
                        <div class="category">Events</div>
                        <div class="date">14 May 2024</div>
                    </div>
                    <div class="title">Event name</div>
                </a>
            </div>
            <div class="swiper-slide mix mix-category-events">
                <a class="newsCard" href="newsEntry.php">
                    <div class="image">
                        <img src="https://picsum.photos/id/28/1000/1200">
                    </div>
                    <div class="details">
                        <div class="category">Events</div>
                        <div class="date">14 May 2024</div>
                    </div>
                    <div class="title">Event name</div>
                </a>
            </div>
        </div>
        <div class="carouselFooter">
            <div class="nav">
                <button class="prev"><svg><use href="images/icons.svg#arrow-left"/></svg></button>
                <button class="next"><svg><use href="images/icons.svg#arrow-right"/></svg></button>
            </div>
            <div class="scrollbar"></div>
        </div>
    </div>
    <div class="pt-3 pb-4 text-center">
        <a class="btn" href="news.php">View all News & Events</a>
    </div>
</div>

<div class="px-1 text-center">
    <div class="testimonialsCarousel">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="testimonialsCarouselSlide">
                    <div class="quote">“One of the best experiences we’ve ever had. The attention to detail resounds in everything.”</div>
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
            </div>
            <div class="swiper-slide">
                <div class="testimonialsCarouselSlide">
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
            </div>
            <div class="swiper-slide">
                <div class="testimonialsCarouselSlide">
                    <div class="quote">“Aliquam molestie, ipsum quis ullamcorper accumsan, sapien augue porta odio, eu tincidunt purus urna sit amet erat.”</div>
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
        <button class="prev"><svg><use href="images/icons.svg#arrow-left"/></svg></button>
        <button class="next"><svg><use href="images/icons.svg#arrow-right"/></svg></button>
        <div class="pagination"></div>
    </div>
</div>

<div class="py-4">
    <div class="instaFeedHeader px-1">
        <h2 class="title">Follow on Instagram</h2>
        <a href="#" target="_blank">@wearewildings</a>
    </div>
    <div class="instaFeed">

    </div>
</div>

<?php include "includes/footer.php"; ?>