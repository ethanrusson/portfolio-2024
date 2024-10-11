<script setup lang="ts">
import ProjectsDataInterface from '../ProjectsData.ts';

const props = defineProps<{
    item: ProjectsDataInterface
}>()
</script>

<template>
    <a :href="item.url" target="_blank" class="projects-item flex-column">
        <div class="projects-item-thumbnail">
            <img :src="item.thumbnail" />
            <ul class="tags-wrapper tag-list gap-05">
                <li v-for="skill of item.skills" class="tag">
                    {{ skill }}
                </li>
            </ul>
            <div class="open-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 -960 960 960" width="64">
                    <path
                        d="M680-624 244-188q-11 11-28 11t-28-11q-11-11-11-28t11-28l436-436H400q-17 0-28.5-11.5T360-720q0-17 11.5-28.5T400-760h320q17 0 28.5 11.5T760-720v320q0 17-11.5 28.5T720-360q-17 0-28.5-11.5T680-400v-224Z" />
                </svg>
            </div>
        </div>

        <h3>{{ item.title }}</h3>
    </a>
</template>

<style scoped lang="scss">
.projects-item {
    width: calc(14rem + calc(var(--spacingMultiplier) * 8));
    height: 16rem;
    background-color: rgba(var(--surface-0-opacity), 0.5);
    border: var(--glass-border);
    box-shadow: var(--glass-inner-shadow);
    padding: 4px;
    gap: 0.25rem;
    border-radius: 1.25rem;
    overflow: hidden;
    transition: 0.15s ease;

    &:nth-child(4) {
        margin-top: 6rem;
    }

    @media(max-width: 900px) {
        width: calc(50% - 1rem);
    }

    @media(max-width: 600px) {
        min-width: 100%;

        &:nth-child(4) {
            margin-top: 0px;
        }
    }

    .projects-item-thumbnail {
        flex: 1;
        overflow: hidden;
        display: flex;
        position: relative;
        border-radius: 1rem;

        img {
            flex: 1;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 1rem;
            border: 0.5px solid var(--surface-0);
            transition: 0.1s ease;
        }

        .tags-wrapper {
            position: absolute;
            bottom: 0.25rem;
            left: 0.25rem;
            flex-wrap: wrap;

            .tag {
                background: var(--surface-50);
            }
        }

        .open-icon {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: 0.2s ease;

            svg {
                fill: white;
            }
        }
    }

    h3 {
        margin: 0 0.5rem;
        z-index: 2;
    }

    &:hover {
        transform: translate(0.25rem, -0.25rem);
        box-shadow: 0rem 1rem 2rem color-mix(in srgb, var(--surface-900) 8%, transparent), 0rem 0.125rem 0.25rem color-mix(in srgb, var(--surface-900) 12%, transparent);

        .projects-item-thumbnail {
            img {
                filter: blur(0.5rem);
                overflow: hidden;
                opacity: 0.5;
            }

            .open-icon {
                opacity: 1;
            }
        }
    }
}
</style>