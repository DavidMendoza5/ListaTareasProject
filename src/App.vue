<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <!-- Uso de un componente al que se le envían props y uso de la directiva v-bind para crear un enlace simple -->
      <Titulo :titulo="titulo_prop"></Titulo>
      <!-- El mismo nombre que se usa en los props es el mismo que se debe declarar en los props del componente -->
      <NuevaTarea :tareas="tareas"></NuevaTarea>
      <!-- Esto es lo mismo que poner tal cual el nombre del componente, de hecho Vue lo agrega por ti si lo pones de esta forma -->
      <lista-tareas :tareas="tareas"></lista-tareas>
    </div>
  </div>
</template>

<script>
import Titulo from './components/Titulo.vue'
import NuevaTarea from './components/NuevaTarea.vue'
import ListaTareas from './components/ListaTareas.vue'

export default {
  components: { 
    Titulo,
    NuevaTarea,
    ListaTareas
  },
  // Escribir data() {} es lo mismo que data: function() {}
  data() {
    return {
      titulo_prop: 'Lista de tareas',
      tareas: [
        {
          texto: 'Aprender VueJs',
          terminada: false
        },
        {
          texto: 'Aprender NodeJs',
          terminada: false
        },
        {
          texto: 'Aprender ReactJs',
          terminada: false
        }
      ]
    }
  }
}
</script>

<style>

</style>
