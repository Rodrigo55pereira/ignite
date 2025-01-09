import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppError } from "src/utils/AppError";

import { PLAYER_COLLECTION } from "@storage/storageConfig";

import { PlayerStorageDTO } from './playerStorageDTO';

import { playersGetByGroup } from './playersGetByGroup';

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string){
    try {
        const storedPlayers = await playersGetByGroup(group)

        const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name)

        if (playerAlreadyExists.length > 0){
            throw new AppError('Essa pessoa já está adicionada em um time aqui.')
        }

        /*
            @ignite-teams:players-rocket: []
            @ignite-teams:players-amigos: []
            @ignite-teams:players-ignite: []
        */

        const storage = JSON.stringify([...storedPlayers, newPlayer])

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
    } catch (error) {
        throw error
    }
}

