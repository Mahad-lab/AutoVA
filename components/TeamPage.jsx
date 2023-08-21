import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Talha Faisal",
      role: "Frontend Developer",
      bio: "Google DSC KIET Lead.",
      image: "/Talha.jpg", // Place the image in the public directory
      social: {
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/talhafaisal/",
      },
    },
    {
      name: "Talib Farooq",
      role: "Data Scientist",
      bio: "A tech enthusiast and data aficionado with a mission to bridge theory and practice.",
      image: "/Talib.jpg", // Place the image in the public directory
      social: {
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/mtalibfarooq/",
      },
    },
    {
      name: "Mahad Ahmed",
      role: "Backend Developer",
      bio: "Tech Team Lead Google DSC KIET.",
      image: "", // Place the image in the public directory
      social: {
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/mahad-ahmed-817919160/",
      },
    },
    {
      name: "Laxmi Tiwari",
      role: "ML Engineer",
      bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: "/jane-smith.jpg", // Place the image in the public directory
      social: {
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/laxmi-tiwari/",
      },
    },
    {
      name: "Abdul Wahab",
      role: "ML Engineer",
      bio: "Aspiring AI Engineer with a passion for generative models and their potential to create innovative solutions..",
      image: "/Wahab.jpg", // Place the image in the public directory
      social: {
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/abdul-wahab-khan-083573232/",
      },
    },
    // Add more team members here
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-10 mt-14">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-center">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-10 flex flex-col justify-between"
            >
              <div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-24 h-24 mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-700">{member.bio}</p>
              </div>
              <div className="mt-4 flex">
                <a
                  href={member.social.twitter}
                  className="text-violet-500 hover:text-violet-700 mr-4"
                >
                  <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                </a>
                <a
                  href={member.social.linkedin}
                  className="text-violet-500 hover:text-violet-700 mr-4"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                </a>
                <a
                  href={member.social.github}
                  className="text-violet-500 hover:text-violet-700 mr-4"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                </a>
                <a
                  href={member.social.facebook}
                  className="text-violet-500 hover:text-violet-700 mr-4"
                >
                  <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                </a>
                <a
                  href={member.social.instagram}
                  className="text-violet-500 hover:text-violet-700"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
