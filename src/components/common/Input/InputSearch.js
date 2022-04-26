import React from 'react';
import styled from 'styled-components';

const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const InputSearch = () => {
    return <>
    <div className="col-12 col-lg-4">
               <div className="input-group input-group-search input-group-search--invert">
                  <div className="input-group-prepend">
                     <span className="input-group-text">
                        <i className="fa fa-svg fa-search fa-fw"></i>
                     </span>
                  </div>
                  <input type="text" className="form-control" placeholder="Buscar en rentas" aria-label="Buscar en rentas"
                     aria-describedby="basic-addon1"/>
               </div>
            </div>
        </>;
}

InputSearch.propTypes = propTypes;
InputSearch.defaultProps = defaultProps;


export default InputSearch;