import Ctaimg from "../Images/thiagokimel5.gif";

export default function Cta() {
  return (
    <section className="flex mb-2 w-full">
      <div
        className="flex w-full justify-between"
        style={{
          backgroundColor: "#1886B4",
          // backgroundPositionY: "75%",
          height: "275px",
        }}
      >
        <img src={Ctaimg} alt="decorative-cta" />
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
    // <section className="mb-20 flex flex-col w-full">
    //   <div
    //     className="relative flex align-stretch flex-row-reverse justify-end overflow-hidden bg-no-repeat bg-cover bg-bottom"
    //     style={{
    //       backgroundColor: "#1886B4",
    //       backgroundPositionY: "75%",
    //       height: "300px",
    //     }}
    //   >
    //     {/* flex-wrap: wrap; align-content: stretch; flex-direction: row-reverse;
    //     justify-content: flex-end; */}
    //     <div className="flex-grow-0">
    //       <ul className="flex gap-4">
    //         <li>CV</li>
    //         <li>Contact</li>
    //       </ul>
    //     </div>
    //     <img
    //       className="block rounded-lg"
    //       src={Ctaimg}
    //       style={{
    //         // marginTop: "00px",
    //         height: "300px",
    //         backdropFilter: "blur(30px)",
    //       }}
    //     />
    //   </div>
    // </section>
  );
}
