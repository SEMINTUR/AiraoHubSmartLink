import { useEffect, useState } from "react";
import {
    Button,
    Container,
    Icon,
    QRButton,
    ShowLink,
    Text,
} from "./styles";

import ReactModal from "react-modal";
import { AiOutlineQrcode } from 'react-icons/ai'

import QRCode from 'react-qr-code'


export function ButtonLink({
    link,
    title,
    icon
}) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Container>
                <Button
                    onClick={() => window.open(link)}
                >
                    <Icon
                        src={icon}
                    />
                    <Text>
                        {title}
                    </Text>
                </Button>

                <QRButton
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Text
                        style={{
                            marginLeft: 0,
                            marginRight: 10
                        }}
                    >
                        Mostrar QRCode
                    </Text>
                    <AiOutlineQrcode
                        size={30}
                    />
                </QRButton>
            </Container>

            <ReactModal
                isOpen={isOpen}
                onRequestClose={
                    ()=>{
                        setIsOpen(!isOpen)
                        document.addEventListener('keydown',)
                    }
                }
                style={{
                    overlay: {
                        display: "flex",
                        flex: 1,
                        backgroundColor: 'rgba(114, 114, 114, 0.23)'
                    },
                    content: {
                        border: 'none',
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: "center",
                        backgroundColor: 'rgb(28, 24, 24)',

                    }
                }}
            >
                <QRCode
                    size={256}
                    value={link}
                />
                <QRButton
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Text
                        style={{
                            marginLeft: 0,
                            marginRight: 10
                        }}
                    >
                        Fechar modal
                    </Text>
                </QRButton>

            </ReactModal>
        </>
    )
}