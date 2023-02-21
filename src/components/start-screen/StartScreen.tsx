import emojis from 'emojibase-data/en/data.json';
import { FC } from 'react';
import useEmojiStore from '../../store/EmojiStore';
import useGameStore from '../../store/GameStoreState';

const StartScreen: FC = (): JSX.Element => {
    const setAllEmojis = useEmojiStore((state) => state.setAllEmojis);
    const setChangeGameRunning = useGameStore((state) => state.setChangeGameRunning);
    const handleNewGame = () => {
        setAllEmojis(emojis);
        setChangeGameRunning(true);
    };

    return (
        <div>
            Start screen
            <button onClick={handleNewGame}>New game</button>
        </div>
    );
};

export default StartScreen;