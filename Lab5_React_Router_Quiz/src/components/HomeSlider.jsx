import { Carousel } from 'react-bootstrap';

function HomeSlider() {
  return (
    <Carousel className="shadow-sm rounded overflow-hidden mb-4">
      <Carousel.Item>
        <img className="d-block w-100 slide-img" src="/images/slide1.jpg" alt="Slide 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 slide-img" src="/images/slide2.jpg" alt="Slide 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 slide-img" src="/images/slide3.jpg" alt="Slide 3" />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeSlider;
