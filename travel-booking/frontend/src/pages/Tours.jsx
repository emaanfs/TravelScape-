import { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/tour.css";
import TourCard from "../shared/TourCard";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";
import { Container, Row, Col } from "reactstrap";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config"; 
import allToursHeroVideo from "../assets/images/hero-video.mp4";

const Tours = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    const {data:tours, loading, error} = useFetch(`${BASE_URL}/tours?page=${page}`); // for switching to pages
    const {data:tourCount} = useFetch(`${BASE_URL}/tours/search/getTourCount`);

    useEffect(() => {
        const pages = Math.ceil(tourCount / 8); // used displaying no. of pages in tours tab. also used in backend
        setPageCount(pages);
        window.scrollTo(0, 0); // for scrolling effect
    }, [page, tourCount, tours]); // navigate scroll

    return (
        <>
            <CommonSection title={"All Tours"} videoSrc={allToursHeroVideo} />

            <section className="search-bar-section-tours">
                <Container>
                    <Row>
                        <SearchBar layout="light" />
                    </Row>
                </Container>
            </section>

            <section className="pt-0"> 
                <Container>
                    {loading && <h4 className="text-center pt-5">Loading ...</h4>}
                    {error && <h4 className="text-center pt-5">{error}</h4>}

                    {!loading && !error && (
                        <Row>
                            {tours?.map(tour => (
                                <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
                                    <TourCard tour={tour} />
                                </Col>
                            ))}
                            <Col lg="12">
                                <div className="pagination d-flex align-items-center 
                                justify-content-center mt-4 gap-3">
                                    {[...Array(pageCount).keys()].map(number => (
                                        <span
                                            key={number}
                                            onClick={() => setPage(number)}
                                            className={page === number ? "active__page" : ""}
                                        >
                                            {number + 1}
                                        </span>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    )}
                </Container>
            </section>
            <Newsletter />
        </>
    );
};

export default Tours;