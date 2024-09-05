<!DOCTYPE html>
<html class="no-js" lang="en">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>We are Wildings</title>
        <link rel="stylesheet" href="css/app.css">
    </head>

    <body>

        <div class="pageTransition"></div>

        <main data-taxi>
            <div data-taxi-view>

                <?php include "menu.php"; ?>

                <header class="siteHeader <?php if (isset($invertHeader) && $invertHeader == 'true') {echo 'siteHeaderInverted';} ?>">

                    <div class="siteHeaderNotice">
                        <div class="message"><span>Summer Special!</span> Book now for 20% off!</div>
                        <button class="closeBtn">
                            <svg><use href="images/icons.svg#close-sm"/></svg>
                        </button>
                    </div>

                    <div class="siteHeaderContainer">

                        <div class="left">
                            <button class="siteMenuToggle">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                        
                        <a class="logo" href="./">
                            <svg xmlns="http://www.w3.org/2000/svg" width="164" height="26" fill="none" viewBox="0 0 164 26">
                                <path fill="currentColor" d="M13.17 5.972v.252c-.318.075-.56.205-.729.392-.168.187-.252.42-.252.7 0 .224.038.513.113.868.093.336.233.784.42 1.344l2.575 7.336-.644.672 1.989-6.076c.26-.784.448-1.465.56-2.044.13-.579.195-1.017.195-1.316 0-.504-.102-.896-.307-1.176-.206-.299-.551-.532-1.037-.7v-.252h4.369v.252c-.318.112-.617.336-.896.672-.28.336-.57.83-.869 1.484a35.878 35.878 0 0 0-1.035 2.604l-3.248 9.072h-.505l-3.695-10.36c-.262-.803-.504-1.428-.728-1.876-.206-.448-.411-.793-.616-1.036a1.649 1.649 0 0 0-.644-.56v-.252h4.983Zm-7.84 0v.252c-.523.187-.784.55-.784 1.092 0 .224.037.495.112.812.074.299.224.756.448 1.372l2.52 7.336-.672.868 3.36-8.568.447.896-4.115 10.024h-.504l-3.36-9.296a49.917 49.917 0 0 0-1.008-2.52c-.28-.635-.532-1.101-.756-1.4-.224-.299-.458-.504-.7-.616v-.252H5.33ZM26.279 20.28c-1.27 0-2.39-.308-3.36-.924-.952-.635-1.699-1.512-2.24-2.632-.523-1.139-.784-2.464-.784-3.976 0-1.4.252-2.65.756-3.752.504-1.101 1.195-1.96 2.072-2.576.877-.635 1.876-.952 2.996-.952 1.475 0 2.66.457 3.556 1.372.896.896 1.344 2.1 1.344 3.612v.644h-9.1v-.476l3.836-.112c1.027-.037 1.755-.196 2.184-.476.43-.28.644-.728.644-1.344 0-.784-.243-1.41-.728-1.876-.485-.485-1.12-.728-1.904-.728-.71 0-1.335.215-1.876.644-.541.41-.961.99-1.26 1.736-.299.747-.448 1.633-.448 2.66 0 1.325.233 2.52.7 3.584.467 1.045 1.11 1.867 1.932 2.464.821.597 1.755.896 2.8.896 1.288 0 2.324-.43 3.108-1.288l.14.084c-.485 1.157-1.092 2.016-1.82 2.576-.71.56-1.559.84-2.548.84ZM48.32 20c-.84 0-1.465-.205-1.875-.616-.392-.43-.7-1.167-.924-2.212l-1.344-6.86c-.206-1.12-.43-1.979-.672-2.576-.224-.616-.514-1.045-.868-1.288-.336-.243-.784-.364-1.344-.364-.635 0-1.13.159-1.484.476-.355.317-.579.821-.672 1.512-.094.728-.411 1.092-.952 1.092-.28 0-.504-.084-.672-.252-.168-.187-.252-.43-.252-.728 0-.523.196-.99.588-1.4.392-.41.924-.728 1.596-.952.69-.243 1.465-.364 2.324-.364 1.568 0 2.734.364 3.5 1.092.784.728 1.325 1.96 1.624 3.696l1.316 7.308c.112.653.27 1.167.476 1.54.205.373.438.588.7.644V20H48.32Zm-7.167.28c-1.307 0-2.362-.364-3.164-1.092-.784-.747-1.176-1.736-1.176-2.968 0-1.456.578-2.781 1.736-3.976 1.176-1.213 3.052-2.408 5.628-3.584l.168.364c-1.736.99-2.978 1.988-3.724 2.996a5.434 5.434 0 0 0-1.12 3.36c0 1.064.261 1.913.784 2.548.522.635 1.232.952 2.128.952.597 0 1.176-.205 1.736-.616a4.81 4.81 0 0 0 1.4-1.54l.168.084c-.467 1.157-1.083 2.025-1.848 2.604-.766.579-1.671.868-2.716.868Zm8.445-.28v-.252c.354-.075.606-.233.756-.476.15-.243.224-.616.224-1.12v-9.66c0-.653-.075-1.13-.224-1.428-.13-.299-.383-.541-.756-.728v-.252l3.444-.476.14 3.472v8.512c0 .672.112 1.167.336 1.484.224.299.644.523 1.26.672V20h-5.18Zm3.556-10.5-.168-.196c.317-1.139.756-2.035 1.316-2.688.578-.672 1.185-1.008 1.82-1.008.373 0 .662.093.868.28.224.168.336.42.336.756 0 .299-.094.541-.28.728-.168.168-.402.252-.7.252-.243 0-.458-.037-.644-.112a1.568 1.568 0 0 0-.588-.112c-.392 0-.728.15-1.008.448-.28.299-.598.85-.952 1.652Zm10.753 10.78c-1.27 0-2.39-.308-3.36-.924-.952-.635-1.698-1.512-2.24-2.632-.522-1.139-.784-2.464-.784-3.976 0-1.4.252-2.65.756-3.752.504-1.101 1.195-1.96 2.072-2.576.878-.635 1.876-.952 2.996-.952 1.475 0 2.66.457 3.556 1.372.896.896 1.344 2.1 1.344 3.612v.644h-9.1v-.476l3.836-.112c1.027-.037 1.755-.196 2.184-.476.43-.28.644-.728.644-1.344 0-.784-.242-1.41-.728-1.876-.485-.485-1.12-.728-1.904-.728-.71 0-1.334.215-1.876.644-.541.41-.961.99-1.26 1.736-.298.747-.448 1.633-.448 2.66 0 1.325.234 2.52.7 3.584.467 1.045 1.11 1.867 1.932 2.464a4.645 4.645 0 0 0 2.8.896c1.288 0 2.324-.43 3.108-1.288l.14.084c-.485 1.157-1.092 2.016-1.82 2.576-.71.56-1.558.84-2.548.84ZM86.313 5.972v.252c-.317.075-.56.205-.728.392-.168.187-.252.42-.252.7 0 .224.037.513.112.868.093.336.233.784.42 1.344l2.576 7.336-.644.672 1.988-6.076a16.62 16.62 0 0 0 .56-2.044c.13-.579.196-1.017.196-1.316 0-.504-.103-.896-.308-1.176-.205-.299-.55-.532-1.036-.7v-.252h4.368v.252c-.317.112-.616.336-.896.672s-.57.83-.868 1.484a35.924 35.924 0 0 0-1.036 2.604l-3.248 9.072h-.504l-3.696-10.36c-.261-.803-.504-1.428-.728-1.876-.205-.448-.41-.793-.616-1.036a1.648 1.648 0 0 0-.644-.56v-.252h4.984Zm-7.84 0v.252c-.523.187-.784.55-.784 1.092 0 .224.037.495.112.812.075.299.224.756.448 1.372l2.52 7.336-.672.868 3.36-8.568.448.896-4.116 10.024h-.504l-3.36-9.296a49.917 49.917 0 0 0-1.008-2.52c-.28-.635-.532-1.101-.756-1.4-.224-.299-.457-.504-.7-.616v-.252h5.012Zm15.234.112 3.584-.392v12.46c0 .504.074.877.224 1.12.168.243.42.401.755.476V20h-4.563v-.252c.354-.075.606-.233.756-.476.149-.243.224-.616.224-1.12V8.548c0-.672-.075-1.157-.224-1.456-.131-.317-.383-.57-.756-.756v-.252ZM95.779.652c.466 0 .858.159 1.175.476.318.317.477.681.477 1.092 0 .43-.16.803-.477 1.12a1.597 1.597 0 0 1-1.175.476c-.467 0-.86-.159-1.176-.476a1.532 1.532 0 0 1-.477-1.12c0-.41.16-.775.477-1.092a1.597 1.597 0 0 1 1.175-.476ZM99.837 20v-.252c.336-.075.579-.233.728-.476.168-.243.252-.616.252-1.12V3.088c0-.653-.075-1.13-.224-1.428-.131-.299-.383-.541-.756-.728V.68l3.584-.14v17.612c0 .504.075.877.224 1.12.168.243.42.401.756.476V20h-4.564Zm11.621.28c-1.194 0-2.24-.308-3.136-.924-.877-.635-1.568-1.512-2.072-2.632-.485-1.12-.728-2.436-.728-3.948 0-1.381.252-2.623.756-3.724.523-1.101 1.214-1.97 2.072-2.604a4.806 4.806 0 0 1 2.94-.98c1.008 0 1.932.252 2.772.756.859.485 1.596 1.213 2.212 2.184l-1.092 5.936c0-2.67-.345-4.713-1.036-6.132-.69-1.419-1.708-2.128-3.052-2.128-.989 0-1.782.448-2.38 1.344-.578.877-.868 2.063-.868 3.556 0 1.064.131 2.072.392 3.024.262.952.616 1.801 1.064 2.548.467.728.99 1.307 1.568 1.736.598.41 1.223.616 1.876.616.523 0 .99-.112 1.4-.336.411-.243.775-.597 1.092-1.064l.168.112a4.073 4.073 0 0 1-1.568 1.932 4.117 4.117 0 0 1-2.38.728Zm3.864-.28-.14-2.268V3.088c0-.653-.074-1.13-.224-1.428-.13-.299-.382-.541-.756-.728V.68l3.528-.14v17.024c0 .728.075 1.25.224 1.568.15.317.402.523.756.616V20h-3.388Zm5.013-13.916 3.584-.392v12.46c0 .504.075.877.224 1.12.168.243.42.401.756.476V20h-4.564v-.252c.355-.075.607-.233.756-.476.149-.243.224-.616.224-1.12V8.548c0-.672-.075-1.157-.224-1.456-.131-.317-.383-.57-.756-.756v-.252Zm2.072-5.432c.467 0 .859.159 1.176.476.317.317.476.681.476 1.092 0 .43-.159.803-.476 1.12a1.597 1.597 0 0 1-1.176.476c-.467 0-.859-.159-1.176-.476a1.534 1.534 0 0 1-.476-1.12c0-.41.159-.775.476-1.092a1.597 1.597 0 0 1 1.176-.476ZM126.55 20v-.252c.354-.075.606-.233.756-.476.149-.243.224-.616.224-1.12V8.52c0-.653-.075-1.13-.224-1.428-.131-.317-.383-.57-.756-.756v-.252l3.444-.476.14 2.744v9.8c0 .504.074.877.224 1.12.149.243.401.401.756.476V20h-4.564Zm8.596 0v-.252c.354-.075.606-.233.756-.476.149-.243.224-.616.224-1.12v-7.168c0-1.381-.262-2.408-.784-3.08-.504-.69-1.27-1.036-2.296-1.036-.542 0-1.083.159-1.624.476a4.537 4.537 0 0 0-1.428 1.26l-.084-.112c.429-.933 1.045-1.67 1.848-2.212a4.564 4.564 0 0 1 2.604-.812c1.381 0 2.454.42 3.22 1.26.765.84 1.148 2.025 1.148 3.556v7.868c0 .504.074.877.224 1.12.149.243.401.401.756.476V20h-4.564Zm11.64 5.04c-1.941 0-3.472-.29-4.592-.868-1.101-.579-1.652-1.363-1.652-2.352 0-.765.308-1.437.924-2.016.616-.597 1.447-1.017 2.492-1.26l.196.168c-.467.224-.849.588-1.148 1.092a3.238 3.238 0 0 0-.42 1.596c0 .915.383 1.643 1.148 2.184.784.56 1.829.84 3.136.84 1.325 0 2.389-.252 3.192-.756.803-.504 1.204-1.176 1.204-2.016 0-.579-.196-1.036-.588-1.372-.373-.336-.98-.55-1.82-.644l-3.948-.504c-1.12-.15-1.951-.43-2.492-.84-.541-.41-.812-.97-.812-1.68 0-.597.252-1.139.756-1.624.504-.504 1.195-.85 2.072-1.036l.14.196c-.429.168-.756.392-.98.672-.205.261-.308.532-.308.812 0 .355.159.625.476.812.317.168.896.299 1.736.392l4.032.42c1.232.15 2.147.495 2.744 1.036.616.541.924 1.288.924 2.24 0 .896-.271 1.68-.812 2.352-.541.69-1.297 1.223-2.268 1.596-.952.373-2.063.56-3.332.56Zm-.168-19.572h1.904c.485 0 .831-.075 1.036-.224.224-.15.42-.401.588-.756.149-.28.299-.476.448-.588a.82.82 0 0 1 .56-.196c.28 0 .513.084.7.252.187.168.28.392.28.672 0 .448-.215.784-.644 1.008-.411.224-1.045.336-1.904.336h-.672v.084c.952.299 1.68.793 2.184 1.484.523.672.784 1.493.784 2.464 0 .915-.224 1.717-.672 2.408-.448.672-1.064 1.204-1.848 1.596-.784.373-1.699.56-2.744.56-1.027 0-1.941-.187-2.744-.56-.784-.392-1.4-.924-1.848-1.596-.448-.69-.672-1.493-.672-2.408 0-.915.215-1.708.644-2.38a4.408 4.408 0 0 1 1.848-1.596c.803-.373 1.727-.56 2.772-.56Zm0 .56c-.821 0-1.475.355-1.96 1.064-.467.69-.7 1.661-.7 2.912 0 1.25.243 2.23.728 2.94s1.129 1.064 1.932 1.064c.541 0 1.008-.159 1.4-.476.392-.336.691-.803.896-1.4.224-.597.336-1.307.336-2.128 0-1.25-.233-2.221-.7-2.912-.467-.71-1.111-1.064-1.932-1.064Zm7.348 8.904c.635 1.568 1.381 2.753 2.24 3.556.877.803 1.885 1.204 3.024 1.204.765 0 1.363-.215 1.792-.644.448-.448.672-1.045.672-1.792 0-.653-.187-1.195-.56-1.624-.355-.448-.821-.821-1.4-1.12a28.61 28.61 0 0 0-1.848-.924 17.346 17.346 0 0 1-1.848-.98 5.335 5.335 0 0 1-1.4-1.344c-.373-.523-.56-1.176-.56-1.96 0-.747.177-1.41.532-1.988a3.615 3.615 0 0 1 1.456-1.344c.635-.336 1.372-.504 2.212-.504.485 0 .896.047 1.232.14.355.075.653.159.896.252.261.075.504.112.728.112.429 0 .709-.121.84-.364h.224l.532 4.424h-.28c-.56-1.325-1.185-2.315-1.876-2.968-.691-.672-1.465-1.008-2.324-1.008-.691 0-1.251.187-1.68.56-.411.373-.616.887-.616 1.54 0 .541.187.999.56 1.372.373.355.849.681 1.428.98.579.28 1.195.57 1.848.868.653.28 1.26.616 1.82 1.008a5.043 5.043 0 0 1 1.428 1.456c.373.579.56 1.307.56 2.184 0 1.288-.401 2.324-1.204 3.108-.803.765-1.867 1.148-3.192 1.148a8.36 8.36 0 0 1-1.624-.14c-.467-.075-.877-.15-1.232-.224a4.086 4.086 0 0 0-.868-.112c-.467 0-.793.112-.98.336h-.224l-.588-5.208h.28Z"/>
                            </svg>
                        </a>

                        <div class="right">
                            <a class="bookBtnMobile" href="#">
                                <svg><use href="images/icons.svg#calendar"/></svg>
                            </a>
                            <a class="btn btnStroke bookBtnDesktop">Book now</a>
                        </div>

                    </div>
                    
                </header>