import React from "react";
import Link from "gatsby-link";

import  './tachyons.min.css'
import './index.css'
require("prismjs/themes/prism-tomorrow.css");
require("prismjs/plugins/line-numbers/prism-line-numbers.css")

export default ({ children, data }) => (
  <div className="bt b--dark-blue bg-white near-black bw2">
    <Link to ="/"><div className="f1 mw7  navy center mt4 tc"> {data.site.siteMetadata.title} </div></Link>
    <div className ="cf mw7 mt4 center" >

    {children()}
    </div>
  </div>
);


export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
