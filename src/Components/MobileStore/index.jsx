import {
    Container,
    Icon,
} from "./styles";


export function MobileStore({
    link,
    icon
}) {
    return (
        <Container
            onClick={() => window.open(link)}
        >
            <Icon
                src={icon}
            />
            Abrir na loja
        </Container>
    )
}