import { css } from '@emotion/react';
import { FC } from 'react';
import useEmojiStore from '../../../store/EmojiStore';
import Card from '../card/Card';

const Board: FC = (): JSX.Element => {
    const getEmojisForGame = useEmojiStore((state) => state.getShuffleEmojis);

    return (
        <div css={css({
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            maxWidth: '920px'
        })}>
            {getEmojisForGame().map((emoji, number) => (
                <Card emoji={emoji} key={number}/>
            ))}
        </div>
    );
};

export default Board;