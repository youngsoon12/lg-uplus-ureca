import { CountContext } from './ContextAPI/CountContext';
import { useContext } from 'react';
const A = () => {
    const {count }= useContext(CountContext);
    return (
        <div>
            {count}
        </div>
    );
};

export default A;