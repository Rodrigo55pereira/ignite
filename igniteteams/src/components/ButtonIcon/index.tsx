import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, ButtonIconTypeStyleProps } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
    /**
     * keyof typeof MaterialIcons.glyphMap
        
        Vamos entender:

        MaterialIcons - é uma biblioteca de ícones.
        glyphMap - é um objeto dentro de MaterialIcons que contém todos os nomes de ícones disponíveis (como home, menu, search, etc.).
        typeof MaterialIcons.glyphMap - pega o tipo desse objeto.
        keyof significa: "Pega apenas as chaves do objeto". No caso, as chaves são os nomes dos ícones disponíveis.
        
        Resumindo: A propriedade icon só pode receber como valor o nome de um ícone que exista no MaterialIcons.glyphMap.
     
    */
    icon: keyof typeof MaterialIcons.glyphMap
    type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({ icon , type = 'PRIMARY', ...rest }: Props) {
    return (
        <Container {...rest}>
            <Icon 
                name={icon}
                type={type} 
            />
        </Container>
    )
}

