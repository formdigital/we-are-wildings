<div class="siteMenu bg-green text-center">
    <button class="siteMenuToggle siteMenuClose siteMenu__fadeIn">
        <svg><use href="images/icons.svg#close"/></svg>
    </button>
    <div class="siteMenuMain">
        <nav class="siteMenuNav serif uppercase">
            <ul>
                <li class="siteMenu__fadeIn"><a class="<?php if ($page == 'home') {echo 'active';} ?>" data-image="menuImageHome" href="./">Home</a></li>
                <li class="siteMenu__fadeIn"><a class="<?php if ($page == 'about') {echo 'active';} ?>" data-image="menuImageAbout" href="about.php">About</a></li>
                <li class="siteMenu__fadeIn"><a class="<?php if ($page == 'stay') {echo 'active';} ?>" data-image="menuImageStay" href="stay.php">Stay with Us</a></li>
                <li class="siteMenu__fadeIn"><a class="<?php if ($page == 'news') {echo 'active';} ?>" data-image="menuImageNews" href="news.php">News & Events</a></li>
                <li class="siteMenu__fadeIn"><a class="<?php if ($page == 'contact') {echo 'active';} ?>" data-image="menuImageContact" href="contact.php">Contact Us</a></li>
            </ul>
            <div class="siteMenu__fadeIn"><a class="btn btnStroke" href="#">Book now</a></div>
        </nav>
        <div class="siteMenuContacts font-size-sm uppercase">
            <a class="siteMenu__fadeIn" href="tel:+441446901877">+44 1446 901 877</a>
            <a class="siteMenu__fadeIn" href="mailto:info@wearewildings.co.uk">info@wearewildings.co.uk</a>
        </div>
    </div>
    <div class="siteMenuImages">
        <div class="image" id="menuImageHome">
            <img src="https://picsum.photos/id/15/1000/1200">
        </div>
        <div class="image" id="menuImageAbout">
            <img src="https://picsum.photos/id/16/1000/1200">
        </div>
        <div class="image" id="menuImageStay">
            <img src="https://picsum.photos/id/17/1000/1200">
        </div>
        <div class="image" id="menuImageNews">
            <img src="https://picsum.photos/id/18/1000/1200">
        </div>
        <div class="image" id="menuImageContact">
            <img src="https://picsum.photos/id/19/1000/1200">
        </div>
    </div>
</div>