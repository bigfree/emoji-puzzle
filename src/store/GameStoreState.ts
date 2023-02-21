import produce from 'immer';
import { create } from 'zustand';

export type GameStoreState = {
    gameRunning: boolean;
    setChangeGameRunning: (state: boolean) => void;
}

const useGameStore = create<GameStoreState>()((set, get) => ({
    gameRunning: false,
    setChangeGameRunning: (state) => {
        set(produce((draft: GameStoreState) => {
            draft.gameRunning = state;
        }));
    },
}));

export default useGameStore;