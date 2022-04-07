import { useEffect } from "react";
import { WatchLaterVideoList } from "../components/watch-later-video";
import { useVideoContext } from "../context/video-page-context";
import { getWatchLater } from "../utility/apiCall";

function WatchLater(){
    const { videoState:{watchlater}, videoDispatch } = useVideoContext();

    useEffect(() => {
		const getWatchLaterVideos = async () => {
			const response = await getWatchLater();
			console.log(response,"its response in history");
			if (response.success) {
				videoDispatch({ type: "SET_WATCHLATER", payload: response.watchlater });
			} else {
				console.log("ERR");
			}
            console.log('res',response)
		};

		getWatchLaterVideos();
	}, [videoDispatch]);
    console.log(watchlater)
    return(
        <div className="cards-video">
           { watchlater.map((x)=>{
                   return <WatchLaterVideoList value={x}/>
            })}
            
        </div>
    )
}
export {WatchLater}