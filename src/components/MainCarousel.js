import Carousel from 'react-bootstrap/Carousel';
import car1 from '../car1.png'
import car2 from '../car2.png'
import car3 from '../car3.png'
import '../CSS/MainCarousel.css'


function MainCarousel() {
  return (
    <>
    <Carousel className='MainCarousel'>
      <Carousel.Item className='w-100'>
        <img
          className="d-block w-100"
          src={car1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <section className='shopByGoal'>
      <h1>Shop By Goal</h1>
      <h3>MB recommended supplements for your fitness goals.</h3>
      <div class="container-fluid">
	<div class="row">
		<div class="col-md-3">
      div 1
		</div>
		<div class="col-md-3">
      div 2
		</div>
		<div class="col-md-3">
      div 3
		</div>
		<div class="col-md-3">
      div 4 
		</div>
	</div>
</div>
    </section>
{/* mini carousel */}
{/* 
<div className='miniCarousel'>
<Carousel className=''>
      <Carousel.Item className="">
        <img
          className="d-block "
          src={car1}
          alt="First slide"
        />
          <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> 
      </Carousel.Item>
      <Carousel.Item className="">
        <img
          className="d-block"
          src={car2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="">
        <img
          className="d-block"
          src={car3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
 */}

    </>);
}

export default MainCarousel;
