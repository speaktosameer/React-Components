import React , {useState} from 'react'
import styled from 'styled-components';
import Modal from './Modal';
import { ModalStyle } from './ModalStyle';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Button = styled.button`
    min-width: 100px;
    padding: 16px 32px;
    border-radius: 4px;
    border: none;
    background: #141414;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
`

const HomeSection = () => {
    const [showModal,setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }
    return (
        <>
            <Container>
                <Button onClick={openModal}>I am Modal</Button>
                <Modal showModal={showModal} setShowModal={setShowModal}/>
                <ModalStyle/>
            </Container>
        </>
    )
}

export default HomeSection
