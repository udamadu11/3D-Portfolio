import SpaceScene from "./SpaceScene";

const About = () => {
  return (
    <div
      name="about"
      className="relative w-full h-screen bg-black text-gray-300"
    >
      <SpaceScene />
      <div className="absolute top-1/2 w-full">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-col-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>Hi, I'm Udara , nice to meet you.Please take look around.</p>
            </div>
            <div>
              <p>
                I am passionate about building excellent software that improves
                the lives of those around me. I specialize in creating software
                for clients ranging from individuals and small-businesses all
                the way to large enterprise corporations. What would you do if
                you had a software expert available at your fingertips?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
