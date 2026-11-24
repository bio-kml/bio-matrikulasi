<template>
  <div class="rx">
    <div class="rx__side"><slot name="from" /></div>
    <div class="rx__arrow">
      <span v-if="ins.length" class="rx__chips rx__chips--in">
        <span v-for="t in ins" :key="t" class="rx__chip" v-html="t"></span>
      </span>
      <span class="rx__line" aria-hidden="true"></span>
      <span v-if="enzyme" class="rx__enzyme">{{ enzyme }}</span>
      <span v-if="outs.length" class="rx__chips rx__chips--out">
        <span v-for="t in outs" :key="t" class="rx__chip rx__chip--out" v-html="t"></span>
      </span>
    </div>
    <div class="rx__side"><slot name="to" /></div>
  </div>
</template>

<script setup>
// One reaction: starting molecule → product, with the enzyme on the arrow,
// what goes in (above) and what comes out (below).
defineProps({
  enzyme: { type: String, default: '' },
  ins: { type: Array, default: () => [] },
  outs: { type: Array, default: () => [] }
})
</script>

<style scoped>
.rx {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 6px 14px;
  margin: 18px 0;
  padding: 12px 14px;
  border: var(--line);
  border-radius: 10px;
  background: var(--box);
}
.rx__side { display: flex; flex-wrap: wrap; gap: 10px; align-items: flex-end; justify-content: center; }
.rx__arrow { display: flex; flex-direction: column; align-items: center; gap: 4px; min-width: 150px; }
.rx__line { position: relative; width: 100%; height: 3px; background: var(--ink); border-radius: 2px; }
.rx__line::after {
  content: '';
  position: absolute;
  right: -2px;
  top: 50%;
  border: 7px solid transparent;
  border-left: 11px solid var(--ink);
  transform: translateY(-50%) translateX(8px);
}
.rx__enzyme {
  font-family: var(--font-hand);
  font-size: 15px;
  font-weight: 700;
  font-style: italic;
  color: var(--c, var(--vp-c-brand-1));
  text-align: center;
}
.rx__chips { display: flex; flex-wrap: wrap; gap: 4px; justify-content: center; }
.rx__chip {
  padding: 0 8px;
  font-size: 14px;
  line-height: 22px;
  border: 1.5px solid var(--ink);
  border-radius: 999px;
  background: var(--box);
}
.rx__chip--out { background: color-mix(in srgb, var(--c, var(--vp-c-brand-1)) 14%, var(--box)); }
@media (max-width: 560px) { .rx { flex-direction: column; } .rx__line::after { display: none; } .rx__line { width: 3px; height: 26px; } }
</style>
