import { Link } from 'react-router-dom';
import HomeSlider from '../components/HomeSlider.jsx';

function Home() {
  const menus = [
    '/images/menu-01.jpg', '/images/menu-02.jpg', '/images/menu-03.jpg', '/images/menu-04.jpg',
    '/images/menu-05.jpg', '/images/menu-06.jpg'
  ];

  return (
    <section>
      <HomeSlider />
      <div className="d-flex justify-content-center gap-4 flex-wrap my-3">
        {menus.map((image, index) => (
          <img key={index} src={image} alt={`menu ${index + 1}`} className="menu-img" />
        ))}
      </div>
      <h3 className="text-danger mt-3">This is Home Page</h3>
      <p className="lead">Welcome to the online quiz application using React Router.</p>
      <Link to="/quiz" className="btn btn-primary">Go to Quiz</Link>
    </section>
  );
}

export default Home;
