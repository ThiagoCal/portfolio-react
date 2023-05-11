import Avatar from "../Images/avatar.png";

export default function Banner() {
  return (
    <div className="banner container mx-auto mt-8 relative z-20 flex flex-grow rounded-lg shadow-lg justify-center mb-14 items-center overflow-hidden bg-white dark:bg-gray-800">
      <div className="relative flex flex-wrap px-6 py-8 mx-auto">
        <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
          <span className="w-20 h-2 mb-12 bg-banner-color dark:bg-white"></span>
          <h1 className="flex flex-col text-6xl font-black leading-none t-banner-color text-gray-800 uppercase font-bebas-neue sm:text-4xl md:text-6xl dark:text-white">
            Welcome
          </h1>
          <p className="text-sm text-gray-700 sm:text-base dark:text-white mt-4">
            My name is Thiago Kimelblat, I'm a full-stack developer based in Tel
            Aviv, Israel. I have developed many types of full-stack projects
            over a year and a half. I'm very passionate about coding and project
            management.
          </p>
          <div className="flex mt-8">
            <span
              href="https://drive.google.com/file/d/1m1KXk868mK4dOdyunbpnQITFRF4T46xo/view"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 transform transition duration-500 border-transparent rounded-lg text-md hover:bg-pink-400"
            >
              My CV
            </span>
            <a
              href="https://github.com/ThiagoCal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-pink-500 uppercase border border-pink-500 transform transition duration-500 rounded-lg cursor-pointer dark:text-white hover:bg-mag hover:text-white text-md"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="relative hidden  sm:block sm:w-1/3 lg:w-3/5">
          <img
            src={Avatar}
            className="max-w-xs rounded-full m-auto md:max-w-sm banner-img"
            alt="thiago's avatar"
          />
        </div>
      </div>
    </div>
  );
}
