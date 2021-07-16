import React from 'react'
import { SidebarContainer,Icon,CloseIcon,SidebarWrapper,SideBtnWrap,SidebarMenu,SidebarLink,SidebarRoute} from './SidebarElement'

const Sidebar = ({isOpen,toogle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toogle}>
            <Icon onClick={toogle}>
                <CloseIcon/>
            </Icon>
        <SidebarWrapper>
            <SidebarMenu>                
                <SidebarLink to="findtutor" onClick={toogle}>Find Tutor</SidebarLink>
                <SidebarLink to="howitwork" onClick={toogle}>How It Works</SidebarLink>
                <SidebarLink to="becometutor" onClick={toogle}>Become Tutor</SidebarLink>
                <SidebarLink to="about" onClick={toogle}>About</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/login">
                    Log In
                </SidebarRoute>
            </SideBtnWrap>
            <SideBtnWrap>
            <SidebarRoute to="/signup">
                    Sign Up
                </SidebarRoute>
            </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
