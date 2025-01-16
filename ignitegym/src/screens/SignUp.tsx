import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base"

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'
import { Input } from "@components/Input"
import { Button } from "@components/Button"

export function SignUp() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>
            <VStack flex={1} bg="gray.700" pb={5}>
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

                <Center px={10}>
                    <Heading
                        color="gray.100"
                        fontSize="xl"
                        mb={6}
                        fontFamily="heading"
                    >
                        Cria sua conta
                    </Heading>
                    <Input
                        placeholder="nome"
                    /> 
                    <Input
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Input
                        placeholder="Senha"
                        secureTextEntry
                    />
                    <Button title="Criar e acessar" />
                </Center>
                <Center px={10} mt={34}>
                    <Button
                        title="Voltar para o login"
                        variant="outline"
                    />
                </Center>
            </VStack>
        </ScrollView>
    )
}