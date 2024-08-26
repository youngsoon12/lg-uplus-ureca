import { atom } from "recoil";

const listSwitch = atom({
    key: "listInfo",
    default: {
        toggle: false,
        update:false,
    },
});

export default listSwitch;