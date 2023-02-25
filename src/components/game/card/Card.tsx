import { css } from '@emotion/react';
import { FC } from 'react';
import { EmojiEntity } from '../../../store/EmojiStore';

export type CardProps = {
    emoji: EmojiEntity;
}

const Card: FC<CardProps> = ({emoji}): JSX.Element => {
    return (
        <div css={css({
            flex: '1 1 20%',
            display: 'flex',
            alignItems: 'center',
        })}>
            {emoji.emoji}
        </div>
    );
}

export default Card;