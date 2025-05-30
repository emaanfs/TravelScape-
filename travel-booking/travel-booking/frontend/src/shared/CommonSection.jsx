import './common-section.css';
import { Container } from "reactstrap";

const CommonSection = ({ title, videoSrc }) => {
    return (
        <section className="common__section">
        
            {videoSrc && (
                <video autoPlay loop muted playsInline className="common__section-bg-video">
                    <source src={videoSrc} type="video/mp4" />
                </video>
            )}
            
            {videoSrc && <div className="common__section-overlay"></div>}

            <Container className="text-center">
                <h1>{title}</h1>
            </Container>
        </section>
    );
};

export default CommonSection;