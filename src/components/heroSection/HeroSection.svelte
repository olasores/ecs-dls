<script>
  import images from '../../imageData/images.json';
  export let title = "Default Title";
  export let subtitle = "Default Subtitle";
  // Use the first image from the JSON
  const heroImage = images[0];
</script>


<div class="relative w-full h-screen">
  <img
    src={heroImage.src}
    alt={heroImage.alt}
    class="w-full h-full object-cover"
  />
  <!-- Hero Content -->
  <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center text-left text-white p-4 sm:p-6 md:p-8 lg:px-40">
    <h1 class="text-4xl md:text-6xl font-bold">
      {#each title as line}
        <span class="block">{line}</span>
      {/each}
    </h1>    
    <p class="mt-4 text-lg md:text-xl text-orange-300">{subtitle}</p>
    <div class="mt-6 space-x-4">
    </div>
  </div>
</div>