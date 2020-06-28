import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-teal-700">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
        <Link to="/" className="flex items-center no-underline text-white">
         <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 591.9 53.55"><defs><style>.cls-1{fill:#274093;}.cls-2{fill:#45c1f1;}</style></defs><path class="cls-1" d="M205.53,292.83c0,15.51-10.22,26.48-27.77,26.48h-17v-53h17C195.31,266.34,205.53,277.32,205.53,292.83Zm-10.06,0c0-10.07-6.82-16.8-17.94-16.8H170.8V309.7h6.73C188.65,309.7,195.47,303,195.47,292.83Z" transform="translate(-160.73 -266.34)"/><path class="cls-2" d="M245.94,273.53H211.21v-7.19h34.73Zm.45,38.52v7.26H211.21v-7.26Zm0-22.85v7.26H211.21V289.2Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M305.87,266.34v53H295.81V285.94l-12.94,20.89h-6L264,285.94v33.37H253.89v-53h9.38l16.57,26.79,16.73-26.79Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M342.73,307.36H324.79l-4.08,11.95H309.28l19.37-53h10.29l19.38,53H346.89Zm-3.33-9.61-5.6-16.27-5.6,16.27Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M403,266.34v53h-9.92L371.79,285v34.35H361.72v-53h9.84L392.9,300.7V266.34Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M454.58,292.83c0,15.51-10.22,26.48-27.77,26.48h-17v-53h17C444.36,266.34,454.58,277.32,454.58,292.83Zm-10.07,0c0-10.07-6.81-16.8-17.93-16.8h-6.74V309.7h6.74C437.7,309.7,444.51,303,444.51,292.83Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M503.47,306.7l2.34,1.09a24.13,24.13,0,0,1-21,12c-14.29,0-24.72-11.67-24.72-26s10.43-26,24.72-26a24.13,24.13,0,0,1,21,12l-2.34,1.1a21.35,21.35,0,0,0-18.67-10.51c-12.84,0-21.95,10.51-22,23.42.08,12.91,9.19,23.41,22,23.41A21.36,21.36,0,0,0,503.47,306.7Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M543.37,316.76v2.55H512.74V268.26h2.55v48.5Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M584.58,268.26v30.49c0,12.83-6.85,21.07-18.82,21.07S547,311.8,547,298.75V268.26h2.55v30.49c0,11.67,6.06,18.59,16.19,18.59S582,310.42,582,298.75V268.26Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M626.74,279.13l-2.41.8c-1.16-5.76-6.92-9.63-15.31-9.63s-14.15,4.67-14.15,11.45,7.73,8.75,15.9,10.58c14.73,3.35,18,7.66,18,13.56,0,5.4-3.86,14-17.94,14-10.65,0-17.65-5.18-19.69-11.67l2.4-.8c1.61,5.47,7.66,9.91,17.29,9.91,7.81,0,15.39-3.42,15.39-11.45,0-7-7.73-9.33-16.05-11.08-11.81-2.56-17.79-6.28-17.79-13.06,0-8.39,7.07-14,16.63-14C617.19,267.75,625.06,271.61,626.74,279.13Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M667.88,270.81H650.67v48.5h-2.48v-48.5H631v-2.55h36.91Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M707.63,316.76v2.55H673.72V268.26h33.47v2.55h-31v21.74h28.73V295H676.2v21.73Z" transform="translate(-160.73 -266.34)"/><path class="cls-1" d="M749.72,319.31l-11.38-20.13a16.87,16.87,0,0,1-3.36.3H719.16v19.83h-2.48V268.26H735c9.34,0,16.63,6.2,16.63,15.61a14.91,14.91,0,0,1-10.72,14.73l11.74,20.71Zm-.81-35.44c0-8.17-6-13.06-13.93-13.06H719.16v26.11H735C742.72,296.92,748.91,292,748.91,283.87Z" transform="translate(-160.73 -266.34)"/></svg>
         
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          <div className="text-sm">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-white"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="block md:inline-block mt-4 md:mt-0 no-underline text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
