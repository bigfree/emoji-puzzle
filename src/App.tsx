import { css, Global } from '@emotion/react';
import { FC, Fragment } from 'react';
import Game from './components/game/Game';
import StartScreen from './components/start-screen/StartScreen';
import useGameStore from './store/GameStoreState';

const App: FC = (): JSX.Element => {
    const isGameRunning = useGameStore((store) => store.gameRunning);

    return (
        <Fragment>
            <Global styles={css({
                'html, body': {
                    padding: 0,
                    margin: 0,
                },
                '*': {
                    boxSizing: 'border-box',
                },
            })}/>
            {isGameRunning ? <Game/> : <StartScreen/>}
        </Fragment>
    );
};

export default App;
