import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { PaperContext } from './Paper'
import { ChromePicker } from 'react-color'

export default function GroupColorApply() {
    const { groupApply, setGroupApply } = useContext(PaperContext)
    const [colorPickerOpen, toggleColorPicker] = useState(false)

    const enableGroupApply = () => {
        setGroupApply({...groupApply, enable: !groupApply.enable })
    }

    const setGroupApplyColor = (color) => {
        setGroupApply({...groupApply, color })
    }

    return (
        <React.Fragment>
            {/*--- Bulk apply colors to grid without having to toggle each item ---*/}
                <input type='checkbox' id='groupApply' value={groupApply} onClick={enableGroupApply}/>
                <label htmlFor='groupApply'>Enable group color apply</label>

                <div style={groupApplyContainer}>
                    {/*--- Set bulk apply color with sample swatch ---*/}
                    <div style={swatchContainer}>
                        <div style={{ ...sampleSwatch, backgroundColor: groupApply.color.hex }}/>
                    </div>
                    <button
                        style={{ marginLeft: '10px'}}
                        disabled={!groupApply.enable}
                        onClick={() => toggleColorPicker(!colorPickerOpen)}>
                        Select group color
                    </button>
                </div>

                {colorPickerOpen && (
                    <ChromePicker color={groupApply.color} onChange={setGroupApplyColor} />
                )}
        </React.Fragment>
    )
}

const groupApplyContainer = {
    display: 'flex',
    marginTop: '10px'
}

const swatchContainer = {
    height: 20,
    width: 20,
    boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, .2)',
    border: '3px solid white',
}

const sampleSwatch = {
    borderRadius: '3px',
    height: '100%',
    width: '100%',
}