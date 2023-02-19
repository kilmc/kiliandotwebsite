<script lang="ts">
	import Portal from 'svelte-portal/src/Portal.svelte';
	import { SIDEBAR_ID } from './consts';
</script>

<Portal target={`#${SIDEBAR_ID}`}><slot /></Portal>
