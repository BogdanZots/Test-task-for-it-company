import React from "react";  

if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  const ReactRedux = require("react-redux/lib");
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackHooks: true,
    logOwnerReasons: true,
    logOnDifferentValues: true,
    hotReloadBufferMs: 500,
    onlyLogs: true,
    collapseGroups: true,
    trackExtraHooks: [[ReactRedux, "useSelector"]],
  });
}
