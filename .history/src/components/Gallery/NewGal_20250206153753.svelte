<script>
  // Gallery Images
  let images = [
    "/assets/gallery/g-3.png",
    "/assets/gallery/g-4.png",
    "/assets/gallery/g-5.png",
    "/assets/gallery/g-6.png",
    "/assets/gallery/g-7.png",
    "/assets/gallery/g-8.png",
    "/assets/gallery/g-9.png",
    "/assets/gallery/g-10.png",
    "/assets/gallery/g-11.png",
  ];
</script>

<main>
<!-- Gallery Grid -->
<div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-0">
  <!-- Top Row (First 4 Images) -->
  {#each images.slice(0, 4) as image}
    <div class="aspect-square overflow-hidden">
      <img 
        src={image} 
        alt="Gallery Image" 
        class="w-full h-full object-cover"
      />
    </div>
  {/each}

  <!-- Bottom Row (Replace text box with an image) -->
  {#each images.slice(4, 7) as image}
    <div class="aspect-square overflow-hidden">
      <img 
        src={image} 
        alt="Gallery Image" 
        class="w-full h-full object-cover"
      />
    </div>
  {/each}
</div>
</main>
