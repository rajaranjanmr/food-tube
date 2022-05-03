import { useEffect } from "react";
import { useVideoContext } from "../context/video-page-context";
import { getHistory, removeAllFromHistory } from "../utility/apiCall";
import { HistoryVideoListing } from "../components/history-video-page";

function History() {
  const {
    videoState: { history },
    videoDispatch,
  } = useVideoContext();

  useEffect(() => {
    const getHistoryVideos = async () => {
      const response = await getHistory();
      if (response.success) {
        videoDispatch({ type: "SET_HISTORY", payload: response.history });
      } else {
        console.log("ERR");
      }
    };

    getHistoryVideos();
  }, [videoDispatch]);

  async function clearClickHandler() {
    const response = await removeAllFromHistory();

    videoDispatch({ type: "SET_HISTORY", payload: response.history });
  }

  return (
    <>
      <div className="header-cart button-clear-all">
        <h1>************ Welcome to Your History Section ************</h1>

        <button className="all-clear" onClick={() => clearClickHandler()}>
          Clear All
        </button>
      </div>
      <div className="cards-video">
        {history.map((x) => {
          return <HistoryVideoListing value={x} />;
        })}
      </div>
    </>
  );
}
export { History };
