import React, { useEffect, useState } from "react";
import axios from "axios";

function About() {
  const [image, setImage] = useState(null);

  async function fetchImage() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    const link = data.slice(0, 4).map((obj) => {
      return obj.url;
    });
    setImage(link);
  }

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-center text-gray-800">
          Meet The Team
        </h2>
        <div className="flex gap-6 mt-10 justify-center items-start">
          <div>
            {image ? (
              <img className="" src={image[1]} alt="" />
            ) : (
              <div>...Loading</div>
            )}
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl">
              Sadaf <strong>•</strong> CEO, Entrepreneur, Floral Wizard
            </h3>
            <p className="mt-4r text-gray-600">
              The brains behind the jawdropping magic of turning your event from
              "<strong>meh</strong>" to "<strong>meh-gnificant</strong>.
              <br />
              <br />
              With over 250,000 views on social media and over 3 years of
              hands-on experience, Sadaf makes the most perfect events even
              better.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-center gap-6 mt-10">
          <div>
            {image ? (
              <img className="" src={image[1]} alt="" />
            ) : (
              <div>...Loading</div>
            )}
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl">
              Shahid <strong>•</strong> Senior Delivery Guy
            </h3>
            <div></div>
            <p className="mt-4r text-gray-600">
              The brawns behind your event, managing and co-directing
              infrastructure and strategic placement of props.
              <br />
              <br />
              Making sure your event is perfectly setup before your makeup is
              done.
            </p>
          </div>
        </div>
        <div className="flex gap-6 mt-10 justify-center items-start">
          <div>
            {image ? (
              <img className="" src={image[1]} alt="" />
            ) : (
              <div>...Loading</div>
            )}
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl">
              Navid <strong>•</strong> Junior Delivery Guy
            </h3>
            <p className="mt-4r text-gray-600">
              Helps out with the event and carries things. Also makes the props
              which are used to style the event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
