import React from 'react'
import './figmaui.css'
import { FigmaTopNav, FigmaLeftSide, FigmaCenter, FigmaRightSide } from '../../components'

export default function Figmaui() {
  return (
    <div id="Works">
        <FigmaTopNav/>
        <div className='FigmaUIBody'>
            <FigmaLeftSide/>
            <FigmaCenter/>
            <FigmaRightSide/>
        </div>
    </div>
  )
}
