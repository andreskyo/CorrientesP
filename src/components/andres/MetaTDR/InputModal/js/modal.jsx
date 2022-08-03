import React from 'react'
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';


const ComponentModal = styled.div`
.modal{
background:rgba(0,0,0, .20 );
width:100vw;
height: 100vh;
position:fixed;
top:0;
left:0;
z-index:9999;
display:none;
justify-content: center;
align-items: center;
}
.modal-open{
    display:flex;
    
}

.modal__dialog{
    background: #FFFFFF;
    border-radius: 16px;
    width: 500px;
    height: 600px;
    padding: 40px 65px;
    display:flex;
    flex-direction: column;
    position:relative;
    .close{
        position:absolute;
        right:8px ;
        top:10px;
        .closeIcon{
           float:right;
           cursor:pointer;
           
        }
    }
    .titulo{
        color: #27272A;
        font-family: 'SF UI Text';
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        padding-bottom:30px;
        .titulop{
            margin:0px;
        }
    }
    .localidades{
        overflow: scroll;
        overflow-x: hidden;
        max-height:500px;
        .index{
            font-family: 'SF UI Text';
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            color: #27272A;
        }
        .res{
            font-family: 'SF UI Text';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #78716C;
            cursor:pointer;
            padding:0px;
        }
    }
    
      .localidades::-webkit-scrollbar {
       -webkit-appearance: none;
    }
      .localidades::-webkit-scrollbar:vertical {
        width:4px;
    }
       .localidades::-webkit-scrollbar-thumb {
       background: #124596;
       border-radius: 16px;
       
    }
       .localidades::-webkit-scrollbar-track {
       background: #DBF4FF;
       border-radius: 16px;
       
    }

}
`



const modal = (props) => {

    let a = [<p className="index">A</p>];
    let b = [<p className="index">B</p>];
    let c = [<p className="index">C</p>];
    let d = [<p className="index">D</p>];
    let e = [<p className="index">E</p>];
    let f = [<p className="index">F</p>];
    let g = [<p className="index">G</p>];
    let h = [<p className="index">H</p>];
    let i = [<p className="index">I</p>];
    let j = [<p className="index">J</p>];
    let k = [<p className="index">K</p>];
    let l = [<p className="index">L</p>];
    let m = [<p className="index">M</p>];
    let n = [<p className="index">N</p>];
    let o = [<p className="index">O</p>];
    let p = [<p className="index">P</p>];
    let q = [<p className="index">Q</p>];
    let r = [<p className="index">R</p>];
    let s = [<p className="index">S</p>];
    let t = [<p className="index">T</p>];
    let u = [<p className="index">U</p>];
    let v = [<p className="index">V</p>];
    let w = [<p className="index">W</p>];
    let x = [<p className="index">X</p>];
    let y = [<p className="index">Y</p>];
    let z = [<p className="index">Z</p>];



    const datos = props.data.sort((a, b) => a.label < b.label ? -1 : + (a.label > b.label))
    
    


    const render = () => {

        datos.map((res, index) => {

          

            if (res.label.charAt(0) === "A") {
                a.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)}>{res.label}</p>)
            }
            
            if (res.label.charAt(0) === "B") {
                b.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "C") {
                c.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "D") {
                d.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "E") {

                e.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "F") {

                f.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "G") {

                g.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "H") {

                h.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "I") {

                i.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "J") {

                j.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "K") {

                k.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "L") {

                l.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "M") {

                m.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "N") {

                n.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "O") {

                o.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "P") {

                p.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "Q") {

                q.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "R") {

                r.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "S") {

                s.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "T") {

                t.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "U") {

                u.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "V") {

                v.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "W") {

                w.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "X") {

                x.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "Y") {

                y.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
            if (res.label.charAt(0) === "Z") {

                z.push(<p className="res" onClick={() => props.onSuggestHandler(res.label, res.value)} >{res.label}</p>)
            }
        })

        return [
            a.length > 1 ? a : null,
            b.length > 1 ? b : null,
            c.length > 1 ? c : null,
            d.length > 1 ? d : null,
            e.length > 1 ? e : null,
            f.length > 1 ? f : null,
            g.length > 1 ? g : null,
            h.length > 1 ? h : null,
            i.length > 1 ? i : null,
            j.length > 1 ? j : null,
            k.length > 1 ? k : null,
            l.length > 1 ? l : null,
            m.length > 1 ? m : null,
            n.length > 1 ? n : null,
            o.length > 1 ? o : null,
            p.length > 1 ? q : null,
            r.length > 1 ? r : null,
            s.length > 1 ? s : null,
            t.length > 1 ? t : null,
            u.length > 1 ? u : null,
            v.length > 1 ? v : null,
            w.length > 1 ? w : null,
            x.length > 1 ? x : null,
            y.length > 1 ? y : null,
            z.length > 1 ? z : null,
        ]
    }
    return (
        <ComponentModal>

            <div
                className={`modal ${props.isOpen && 'modal-open'}`} onClick={props.closeModal}>


                <div className="modal__dialog" >
                    <div className="close" onClick={props.closeModal}>
                        <CloseIcon className="closeIcon" />
                    </div>


                    <div className="titulo">
                        <p className="titulop">Selecciona una localidad</p>
                    </div>

                    <div className="localidades">

                        {render()}


                    </div>
                </div>

            </div>

        </ComponentModal>
    )
}

export default modal