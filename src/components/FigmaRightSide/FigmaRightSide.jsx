import React from 'react';
import './figmaright.css';
import {DesignIcon1, DesignIcon2, DesignIcon3, DesignIcon4, DesignIcon5, DesignIcon6, DesignIcon7, DesignIconDownArrow, FrameClipContent, FrameCorner, FrameDegree, FrameDownArrow, FrameFillColor1, FrameFillColor2, FrameFillIcon1, FrameFillIcon2, FrameFillIcon3, FrameFullscreen, FrameH, FrameMinus, FrameOption, FramePlus, FrameW, FrameX, FrameY, FrameZoomOut, RectangleHor, RectangleVer} from './imports_frs'

function FigmaRightSide() {
  return (
    <div className='figmaright-overall-container'>
      <div className='figmaright-div1'>
        <p className='figmaright-div1-p1'>Design</p>
        <p className='figmaright-div1-p2'>Prototype</p>
        <p className='figmaright-div1-p3'>Code</p>
      </div>
      <div className='figmaright-div2'>
        <DesignIcon1/>
        <DesignIcon2/>
        <DesignIcon3/>
        <DesignIcon4/>
        <DesignIcon5/>
        <DesignIcon6/>
        <DesignIcon7/>
        <DesignIconDownArrow/>
      </div>
      <div className='figmaright-div3'>
        <div className='figmaright-div3-div1'>
            <div style={{display:"flex", gap:"5px"}}>
                <p className='figma-right-p'>Frame</p>
                <FrameDownArrow/>
            </div>
            <div style={{display:"flex", alignItems:"center", justifyContent:'left', gap:"5px"}}>
                <div style={{backgroundColor:"var(--PortGrey, #CCC)",display:"flex", alignItems:"center",justifyContent:'center', padding:"5px 4px", borderRadius:'5PX'}}>
                    <RectangleVer/>
                </div>
                <div style={{display:"flex", alignItems:"center", marginRight:"10px"}}>
                    <RectangleHor/>
                </div>
                <div style={{display:"flex", alignItems:"center", width:50, marginLeft:"18px"}}>
                        <FrameZoomOut/>                
                </div>
            </div>
        </div>
        <div className='figmaright-div3-div2'>
            <div className='FrameCompDiv1234'>
                <FrameX/>
                <input className="figmaright-input" type="text" defaultValue="3200"></input>
            </div>
            <div className='frameycomp FrameCompDiv1234'>
                <FrameY/>
                <input className="figmaright-input" type="text" defaultValue="184"></input>
            </div>
            <div style={{display:"block", width:"50px"}}>
                
            </div>
        </div>
        <div className='figmaright-div3-div3'>
            <div className='FrameCompDiv1234'>
                <FrameW/>
                <input className="figmaright-input" type="text" defaultValue="164"></input>
            </div>
            <div className='FrameCompDiv1234'>
                <FrameH/>
                <input className="figmaright-input" type="text" defaultValue="64"></input>
            </div>
            <div style={{marginLeft:'-18px'}}>
                <FrameOption/>
            </div>
        </div>
        <div className='figmaright-div3-div4'>
            <div className='FrameCompDiv5'>
                <FrameDegree/>
                <input className="figmaright-input" type="text" defaultValue="" value="0º"></input>
            </div>
            <div className='FrameCompDiv6'>
                <FrameCorner/>
                <input className="figmaright-input" type="text" defaultValue="0"></input>
            </div>
            <FrameFullscreen/>
        </div>
        <div className='figmaright-div3-div5'>
            <input type="checkbox" />
            <p style={{fontSize:"12px"}}>Clip content</p>
        </div>
      </div>
      <div className='figmaright-div4'>
        <p className='figma-right-p'>Layout Grid</p>
        <FramePlus/>
      </div>
      <div className='figmaright-div5'>
        <p className='figma-right-p'>Auto Layout</p>
        <FramePlus/>
      </div>
      <div className='figmaright-div6'>
        <div className='figmaright-div6-div1'>
            <p className='figma-right-p'>Fill</p>
            <div>
                <FrameFillIcon1/>
                <FramePlus/>
            </div>
        </div>
        <div className='figmaright-div6-div2'>
            <div className='framefillcompdiv'>
                <FrameFillColor1/>
                <p style={{fontSize:"12px", fontWeight:500}}>3F8AE2</p>
            </div>
            <div>
                <p style={{fontSize:"12px"}}>64.5%</p>
            </div>
            <div className='frame-flex'>
                <FrameFillIcon2/>
                <FrameMinus/>
            </div>
        </div>
        <div className='figmaright-div6-div3'>
            <div className='framefillcompdiv'>
                <FrameFillColor2/>
                <p style={{fontSize:"12px", fontWeight:500, color:"#c0bdbd"}}>FFFFFf</p>
            </div>
            <div>
                <p style={{fontSize:"12px", color:"#c0bdbd"}}>100%</p>
            </div>
            <div className='frame-flex'>
                <FrameFillIcon3/>
                <FrameMinus/>
            </div>
        </div>
      </div>
      <div className='figmaright-div7'>
            <p className='figma-right-p'>Stroke</p>
            <FramePlus/>
      </div>
      <div className='figmaright-div8'>
            <p className='figma-right-p'>Effects</p>
            <FramePlus/>
      </div>
      <div className='figmaright-div9'>
            <p className='figma-right-p'>Export</p>
            <FramePlus/>
      </div>
    </div>
  )
}

export default FigmaRightSide
