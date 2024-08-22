import React from 'react';
import { RecoilRoot } from 'recoil';
import GawibawiboHeader from './GawibawiboHeader';
import GawibawiboInput from './GawibawiboInput';
import GawibawiboResult from './GawibawiboResult';


const GawibawiboGame = () => {
    return (
        <RecoilRoot>
            <GawibawiboHeader />
            <GawibawiboInput />
            <GawibawiboResult />
        </RecoilRoot>
    );
};

export default GawibawiboGame;