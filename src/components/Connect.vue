<script setup lang="ts">
import { useConnect, useChainId } from '@wagmi/vue';

const chainId = useChainId();
const { connectors, connect } = useConnect();
</script>

<template>
  <button
    v-for="connector in connectors"
    @click="connect({ connector, chainId })"
  >
    {{ connector.name }}
  </button>
</template>