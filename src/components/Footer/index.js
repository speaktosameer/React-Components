import React from 'react'
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
 } from './FooterElement';
 import { FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">About</FooterLink>
                                <FooterLink to="/signin">Carrer</FooterLink>
                                <FooterLink to="/signin">Blog</FooterLink>
                                <FooterLink to="/signin">School</FooterLink>
                                <FooterLink to="/signin">Site Map</FooterLink>
                                <FooterLink to="/signin">Direction</FooterLink>
                                <FooterLink to="/signin">Location</FooterLink>

                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Terms</FooterLinkTitle>
                                <FooterLink to="/signin">Privacy Policy</FooterLink>
                                <FooterLink to="/signin">Terms & Consition</FooterLink>
                                <FooterLink to="/signin">Copyright</FooterLink>
                                <FooterLink to="/signin">Fees</FooterLink>
                                <FooterLink to="/signin">Charges</FooterLink>
                                <FooterLink to="/signin">Tax</FooterLink>
                                <FooterLink to="/signin">Recahrge</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Jobs</FooterLinkTitle>
                                <FooterLink to="/signin">Jobs in Nepal</FooterLink>
                                <FooterLink to="/signin">Job in Kerela</FooterLink>
                                <FooterLink to="/signin">Job in India</FooterLink>
                                <FooterLink to="/signin">Job in Uk</FooterLink>
                                <FooterLink to="/signin">Job in Qatar</FooterLink>
                                <FooterLink to="/signin">Job in Dubai</FooterLink>
                                <FooterLink to="/signin">Job in China</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Vacancy</FooterLinkTitle>
                                <FooterLink to="/signin">Civil Engineer</FooterLink>
                                <FooterLink to="/signin">Electrical Enginner</FooterLink>
                                <FooterLink to="/signin">Mechanical Engineer</FooterLink>
                                <FooterLink to="/signin">Computer Engineer</FooterLink>
                                <FooterLink to="/signin">Full Stack Developer</FooterLink>
                                <FooterLink to="/signin">Back End Developer</FooterLink>
                                <FooterLink to="/signin">Front End Developer</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            tutor
                        </SocialLogo>
                        <WebsiteRights>tutor © {new Date().getFullYear()} All rights reservered. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                            <SocialIconLink href="//www.youtube.com/" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink>
                            <SocialIconLink href="//www.twitter.com/" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com/" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
