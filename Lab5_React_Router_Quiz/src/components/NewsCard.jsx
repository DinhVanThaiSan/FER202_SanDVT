import { Card, Button } from 'react-bootstrap';

function NewsCard({ news }) {
  return (
    <Card className="h-100 news-card">
      <Card.Img variant="top" src={news.images} className="news-img" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="news-title">{news.title}</Card.Title>
        <Card.Text className="text-muted small flex-grow-1">{news.description}</Card.Text>
        <Button variant="outline-primary" size="sm">Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;
