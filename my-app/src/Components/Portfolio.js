function Portfolio() {
    return(
        <div className="portfolio" id="portfolio">
            <div className="content-inner">
                <div className="content-header">
                    <h2>Portfolio</h2>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".web-des">Design</li>
                            <li data-filter=".web-dev">Development</li>
                            <li data-filter=".dig-mar">Marketing</li>
                        </ul>
                    </div> 
                </div>
                <div className="row portfolio-container">
                    <div className="col-lg-4 col-md-6 portfolio-item web-des">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="img/portfolio-1.jpg" className="img-fluid" alt="" />
                                    <a href="img/portfolio-1.jpg" data-lightbox="portfolio" data-title="Project Name" className="link-preview" title="Preview"><i className="fa fa-eye"></i></a>
                                    <a href="#" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                    <a className="portfolio-title" href="#">Project Name <span>Web Design</span></a>
                            </figure>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item web-des">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="img/portfolio-2.jpg" className="img-fluid" alt="" />
                                    <a href="img/portfolio-2.jpg" className="link-preview" data-lightbox="portfolio" data-title="Project Name" title="Preview"><i className="fa fa-eye"></i></a>
                                    <a href="#" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                    <a className="portfolio-title" href="#">Project Name <span>Web Design</span></a>
                            </figure>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item web-dev">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="img/portfolio-3.jpg" className="img-fluid" alt="" />
                                    <a href="img/portfolio-3.jpg" className="link-preview" data-lightbox="portfolio" data-title="Project Name" title="Preview"><i className="fa fa-eye"></i></a>
                                    <a href="#" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                    <a className="portfolio-title" href="#">Project Name <span>Web Development</span></a>
                            </figure>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item web-dev">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="img/portfolio-4.jpg" className="img-fluid" alt="" />
                                    <a href="img/portfolio-4.jpg" className="link-preview" data-lightbox="portfolio" data-title="Project Name" title="Preview"><i className="fa fa-eye"></i></a>
                                    <a href="#" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                    <a className="portfolio-title" href="#">Project Name <span>Web Development</span></a>
                            </figure>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item dig-mar">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="img/portfolio-5.jpg" className="img-fluid" alt="" />
                                    <a href="img/portfolio-5.jpg" className="link-preview" data-lightbox="portfolio" data-title="Project Name" title="Preview"><i className="fa fa-eye"></i></a>
                                    <a href="#" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                    <a className="portfolio-title" href="#">Project Name <span>Digital Marketing</span></a>
                            </figure>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item dig-mar">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="img/portfolio-6.jpg" className="img-fluid" alt="" />
                                    <a href="img/portfolio-6.jpg" className="link-preview" data-lightbox="portfolio" data-title="Project Name" title="Preview"><i className="fa fa-eye"></i></a>
                                    <a href="#" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                    <a className="portfolio-title" href="#">Project Name <span>Digital Marketing</span></a>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;