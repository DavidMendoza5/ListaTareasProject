<template>
    <div class="input-group">
        <input type="text" placeholder="Escribe una nueva tarea" v-model="nuevaTarea" class="form-control" @keyup.enter="agregarTarea">
        <span class="input-group-btn">
            <button @click="agregarTarea" class="btn btn-primary">Agregar tarea</button>
        </span>
    </div>
</template>

<script>
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
                this.$emit('incrementarContador', 1)
            }
            this.nuevaTarea = ''
        }
    }
}
</script>