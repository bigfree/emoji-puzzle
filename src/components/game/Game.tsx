import { FC } from 'react';
import useEmojiStore from '../../store/EmojiStore';

const Game: FC = (): JSX.Element => {
    const getEmojisForGame = useEmojiStore((state) => state.getShuffleEmojis);

    return (
        <div>
            {getEmojisForGame().map((emoji, number) => (
                <span key={number}>{emoji.emoji}</span>
            ))}
        </div>
    )
}

export default Game;