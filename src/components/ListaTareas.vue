<template>
    <ul class="list-group">
        <!-- v-bind:class lo que hace es que si tarea.terminada es verdadero, entonces le aplica la clase de css -->
        <li v-for="(tarea, indice) in tareas" :key="tarea.texto" class="list-group-item" v-bind:class="{terminada: tarea.terminada}">
            {{ tarea.texto }}
            <span class="pull-right">
                <button type="button" class="btn btn-success btn-xs glyphicon glyphicon-ok" 
                        @click="estado(indice)">Terminar</button>
            </span>
            <span class="pull-right">
                <button type="button" class="btn btn-danger btn-xs glyphicon glyphicon-ok" 
                    @click="eliminarTarea(indice)">Borrar</button>
            </span>
        </li>
    </ul>
</template>

<script>
import { bus } from '../main.js'

export default {
    props: ['tareas', 'decrementarContador'],
    methods: {
        estado(indice) {
            let terminada = this.tareas[indice].terminada = !this.tareas[indice].terminada
            let id = this.tareas[indice].id

            this.$http.patch('tareas/' + id + '.json', {
                terminada: terminada
            }).then(respuesta => console.log(respuesta))
        },
        eliminarTarea(indice) {
            let id = this.tareas[indice].id
            this.tareas.splice(indice,1)
            // this.decrementarContador()
            bus.$emit('actualizarContador', this.tareas.length)
            this.$http.delete('tareas/' + id + '.json').then(respuesta => console.log(respuesta))
        }
    }
}
</script>

<style scoped>
/* Al poner la palabra scoped, forzamos a que el css sólo se aplique al HTML de este componente */
    .terminada {
        color: gray;
        text-decoration: line-through;
    }
</style>