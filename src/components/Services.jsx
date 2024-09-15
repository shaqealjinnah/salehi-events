import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Slider from "react-slick";
import engagementImage from "../assets/image5.jpg";
import birthdayImage from "../assets/image1.jpg";
import bridalImage from "../assets/image6.jpg";
import babyShowerImage from "../assets/image7.jpg";

const cardItems = [
  {
    image: engagementImage,
    service: "Engagements",
    description: "Description of service goes here",
  },
  {
    image: birthdayImage,
    service: "Birthdays",
    description: "Description of service goes here",
  },
  {
    image: bridalImage,
    service: "Bridal Party",
    description: "Description of service goes here",
  },
  {
    image: babyShowerImage,
    service: "Baby Showers",
    description: "Description of service goes here",
  },
];

function Services() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 3, // Number of slides to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="services" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Our Work
        </h2>
        <div className="mt-10 lg:max-w-[700px] xl:max-w-[1050px] mx-auto">
          <Slider {...settings}>
            {cardItems.map((card, index) => (
              <div className="p-4 !flex items-center justify-center" key={index}>
                <Card className="rounded text-center !shadow-md max-w-[300px]" key={index}>
                  <CardMedia
                    component="img"
                    height="140"
                    width="140"
                    image={card.image}
                    alt="Engagements"
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="h3"
                      className="font-semibold"
                    >
                      {card.service}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      className="mt-2"
                    >
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Services;
