import { VStack, Image, Text, Center, Heading } from "native-base"

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'
import { Input } from "@components/Input"
import { Button } from "@components/Button"

export function SignIn() {
    return (
        <VStack flex={1} bg="gray.700">
            <Image
                source={BackgroundImg}
                alt="Pessoas treinando"
                resizeMode="cover"
                position="absolute"
                top={0}
                bottom={0}
                left={0}
                right={0}
            />

            <Center my={24}>
                <LogoSvg />
                <Text color="gray.100" fontSize="sm">
                    Treine sua mente e o seu corpo
                </Text>
            </Center>

            <Center px={10} bg="red.100">
                <Heading
                    color="gray.100"
                    fontSize="xl"
                    mb={6}
                    fontFamily="heading"
                >
                    Acesse sua conta
                </Heading>
                <Input 
                    placeholder="E-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Input 
                    placeholder="Senha"
                    secureTextEntry
                />
                <Button title="Acessar" />
            </Center>
            <Center px={10}>
                <Button title="Criar Conta" variant="outline"/>
            </Center>
        </VStack>
    )
}