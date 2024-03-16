import React from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const Footer = () => {
  const linkedInUrl = "https://www.linkedin.com/in/your-linkedin-profile/"; // Replace with your LinkedIn profile URL
  const gitHubUrl = "https://github.com/your-github-username"; // Replace with your GitHub profile URL

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <span>RAFAEL ZURITA</span> {/* Left side */}
        <div className="flex items-center">
          {" "}
          {/* Centered logos */}
          <Link href="https://github.com/rafaelzurita93" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/filiberto-rafael-zurita-abad-574705226/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
        <p className="text-slate-600">All rights reserved.</p>{" "}
        {/* Right side */}
      </div>
    </footer>
  );
};

export default Footer;
