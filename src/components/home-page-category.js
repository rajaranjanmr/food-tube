import { Link } from "react-router-dom"
import {useVideoContext} from "../context/video-page-context"
import img1 from "../assets/images/biryaniimg.jpeg" 
function HomePageCategory(props){
    const { videoDispatch } = useVideoContext();
    return(
        <div className="card">
      <img className="thumbnail" src={props.value.image} alt="biryani" style={{ width: "100%" }} />
      <div className="title-video">{props.value.title}</div>
      <div className="description-video">{props.value.description}</div>
      <div className="category-name">{props.value.categoryToBeShown}</div>
      <div className="card-btn-add">
        <p>
          <Link to="/VideoListing" className="videolisting"
          onClick={() =>
                        videoDispatch({
                          type: "SET_CATEGORY_NAME",
                          payload: props.value.categoryName,
                        })
                      } >
            Watch More
          </Link>
        </p>
        
      </div>
    </div>
    )
}
export {HomePageCategory}

