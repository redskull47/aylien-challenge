import { Image, Button, Accordion, Card, Row } from "react-bootstrap";
import parseDate from "@services/common/utils/dateParser";
import { IStory } from "@views/Stories/data/redux/actions/interfaces/IStoriesActions";

function Story(props : IStory) {
  const {id, title, summary, source, published_at, media} = props;
    return (<Accordion className="mb-3">
      <Card>
        <Accordion.Toggle as={Card.Header} style={{fontWeight: 'strong'}} eventKey={id.toString()}>
          {title.substring(0, 120)}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={id.toString()}>
          <>
          <Card.Body>
          <Row>
            <div className="col-9">
            {summary?.sentences?.map((sentence: string, index: number) => (<p className="card-text" key={`${id}-${index}`}>{sentence}</p>))}
            </div>
            {media && media.map((element: any) => {
              if (element.type === 'image') return <Image src={element?.url} key={element?.url} />;
            })}
            <div className="col-3">
              <Button variant="link" href={source.home_page_url}>
                <Image src={source?.logo_url} />
              </Button>
            </div>
          </Row>
          </Card.Body>
          <Card.Footer className="card-footer text-muted mb-0 py-0">
            <Row>
              <div className="col">
                <Button variant="link" href={source.home_page_url}>
                  {source?.name}
                </Button>
              </div>
              <div className="col">
                <p className="my-2" style={{ textAlign: 'end'}}>Published date: {parseDate(published_at)}</p>
              </div>
            </Row>
          </Card.Footer>
          </>
        </Accordion.Collapse>
      </Card>
    </Accordion>)
}

export default Story;