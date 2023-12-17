import './styles/PoliticaDeConfidentialitatePage.css';
import AnimatedPage from './components/animations/AnimationPage';
import logo from "./assets/logo2.png";
import { LocationBtn, MailBtn, PhoneBtn } from './Buttons';

const PoliticaDeConfidentialitatePage = () => {

  return ( 
    <AnimatedPage>
     <div className="politicaDeConfidentialitateDivPG">
      <h className="politicaDeConfidentialitateTitle">Politica de Confidentialitate</h>
      <p className="politicaDeConfidentialitateTextPG">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br />
        labore et dolore magna aliqua. Sagittis vitae et leo duis ut diam quam. Felis donec et odio 
        pellentesque diam volutpat. Risus ultricies tristique nulla aliquet enim tortor at auctor. <br /> <br />
        Lacus vestibulum sed arcu non odio. Tortor posuere ac ut consequat semper. Sem integer vitae 
        justo eget magna fermentum. Cras pulvinar mattis nunc sed. Tellus pellentesque eu tincidunt <br />
        tortor aliquam nulla facilisi cras fermentum. Ac turpis egestas integer eget aliquet. Ultricies 
        tristique nulla aliquet enim tortor at. Quis enim lobortis scelerisque fermentum dui faucibus in. <br /> <br /> 
        Scelerisque varius morbi enim nunc. Velit scelerisque in dictum non. Nisi porta lorem mollis 
        aliquam ut porttitor leo a. Venenatis urna cursus eget nunc scelerisque viverra. Viverra ipsum <br /> <br />
        nunc aliquet bibendum enim facilisis. Mollis nunc sed id semper risus in hendrerit gravida. 
        Turpis tincidunt id aliquet risus. Interdum velit euismod in pellentesque. Malesuada fames ac turpis <br />
         egestas maecenas pharetra convallis posuere morbi. Iaculis nunc sed augue lacus viverra. Nunc sed 
         velit dignissim sodales ut. Mauris augue neque gravida in fermentum. 
         aliquam ut porttitor leo a. Venenatis urna cursus eget nunc scelerisque viverra. Viverra ipsum <br /> <br />
        nunc aliquet bibendum enim facilisis. Mollis nunc sed id semper risus in hendrerit gravida. 
        Turpis tincidunt id aliquet risus. Interdum velit euismod in pellentesque. Malesuada fames ac turpis <br />
         egestas maecenas pharetra convallis posuere morbi. Iaculis nunc sed augue lacus viverra. Nunc sed 
         velit dignissim sodales ut. Mauris augue neque gravida in fermentum. <br />
      </p>
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
     </AnimatedPage>
  )
}

export default PoliticaDeConfidentialitatePage
