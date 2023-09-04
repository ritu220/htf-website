const Item = ({ title, date }) => {
  return (
    <div className="">
      <h4 className=" text-[16px] uppercase">{title}</h4>
      <p className="text-[#9a9a9a] text-[14px]">{date}</p>
    </div>
  );
};
const Ball = () => {
  return (
    <div className="w-[26px] h-[26px] rounded-full bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"></div>
  );
};

const AboutTimeline = () => {
  return (
    <div className="flex  w-[80%] left-[120px] h-full relative justify-center  ">
      <div className="h-[490px] w-[6px] absolute translate-x-[50%] top-20  left-1/2  bg-[#76A3BE]"></div>
      <div className="z-10 flex flex-col justify-between h-[490px]  absolute  top-20  left-[50%] translate-x-[-25%]">
        <Ball />
        <Ball />
        <Ball />
        <Ball />
        <Ball />
      </div>
      <div className="  grid grid-cols-2 h-[593px] w-[60%] self-center justify-self-center">
        <div className=" w-1/2 self-start justify-self-start col-span-2">
          <Item title={"hack overflow 1"} date={"2019"} />
        </div>
        <div className=" self-start -mr-[60px] justify-self-end w-1/2 col-span-2">
          <Item title={"hack overflow 2"} date={"2020"} />
        </div>
        <div className=" self-start w-1/2 justify-self-start col-span-2">
          <Item title={"hack overflow 3"} date={"2021"} />
        </div>
        <div className=" self-start -mr-[60px] justify-self-end w-1/2 col-span-2">
          <Item title={"hack overflow 4"} date={"2022"} />
        </div>
        <div className=" self-start w-1/2 justify-self-start col-span-2">
          <Item title={"hack overflow 5"} date={"2023"} />
        </div>
      </div>
    </div>
  );
};

export default AboutTimeline;
