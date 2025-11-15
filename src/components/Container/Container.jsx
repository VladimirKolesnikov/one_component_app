import './Container.scss';
import { Block } from '../Block';
import { SearchBar } from '../SearchBar/SearchBar';

export const Container = () => {
    return (
        <div className="container">
            <SearchBar />
            <h1>this is container!</h1>
            <Block />
        </div>
    )
};
