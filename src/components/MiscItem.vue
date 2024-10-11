<script setup lang="ts">
import { type MiscDataInterface } from '../MiscData';

defineProps<{
    item: MiscDataInterface
}>()
</script>

<template>
    <div class="misc-item flex-column">
        <h3>{{ item.title }}</h3>
        <ul class="tag-list gap-1">
            <li v-for="tag of item.items" class="tag">
                {{ tag }}
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
h3 {
    margin-bottom: 0.5rem;
}
</style>