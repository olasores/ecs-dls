<script>
  export let name;
  export let role;
  export let image;
  export let pronouns;
</script>

<div class="flex flex-col items-center space-y-1">
  <!-- <img
      class="profile_image rounded-md outline-none max-w-full w-50 h-60 md:w-60 h-60 lg:w-48 h-48 object-cover mb-2" 
      src={image}
      alt={name}
  />
  <h3 class="mt-1 text-base md:text-lg lg:text-xl font-semibold">{name}</h3>
  {#if pronouns}
      <p class="text-sm md:text-base lg:text-lg text-gray-500">{pronouns}</p>
  {/if}
  <p class="text-sm md:text-base lg:text-lg text-gray-500">{role}</p> 
</div> -->
<img class="profile_image rounded-md outline-none w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-60 object-cover mb-2" 
      src={image}
      alt={name}
/>
<h3 class="mt-1 text-lg sm:text-xl md:text-2xl font-semibold">{name}</h3>
<p class="text-sm sm:text-base text-gray-500">{role}</p>

<style>
  .profile_image {
      border-radius: 8px;
  }
</style>