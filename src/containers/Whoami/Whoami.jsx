import React from 'react'
import './whoami.css'
import { whoamidata } from '../../constants/constants';
import pdfFile from '../../assets/PDF/Resume.pdf';
import be from "../../assets/WhoAmI/Behance.png";
import dr from "../../assets/WhoAmI/Dribbble.png";
import li from "../../assets/WhoAmI/Linkedin.png";
import waiul from '../../assets/WhoAmI/who_am_i_underline.svg';
import dwnld from "../../assets/WhoAmI/download_white.png"

function Whoami() {
  const no = whoamidata.numbers_exp_work_clients;
  const firstLine = ['YEARS OF', 'COMPLETED', 'SATISFIED'];
  const secondLine = ['EXPERIENCE', 'WORKS', 'CLIENTS'];
  return (
    <div id="whoami-overall-container" className='whoami-overall-container'>  
      <h1 className='whoamih1'>WHO AM I</h1>
      <img className='waiul' src={waiul} alt="" />
      <h2 className='cwh2'>I am currently working as {whoamidata.role_Abbreviation} <label style={{color:"#3F8AE2"}}> {whoamidata.role}</label> at {whoamidata.organisation}.</h2>
      <p className='wrp'>{whoamidata.description_b4_highlight}<label style={{color:"#3F8AE2"}}>{whoamidata.description_highlight}</label>{whoamidata.description_after_highlight}</p>
      <div className='image-square-frame triple-container '>
        {no.map((number, index) => (
          <div className='triple-insider1'>
            <strong className='no_strong'>{number}</strong>
            <div>
              <span className={`first-line first-line-${index}`}>{firstLine[index]}</span>
              <br></br>
              <div className={`second-line second-line-${index}`}>{secondLine[index]}</div>  
            </div>
          </div>
        ))}
      </div>
      <div className='triple-image-container'>
        <img className='tic-img' src={dr} alt="" />
        <img className='tic-img' src={be} alt="" />
        <img className='tic-img' src={li} alt="" />
      </div>
      <div className='flex-div-hg'>
        <div className='hga image-square-frame-always'>
          <span></span>
          {whoamidata.award_image}
          <p style={{margin:0, padding:0}}>
          <label className='hd'>{whoamidata.award_img_caption_line1}</label><br></br>
          <label className='a2023'>{whoamidata.award_img_caption_line2}</label>
          </p>
        </div>
        <div>
          <p className='para-hg'>{whoamidata.award_description}</p>
        </div>
      </div>
        <div className='dwnld_me_btn'>
          <a href={pdfFile} download="Resume Enric S Neelamkavil.pdf" target='_blank'>
              <p style={{margin:0}}>DOWNLOAD ME</p>
              <img height="18px" src={dwnld} alt="" />
          </a>
        </div>



    </div>
  )
}

export default Whoami
