<template>
    <h2>{{ titulo }}</h2>
</template>

<script>
export default {
    // Los props debe llevar el mismo nombre que el atributo que se envía desde el componente padre, al igual que al hacer la interpolación
    // debe tener el mismo nombre
    props: ['titulo']
}
</script>