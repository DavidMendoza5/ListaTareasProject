<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <!-- Uso de un componente al que se le envían props y uso de la directiva v-bind para crear un enlace simple -->
      <Titulo :titulo="titulo_prop"></Titulo>
      Tareas: {{ numTareas }}
      <!-- El mismo nombre que se usa en los props es el mismo que se debe declarar en los props del componente -->
      <!-- El $event sirve para obtener el valor que retorna el evento que solicitamos, en este caso es un 1 -->
      <NuevaTarea :tareas="tareas" v-on:incrementarContador="numTareas+=$event"></NuevaTarea>
      <!-- Esto es lo mismo que poner tal cual el nombre del componente, de hecho Vue lo agrega por ti si lo pones de esta forma -->
      <lista-tareas :tareas="tareas" :decrementarContador="decrementarContador" ></lista-tareas>
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
      numTareas: 3,
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
  },
  methods: {
    decrementarContador() {
      return this.numTareas--
    }
  }
}
</script>

<style>

</style>
