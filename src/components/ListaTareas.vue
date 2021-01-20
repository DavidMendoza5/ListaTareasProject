<template>
    <ul class="list-group">
        <!-- v-bind:class lo que hace es que si tarea.terminada es verdadero, entonces le aplica la clase de css -->
        <li v-for="tarea in tareas" :key="tarea.texto" class="list-group-item" v-bind:class="{terminada: tarea.terminada}">
            {{ tarea.texto }}
            <span class="pull-right">
                <button type="button" class="btn btn-success btn-xs glyphicon glyphicon-ok" 
                        @click="tarea.terminada = !tarea.terminada">Terminar</button>
            </span>
            <span class="pull-right">
                <button type="button" class="btn btn-danger btn-xs glyphicon glyphicon-ok" 
                    @click="eliminarTarea(tarea)">Borrar</button>
            </span>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['tareas', 'decrementarContador'],
    methods: {
        eliminarTarea(tarea) {
            let indice = this.tareas.indexOf(tarea)
            this.tareas.splice(indice,1)
            this.decrementarContador()
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