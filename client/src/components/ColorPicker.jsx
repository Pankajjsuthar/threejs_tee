import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'


const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
        presetColors={[
          '#ffc0cb', '#003366', '#ff4040', '#ffb6c1',
          '#ffa500', '#f08080', '#ff7f50', '#ffb6c1'
        ]}
      />
    </div>
  )
}

export default ColorPicker