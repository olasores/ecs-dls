<!-- TeamMember.svelte-->
<script>
    export let name;
    export let role;
    export let image;
</script>

<div class="text-center p-1 m-1">
    <div class="relative inline-block">
      <img
        class="profile_image rounded-md outline-none w-44 md:w-44 lg:w-44 h-44 md:h-44 lg:h-44"
        src={image}
        alt={name}
      />
    </div>
    <h3 class="mt-1 text-base md:text-lg lg:text-xl font-semibold">{name}</h3>
    <p class="text-sm md:text-base lg:text-lg text-black-500">{role}</p>
</div>
  
  <style>
    .text-center {
      padding: 0.5rem; /* Further reduce padding */
      margin: 0.5rem;  /* Reduce margin to tighten layout */
    }
  
    .profile_image {
      max-width: 100%; /* Keep images responsive */
      border-radius: 8px; /* Maintain rounded corners */
    }
  </style>
  
