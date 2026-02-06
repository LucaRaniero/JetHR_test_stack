<script setup>
// 1. IMPORT
import { ref, onMounted } from 'vue' // Strumenti base di Vue
import axios from 'axios'             // Il nostro client HTTP

// 2. STATE (La "Memoria Temporanea")
// ref([]) crea una lista reattiva vuota.
// Se aggiorniamo questa lista, l'HTML si aggiorna da solo (Magic!).
const employees = ref([])
const loading = ref(true)
const error = ref(null)

// 3. LA "QUERY" (Data Fetching)
// onMounted è come un "Trigger ON LOAD". Parte appena il componente appare a video.
onMounted(async () => {
  try {
    // Chiamata GET all'API (Notare che usiamo localhost:8000 perché è il BROWSER che chiama)
    const response = await axios.get('http://localhost:8000/api/employees/')
    
    // L'API di Django restituisce il JSON dentro ".data"
    employees.value = response.data 
    console.log("Dati ricevuti:", employees.value) // Guarda nella console del browser (F12)
  } catch (err) {
    console.error("Errore API:", err)
    error.value = "Impossibile caricare i dati. Il backend è acceso?"
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="container">
    <h1>Jet HR - Employee Dashboard</h1>
    
    <div v-if="loading" class="status">Caricamento dati in corso...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <table v-if="!loading && !error">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Data Assunzione</th>
          <th>Stipendio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emp in employees" :key="emp.id">
          <td>{{ emp.id }}</td>
          <td>{{ emp.first_name }} {{ emp.last_name }}</td>
          <td>{{ emp.email }}</td>
          <td>{{ emp.hire_date }}</td>
          <td class="money">€ {{ emp.salary }}</td> 
        </tr>
      </tbody>
    </table>
    
    <div v-if="!loading && employees.length === 0">
      Nessun dipendente trovato. Vai su Django Admin per aggiungerne uno!
    </div>
  </div>
</template>

<style scoped>
/* Un po' di CSS base per non far sanguinare gli occhi */
.container { font-family: sans-serif; max-width: 800px; margin: 2rem auto; }
table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
th, td { text-align: left; padding: 12px; border-bottom: 1px solid #ddd; }
th { background-color: #f4f4f4; }
.money { font-family: monospace; font-weight: bold; text-align: right; }
.error { color: red; font-weight: bold; }
.status { color: #666; font-style: italic; }
</style>