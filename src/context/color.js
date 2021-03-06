import { createContext } from 'react';

const ColorContext = createContext({
    state: { color: 'black', subcolor: 'red' },
    action: {
        setColor: () => { },
        setSubColor: () => { }
    }
});

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubColor] = useState('red');

    const value = {
        state: { color, subcolor },
        actions: { setColor, setSubColor }
    };

    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    )
}
const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };


export default ColorContext;