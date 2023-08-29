<script lang="ts">
    import CarList from './car-list.svelte'
    import CarDetails from './car-details.svelte'
</script>
<div class="page">
    <div class="left-col"><CarList/></div>
    <div class="right-col"><CarDetails/></div>
</div>

<style>
    .page{
     display: flex;
     ;
    }
  .left-col{
   flex: 3;
    
  }
  .right-col{
      flex: 1;
      
  }

  @media(max-width:1250px) {
    .left-col{
        flex: 2;
       
    }
    .right-col{
        flex:1;
       
    }
  }

  @media(max-width:950px){
    .page{
       flex-direction: column;
    }
  }
</style>



