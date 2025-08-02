import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const fullStackRef = useRef(null);
  const qaRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [fullStackRef.current, qaRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={fullStackRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Full Stack Development" />
            </div>
            <div className="text-content">
              <h2>Full Stack Development</h2>
              <p className="text-white-50 md:text-xl">
                Building complete web applications from the ground up, with a
                focus on creating seamless, user-friendly experiences.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={qaRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/project2.png" alt="QA Automation" />
              </div>
              <h2>QA Automation</h2>
              <p className="text-white-50 md:text-xl">
                Ensuring software quality through automated testing, delivering
                robust and reliable products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
