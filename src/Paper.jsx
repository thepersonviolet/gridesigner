import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, ResizeGraph, GroupColorApply, Erase } from './views/Grid'
import { RecentColors, Header, Footer } from './views'

export const PaperContext = React.createContext({})
export const defaultGroupColorState = { color: { hex: '' }, enable: false }
export const defaultSize = { rows: 14, cols: 47 }

export default function Paper() {
    const [usedColors, setUsedColors] = useState([])
    const [groupApply, setGroupApply] = useState(defaultGroupColorState)
    const [graphSize, setGraphSize] = useState(defaultSize)
    const [eraseEnabled, setEraseEnabled] = useState(false)

    const contextValue = {
        usedColors,
        setUsedColors,
        groupApply,
        setGraphSize,
        graphSize,
        setGroupApply,
        eraseEnabled,
        setEraseEnabled
    }

    return (
        <PaperContext.Provider value={contextValue}>
            <div style={container}>
                <div style={body}>
                    <Header />

                    <div style={colorFeatures}>
                        <GroupColorApply />
                        <Erase />
                    </div>

                    <Grid />

                    <div style={gridFeatures}>
                        <RecentColors />
                        <ResizeGraph />
                    </div>
               </div>
           </div>
        </PaperContext.Provider>
    );
}

const container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    // backgroundColor: '#ece9d4',
    // backgroundColor: '#ac9600',
    fontFamily: 'Poppins',
    fontSize: '14px',
}

const body = {
    display: 'flex',
    flexDirection: 'column',
    height: 1280,
    width: 800,
}

const colorFeatures = {
    display: 'flex',
    justifyContent: 'space-between',
    height: 40,
    width: '100%',
    marginTop: 20,
}

const gridFeatures = {
    display: 'flex',
    marginTop: 20
}

Paper.propTypes = {
};

// backgroundColor: '#ecd6d0'