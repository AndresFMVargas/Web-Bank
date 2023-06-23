import React from "react";
import styles from "./Footer.module.css"; // Importa el archivo CSS
import imagenes from "../assets/imagenes";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.sectionFooter} ${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={imagenes.Logo}
          alt="PokeApi"
          className={`${styles.footerLogo}`}
        />
      </div>

      <div className={`${styles.footerLinks} flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10`}>
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`${styles.footerLink} flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className={`${styles.footerLinkTitle}`}>
              {footerlink.title}
            </h4>
            <ul className={`${styles.footerLinkList}`}>
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`${styles.footerLinkItem} ${index !== footerlink.links.length - 1 ? styles.footerLinkItemMargin : ''
                    }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className={`${styles.footerBottom} w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]`}>
      <p className={`${styles.footerText}`}>
        Copyright Ⓒ 2023 Bankoftierras. All Rights Reserved.
      </p>

      <div className={`${styles.footerSocialIcons}`}>
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`${styles.footerSocialIcon} ${index !== socialMedia.length - 1 ? styles.footerSocialIconMargin : ''
              }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

Footer.propTypes = {};

export default Footer;
