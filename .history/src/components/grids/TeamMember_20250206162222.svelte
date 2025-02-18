<script>
  export let name;
  export let role;
  export let image;
  export let pronouns;
</script>

<div class="flex flex-col items-center text-center space-y-1">
  <img
    class="profile_image rounded-md w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-52 lg:h-60 object-cover mb-2" 
    src={image}
    alt={name}
  />
  
  <h3 class="mt-1 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">{name}</h3>

  {#if pronouns}
    <p class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500">{pronouns}</p>
  {/if}

  <p class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500">{role}</p> 
</div>

<style>
  .profile_image {
    border-radius: 8px;
  }
</style>
