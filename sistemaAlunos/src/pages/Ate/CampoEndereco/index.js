import React from 'react'

import CampoTextoEndereco from '../../../componentes/Core/CampoTextoEndereco'

const CampoEndereco = ({value, onChangeValue}) => {
    return (
       <CampoTextoEndereco 
       value={value}
       onChangeValue={onChangeValue}
       />
    )
}

export default CampoEndereco