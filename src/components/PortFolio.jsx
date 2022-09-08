import React from "react";
import kenstore from "../assets/portfolio/kenstore.png";

const PortFolio = () => {
  const portfolios = [
    {
      id: 1,
      src: " https://helios-i.mashable.com/imagery/articles/00OOYgaCufNFGRspVDeZvlk/hero-image.fill.size_1248x702.v1645542070.jpg",
      href: " https://slack-clone-26ed3.web.app",
    },
    {
      id: 2,
      src: "https://themewagon.com/wp-content/uploads/2019/01/notika-2.jpg",
      href: "https://otwa-ug-dashboard-ui.netlify.app",
    },

    {
      id: 3,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbNtj0Z3WTDBaelmXuYOzU6fGG7ZoIiK9DSQ&usqp=CAU",
      href: "https://covid19-online.herokuapp.com/",
    },
    {
      id: 4,
      src: "https://cdn.dribbble.com/users/688580/screenshots/4409798/otelmanya2.jpg",
      href: "https://otwa-house-listing-ui.netlify.app/",
    },
    {
      id: 5,
      src: kenstore,
      href: "https://ken-store-c9l7q2owx-emma-90844.vercel.app/",
    },
    {
      id: 6,
      src: "https://image.shutterstock.com/image-vector/ngo-nongovernmental-organization-concept-keywords-260nw-1247512159.jpg",
      href: "https://www.caritasaruadiocese.org/",
    },
    {
      id: 7,
      src: "https://imageio.forbes.com/specials-images/imageserve/60b1109e932ac77290e1625a/0x0.jpg?format=jpg&width=1200",
      href: "https://cryptocurrencyclosetoday.netlify.app/",
    },
    {
      id: 8,
      src: "https://amazeindesign.com/wp-content/uploads/2015/10/Website-Under-Construction-Vector-Sign-in-White-3813-623x512.jpg",
      href: "",
    },
    {
      id: 9,
      src: "https://amazeindesign.com/wp-content/uploads/2015/10/Website-Under-Construction-Vector-Sign-in-White-3813-623x512.jpg",
      href: "",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className=" max-w-screen-lg   mx-auto pt-16 p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8 ">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={href}>
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 h-40 w-full"
                />
              </a>

              <div className="flex items-center justify-center">
                <a href={href}>
                  <button
                    to={href}
                    className="w-1/2 px- py-3  duration-200 hover:scale-105"
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
