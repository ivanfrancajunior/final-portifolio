
import {
  RiTwitterXFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailLine,
} from "react-icons/ri";

export const SocialsComponent = () => {
  return (
    <div className="flex items-center justify-center  gap-5 ">
            <div className="h-8  min-w-1/2 py-6  rounded-md px-4 md:p-4   flex items-center justify-center gap-4 ">
              <div className="hover:translate-y-[2px] transition duration-400 ease-in cursor-pointer ">
                <a href="mailto:contato.ivanfrancajr@gmail.com" target="_blank">
                  <RiMailLine size={24} color={"white"} />
                </a>
              </div>
              <div className="hover:translate-y-[2px] transition duration-400 ease-in cursor-pointer ">
                <a href="https://www.linkedin.com/in/ivanjrdev/" target="_blank">
                  <RiLinkedinBoxFill size={24} color={"white"} />
                </a>
              </div>

              <div className="hover:translate-y-[2px] transition duration-400 ease-in cursor-pointer">
                <a href="https://github.com/ivanfrancajunior" target="_blank">
                  <RiGithubFill size={24} color={"white"} />
                </a>
              </div>

              <div className="hover:translate-y-[2px] transition duration-400 ease-in cursor-pointer">
                <a href="https://twitter.com/jota94" target="_blank">
                  <RiTwitterXFill size={24} color={"white"} />{" "}
                </a>
              </div>
            </div>
          </div>
  )
}
