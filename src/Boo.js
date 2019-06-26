import React, { useEffect } from "react";

export const Boo = React.memo(props => {
  useEffect(() => {
    console.log("cdm & cdu");
    return () => {
      console.log("클린업");
    };
  }, []);
  return <div>Boo</div>;
});
