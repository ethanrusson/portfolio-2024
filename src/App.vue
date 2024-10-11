<script setup lang="ts">
import { reactive, ref, toRefs, watch } from 'vue';
import PortfolioSection from './components/PortfolioSection.vue';
import ExperienceItem from './components/ExperienceItem.vue';
import ProjectsItem from './components/ProjectsItem.vue';
import MiscItem from './components/MiscItem.vue';
import GridBackground from './components/GridBackground.vue';
import DarkModeToggle from './components/DarkModeToggle.vue';
import { ExperienceData } from './ExperienceData.ts';
import { ProjectsData } from './ProjectsData.ts';
import { MiscData } from './MiscData.ts';
import { useScroll } from '@vueuse/core';

const main = ref<HTMLElement | null>(null);
const { directions } = useScroll(main);
const { top: toTop, bottom: toBottom } = toRefs(directions);

</script>

<template>
  <main ref="main">
    <DarkModeToggle></DarkModeToggle>
    <GridBackground></GridBackground>
    <PortfolioSection link="Hey there" :height="3" background="var(--highlight-1)" :scrollingDown="toBottom"
      expectedHeight="256px">
      <h1>
        <strong>I'm Ethan Russon,</strong> <br>
        Product Designer, Engineer, & Leader <br>
        I like building things worth using.
      </h1>
      <div class="hey-there-links flex gap-2">
        <a href="https://github.com/ethanrusson">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="var(--surface-900)" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_106_292)">
              <path
                d="M16 0C24.84 0 32 7.16 32 16C31.9991 19.3524 30.947 22.6201 28.9917 25.3432C27.0364 28.0664 24.2763 30.1077 21.1 31.18C20.3 31.34 20 30.84 20 30.42C20 29.88 20.02 28.16 20.02 26.02C20.02 24.52 19.52 23.56 18.94 23.06C22.5 22.66 26.24 21.3 26.24 15.16C26.24 13.4 25.62 11.98 24.6 10.86C24.76 10.46 25.32 8.82 24.44 6.62C24.44 6.62 23.1 6.18 20.04 8.26C18.76 7.9 17.4 7.72 16.04 7.72C14.68 7.72 13.32 7.9 12.04 8.26C8.98 6.2 7.64 6.62 7.64 6.62C6.76 8.82 7.32 10.46 7.48 10.86C6.46 11.98 5.84 13.42 5.84 15.16C5.84 21.28 9.56 22.66 13.12 23.06C12.66 23.46 12.24 24.16 12.1 25.2C11.18 25.62 8.88 26.3 7.44 23.88C7.14 23.4 6.24 22.22 4.98 22.24C3.64 22.26 4.44 23 5 23.3C5.68 23.68 6.46 25.1 6.64 25.56C6.96 26.46 8 28.18 12.02 27.44C12.02 28.78 12.04 30.04 12.04 30.42C12.04 30.84 11.74 31.32 10.94 31.18C7.75328 30.1193 4.98147 28.082 3.01778 25.3573C1.05409 22.6325 -0.00176096 19.3586 2.20462e-06 16C2.20462e-06 7.16 7.16 0 16 0Z" />
            </g>
            <defs>
              <clipPath id="clip0_106_292">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/ethan-russon/">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="var(--surface-900)" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M27.3333 2.66667H4.66667C4.13624 2.66667 3.62753 2.87738 3.25246 3.25245C2.87739 3.62753 2.66667 4.13623 2.66667 4.66667V27.3333C2.66667 27.8638 2.87739 28.3725 3.25246 28.7475C3.62753 29.1226 4.13624 29.3333 4.66667 29.3333H27.3333C27.8638 29.3333 28.3725 29.1226 28.7475 28.7475C29.1226 28.3725 29.3333 27.8638 29.3333 27.3333V4.66667C29.3333 4.13623 29.1226 3.62753 28.7475 3.25245C28.3725 2.87738 27.8638 2.66667 27.3333 2.66667ZM10.6667 25.3333H6.66667V13.3333H10.6667V25.3333ZM8.66667 11C8.20825 10.9869 7.76385 10.839 7.38901 10.5748C7.01416 10.3105 6.72549 9.94172 6.55907 9.51437C6.39264 9.08702 6.35584 8.62011 6.45326 8.17196C6.55068 7.72382 6.778 7.31432 7.10682 6.99463C7.43564 6.67494 7.85138 6.45925 8.30209 6.37448C8.7528 6.28972 9.21849 6.33966 9.64099 6.51806C10.0635 6.69645 10.424 6.9954 10.6776 7.37753C10.9312 7.75967 11.0665 8.20806 11.0667 8.66667C11.0561 9.2938 10.7978 9.89127 10.3481 10.3285C9.89836 10.7657 9.29385 11.0071 8.66667 11ZM25.3333 25.3333H21.3333V19.0133C21.3333 17.12 20.5333 16.44 19.4933 16.44C19.1884 16.4603 18.8905 16.5406 18.6167 16.6764C18.343 16.8122 18.0987 17.0007 17.898 17.2311C17.6973 17.4616 17.5441 17.7294 17.4472 18.0192C17.3503 18.3091 17.3116 18.6152 17.3333 18.92C17.3267 18.982 17.3267 19.0446 17.3333 19.1067V25.3333H13.3333V13.3333H17.2V15.0667C17.59 14.4733 18.1259 13.9901 18.7563 13.6632C19.3866 13.3364 20.0903 13.1769 20.8 13.2C22.8667 13.2 25.28 14.3467 25.28 18.08L25.3333 25.3333Z" />
          </svg>
        </a>
        <a href="mailto:enrusson@gmail.com">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="var(--surface-900)" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_106_339" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32"
              height="32">
              <rect width="32" height="32" fill="white" />
            </mask>
            <g mask="url(#mask0_106_339)">
              <path
                d="M5.55943 27.3073C4.57487 27.3073 3.73984 26.9645 3.05433 26.279C2.36882 25.5935 2.02606 24.7585 2.02606 23.7739V8.22611C2.02606 7.24155 2.36882 6.40652 3.05433 5.721C3.73984 5.03549 4.57487 4.69274 5.55943 4.69274H26.4406C27.4251 4.69274 28.2602 5.03549 28.9457 5.721C29.6312 6.40652 29.9739 7.24155 29.9739 8.22611V23.7739C29.9739 24.7585 29.6312 25.5935 28.9457 26.279C28.2602 26.9645 27.4251 27.3073 26.4406 27.3073H5.55943ZM26.4406 11.4769L16.9449 17.5406C16.7985 17.6324 16.6447 17.7012 16.4837 17.7471C16.3226 17.793 16.1614 17.816 16 17.816C15.8386 17.816 15.6774 17.793 15.5163 17.7471C15.3553 17.7012 15.2015 17.6324 15.0551 17.5406L5.55943 11.4769V23.7739H26.4406V11.4769ZM16 14.8928L26.4406 8.22611H5.55943L16 14.8928ZM5.55943 9.5301V9.57217V8.22611V9.57541V9.5301Z" />
            </g>
          </svg>
        </a>
      </div>
    </PortfolioSection>
    <PortfolioSection link="Selected Projects" :height="2" background="var(--highlight-2)" :scrollingDown="toBottom"
      expectedHeight="900px">
      <ProjectsItem v-for="item in ProjectsData" :item="item"></ProjectsItem>
    </PortfolioSection>
    <PortfolioSection link="Experience" :height="1" background="var(--highlight-3)" :scrollingDown="toBottom"
      expectedHeight="1080px">
      <ExperienceItem v-for="item in ExperienceData" :item="item"></ExperienceItem>
    </PortfolioSection>
    <PortfolioSection link="Misc." :height="0" background="var(--highlight-4)" :scrollingDown="toBottom"
      expectedHeight="600px">
      <MiscItem v-for="item in MiscData" :item="item"></MiscItem>
    </PortfolioSection>
  </main>
</template>

<style scoped lang="scss">
main {
  position: relative;
  height: 100vh;
  overflow: overlay;

  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-track {
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--surface-300);
    border: 0.25rem solid var(--surface-100);
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-corner {
    background: var(--surface-100);
  }

}

.hey-there-links {
  a {
    height: 32px;
    opacity: 0.5;
    transition: 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
