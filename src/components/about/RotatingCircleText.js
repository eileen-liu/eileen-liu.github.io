function RotatingCircularText() {
    return (
      <div className="main">
        <svg id="rotatingText" viewBox="0 0 250 250" width="250" height="250">
          <defs>
            <path id="circle" d="M 125, 125
                  m -125, 0
                  a 125, 125 0 1, 0 250, 0
                  a 125, 125 0 1, 0 -250, 0
                  ">
            </path>
          </defs>
          <text width="300">
            <textPath alignment-baseline="top" xlinkHref="#circle" className="text">
              eileen ♥ ︎ eileen ♥ ︎ eileen ♥ ︎ eileen ♥ ︎ eileen ♥ eileen ♥
            </textPath>
          </text>
        </svg>
      </div>
    );
  }
  export default RotatingCircularText;