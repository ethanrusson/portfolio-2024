<script setup lang="ts">
const horizontalLines = 24;
const verticalLines = 32;
</script>

<template>
    <div class="grid-background-container horizontal">
        <span v-for="(line, index) in horizontalLines" :style="{ opacity: 1 - 0.1 * index }"></span>
    </div>
    <div class="grid-background-container vertical">
        <span v-for="line in verticalLines"></span>
    </div>
</template>

<style scoped lang="scss">
.grid-background-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: -2;
    display: flex;
    opacity: var(--background-opacity);

    &.horizontal {
        flex-direction: column;
        top: 2rem;

        span {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100vw;
            min-height: 4rem;

            &::after {
                content: "";
                display: block;
                position: absolute;
                width: 100%;
                height: 0.5px;
                background: var(--grid-background-color);
                transition: 0.4s ease;
            }

            &:hover:after {
                height: 2px;
            }
        }
    }

    &.vertical {
        flex-direction: row;

        span {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            min-width: 4rem;
            height: 100vh;

            &::after {
                content: "";
                display: block;
                position: absolute;
                width: 0.5px;
                height: 100%;
                background: linear-gradient(var(--grid-background-color), var(--surface-100));
                transition: 0.4s ease;
            }

            &:hover:after {
                width: 2px;
            }
        }
    }
}
</style>