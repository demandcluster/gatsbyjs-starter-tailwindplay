import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
       
<script
  dangerouslySetInnerHTML={{
    __html: `
        var LHCChatboxOptions = {hashchatbox:'empty',identifier:'default',status_text:'Help'};
(function() {
var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
po.src = '//dc.livehelperchat.com/nld/chatbox/getstatus/(position)/bottom_right/(top)/300/(units)/pixels/(width)/300/(height)/300/(chat_height)/220/(scm)/true';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();`
}}
/>

      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
