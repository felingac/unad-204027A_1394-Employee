import React from 'react';
import EmployeeForm from '@/components/CreateEmployee'; // Importa tu componente de formulario de empleados
import getDb from '@/services/employees';

function CreateEmployeePage() {
  return (
    <div>
      <h1>Crear Empleado</h1>
      <EmployeeForm db={getDb}/>
    </div>
  );
}

export default CreateEmployeePage;
