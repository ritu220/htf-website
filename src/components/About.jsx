import AboutTimeline from "./AboutTimeline";

const About = () => {
  return (
    <div className="bg-[#070213] w-full min-h-screen flex bg-[url('../public/images/StarsStart.png')]  text-white ">
      <div className="w-1/2 flex flex-col gap-[5rem] px-[8rem] py-[4rem]">
        <div className="">
          <h2 className="text-[48px] font-[300]">About Us</h2>
          <p className="text-[16px] mt-[50px]">
            Hackoverflow hackathon lorem ipsum doler amet, best hackathon.
            participate and be the best developer. Hackoverflow hackathon lorem
            ipsum doler amet, best hackathon. participate and be the best
            developer
          </p>
        </div>
        <button className="w-[25rem] h-[19rem] text-[24px] font-[200] tracking-widest px-4 py-2 border-white border-2">
          Play
        </button>
      </div>
      <div className="w-1/2 aboutTimeline bg-[url('../public/images/Vector3.png')] bg-no-repeat bg-center bg-cover">
        <AboutTimeline />
      </div>
    </div>
  );
};

export default About;
