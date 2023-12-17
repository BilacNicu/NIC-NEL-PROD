import './styles/HomePage.css'
import backgroundVideo from '../src/assets/room3.mp4';
import {ColectieBtn, ColectieBtn2, DespreNoiBtn, MailBtn, PhoneBtn, LocationBtn, ColectieBucatariiBtn, ColectieBDormitoareBtn, ColectieCamereDeZiBtn, ColectieBirouriBtn} from '../src/Buttons';
import AnimatedPage from './components/animations/AnimationPage';
import React, { useEffect } from 'react';
import logo from "./assets/logo2.png";

const HomePage = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, {
      root: null, 
      threshold: 0.2
    });

    const hiddenElementsRight = document.querySelectorAll('.hiddenRight');
    const hiddenElementsLeft = document.querySelectorAll('.hiddenLeft');
    const hiddenElementsLeft50 = document.querySelectorAll('.hiddenLeft50');
    hiddenElementsLeft50.forEach((el) => {
      observer.observe(el);
      el.classList.add('hiddenLeft50');
    });
    hiddenElementsRight.forEach((el) => {
      observer.observe(el);
      el.classList.add('hiddenRight');
    });
    hiddenElementsLeft.forEach((el) => {
      observer.observe(el);
      el.classList.add('hiddenLeft');
    });


    return () => {
      hiddenElementsRight.forEach((el) => observer.unobserve(el));
      hiddenElementsLeft.forEach((el) => observer.unobserve(el));
    };
  }, []);



  return (
    <AnimatedPage>
   <div className="homeDiv">
    <div class="titleAndVideo">
    <div className="writing">
      <h1 className="titlu">Excelență prin meșteșug</h1>
      <h2 className="textPrincipal1">Creează-ți spațiul de vis</h2>
      <h2 className="textPrincipal2">cu mobilierul nostru unic.</h2>
    </div>
    <div className="videoContainer">
    <video className="backgroundVideo" autoPlay muted loop src={backgroundVideo} />
    </div>
    </div>
    <div className="startInfo">
      <div className="startInfoLeftSide">

      </div>
      <div className="startInfoRightSide hiddenRight">
      <h1 className='startTitle'>Lux & Confort</h1>
      <p className='startText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br />
        labore et dolore magna aliqua. Sagittis vitae et leo duis ut diam quam. Felis donec et odio <br />
        pellentesque diam volutpat. Risus ultricies tristique nulla aliquet enim tortor at auctor. <br /> 
        Lacus vestibulum sed arcu non odio. Tortor posuere ac ut consequat semper. Sem integer <br />
        justo eget magna fermentum. Cras pulvinar mattis nunc sed. Tellus pellentesque eu tincidunt <br />
        tortor aliquam nulla facilisi cras fermentum. Ac turpis egestas integer eget aliquet. Ultricies 
        tristique nulla aliquet enim tortor at. Quis enim lobortis scelerisque fermentum dui faucibus. <br />
        Scelerisque varius morbi enim nunc. Velit scelerisque in dictum non. Nisi porta lorem mollis <br />
   </p>
    <ColectieBtn /> 
      </div>
    </div>
    <div className="furnitureTypes">
  <div className="bucatariiOverlay overlayHome hiddenLeft">
    <div className="bucatarii">
    <div className="rightAngleBucatarii">
      <h1 className="bucatariiTitle">Bucatarii</h1>
      <div className="colectieBucatariiBtnDiv">
      <ColectieBucatariiBtn />
      </div>
    </div>
    </div>
  </div>

  <div className="dormitoareOverlay overlayHome hiddenRight">
    <div className="dormitoare">
    <div className="rightAngleDormitoare">
     <h1 className="dormitoareTitle">Dormitoare</h1>
      <div className="colectieDormitoareBtnDiv">
        <ColectieBDormitoareBtn />
      </div> 
    </div>
    </div>
    
  </div>

  <div className="camereDeZiOverlay overlayHome hiddenLeft">
    <div className="camereDeZi">
    <div className="rightAngleCamereDeZi">
    <h1 className="camereDeZiTitle">Camere de Zi</h1>
    <div className="colectieCamereDeZiBtnDiv">
      <ColectieCamereDeZiBtn />
    </div>
    </div>
    </div>
   
  </div>

  <div className="birouriSiComercialeOverlay overlayHome hiddenRight">
    <div className="birouriSiComerciale">
      <div className="rightAngleBsiC">
      <h1 className="BsiCTitle">Birouri</h1>
      <div className="colectieBirouriBtnDiv">
        <ColectieBirouriBtn />
      </div>
      </div>
      </div>
    </div>

</div>
  <div className="secondText">
    <div className="leftSideSTxt hiddenLeft50">
    <p className="startSText">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
        labore et dolore magna aliqua. Sagittis vitae et leo duis ut diam quam. Felis <br />
        pellentesque diam volutpat. Risus ultricies tristique nulla aliquet enim tortor <br /> 
        Lacus vestibulum sed arcu non odio. Tortor posuere ac ut consequat semper. <br />
        justo eget magna fermentum. Cras pulvinar mattis nunc sed. Tellus pellentesque eu tincidunt. <br />
    </p>
    <ColectieBtn2 />
    </div>
    <div className="rightSideSTxt">
         
    </div>
  </div>

 <div className="tataLucrandDiv">
  <div className="tataLucrandOverlay">
    <div className="tataLucrand">
      <h className="tataLucrandTitle">Calitate din 1994</h>
      <p className="tataLucrandText">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br />
        labore et dolore magna aliqua. Sagittis vitae et leo duis ut diam quam. Felis donec et odio <br />
        pellentesque diam volutpat. Risus ultricies tristique nulla aliquet enim tortor at auctor. <br /> 
      </p>
      <DespreNoiBtn />
    </div>
  </div>
  </div>

<div className="footer">
  <div className="footerBarLeftSide">
   <img src={logo} className='logo'></img>
   <p className="copyright">NIC NEL PROD © Toate Drepturile Rezervate</p>
  </div>
  <div className="footerBarRightSide">
    <MailBtn />
    <PhoneBtn />
    <LocationBtn />
  </div>
</div>
</div>
</AnimatedPage>
  )
}

export default HomePage
