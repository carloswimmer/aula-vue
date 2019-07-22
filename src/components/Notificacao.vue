<template>
    <div>
        <div class="alert alert-success" role="alert">
        {{ mensagem }}
        </div>
    </div>
</template>

<script>
export default {
    
    props: {
        mensagem: ''
    }
}
</script>

