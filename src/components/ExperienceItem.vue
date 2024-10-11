<script setup lang="ts">
import ExperienceDataInterface from '../ExperienceData.ts';

defineProps<{
    item: ExperienceDataInterface
}>()
</script>

<template>
    <div class="experience-item flex-column gap-1">
        <span>{{ item.dateRange }}</span>
        <h2>{{ item.employer }} — {{ item.title }}</h2>
        <ul class="tag-list gap-1">
            <li v-for="skill of item.skills" class="tag">
                {{ skill }}
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.experience-item {
    margin-bottom: 2rem;

    &>span {
        text-transform: uppercase;
        color: var(--text-secondary);
        letter-spacing: 0.25rem;
    }
}
</style>