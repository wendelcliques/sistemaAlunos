import React from 'react'

import CampoTextoPhone1 from '../../../componentes/Core/CampoTextoPhone1'

const CampoPhone1 = ({value, onChangeValue}) => {
    return (
       <CampoTextoPhone1 
       value={value}
       onChangeValue={onChangeValue}
       />
    )
}

export default CampoPhone1