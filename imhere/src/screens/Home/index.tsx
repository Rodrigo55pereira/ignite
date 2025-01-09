import { useState } from 'react'

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert
} from 'react-native'
import { styles } from './styles'

import { Participant } from '../../components/Participant'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState<string>('')

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante existe", `Já existe um participante na lista com o nome ${participantName}.`)
    }

    setParticipants(prevState => [...prevState, participantName])
    // ['João'] => ['João', 'Ana']
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {

    Alert.alert("Remover", `Deseja remover o participante ${name} ?`,
      [
        {
          text: "sim",
          onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ])
  }



  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 12 de Dezembro de 2024.
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor="#6B6B6B"
          //onChangeText={text => setParticipantName(text)}
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? {"\n"} Adicione participantes a sua lista de presença.
          </Text>
        )}
      />

    </View>
  )
}