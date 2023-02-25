import { Emoji } from 'emojibase';
import { Unicode } from 'emojibase/src/types';
import produce from 'immer';
import { nanoid } from 'nanoid';
import { create } from 'zustand';

export type EmojiEntity = {
    id: string;
    emoji: Unicode;
    isOpen: boolean;
}

export type EmojiState = {
    emojis: Emoji[];
    pickEmojis: Emoji[];
}

export type EmojiAction = {
    emojis: Emoji[];
    setAllEmojis: (emojis: Emoji[]) => void;
    getShuffleEmojis: () => EmojiEntity[];
    setPickEmojis: (emoji: Emoji) => void;
    removePickEmojis: () => void;
}

export type EmojiStore = EmojiState & EmojiAction;

const useEmojiStore = create<EmojiStore>()((set, get) => ({
    emojis: [],
    pickEmojis: [],
    setAllEmojis: (emojis: Emoji[]) => {
        set(produce((draft: EmojiStore) => {
            emojis.forEach((emoji: Emoji) => {
                if (
                    emoji.group
                    && emoji.emoji
                    && emoji.version <= 11
                    && emoji.group !== 2
                    && emoji.group !== 8
                    && emoji.group !== 9
                ) {
                    draft.emojis.push(emoji);
                }
            });
        }));
    },
    getShuffleEmojis: () => {
        const tempArray: EmojiEntity[] = [];

        for (let i = 0; i < 20; i++) {
            const randomIndex = Math.floor(Math.random() * get().emojis.length);
            const pickEmoji = get().emojis[randomIndex];

            const emoji = {
                id: nanoid(),
                emoji: pickEmoji.emoji,
                isOpen: false,
            };

            tempArray.push(emoji);
            tempArray.push(emoji);
        }

        return tempArray.sort(() => .5 - Math.random());
    },
}));

export default useEmojiStore;