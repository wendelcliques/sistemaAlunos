import React from 'react'


import CampoTextoAluno from '../../../componentes/Core/CampoTextoAluno';


const AdministradorCampoAluno = ({value, onChangeValue}) => {
    return (

        <CampoTextoAluno 
        value={value}
        onChangeValue={onChangeValue}
        />
       
        
    )
}

export default AdministradorCampoAluno
