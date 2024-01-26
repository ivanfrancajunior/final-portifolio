import Linkedin from "../assets/socials/icons8-linkedin.svg";
import Gmail from "../assets/socials/icons8-gmail-novo.svg";
import Twitter from "../assets/socials/icons8-twitter.svg";
import Github from "../assets/socials/icons8-github.svg";
const Socials = () => {
  return (
    <div className="flex items-center gap-4 mx-8 text-xl my-4 pb-10">
      <span>
        <img src={Linkedin} alt="linkedin" />
      </span>
      <span>
        <img src={Twitter} alt="linkedin" />
      </span>
      <span>
        <img src={Gmail} alt="linkedin" />
      </span>
      <span>
        <img src={Github} alt="linkedin" />
      </span>
    </div>
  );
};

export { Socials };
