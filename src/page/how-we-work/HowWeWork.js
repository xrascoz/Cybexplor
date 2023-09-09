import React from 'react'
import TitleSection from '../../components/TitleSection'
function HowWeWork() {

    let TitleObject = {
        titleSection: "Company",
        titleMain: "The Most important",
        titleGradient: "services we provide",
        description: "With our integrated CRM, project management, collaborationand invoicing capabilities,  you can manageyour business in one secure platform.",
    }

    return (
        <div>
            <div class="container">

            <TitleSection TitleObject={TitleObject} />

                <div class="timeline">
                    <div class="container-timeline left-timeline " data-aos="fade-up" data-aos-duration="1000">
                        <div class="content-timeline">
                            <div class="counter" data-aos="fade-up" data-aos-duration="1100">1</div>
                            <h2 data-aos="fade-up" data-aos-duration="1200">The Pervasive Threat</h2>
                            <p data-aos="fade-up" data-aos-duration="1300">Millions of devices are compromised using
                                info-stealers malware, via cracked software,
                                torrent files and what not.</p>
                        </div>
                    </div>
                    <div class="container-timeline right-timeline " data-aos="fade-up" data-aos-duration="1000">
                        <div class="content-timeline">
                            <div class="counter">2</div>

                            <h2>The Pervasive Threat</h2>
                            <p>Hackers publish compromised devices stolen credentials in their exclusive market places at
                                various platforms.

                            </p>
                        </div>
                    </div>
                    <div class="container-timeline left-timeline " data-aos="fade-up" data-aos-duration="1000">
                        <div class="content-timeline">
                            <div class="counter" data-aos="fade-up" data-aos-duration="1100">3</div>

                            <h2 data-aos="fade-up" data-aos-duration="1200">The Pervasive Threat</h2>
                            <p data-aos="fade-up" data-aos-duration="1300">We monitor the Darkweb marketplaces, hacking
                                forums, private clouds, underground channels,
                                Telegram, Discord and paste sites.

                            </p>
                        </div>
                    </div>
                    <div class="container-timeline right-timeline " data-aos="fade-up" data-aos-duration="1000">
                        <div class="content-timeline">
                            <div class="counter" data-aos="fade-up" data-aos-duration="1100">4</div>

                            <h2 data-aos="fade-up" data-aos-duration="1200">The Pervasive Threat</h2>
                            <p data-aos="fade-up" data-aos-duration="1300">Also using vulnerabilities we identified in
                                various info-stealers Command-and-Control
                                servers, we capture as much stolen data as possible.

                            </p>
                        </div>
                    </div>
                    <div class="container-timeline left-timeline " data-aos="fade-up" data-aos-duration="1000">
                        <div class="content-timeline">
                            <div class="counter" data-aos="fade-up" data-aos-duration="1100">5</div>

                            <h2 data-aos="fade-up" data-aos-duration="1200">The Pervasive Threat</h2>
                            <p data-aos="fade-up" data-aos-duration="1300">Filter, validate and classify all the collected
                                data using our automated pipelines and feed
                                it into the DarkEntry database.

                            </p>
                        </div>
                    </div>
                    <div class="container-timeline right-timeline " data-aos="fade-up" data-aos-duration="1000">
                        <div class="content-timeline">
                            <div class="counter" data-aos="fade-up" data-aos-duration="1100">6</div>

                            <h2 data-aos="fade-up" data-aos-duration="1200">The Pervasive Threat</h2>
                            <p data-aos="fade-up" data-aos-duration="1300">Deliver real-time alerts of data-leaks and
                                breaches to our customers and assess them to
                                eliminate the risk.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWeWork