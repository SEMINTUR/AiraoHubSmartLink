import {
    Container,
    Icon,
    ShowLink,
    Text,
} from "./styles";


export function ButtonLink({
    link,
    title,
    icon
}) {
    return (
            <Container
                onClick={() => window.open(link)}
            >
                <Icon
                    src={icon}
                />
                <Text>
                    {title}
                </Text>

            </Container>
    )
}