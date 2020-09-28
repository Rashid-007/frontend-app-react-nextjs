import React from 'react';

interface IProps {

}
const Content: React.FunctionComponent = (props) => {
    const { children } = props;
    return <main>{children}</main>
}

export default Content;