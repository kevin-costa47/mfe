import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from "react-router-dom"

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {

    console.log("MarketingApp")

    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      }
    });
    console.log("onParentNavigate Marketing", onParentNavigate)

    history.listen(onParentNavigate)
  }, []);

  return <div ref={ref} />;
};
