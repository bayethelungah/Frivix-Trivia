import React from "react";
import { Link } from "react-router-dom";

const signUp = () => {
  return (
    <section>
      <section className="signUp">
        <div className="container flex-column height">
          <svg
            onClick={<Link to="/" exact></Link>}
            width="85"
            height="29"
            viewBox="0 0 85 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.75461 0.500435C8.70089 0.500723 7.69043 0.894428 6.94533 1.595C6.20024 2.29557 5.78153 3.24567 5.78122 4.23643V5.93362H3.97618C3.454 5.93321 2.93686 6.02963 2.45435 6.21733C1.97185 6.40504 1.53345 6.68037 1.16422 7.02756C0.794998 7.37473 0.502206 7.78697 0.302595 8.24064C0.102985 8.69434 0.000475699 9.18059 0.000932214 9.67157V13.4062H5.78028V16.8006H3.97525C2.92123 16.8005 1.91032 17.194 1.16484 17.8946C0.419366 18.5952 0.000368188 19.5455 0 20.5366V26.9911H3.97711C4.49879 26.9909 5.01529 26.8941 5.49717 26.706C5.97902 26.5181 6.41677 26.2427 6.78546 25.8957C7.15413 25.5487 7.44648 25.1368 7.64583 24.6834C7.84516 24.2301 7.94759 23.7444 7.94725 23.2539H7.95235V20.7881L7.94171 20.7894V5.07958L7.9505 5.08154V4.23708C7.95141 3.7868 8.14173 3.35513 8.47991 3.03631C8.81806 2.71748 9.27664 2.53739 9.75554 2.53532H16.6584V4.23708C16.657 4.68716 16.466 5.11837 16.1273 5.43641C15.7886 5.75446 15.3298 5.93347 14.8511 5.93427H8.7674V7.97133H14.8501C15.9039 7.97139 16.9144 7.57788 17.6596 6.87737C18.4047 6.17686 18.8234 5.22675 18.8235 4.236V0.5L9.75461 0.500435ZM5.78122 11.369H2.16975V9.67177C2.17054 9.22097 2.36108 8.78878 2.69975 8.46966C3.0384 8.15055 3.49765 7.97044 3.97711 7.96872H5.78215L5.78122 11.369ZM5.78122 23.2558C5.78042 23.7058 5.59005 24.1373 5.25177 24.4556C4.91348 24.7741 4.45482 24.9536 3.97618 24.9547H2.16882V20.5377C2.16926 20.0873 2.35989 19.6556 2.6988 19.3373C3.03773 19.019 3.49717 18.8403 3.97618 18.8405H5.78122V23.2558ZM8.7674 13.406H13.3263V15.105C13.3245 15.555 13.1334 15.986 12.7948 16.304C12.4562 16.622 11.9975 16.8011 11.5189 16.8021H8.7674V18.8405H11.5198C12.0417 18.8408 12.5585 18.7443 13.0407 18.5566C13.5229 18.369 13.9611 18.0938 14.3301 17.7468C14.6991 17.3999 14.9918 16.9879 15.1913 16.5345C15.3909 16.0811 15.4935 15.5952 15.4932 15.1045H15.4951V11.3685H8.7674V13.406Z"
              fill="#6C63FF"
            />
            <path
              d="M31.152 4.876C31.824 4.876 32.44 4.948 33 5.092C33.56 5.22 33.992 5.348 34.296 5.476L33.6 8.332C33.28 8.188 32.928 8.084 32.544 8.02C32.176 7.94 31.832 7.9 31.512 7.9C31.08 7.9 30.712 7.964 30.408 8.092C30.12 8.204 29.888 8.364 29.712 8.572C29.552 8.78 29.432 9.028 29.352 9.316C29.288 9.604 29.256 9.916 29.256 10.252V10.876H33.672V13.852H29.256V23.5H25.68V10.204C25.68 8.572 26.136 7.276 27.048 6.316C27.976 5.356 29.344 4.876 31.152 4.876ZM43.413 14.044C43.093 13.964 42.717 13.884 42.285 13.804C41.853 13.708 41.389 13.66 40.893 13.66C40.669 13.66 40.397 13.684 40.077 13.732C39.773 13.764 39.541 13.804 39.381 13.852V23.5H35.805V11.548C36.445 11.324 37.197 11.116 38.061 10.924C38.941 10.716 39.917 10.612 40.989 10.612C41.181 10.612 41.413 10.628 41.685 10.66C41.957 10.676 42.229 10.708 42.501 10.756C42.773 10.788 43.045 10.836 43.317 10.9C43.589 10.948 43.821 11.012 44.013 11.092L43.413 14.044ZM49.506 23.5H45.93V10.876H49.506V23.5ZM49.842 7.228C49.842 7.884 49.626 8.404 49.194 8.788C48.778 9.156 48.282 9.34 47.706 9.34C47.13 9.34 46.626 9.156 46.194 8.788C45.778 8.404 45.57 7.884 45.57 7.228C45.57 6.572 45.778 6.06 46.194 5.692C46.626 5.308 47.13 5.116 47.706 5.116C48.282 5.116 48.778 5.308 49.194 5.692C49.626 6.06 49.842 6.572 49.842 7.228ZM55.9245 23.5C55.1085 21.9 54.2765 20.028 53.4285 17.884C52.5965 15.74 51.8045 13.404 51.0525 10.876H54.8445C55.0045 11.5 55.1885 12.18 55.3965 12.916C55.6205 13.636 55.8445 14.372 56.0685 15.124C56.3085 15.86 56.5405 16.58 56.7645 17.284C57.0045 17.988 57.2365 18.628 57.4605 19.204C57.6685 18.628 57.8925 17.988 58.1325 17.284C58.3725 16.58 58.6045 15.86 58.8285 15.124C59.0685 14.372 59.2925 13.636 59.5005 12.916C59.7245 12.18 59.9165 11.5 60.0765 10.876H63.7725C63.0205 13.404 62.2205 15.74 61.3725 17.884C60.5405 20.028 59.7165 21.9 58.9005 23.5H55.9245ZM69.2638 23.5H65.6878V10.876H69.2638V23.5ZM69.5998 7.228C69.5998 7.884 69.3838 8.404 68.9518 8.788C68.5358 9.156 68.0398 9.34 67.4638 9.34C66.8878 9.34 66.3838 9.156 65.9518 8.788C65.5358 8.404 65.3278 7.884 65.3278 7.228C65.3278 6.572 65.5358 6.06 65.9518 5.692C66.3838 5.308 66.8878 5.116 67.4638 5.116C68.0398 5.116 68.5358 5.308 68.9518 5.692C69.3838 6.06 69.5998 6.572 69.5998 7.228ZM77.6413 14.716L80.1373 10.876H83.8333L79.5133 16.948C80.4733 18.148 81.3453 19.316 82.1293 20.452C82.9133 21.588 83.5373 22.604 84.0013 23.5H80.1613C80.0333 23.26 79.8733 22.964 79.6813 22.612C79.4893 22.244 79.2733 21.868 79.0333 21.484C78.7933 21.084 78.5373 20.692 78.2653 20.308C78.0093 19.908 77.7533 19.548 77.4973 19.228C77.2573 19.532 77.0093 19.868 76.7533 20.236C76.5133 20.604 76.2813 20.98 76.0573 21.364C75.8333 21.732 75.6093 22.1 75.3853 22.468C75.1773 22.836 74.9933 23.18 74.8333 23.5H71.1853C71.3773 23.1 71.6413 22.628 71.9773 22.084C72.3133 21.54 72.6733 20.98 73.0573 20.404C73.4573 19.812 73.8733 19.228 74.3053 18.652C74.7373 18.06 75.1613 17.508 75.5773 16.996C74.8573 15.988 74.1373 14.972 73.4173 13.948C72.6973 12.908 71.9853 11.884 71.2813 10.876H75.1453L77.6413 14.716Z"
              fill="black"
            />
          </svg>
          <div className="card flex-column">
            <h1>Sign Up</h1>
            <form className="flex-column">
              <input placeholder="Full Name" />
              <input placeholder="Email" type="email" />
              <input placeholder="Username" />
              <input placeholder="Password" type="password" />
              <p>
                Already Have an Account? <Link to="/login">Log In</Link>
              </p>
              <buttton className="btn">Sign Up</buttton>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default signUp;
