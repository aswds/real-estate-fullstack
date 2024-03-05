import SectionTitle from "@components/styled/Section/SectionTitle";
import Headquater from "@/assets/houses/headquater.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ElementRef, useEffect, useRef } from "react";
function Stats({ desription, title }: { title: string; desription: string }) {
  return (
    <div
      className="m-auto text-center my-10  md:m-0 md:text-start  space-y-3 max-w-[60%] md:max-w-full"
      data-scroll="out"
    >
      <h1 className="font-bold">{title}</h1>
      <p className=" m-auto">{desription}</p>
    </div>
  );
}

function AboutUs() {
  const aboutRef = useRef<ElementRef<"div">>(null);
  const imageRef = useRef<ElementRef<"figure">>(null);
  const teamMembers = [
    {
      name: "Alice Lee",
      role: "Chief Technology Officer (CTO)",
      img: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Ben Johnson",
      role: "Marketing Director",
      img: "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Camila Garcia",
      role: "Data Analyst",
      img: "https://images.pexels.com/photos/7567520/pexels-photo-7567520.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "David Patel",
      role: "Project Manager (Construction)",
      img: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Emily Wong",
      role: "Interior Designer",
      img: "https://images.pexels.com/photos/4064235/pexels-photo-4064235.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Federico Rossi",
      role: "Real Estate Agent",
      img: "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Gabriela Sanchez",
      role: "Content Creator (Real Estate)",
      img: "https://images.pexels.com/photos/4098274/pexels-photo-4098274.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];
  function setImageHeight() {
    if (aboutRef.current && imageRef.current) {
      console.log(aboutRef.current.clientHeight);
      imageRef.current.style.maxHeight = aboutRef.current.scrollHeight + "px";
    }
  }
  useEffect(() => {
    window.addEventListener("resize", setImageHeight);
    setImageHeight();
  }, []);
  return (
    <div className=" page !pt-0 " id="about-us">
      <article
        className="md:h-screen grid grid-cols-1 pb-36  items-center md:grid-cols-2 gap-10 py-10   "
        id="about-us-info"
      >
        <div className="space-y-12 m-auto min-h-min" ref={aboutRef}>
          <h1>ABOUT</h1>

          <p data-scroll="out" className="page-subtitle">
            Established in 1994, Prestige Palaces is your premier destination
            for exquisite real estate experiences. Our dedicated team is
            committed to crafting unparalleled living spaces that embody luxury,
            comfort, and innovation.
          </p>
          <p data-scroll="out" className="text-4xl 3xl:text-5xl">
            At Prestige Palaces, we blend creativity with expertise to deliver
            properties that surpass expectations.
          </p>
        </div>
        <figure
          className=" flex flex-col justify-center items-center  size-full "
          ref={imageRef}
        >
          <img
            alt="headquater"
            src={Headquater}
            className="object-cover w-full h-full"
          />
        </figure>
      </article>

      <section className="w-full  ">
        <SectionTitle data-scroll="out">AT A GLANCE</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <Stats title="20+" desription="YEARS OF EXPERIENCE" />
          <Stats title="30+" desription="SUCCESSFULL PROJECTS" />
          <Stats title="2000+" desription="EMPLOYEES WORLDWIDE" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:mt-36">
          <Stats
            title="$20B+"
            desription="UNDER CONSTRUCTION & IN THE PIPLINE"
          />
          <Stats title="$150M+ SF" desription="DEVELOPMENTS COMPLETED" />
        </div>
      </section>
      <section className="w-full mt-36">
        <SectionTitle data-scroll="out">OUR TEAM</SectionTitle>
        <Swiper
          slidesPerView={"auto"}
          modules={[Navigation]}
          navigation
          className="size-full"
          data-scroll="out"
        >
          {teamMembers.map((teamMember, index) => (
            <SwiperSlide className="p-14 " key={index}>
              <div className="h-[300px] mb-5">
                <img
                  src={teamMember.img}
                  alt="image"
                  className="size-full object-cover"
                />
              </div>

              <p className="text-4xl font-bold">{teamMember.name}</p>
              <h4>{teamMember.role}</h4>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Swiper /> */}
      </section>
    </div>
  );
}

export default AboutUs;
