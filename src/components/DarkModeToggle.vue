<script setup lang="ts">
import { watch } from 'vue';



const modeToggle = defineModel({ default: false });
watch(
    () => modeToggle.value,
    (mode) => {
        document.documentElement.setAttribute("data-theme", mode ? "default-dark" : "default")
    }
)

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    modeToggle.value = true;
    document.documentElement.setAttribute("data-theme", "default-dark");
}
</script>

<template>
    <div class="dark-mode-toggle-container">
        <div class="max-width">
            <label class="switch">
                <input type="checkbox" v-model="modeToggle">
                <span class="slider round">
                    <svg id="sun" width="100%" height="100%" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
                            stroke="var(--surface-600)" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <svg id="moon" width="100%" height="100%" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z"
                            stroke="var(--surface-600)" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </span>
            </label>
        </div>
    </div>
</template>

<style scoped lang="scss">
.dark-mode-toggle-container {
    position: fixed;
    top: 1rem;
    left: 0;
    width: 100vw;
    z-index: 2;

    .max-width {
        width: 100%;
        max-width: 1217px;
        margin: 0 auto;
        display: flex;
        justify-content: flex-end;
    }
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

    #sun {
        opacity: 1;
        width: 16px;
        height: 16px;
        position: absolute;
        left: 8px;
        bottom: 8px;
        transition: 0.4s ease;
    }

    #moon {
        opacity: 0;
        transform: rotate(-45deg);
        width: 16px;
        height: 16px;
        position: absolute;
        right: 32px;
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
    #sun {
        opacity: 0;
        transform: rotate(45deg);
        left: 32px;
    }

    #moon {
        opacity: 1;
        right: 7px;
        transform: rotate(0deg);
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