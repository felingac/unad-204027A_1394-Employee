import EmployeesTable from '@/components/EmployeesTable';
import { getAllEmployees } from '@/services/employees';
import { Typography } from '@mui/material';
import styles from './page.module.css';

export default async function Home() {
  const employees = await getAllEmployees(); 
  return (
    <main className={styles.main}>
      <Typography variant='h4'>
        Employees table
      </Typography>
      <EmployeesTable employees={employees}/>
    </main>
  )
}
