import Ctaimg from "../Images/thiagokimel5.gif";

export default function Cta() {
  return (
    <section className="flex mb-2 w-full">
      <div
        className="flex w-full justify-between"
        style={{
          backgroundColor: "#1886B4",
          height: "270px",
        }}
      >
        <img
          src={Ctaimg}
          style={{ height: "270px", width: "300px" }}
          alt="decorative-cta"
        />
        <div className="flex nav justify-between mt-4 mr-10 px-4 text-xl ">
          <ul className="flex nav">
            <li>
              <a
                href="https://drive.google.com/file/d/1m1KXk868mK4dOdyunbpnQITFRF4T46xo/view"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-3 text-white font-semibold hover:underline underline-offset-4 hover:text-pink-500"
              >
                My CV
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="mx-3 text-white font-semibold hover:underline underline-offset-4 hover:text-pink-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1"></div>
    </section>
  );
}
