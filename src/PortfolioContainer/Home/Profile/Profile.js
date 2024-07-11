// import React from "react";
// import Typical from "react-typical";
// import './Profile.css';
// import ScrollService from "../../../utilities/ScrollService";

// export default function Profile() {
//   return (
//     <div className="profile-container">
//       <div className="profile-parent">
//         <div className="profile-details">
//           <div className="colz">
//             <div className="colz-icon">
//               <a target="_blank" href="https://web.facebook.com/mengot.duran.7">
//                 <i className="fa fa-facebook-square"></i>
//               </a>
//               <a target="_blank" href="duranmegot801@gmail.com">
//                 <i className="fa fa-google-plus-square"></i>
//               </a>
//               <a target="_blank" href="https://www.instagram.com/mengot_duran/">
//                 <i className="fa fa-instagram"></i>
//               </a>
//               <a target="_blank" href="https://twitter.com/home">
//                 <i className="fa fa-twitter"></i>
//               </a>
//             </div>
//           </div>

//           <div className="profile-details-name">
//             <span className="primary-text">
//               {" "}
//               Hello, I'm <span className="highlighted-text"> Duran</span>
//             </span>
//           </div>
//           <div className="profile-details-role">
//             <span className="primary-text">
//               {" "}
//               <h1>
//                 {" "}
//                 <Typical
//                   loop={Infinity}
//                   steps={[
//                     "Ethusiastic Dev 🛑",
//                     1000,
//                     "Front End Dev 💻",
//                     1000,
//                     "UX/UI 😎",
//                     1000,
//                     "Cross Platform Dev 🌐",
//                     1000,
//                     "React Dev 📱",
//                     1000,
//                   ]}
//                 />
//               </h1>
//               <span className="profile-role-tagline">
//                 Building Applications with front End operations
//               </span>
//             </span>
//           </div>
//           <div className="profile-options">
//             <button className="btn primary-btn"
//             onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
//             >
//               {""}
//               Hire Me{" "}
//             </button>
//             <a href="DURAN Resume.pdf" download="Durans DURAN Resume.pdf">
//               <button className="btn highlighted-btn">Get Resume</button>
//             </a>
//           </div>
//         </div>
//         <div className="profile-picture">
//           <div className="profile-picture-background"></div>
//         </div>
//       </div>
//     </div>
//   );
// }








import React, { useState, useEffect } from "react";
import './Profile.css';
import ScrollService from "../../../utilities/ScrollService";

const steps = [
  "Enthusiastic Dev 🛑",
  "Front End Dev 💻",
  "UX/UI 😎",
  "Cross Platform Dev 🌐",
  "React Dev 📱",
];

export default function Profile() {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = steps[currentStep];
      setDisplayedText(
        isDeleting
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1)
      );

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }

      setTypingSpeed(isDeleting ? 50 : 100);
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, typingSpeed]);

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a target="_blank" rel="noreferrer" href="https://web.facebook.com/mengot.duran.7">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="mailto:duranmegot801@gmail.com">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/mengot_duran/">
                <i className="fa fa-instagram"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="https://twitter.com/home">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Duran</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {displayedText}
              </h1>
              <span className="profile-role-tagline">
                Building Applications with front End operations
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {""}
              Hire Me{" "}
            </button>
            <a href="DURAN Resume.pdf" download="Durans DURAN Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
