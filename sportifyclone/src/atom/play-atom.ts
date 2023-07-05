import { RecoilState, atom } from "recoil";

export const playState:RecoilState<any> = atom({
    key: "playState",
    default: false
})

export const playTrackState: RecoilState<any> = atom({
    key: "playTrackState",
    default: ""
})