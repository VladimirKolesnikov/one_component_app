import './Container.scss';
import { Block } from '../Block';
import { SearchBar } from '../SearchBar/SearchBar';
import { Sandbox2 } from '../../../Sandbox2';

export const Container = () => {
    return (
        <div className="container">
            <SearchBar />
            <h1>this is container!</h1>
            <Block />
            <Sandbox2 />
        </div>
    )
};
