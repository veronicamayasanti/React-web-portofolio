function About(){
    return (
        <div className="about" id="about">
            <div className="content-header">
                <h2>About Me</h2>
            </div>

            <div className="row align-items-center">
                <div className="col-md-6 col-lg-5">
                    <img src="img/about.jpg" alt="Image" />
                </div>
                <div className="col-md-6 col-lg-7">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci. Donec molestie velit id libero blandit, quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis. Ut tempor tellus eu sem pharetra feugiat. Proin libero ligula, gravida at porttitor eget.
                    </p>
                    <a className="btn" href="/">Hire Me</a>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="skills">
                        <div className="skill-name">
                            <p>Design</p><p>85%</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="skill-name">
                            <p>SEO</p><p>95%</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="skills">
                        <div className="skill-name">
                            <p>Development</p><p>90%</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="skill-name">
                            <p>Marketing</p><p>85%</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default About;