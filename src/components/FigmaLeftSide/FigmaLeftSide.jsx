import React from 'react';
import './figmaleft.css';
import {SearchIcon, SearchBarDownArrow, PageDownArrow, DownSolidArrow, FrameIcon, RightSolidArrow, Rombus, Square, LockIcon, DashedSquare, HiddenIcon} from './imports_fls';


function FigmaLeftSide() {
  return (
    <div className='figmaleft-overall-container'>
      <div className='figmaleft-div1'>
        <SearchIcon/>
        <input className='figmaleft-input' type = 'text' placeholder="Search"></input>
        <SearchBarDownArrow/>
      </div>
      <div className='figmaleft-div2'>
        <div className='figmaleft-div2-heads'>
            <p className='figmaleft-div2-p1'>Layers</p>
            <p className='figmaleft-div2-p2'>Assets</p>
        </div>
        <div className='figmaleft-div2-page'>
            <p className='figmaleft-div2-p3'>Page 1</p>
            <PageDownArrow/>
        </div>
      </div>
      <div className='figmaleft-div3'>
        <div className='figmaleft-div3-div1'>
            <DownSolidArrow/>
            <FrameIcon/>
            <p className='figmaleft-div3-div1-p'>Projects Worked on</p>
        </div>
        <div className='figmaleft-div3-div2'>
            <div className='figmaleft-div3-div2-divinside'>
                <RightSolidArrow/>
                <Rombus/>
                <p className='figmaleft-div3-div2-p'>Title Component</p>
            </div>
            <LockIcon/>
        </div>
        <div className='figmaleft-div3-div3'>
            <Square/>
            <p className='figmaleft-div3-div34-p'>Rectangle 1</p>
        </div>
        <div className='figmaleft-div3-div4'>
            <Square/>
            <p className='figmaleft-div3-div34-p'>Rectangle 1</p>
        </div>
        <div className='figmaleft-div3-div5'>
            <RightSolidArrow/>
            <DashedSquare/>
            <p className='figmaleft-div3-div5-p'>Works List</p>
        </div>
        <div className='figmaleft-div3-div6'>
        <div className='figmaleft-div3-div6-divinside'>
                <RightSolidArrow/>
                <Rombus/>
                <p className='figmaleft-div3-div6-p'>Button / Active</p>
            </div>
            <HiddenIcon/>
        </div>
      </div>
    </div>
  )
}

export default FigmaLeftSide
