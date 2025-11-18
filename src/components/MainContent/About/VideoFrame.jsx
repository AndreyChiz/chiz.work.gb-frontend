
export default function VideoFrame({ videoFrame }) {
    return (
        <div className="row justify-content-center mb-4 block-img-video-1-wrap">
            <div className="col-md-12 mb-5">
                <figure className="block-img-video-1" data-aos="fade">
                    <a href={videoFrame.videoUrl} data-fancybox="" data-ratio={videoFrame.ratio}>
                        <span className="icon">
                            <span className="icon-play" />
                        </span>
                        <img src={videoFrame.img} alt={videoFrame.alt} className="img-fluid" />
                    </a>
                </figure>
            </div>
        </div>
    );
}
