import { Row, Col } from 'react-bootstrap';
import { newsLists } from '../data/news.js';
import NewsCard from '../components/NewsCard.jsx';

function News() {
  return (
    <section>
      <h2 className="text-danger mb-4">News Category</h2>
      <Row className="g-4">
        {newsLists.map((news) => (
          <Col key={news.id} xs={12} sm={6} lg={3}>
            <NewsCard news={news} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default News;
