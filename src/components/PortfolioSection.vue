<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { useElementBounding, useWindowSize } from '@vueuse/core';

const props = defineProps<{
  link: string,
  height: number,
  background: string,
  scrollingDown: boolean,
  expectedHeight: string
}>()

const formattedLink = props.link.split(" ").join("");

const section = ref(null);
const sectionPosition = reactive(useElementBounding(section));
const windowSize = reactive(useWindowSize());
const scrolledIntoView = ref(sectionPosition.top < windowSize.height - 90 + (props.height * -46));

watch(
  () => sectionPosition.top < windowSize.height - 90 + (props.height * -46),
  (inView) => {
    scrolledIntoView.value = inView;
  }
)

function scrollToElement(link: string) {
  const element = document.getElementById(link);
  element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}
</script>

<template>
  <!-- <section ref="section" :id="formattedLink" class="flex glass-effect"
    :class="[{ visible: scrolledIntoView }, { 'scrolling-up': scrollingUp }, { 'scrolling-down': scrollingDown }]"></section> -->
  <section ref="section" :id="formattedLink" class="flex" :class="[{ visible: scrolledIntoView }]">
    <div class="section-link">
      <a @click="scrollToElement(formattedLink)" :style="{ paddingBottom: height * 3 + 'rem' }">
        {{ link }}
      </a>
    </div>
    <div class="section-content flex-column">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  margin-block: calc(12rem + 0.5px);
  margin-inline: calc(var(--spacingMultiplier) * 8);
  max-width: 100%;
  min-height: calc(16rem - 0.5px);
  border-radius: 2rem;
  position: relative;
  transition: 0.5s ease-in-out;

  @media(max-width: 900px) {
    flex-direction: column;
  }

  &::after {
    content: "";
    position: absolute;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
    top: 0;
    left: 0;
    border-radius: calc(2rem + 1px);
    pointer-events: none;
  }

  @media (min-height: 768px) {
    margin-block: calc(20rem + 0.5px);
  }

  @media (min-height: 900px) {
    margin-block: calc(24rem + 0.5px);
  }

  .background-line {
    opacity: 0;
    --highlight: v-bind('props.background');
    position: fixed;
    width: 100vw;
    height: 80vh;
    top: 0px;
    left: 0px;
    background: radial-gradient(circle at 50% 0%, var(--highlight), transparent 30%);
    transition: 2s ease;
    z-index: -2;
  }

  .section-link {
    min-width: calc(256px + var(--spacingMultiplier) * 8);
    padding: 2rem 4rem 2rem 2rem;
    text-align: right;
    align-self: stretch;
    cursor: pointer;


    @media(max-width: 900px) {
      min-width: unset;
      width: fit-content;
      background: var(--surface-200);
      height: 2.5rem;
      padding: 0rem 0rem 0rem 4rem;
      text-align: left;
      z-index: 10;
    }

    a {
      display: block;
      width: calc(192px + var(--spacingMultiplier) * 8);
      padding-right: 2rem;
      font-size: 1.5rem;
      position: fixed;
      bottom: 1rem;
      opacity: 0.25;
      transition: opacity 0.2s ease;
      font-weight: normal;
      color: var(--text-secondary);

      @media(max-width: 900px) {
        width: unset;
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  .section-content {
    width: 100%;
    padding: 2rem 4rem;
    gap: 4rem;
    align-content: flex-start;
    transition: 0.3s ease;
    flex-wrap: wrap;
    border-radius: 0rem 2rem 2rem 0rem;
    border-left: 1px solid var(--surface-900);

    &:has(a.projects-item) {
      max-height: 1200px;
    }

    @media(max-width: 900px) {
      border-left: 0px;
    }

    @media(max-width: 600px) {
      &:has(a.projects-item) {
        max-height: none;
      }
    }
  }

  &.visible {
    .background-line {
      opacity: var(--background-opacity);
    }

    .section-link {
      position: sticky;
      top: 0;

      a {
        position: static;
        opacity: 1;
      }
    }

    .section-content {
      border-color: var(--surface-900);
    }
  }

  &.scrolling-down {
    transform: perspective(v-bind('props.expectedHeight')) rotateX(2deg);
    box-shadow: 0px 1rem 2rem rgba(var(--surface-950-opacity), 0.12);
  }
}

@keyframes shimmer {
  0% {
    background-position: top left;
  }

  100% {
    background-position: top right;
  }
}
</style>