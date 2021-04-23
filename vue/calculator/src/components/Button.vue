<template>
  <button class="button"
  @click="$emit('onClick', label)"
  :class="{ double, triple, operation }">
      {{ label }}
  </button>
</template>

<script>
export default {
    props: {
        label: {},
        operation: { type: Boolean },
        double: { type: Boolean },
        triple: { type: Boolean }
    }
}
</script>

<style>
:root {
    --bg-button: #F72585;
    --border-button: solid 1px #530fc2
}
.button {
    font-size: 1.4em;
    background-color: var(--bg-button);
    border: var(--border-button);
    outline: none;
    color: #ffffff;
}

.button:hover {
    background-color: #B5179E;
    transition-duration: 100ms;
}
.button:active{
    background-color: #4CC9F0;
    transition-duration: 50ms;
}

.button.double {
    grid-column: span 2;
}

.button.triple{
    grid-column: span 3;
}

.button.operation {
    background-color: #3A0CA3;
}

.button.operation:hover {
    background-color: #390ca3b4;
    transition-duration: 50ms;
}

.button.operation:active {
    background-color: #4CC9F0;
    transition-duration: 50ms;
}
</style>