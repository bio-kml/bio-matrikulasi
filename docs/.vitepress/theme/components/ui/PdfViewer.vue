<template>
  <div ref="root" class="ui-pdf">
    <div class="ui-pdf__bar">
      <span class="ui-pdf__icon"><Icon name="file-text" :size="20" /></span>
      <div class="ui-pdf__info">
        <span class="ui-pdf__title">{{ title }}</span>
        <span v-if="meta" class="ui-pdf__meta">{{ meta }}</span>
      </div>
      <div class="ui-pdf__actions">
        <a class="ui-pdf__btn" :href="url" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          Open
        </a>
        <a class="ui-pdf__btn ui-pdf__btn--primary" :href="url" :download="fileName">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M5 20h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          Download
        </a>
      </div>
    </div>

    <!-- Inline preview on desktop only; mobile browsers can't show embedded PDFs reliably. -->
    <div v-if="preview && canEmbed" class="ui-pdf__frame" :style="{ height: height + 'px' }">
      <iframe v-if="visible" :src="url + '#view=FitH'" :title="title" loading="lazy"></iframe>
      <div v-else class="ui-pdf__placeholder">Loading preview…</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { withBase } from 'vitepress'
import Icon from './Icon.vue'

const props = defineProps({
  // Path under docs/public, e.g. "/pdfs/lectures/chapter-01.pdf", or a full URL.
  src: { type: String, required: true },
  title: { type: String, required: true },
  // Optional small text under the title, e.g. "24 pages · 3.1 MB"
  meta: { type: String, default: '' },
  // Show the inline preview (desktop). Set :preview="false" for buttons only.
  preview: { type: Boolean, default: true },
  height: { type: Number, default: 720 }
})

const url = computed(() => (/^(https?:)?\/\//.test(props.src) ? props.src : withBase(props.src)))
const fileName = computed(() => props.src.split('/').pop())

const root = ref(null)
const canEmbed = ref(true)
const visible = ref(false)
let io = null

onMounted(() => {
  const mq = window.matchMedia('(min-width: 768px) and (hover: hover) and (pointer: fine)')
  canEmbed.value = mq.matches
  // Only load the PDF once the viewer is near the screen.
  io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      visible.value = true
      io.disconnect()
    }
  }, { rootMargin: '200px' })
  io.observe(root.value)
})
onBeforeUnmount(() => io?.disconnect())
</script>

<style scoped>
.ui-pdf {
  margin: 24px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  overflow: hidden;
}
.ui-pdf__bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
}
.ui-pdf__icon {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  color: var(--vp-c-brand-1);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
}
.ui-pdf__info { display: flex; flex-direction: column; flex: 1; min-width: 160px; }
.ui-pdf__title { font-size: 15px; font-weight: 700; line-height: 1.4; color: var(--vp-c-text-1); }
.ui-pdf__meta { font-size: 12px; color: var(--vp-c-text-3); }
.ui-pdf__actions { display: flex; gap: 8px; }

.vp-doc a.ui-pdf__btn,
.ui-pdf__btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.2;
  color: var(--vp-c-text-1);
  text-decoration: none;
  background: var(--vp-c-bg);
  background-image: none;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  transition: border-color 0.15s ease, background-color 0.15s ease, transform 0.1s ease;
}
.ui-pdf__btn svg { width: 15px; height: 15px; }
.ui-pdf__btn:hover { border-color: var(--vp-c-text-3); }
.ui-pdf__btn:active { transform: scale(0.97); }
.vp-doc a.ui-pdf__btn--primary,
.ui-pdf__btn--primary {
  color: #fff;
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}
.ui-pdf__btn--primary:hover { background: var(--vp-c-brand-2); border-color: var(--vp-c-brand-2); }

.ui-pdf__frame { border-top: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); }
.ui-pdf__frame iframe { display: block; width: 100%; height: 100%; border: 0; }
.ui-pdf__placeholder {
  display: grid;
  place-items: center;
  height: 100%;
  font-size: 13px;
  color: var(--vp-c-text-3);
}

@media (max-width: 480px) {
  .ui-pdf__actions { width: 100%; }
  .ui-pdf__btn { flex: 1; justify-content: center; }
}
</style>
