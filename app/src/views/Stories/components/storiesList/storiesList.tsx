import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import Story from "./components/story";

import { storiesListSelector } from "@views/Stories/data/redux/selectors/storiesSelectors";
import { useCallback } from "react";
import { loadMoreStoriesAction } from "@views/Stories/data/redux/actions/storiesActions";

function StoriesList() {
  const dispatch = useDispatch();
  const stories = useSelector(storiesListSelector);

  const handleLoadMore = useCallback(() => {
    dispatch(loadMoreStoriesAction());
  }, []);
  
  return (
    <>
      {stories?.length ? stories.map((story) => <Story key={story.id} {...story}/>) : null}
      {stories?.length ? <Button onClick={handleLoadMore}>Load more...</Button> : null}
    </>
  )
}





export default StoriesList;