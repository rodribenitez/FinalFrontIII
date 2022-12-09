import React, {useContext} from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TikTokIcon from "./TikTikIcon";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Footer = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  return (
    <div>
      
        {/* <img src="./images/DH.png" alt="" />
          <div>
            <img src="./images/ico-facebook.png" alt="" />
            <img src="./images/ico-instagram.png" alt="" />
            <img src="./images/ico-tiktok.png" alt="" />
            <img src="./images/ico-whatsapp.png" alt="" />
          </div> */}
        <div style={{ background: "red", with: "100%" }}>
          <p
            className="back-to-top"
            style={{textAlign : "center" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            VOLVER HACIA ARRIBA
          </p>
        </div>
        <footer style={{ background : state.bgColor }}>
          <img style={{ width: "200px"}} src="/images/DH.png" alt="DH-logo" />
       
          <div>
            <img src="./images/ico-facebook.png" alt="" />
            <img src="./images/ico-instagram.png" alt="" />
            <img src="./images/ico-tiktok.png" alt="" />
            <img src="./images/ico-whatsapp.png" alt="" />
          </div>
       
      </footer>
    </div>
  );
};

export default Footer;
