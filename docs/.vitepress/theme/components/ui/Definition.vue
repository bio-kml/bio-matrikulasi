<template>
  <p class="ui-def"><strong class="ui-def__term">{{ term }}:</strong> <span class="ui-def__text"><slot /></span></p>
</template>

<script setup>
// "Term: definition", with the definition marked in highlighter.
defineProps({
  term: { type: String, required: true }
})
</script>

<style scoped>
.vp-doc .ui-def,
.ui-def {
  margin: 14px 0;
  padding: 2px 0 2px 16px;
  border-left: 3px solid var(--c, var(--vp-c-brand-1));
  line-height: 1.7;
}
.vp-doc .ui-def__term { background: none; padding: 0; }
.ui-def__text {
  font-weight: 700;
  padding: 0 2px;
  background: linear-gradient(transparent 28%, var(--hl) 28%, var(--hl) 92%, transparent 92%);
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
</style>
