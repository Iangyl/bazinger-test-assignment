import { Carousel } from 'react-responsive-carousel';
import CarouselItem from './CarouselItem';
import CarouselArrow from './CarouselArrow';
import CarouselIndicator from './CarouselIndicator';

const TheCarousel = () => {
  return (
    <Carousel
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext ? (
          <CarouselArrow
            direction="right"
            active='active'
            onClick={onClickHandler}
          />
        ) : (
          <CarouselArrow
            direction="right"
            active='inactive'
            onClick={onClickHandler}
          />
        )
      }
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev ? (
          <CarouselArrow
            direction="left"
            active='active'
            onClick={onClickHandler}
          />
        ) : (
          <CarouselArrow
            direction="left"
            active='inactive'
            onClick={onClickHandler}
          />
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => (
        <CarouselIndicator onClick={onClickHandler} isSelected={isSelected} key={index}/>
      )}
    >
      <CarouselItem />
      <CarouselItem title="Carousel Item" idx={2} />
      <CarouselItem title="Carousel Item" idx={3} />
    </Carousel>
  );
};

export default TheCarousel;
