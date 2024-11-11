import React from 'react'
import './footer.css'

function Footer() {
  return (
        <div className='footer-container'>
            <div className='footer-insider-div1'>
                <div className='footer-insider-div1-1'>
                    <p className='Aa-para'>Aa</p>
                    <p className='font-title'>Red Hat<br></br>Display</p>
                </div>
                <div className='footer-insider-div1-2'>
                    <p className='font-weight-classification'>
                        <label style={{ fontWeight: "300" }}>Light</label>
                        <label style={{ fontWeight: "400" }}>Regular</label>
                        <label style={{ fontWeight: "500" }}>Medium</label>
                        <label style={{ fontWeight: "600" }}>SemiBold</label>
                        <br></br>
                        <label style={{ fontWeight: "700" }}>Bold</label>
                        <label style={{ fontWeight: "800" }}>ExtraBold</label>
                        <label style={{ fontWeight: "900" }}>Black</label>
                    </p>
                    <p className='alphabet-demonstration'>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn<br></br>Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                </div>
            </div>
            <div className='footer-insider-div2'>
                <div className='colordiv colordiv-1'>#3F8AE2</div>
                <div className='colordiv colordiv-2'>#FEFEFE</div>
                <div className='colordiv colordiv-3'>#AAAAAA</div>
                <div className='colordiv colordiv-4'>#1A1A1A</div>
            </div>
        </div>
  )
}

export default Footer
