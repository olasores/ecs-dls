<script>
  export let name;
  export let role;
  export let image;
  export let pronouns;
</script>

<div class="flex flex-col items-center space-y-1">
  <img
      class="profile_image rounded-md outline-none max-w-full w-50 h-0 md:w-60 h-60 lg:w-48 h-48 object-cover mb-2" 
      src={image}
      alt={name}
  />
  <h3 class="mt-1 text-base md:text-lg lg:text-xl font-semibold">{name}</h3>
  {#if pronouns}
      <p class="text-sm md:text-base lg:text-lg text-gray-500">{pronouns}</p>
  {/if}
  <p class="text-sm md:text-base lg:text-lg text-gray-500">{role}</p> 
</div>

<style>
  .profile_image {
      border-radius: 8px;
  }
</style>