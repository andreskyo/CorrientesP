import React from 'react';
import styled from 'styled-components'
const Cardstatsicon = (props) => {
    return (
        <div className="col-12 col-lg needHelpRowWrapper__card splide__slide">
							<div className="row needHelpCard">
								<div className="col needHelpCard__text">
									<p className="needHelpCardText__title"><strong>{props.title}</strong></p>
									<p className="needHelpCardText__description">{props.subtitle}</p>
									<a href="#" className="needHelpCardText__btn">{props.textLink}</a>
								</div>
								<div className="col-auto needHelpCard__icon">
									<span>
										<i className="fa fa-svg fa-comment fa-fw"></i>
									</span>
								</div>
							</div>
						</div>




        /*<Card classNameName={props.clases?`${props.clases} `:""}>
            <div classNameName="text col-9">
                <div classNameName="title">
                    {props.title}
                </div>
                <div classNameName="subtitle">
                    {props.subtitle}
                </div>
                <div classNameName="textLink">
                    {props.textLink}
                </div>
            </div>
            <div classNameName="icon col-lg-3 col-md-4 ">
                <Ellipse427>
                   {props.icon}
                </Ellipse427>
            </div>
        </Card>*/
    );
}

export default Cardstatsicon;
