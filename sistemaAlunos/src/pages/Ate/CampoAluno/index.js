import React from 'react'

import CampoTextoAluno from '../../../componentes/Core/CampoTextoAluno'

const CampoAluno = ({value, onChangeValue}) => {
    return (
       <CampoTextoAluno 
       value={value}
       onChangeValue={onChangeValue}
       />
    )
}

export default CampoAluno