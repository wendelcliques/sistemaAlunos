import React from 'react'


import CampoTextoAlunoP from '../../../componentes/Core/CampoTextoAlunoP';


const AdministradorCampoAluno = ({value, onChangeValue}) => {
    return (

        <CampoTextoAlunoP 
        value={value}
        onChangeValue={onChangeValue}
        />
       
        
    )
}

export default AdministradorCampoAluno
