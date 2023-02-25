import produce from 'immer';
import { create } from 'zustand';
import { EmojiEntity } from './EmojiStore';

export type PickState = {
    emojis: EmojiEntity[];
}

export type PickActions = {
    setEmoji: (emoji: EmojiEntity) => void;
    compareEmojis: () => void;
    removeAllEmojis: () => void;
}

export type PickStore = PickState & PickActions;

const usePickStore = create<PickStore>()((set, get) => ({
    emojis: [],
    compareEmojis: () => {

    },
    removeAllEmojis: () => {
        set(produce((draft: PickStore) => {
            draft.emojis = [];
        }));
    },
}));

export default usePickStore;