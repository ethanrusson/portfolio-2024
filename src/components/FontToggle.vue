<script setup lang="ts">
import { watch } from 'vue';

const fontToggle = defineModel({ default: false });
watch(
    () => fontToggle.value,
    (isSans) => {
        document.documentElement.setAttribute("data-font", isSans ? "sans" : "serif")
    }
)
</script>

<template>
    <div class="font-toggle-container">
        <label class="switch">
            <input type="checkbox" v-model="fontToggle">
            <span class="slider round">
                <span id="serif">Aa</span>
                <span id="sans">Aa</span>
            </span>
        </label>
    </div>
</template>

<style scoped lang="scss">
.font-toggle-container {
    position: fixed;
    top: 1rem;
    right: 4.5rem;
    width: 100vw;
    z-index: 2;
    display: flex;
    justify-content: flex-end;
}

.switch {
    display: block;
    position: relative;
    width: 64px;
    height: 33px;
    margin-right: 1rem;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }
}

.slider {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--surface-100);
    -webkit-transition: .4s;
    transition: .4s;
    border: var(--glass-border);
    box-shadow: var(--glass-inner-shadow);

    #serif {
        opacity: 1;
        font-family: "p22-mackinac-pro", serif;
        font-size: 14px;
        color: var(--surface-600);
        position: absolute;
        left: 7px;
        bottom: 8px;
        transition: 0.4s ease;
    }

    #sans {
        opacity: 0;
        font-family: "articulat-cf", sans-serif;
        font-size: 14px;
        color: var(--surface-600);
        position: absolute;
        right: 33px;
        bottom: 8px;
        transition: 0.4s ease;
    }
}

.slider:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 4px;
    background-color: var(--surface-0);
    -webkit-transition: .4s;
    transition: .4s;
    display: flex;
    align-items: center;
    justify-content: center;
}

input:focus+.slider {
    border-color: var(--surface-0);
}

input:checked+.slider:before {
    -webkit-transform: translateX(32px);
    -ms-transform: translateX(32px);
    transform: translateX(32px);
}

input:checked+.slider {
    #serif {
        opacity: 0;
        left: 32px;
    }

    #sans {
        opacity: 1;
        right: 7px;
    }
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>