import React, { Fragment } from "react";

interface IProps {}

const Favicon: React.FunctionComponent<IProps> = (props) => {
  return (
    <Fragment>
      <link rel="shortcut icon" href="/static/images/logo/icon-48x48.png" />
    </Fragment>
  );
};

export default Favicon;
