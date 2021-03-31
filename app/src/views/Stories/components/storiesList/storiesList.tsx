import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { IState } from "services/common/redux/reducers/interfaces/IState";

function StoriesList() {
  const stories = useSelector((state: IState) => state.stories.stories.list);


  return (
    <>
      {stories?.length ? stories.map((story) => (
        <div className="card mb-3" key={story.id}>
          <div className="card-header">
            {story.title.substring(0, 140)}...
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-9">
              {story.summary?.sentences?.map((sentence: string, index) => (<p className="card-text" key={`${story.id}-${index}`}>{sentence}</p>))}
              </div>
              <div className="col-3">
                <Image src={story.source?.logo_url} />
              </div>
            </div>
            
          </div>
          <div className="card-footer text-muted">
            <div className="row">
              <div className="col">{story.source?.name}</div>
              <div className="col"><p style={{ textAlign: 'end'}}>{story.published_at}</p></div>
            </div>
          </div>
        </div>
      )) : null}
    </>
  )
}





export default StoriesList;