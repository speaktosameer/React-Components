import React from 'react'
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import banner from '../../images/camera.jpg';

const Background= styled.div`
    width: 100%;
    height:100%;
    background:rgba(0,0,0,1);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalWrapper = styled.div`
    width:80%;
    height:80%;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background:#fff;
    color:#000;
    display:grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index:10;
    border-radius:10px;
    margin-bottom:100px;
`;

const ModalImg = styled.img`
    width:100%;
    height:100%;
    background:url(${banner});
    border-radius:10px 0 0 10px;
`;

const ModalContent = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height:1.8;
    color: #1414114;

    p{
        margin-bottom: 1rem;
    }

    button{
        padding:10px 24px;
        background: #141414;
        color:#fff;
        border:none;
    }
`;

const ClosedModalButton = styled(MdClose)`
    cursor:pointer;
    position:absolute;
    top:20px;
    right:20px;
    width:32px;
    height:32px;
    padding:0;
    z-index: 10;
`;

const Modal = ({showModal, setShowModal}) => {
    return (
        <>
            {showModal ? (
                <Background>
                    <ModalWrapper showModal={showModal}>
                        <ModalImg/>
                        <ModalContent>
                            <h1>Are you ready</h1>
                            <p>Get exclusive access to our next launch</p>
                            <button>Join Now</button>
                        </ModalContent>
                        <ClosedModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)}/>
                    </ModalWrapper>
                </Background>

            ): null}
        </>
    )
};

export default Modal
