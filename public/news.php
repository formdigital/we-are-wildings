<?php $page = "news"; include "includes/header.php"; ?>

<div class="offsetHeader">
    <div class="px-1 pt-6 pb-4">
        <h1 class="serif font-size-3xl uppercase text-center">News & Events</h1>
    </div>
    <div class="pageNavCarousel pageNavSticky px-1 py-1">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <button class="btn btnSecondary btnSm" type="button" data-filter="all">All</button>
            </div>
            <div class="swiper-slide">
                <button class="btn btnSecondary btnSm" type="button" data-filter=".mix-category-news">News</button>
            </div>
            <div class="swiper-slide">
                <button class="btn btnSecondary btnSm" type="button" data-filter=".mix-category-press">Press</button>
            </div>
            <div class="swiper-slide">
                <button class="btn btnSecondary btnSm" type="button" data-filter=".mix-category-journal">Journal</button>
            </div>
            <div class="swiper-slide">
                <button class="btn btnSecondary btnSm" type="button" data-filter=".mix-category-events">Events</button>
            </div>
            <div class="swiper-slide">
                <button class="btn btnSecondary btnSm" type="button" data-filter=".mix-category-offers">Offers</button>
            </div>
        </div>
        <button class="prev"><svg><use href="images/icons.svg#circle-arrow-left"/></svg></button>
        <button class="next"><svg><use href="images/icons.svg#circle-arrow-right"/></svg></button>
    </div>
    <div class="px-1 pt-2 pb-5">
        <div class="newsListings mix-container">
            <div class="mix mix-category-journal">
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
            <div class="mix mix-category-offers">
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
            <div class="mix mix-category-news">
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
            <div class="mix mix-category-press">
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
            <div class="mix mix-category-journal">
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
            <div class="mix mix-category-events">
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
            <div class="mix mix-category-events">
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
            <div class="mix mix-category-events">
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
            <div class="mix mix-category-events">
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
            <div class="mix mix-category-events">
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
            <div class="mix mix-category-events">
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
        <div class="pagination pt-5">
            <a class="paginationBtn prev disabled" href="#">
                <svg><use href="images/icons.svg#arrow-left"/></svg>
            </a>
            <a class="paginationBtn active" href="#">1</a>
            <a class="paginationBtn" href="#">2</a>
            <a class="paginationBtn" href="#">3</a>
            <a class="paginationBtn" href="#">4</a>
            <a class="paginationBtn next" href="#">
                <svg><use href="images/icons.svg#arrow-right"/></svg>
            </a>
        </div>
    </div>
</div>

<div class="py-4 bt-light">
    <div class="instaFeedHeader px-1">
        <h2 class="title">Follow on Instagram</h2>
        <a href="#" target="_blank">@wearewildings</a>
    </div>
    <div class="instaFeed">

    </div>
</div>

<?php include "includes/footer.php"; ?>