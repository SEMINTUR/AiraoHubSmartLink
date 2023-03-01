import { useEffect, useState } from "react";
import {
    Button,
    Container,
    Icon,
    LabelStore,
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
                    () => {
                        setIsOpen(!isOpen)
                        document.addEventListener('keydown',)
                    }
                }
                style={{
                    overlay: {
                        display: "flex",
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: 'rgba(114, 114, 114, 0.23)'
                    },
                    content: {
                        position: "static",
                        display: "flex",
                        flex: 0.5,
                        flexDirection: "column",
                        alignItems: 'center',
                        justifyContent: "center",
                        border: 'none',
                        backgroundColor: 'rgb(28, 24, 24)',

                    }
                }}
            >
                <QRButton
                    onClick={() => setIsOpen(!isOpen)}
                >
                    X
                </QRButton>

                <QRCode
                    size={256}
                    value={link}
                />

                <LabelStore>
                    <Icon
                        src={icon}
                    />
                    <Text>
                        {title}
                    </Text>
                </LabelStore>

            </ReactModal>
        </>
    )
}