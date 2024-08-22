import { atom } from 'recoil';

const gameResult = atom({
    key: 'gameResult',
    default: {
        player: '',
        computer: '',
    },
})

export default gameResult;