<script lang="ts">
  import { activeBoxStore } from '$lib/stores/active-box.store';


</script>
<!------------------------------------------------------------>

<div class="active-box-id">
  {#if $activeBoxStore !== null}
    activeBoxId: {$activeBoxStore.id}
  {:else}
    click on something!
  {/if}
</div>

<!------------------------------------------------------------>
<style lang="scss">

  .active-box-id {
    margin-top: 150px;
    font-size: 30px;
  }

</style>

