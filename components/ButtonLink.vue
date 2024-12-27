<script setup>
    const props = defineProps({
        mainText: {
            type: String,
        },
        withBg: {
            type: Boolean,
            default: false
        },
        withBg2: {
            type: Boolean,
            default: false
        },
        withBo2: {
            type: Boolean,
            default: false
        },
        withoutBorder: {
            type: Boolean,
            default: false
        },
        widthFull: {
            type: Boolean,
            default: false
        },
        widthProps: {
            type: Boolean,
            default: false
        }    
    })

    const emit = defineEmits(['handle-click'])

    function handleClicking() {
        emit('handle-click')
    }
</script>

<template>
    <button @click="handleClicking" 
            class="custom-button" 
            :class="{ 'custom-button--with-bg': withBg, 
                      'custom-button--with-bg2': withBg2,
                      'custom-button--with-border2': withBo2,
                      'custom-button--without-border': withoutBorder, 
                      'custom-button--width-full': widthFull,
                      'custom-button--width-props': widthProps
                       }">
        <p class="button-text">{{ mainText }}</p>
    </button>
</template>
