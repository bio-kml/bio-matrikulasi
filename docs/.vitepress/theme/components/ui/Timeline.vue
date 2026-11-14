<template>
  <ol class="ui-timeline"><slot /></ol>
</template>

<style scoped>
.vp-doc .ui-timeline,
.ui-timeline {
  position: relative;
  list-style: none;
  margin: 24px 0;
  padding: 0 0 0 26px;
}
.ui-timeline::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  background: var(--vp-c-divider);
  border-radius: 2px;
}
</style>
