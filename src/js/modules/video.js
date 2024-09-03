export function Videos() {
    
    // Custom Vimeo/Youtube play buttons
    const articleVideos = document.querySelectorAll('.articleVideo')

    articleVideos.forEach(articleVideo => {
        const cover = articleVideo.querySelector(".cover")

        if (articleVideo.querySelector("iframe")) {
            const iframe = articleVideo.querySelector("iframe")
            const iframeUrl = iframe.src
            cover.addEventListener('click', () => {
                iframe.src = iframeUrl + '?autoplay=1'
                cover.classList.add('hidden')
            })
        } else if (articleVideo.querySelector("video")) {
            const video = articleVideo.querySelector("video")
            cover.addEventListener('click', () => {
                video.play()
                cover.classList.add('hidden')
            })
        }
    })

    // Autoplay videos on page enter
    const vids = document.querySelectorAll("video")
    vids.forEach(vid => {
        var playPromise = vid.play()
        if (playPromise !== undefined) {
            playPromise.then(_ => {}).catch(error => {})
        }
    })
}