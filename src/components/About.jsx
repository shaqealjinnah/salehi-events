import React, { useEffect, useState } from "react";
import axios from "axios";

function About() {
  const [image, setImage] = useState(null);

  async function fetchImage() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos",
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
        <h2 className="text-center text-3xl text-gray-800">Meet The Team</h2>
        <div className="mt-10 flex flex-col items-start justify-center gap-6 md:flex-row">
          <div>
            {image ? (
              <img className="" src={image[1]} alt="" />
            ) : (
              <div>...Loading</div>
            )}
          </div>
          <div>
            <h3 className="text-2xl">Sadaf</h3>
            <div className="mt-1 flex items-center">
              <span className="dot relative pr-3 text-[#99a1aa]">CEO</span>
              <span className="dot relative px-3 text-[#99a1aa]">
                Entrepreneur
              </span>
              <span className="pl-3 text-[#99a1aa]">Floral Wizard</span>
            </div>
            <p className="mt-6 text-gray-950">
              The brains behind the jawdropping magic of turning your event from
              "<strong>meh</strong>" to "<strong>meh-gnificant</strong>.
            </p>
            <p className="mt-3 text-gray-950">
              With over 500,000 views on social media and over 3 years of
              hands-on experience, Sadaf makes the most perfect events even
              better.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-center gap-6 md:flex-row-reverse">
          <div>
            {image ? (
              <img className="" src={image[1]} alt="" />
            ) : (
              <div>...Loading</div>
            )}
          </div>
          <div>
            <h3 className="text-2xl">Shahid</h3>
            <span className="mt-1 inline-block text-[#99a1aa]">
              Senior Delivery Guy
            </span>
            <p className="mt-6 text-gray-950">
              The brawns behind your event, managing and co-directing
              infrastructure and strategic placement of props.
            </p>
            <p className="mt-3 text-gray-950">
              Making sure your event is perfectly setup before your makeup is
              set.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-center gap-6 md:flex-row">
          <div>
            {image ? (
              <img className="" src={image[1]} alt="" />
            ) : (
              <div>...Loading</div>
            )}
          </div>
          <div>
            <h3 className="text-2xl">Navid</h3>
            <span className="mt-1 inline-block text-[#99a1aa]">
              Junior Delivery Guy
            </span>
            <p className="mt-6 text-gray-950">
              Helps out with the event and carries things.
            </p>
            <p className="text-gray-950 mt-3">
            Occasionally makes the props which are used to style the event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
