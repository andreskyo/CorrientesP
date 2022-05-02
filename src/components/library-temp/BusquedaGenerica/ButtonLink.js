import React, {Fragment} from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";


class ButtonLink extends React.Component {

    constructor (props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        if (this.props.disabled) {
            e.preventDefault();
            return;
        }

        if (this.props.onClick) {
            e.preventDefault();
            this.props.onClick(e);
        }
    }

    render() {
        const {type, id, name, disabled, children, sinFlechita, subrayado, className, flechitaIzq } = this.props;

        let buttonClasses = classNames('', {'disabled': disabled }, {'': disabled }, className);
        if(subrayado==="S"){
            buttonClasses = classNames('subrayado', {'disabled': disabled }, {'': disabled }, className);
        }


        return (
        <Fragment>
                <button
                    type={type}
                    disabled={disabled}
                    className={buttonClasses}
                    id={id}
                    name={name}
                    onClick={this.onClick}
                >
                    {flechitaIzq?<i className="fa fa-angle-left "> </i>:''}   {children} {sinFlechita || flechitaIzq?'':<i className="fa fa-angle-right "> </i>}
                </button>
            {/* language=CSS*/}
            <style jsx>{`
                button {
                    display: inline-block;
                    font-size: 14px;
                    color: #333333;
                    font-weight: 500;
                    text-align: center;
                    vertical-align: middle;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    background-color: initial;
                    border: 1px solid transparent;
                    padding: 0 0;
                    line-height: 16px;
                    border-radius: .25rem;
                    -webkit-transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
                    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
                }

                @media screen and (prefers-reduced-motion:reduce) {
                    button {
                        -webkit-transition: none;
                        transition: none
                    }
                }



                button.focus,
                button:focus {
                    outline: 0;
                    box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25)
                }

                button.disabled,
                button:disabled {
                    opacity: .65
                }

                button:not(:disabled):not(.disabled) {
                    cursor: pointer
                }

                button:hover {
                    color: #7aac39;
                    text-decoration: underline;
                }

                button.focus,
                button:focus {
                    text-decoration: underline;
                    box-shadow: none
                }

                i {
                    color: #7aac39;
                    font-size: 14px;
                }

                button.disabled,
                button:disabled {
                    color: #999999;
                    pointer-events: none
                }

                button.disabled i,
                button:disabled i {
                    color: #999999;
                }
                .subrayado{
                text-decoration: underline!important;
                font-weight: 700!important;
                }

            `}</style>
        </Fragment>

        );
    }
}

ButtonLink.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    flechitaIzq: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func,
    sinFlechita: PropTypes.bool,
    subrayado: PropTypes.string,
    type: PropTypes.string
  }

export default ButtonLink;