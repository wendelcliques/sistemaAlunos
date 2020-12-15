import React from 'react'

import CampoTextoPhone2 from '../../../componentes/Core/CampoTextoPhone2'

const CampoPhone2 = ({value, onChangeValue}) => {
    return (
       <CampoTextoPhone2 
       value={value}
       onChangeValue={onChangeValue}
       />
    )
}

export default CampoPhone2