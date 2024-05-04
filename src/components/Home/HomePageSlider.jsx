
import React, { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
import "../../css/HomePageSlider.css";


import { Link } from 'react-router-dom';

const HomePageSlider = () => {

  









  return (
    <>
     


      <div

      >


        <div className=''>
          <div className="text-content">
            <div className="name">XML Formater</div>
            <div className="job">
              <div className="job mb-5">
                <div className="mb-5">
                  <img  style={{ width: '150px' }} src='excel.png' />

                  <img  style={{ width: '150px' }} src='xml.png' />

                  <img style={{ width: '150px' }} src='word.png' />

                  <div className='mb-5'> <span style={{ color: '#3a665c' }}>Convert  </span>
                    <TypeAnimation
                      sequence={[

                        'your Xsd to Xml',
                        3000,
                        'excel needs to fill the xml fields value',
                        3000,

                      ]}
                      wrapper="span"
                      
                      speed={0}
                      style={{ color: '#3a665c' }}
                      repeat={Infinity}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>





    </>
  )

}
export default HomePageSlider;
