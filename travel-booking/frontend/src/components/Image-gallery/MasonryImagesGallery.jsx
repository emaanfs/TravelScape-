import galleryImages from "./galleryImages";    
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import './masonaryimagesgallery.css'; 

const MasonryImagesGallery = () => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: 3, 992: 4}}>
            <Masonry gutter="2.5rem"> 
                {galleryImages.map((item, index) => (
                    <div className="masonry__img-container" key={index}>
                        <img
                            className="masonry__img"
                            src={item}
                            alt={`Travel gallery image ${index + 1}`}
                            style={{ width: "100%", display: "block" }}/>
                    </div>
                ))}
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default MasonryImagesGallery;