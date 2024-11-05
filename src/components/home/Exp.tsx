import React from "react";
import Box from "@/components/ui/Box";

function Exp() {
  const data = [
    {
      id: 1,
      startDate: "2023",
      endDate: "Now",
      company: "Pineswift Technologies",
      description:
        "Frontend Developer with advanced React expertise, delivering high-performance web applications and scalable solutions.",
    },
    {
      id: 2,
      startDate: "2022",
      endDate: "2023",
      company: "Clicbrics",
      description: "Software Develoment Engineer",
    },
    {
      id: 3,
      startDate: "2021",
      endDate: "2022",
      company: "Clicbrics",
      description: "Intern Software Develoment Engineer",
    },
    {
      id: 4,
      startDate: "2018",
      endDate: "2022",
      company: "Chitkara University",
      description: "B.Tech in Computer Science & Engineering",
    },
    {
      id: 5,
      startDate: "2016",
      endDate: "2018",
      company: "R.N.T Public School",
      description: "Senior Secondary",
    },
    {
      id: 6,
      startDate: "2014",
      endDate: "2016",
      company: "R.N.T Public School",
      description: "Secondary",
    },
  ];

  return (
    <div>
      <Box heading="Experience & Education" maxHeight="352px">
        <div className="mt-5 flex flex-col gap-4 border-b-[0.5px] border-[#8f8f8f] pb-4">
          {data.map((item) => (
            <div key={item.id} className="text-[11.5px] flex gap-2">
              <div className="w-[30%] flex gap-1 h-[16px] items-center text-[#8f8f8f]">
                <p className="text-[11.5px]">{item.startDate}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 15 1"
                  className="h-[16px] w-[15px]"
                >
                  <path
                    d="M 0 0.25 L 15 0.25"
                    fill="transparent"
                    strokeWidth="0.5"
                    stroke="rgb(255,255,255)"
                    strokeMiterlimit="8"
                    strokeDasharray=""
                  ></path>
                </svg>
                <p className="text-[11.5px]">{item.endDate}</p>
              </div>
              <div className="w-[70%] px-2">
                <p>{item.company}</p>
                <p className="text-[#8f8f8f]">{item.description}</p>
              </div>
            </div>
          ))}
          {/* <div className="text-[11.5px] flex gap-2">
            <div className="w-[30%] flex gap-1 h-[16px] items-center text-[#8f8f8f]">
              <p className="text-[11.5px]">2023</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 15 1"
                className="h-[16px] w-[15px]"
              >
                <path
                  d="M 0 0.25 L 15 0.25"
                  fill="transparent"
                  strokeWidth="0.5"
                  stroke="rgb(255,255,255)"
                  strokeMiterlimit="8"
                  strokeDasharray=""
                ></path>
              </svg>
              <p className="text-[11.5px]">Now</p>
            </div>
            <div className="w-[70%] px-2">
              <p>Pineswift Technologies</p>
              <p className="text-[#8f8f8f]">
                Frontend Developer with advanced React expertise, delivering
                high-performance web applications and scalable solutions.
              </p>
            </div>
          </div>} */}
        </div>
      </Box>
    </div>
  );
}

export default Exp;
