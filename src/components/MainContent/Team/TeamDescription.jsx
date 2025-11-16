export default function TeamDescription({description}) {

return(

    <div className="row mb-5 justify-content-center">
        <div className="col-md-7 text-center">
            <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
                <h2>{description.title}</h2>
                <p>
                    {description.text}
                </p>
            </div>
        </div>
    </div>
)

}