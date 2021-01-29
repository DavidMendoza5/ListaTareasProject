<template>
    <div class="input-group">
        <input type="text" placeholder="Escribe una nueva tarea" v-model="nuevaTarea" class="form-control" @keyup.enter="agregarTarea">
        <span class="input-group-btn">
            <button @click="agregarTarea" class="btn btn-primary">Agregar tarea</button>
        </span>
    </div>
</template>

<script>
import { bus } from '../main.js'

export default {
    data() {
        return {
            nuevaTarea: ''
        }
    },
    props: ['tareas'],
    methods: {
        agregarTarea() {
            if(this.nuevaTarea.trim()) {
                let tarea = {
                    texto: this.nuevaTarea.trim(),
                    terminada: false
                }
                this.tareas.push(tarea)
                // El $emit nos permite emitir un evento, recibe 2 parámetros, el primero es el nombre que le queremos dar al evento, luego son argumentos
                // que queramos pasar
                // this.$emit('incrementarContador', 1)
                bus.$emit('actualizarContador', this.tareas.length)
            }
            // Usamos la librería de vue-resource
            // En este caso es un post, recibe como primer parámetro la URL, pero se le debe agregar un nombre que sea de tipo json al final de la URL,
            // el segundo parámetro es la información que se quiere enviar
            // Este llamado regresa una promesa
            this.$http.post('tareas.json', {
                texto: this.nuevaTarea.trim(),
                terminada: false
            }).then(respuesta => console.log(respuesta))
            this.nuevaTarea = ''
        }
    },
    // Esto sirve para que cuando cargue la página tengamos el número de tareas, debido a que el componente titulo no tiene acceso al arreglo tareas
    created() {
        bus.$emit('actualizarContador', this.tareas.length)
    }
}
</script>