import React, {Fragment} from 'react';
import PropTypes from "prop-types";


class Box extends React.Component {

    constructor (props) {
        super(props);
    }

    render() {
        const { children, className, ...rest } = this.props;

        return (
        <Fragment>
            <div className={`box ${className}`} {...rest}>
                {children}
            </div>
            {/* language=CSS*/}
            <style jsx>{`
                .box {
                    width: 100%;
                    border:1px solid #e9e9e9;    
                    border-radius: 6px;
                    padding: 30px;
                    height: 100%;
                }
                .box:hover {
                    border:1px solid #e9e9e9;    
                    border-radius: 6px;
                    box-shadow: 0 10px 30px 0 rgba(51, 51, 51, 0.1);
                    background-color: #ffffff;
                }
            `}</style>
        </Fragment>

        );
    }
}
Box.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
  }

export default Box;