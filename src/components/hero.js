import React from "react";
import heroImage from "../images/Main.svg";
import backgroundImage1 from "../images/BG.svg";
import backgroundImage2 from "../images/BG2.svg";

const hero = (props) => {
  return (
    <div className="hero  flex-center" ref={props.navRef}>
      <div className="container grid">
        <div className="flex-column gap">
          <h1 className="xl">Become A Trivia Master</h1>
          <p>
            Sharpen your skills or learn something new with thousands of
            questions and many categories to chose from.
          </p>
          <a className="btn text-center">Play Now</a>
        </div>
        <div className="flex svg-container">
          <svg
            className="svg"
            width="590"
            height="637"
            viewBox="0 0 650 637"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="undraw_logic_re_nyb4 1">
              <path
                id="Vector"
                d="M327.757 350.304C326.578 348.655 325.746 346.743 325.319 344.705C324.892 342.667 324.88 340.552 325.284 338.508C325.689 336.465 326.5 334.543 327.66 332.878C328.821 331.212 330.302 329.845 332 328.87L329.259 296.33L347.007 289.693L350.286 335.705C351.599 338.921 351.784 342.549 350.805 345.904C349.826 349.258 347.752 352.105 344.975 353.904C342.198 355.704 338.911 356.331 335.738 355.668C332.565 355.004 329.725 353.096 327.757 350.304V350.304Z"
                fill="#FFB8B8"
              />
              <path
                id="Vector_2"
                d="M346.811 163.543C346.811 163.543 358.99 135.702 369.813 145.495C380.636 155.289 354.975 237.61 354.975 237.61L351.072 317.524L330.504 315.285L324.688 237.426L346.811 163.543Z"
                fill="#80BCC9"
              />
              <path
                id="Vector_3"
                d="M183.439 575.44L198.708 588.903L253.647 531.162L231.112 511.293L183.439 575.44Z"
                fill="#FFB8B8"
              />
              <path
                id="Left-leg"
                d="M183.58 566.577L213.65 593.089L213.651 593.09C218.732 597.571 221.972 604.068 222.656 611.151C223.341 618.233 221.414 625.322 217.301 630.858L216.796 631.536L167.564 588.128L183.58 566.577Z"
                fill="#808CC9"
              />
              <path
                id="Vector_4"
                d="M395.637 612.811L415.281 612.81L424.626 530.28L395.634 530.281L395.637 612.811Z"
                fill="#FFB8B8"
              />
              <path
                id="Right-leg"
                d="M390.626 605.825L429.312 605.824H429.314C435.852 605.824 442.123 608.653 446.746 613.689C451.37 618.725 453.967 625.555 453.968 632.677V633.549L390.627 633.552L390.626 605.825Z"
                fill="#808CC9"
              />
              <path
                id="Vector_5"
                d="M430.107 225.9C430.107 225.9 466.96 274.768 458.948 323.636C450.937 372.503 444.528 409.154 444.528 409.154L431.709 519.106C431.709 519.106 436.516 549.051 430.107 556.767C430.107 556.767 439.721 574.955 422.095 581.936C404.47 588.917 394.96 579.525 394.96 579.525C394.96 579.525 382.037 559.248 390.049 554.012L393.424 338.233L265.068 520.852C265.068 520.852 262.709 543.066 246.263 543.303L226.613 559.248L204.18 545.286L215.397 529.578C215.397 529.578 208.987 512.125 223.408 508.635L306.728 389.956L327.559 328.871C327.559 328.871 338.775 281.749 369.219 262.551V242.123L430.107 225.9Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_6"
                d="M366.815 141.254C371.667 135.009 378.458 130.926 385.895 129.782C393.332 128.638 400.895 130.514 407.144 135.052L408.475 136.018C422.698 153.562 432.257 174.999 436.123 198.021L442.124 233.754L366.815 251.523L349.16 185.202C346.92 176.784 347.459 167.777 350.685 159.747C353.91 151.718 359.618 145.174 366.815 141.254Z"
                fill="#80BCC9"
              />
              <path
                id="Vector_7"
                d="M490.543 357.901C488.455 357.158 486.542 355.925 484.939 354.289C483.336 352.654 482.082 350.655 481.265 348.434C480.448 346.214 480.088 343.825 480.21 341.436C480.332 339.047 480.933 336.717 481.972 334.608L460.248 305.648L473.185 286.976L503.336 328.343C506.472 330.478 508.78 333.792 509.823 337.656C510.865 341.521 510.57 345.668 508.993 349.312C507.416 352.955 504.667 355.842 501.267 357.425C497.866 359.008 494.051 359.178 490.543 357.901V357.901Z"
                fill="#FFB8B8"
              />
              <path
                id="Vector_8"
                d="M398.862 167.433C398.862 167.433 394.055 132.528 410.078 134.273C426.101 136.018 450.136 232.009 450.136 232.009L493.398 310.546L472.568 322.763L421.294 252.952L398.862 167.433Z"
                fill="#80BCC9"
              />
              <path
                id="Vector_9"
                d="M428.204 116.403H351.903C350.333 116.401 348.828 115.721 347.718 114.512C346.609 113.303 345.984 111.664 345.983 109.955V74.1321C345.983 61.401 350.626 49.1914 358.89 40.1891C367.155 31.1869 378.365 26.1295 390.053 26.1295C401.741 26.1295 412.951 31.1869 421.216 40.1891C429.48 49.1914 434.124 61.401 434.124 74.1321V109.955C434.122 111.664 433.497 113.303 432.388 114.512C431.278 115.721 429.773 116.401 428.204 116.403V116.403Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_10"
                d="M427.461 97.2563C436.02 80.2012 430.265 58.8175 414.607 49.4944C398.949 40.1712 379.317 46.4392 370.758 63.4942C362.198 80.5493 367.953 101.933 383.611 111.256C399.269 120.579 418.901 114.311 427.461 97.2563Z"
                fill="#FFB8B8"
              />
              <path
                id="Vector_11"
                d="M444.55 77.7143H403.887L403.47 70.4182L401.385 77.7143H395.124L394.297 63.2536L390.165 77.7143H378.05V76.9979C378.05 56.0597 391.68 39.0257 408.433 39.0257H414.166C430.92 39.0257 444.55 56.0597 444.55 76.9979L444.55 77.7143Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_12"
                d="M405.57 123.09C405.073 123.09 404.577 123.048 404.085 122.965L355.686 114.846V59.9365C355.686 57.1591 356.188 54.4089 357.164 51.8429C358.14 49.2769 359.57 46.9454 361.373 44.9815C363.176 43.0176 365.317 41.4597 367.673 40.3969C370.028 39.334 372.553 38.787 375.103 38.787H408.964L407.645 40.2493C389.293 60.6008 403.119 93.6011 412.994 111.461C413.719 112.744 414.047 114.248 413.929 115.749C413.81 117.251 413.253 118.671 412.338 119.802C411.497 120.854 410.456 121.693 409.287 122.261C408.118 122.829 406.85 123.112 405.57 123.09Z"
                fill="#2F2E41"
              />
            </g>
          </svg>
        </div>
      </div>
      <img className="bg-1" src={backgroundImage1}></img>
      <img className="bg-2" src={backgroundImage2}></img>
    </div>
  );
};

export default hero;
