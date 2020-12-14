import React from 'react'

import CampoTextoClasse from '../../../componentes/Core/CampoTextoClasse'

const CampoClasse = ({value, onChangeValue}) => {
    return (
       <CampoTextoClasse 
       value={value}
       onChangeValue={onChangeValue}
       />
    )
}

export default CampoClasse
