<template>
    <div>
        <h2>{{ titulo }}</h2>
        Tareas: {{ numTareas }}
    </div>
</template>

<script>
import { bus } from '../main.js'

export default {
    // Los props debe llevar el mismo nombre que el atributo que se envía desde el componente padre, al igual que al hacer la interpolación
    // debe tener el mismo nombre
    // Se usan objetos cuando se quieren hacer validaciones, en este caso le decimos a Vue que si no recibe ninguna prop, ponga por defecto Tareas
    props: {
        titulo: {
            type: String,
            default: 'Tareas'
        }
    },
    data() {
        return {
            numTareas: 0
        }
    },
    created() {
        // El escucha de eventos recibe el nombre del evento y una función de lo que debe realizar
        bus.$on('actualizarContador', (contTareas) => {
            this.numTareas = contTareas
        })
    }
}
</script>