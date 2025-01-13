import { VStack, Image, Text, Center, Heading } from "native-base"

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'

export function SignIn() {
    return (
        <VStack flex={1} bg="gray.700">
            <Image
                source={BackgroundImg}
                alt="Pessoas treinando"
                resizeMode="stretch"
                position="absolute"
            />

            <Center bg="red.400" my={24}>
                <LogoSvg />

                <Text color="gray.100" fontSize="sm">
                    Treine sua mente e o seu corpo
                </Text>
            </Center>

            <Center>
                <Heading
                    bg="red.500" 
                    color="gray.100"
                    fontSize="xl"
                    mb={6}
                    fontFamily="heading"
                >
                    Acesse sua conta
                </Heading>
            </Center>
        </VStack>
    )
}