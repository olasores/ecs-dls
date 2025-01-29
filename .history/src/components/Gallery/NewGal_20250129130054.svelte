<script>
    // Gallery Images
    let images = [
      "/assets/gallery/g-4.png",
      "/assets/gallery/g-3.png",
      "/assets/gallery/g-6.png",
      "/assets/gallery/g-8.png",
      "/assets/gallery/g-8.png",

      "/assets/panel.png",
      "/assets/keynote.png",
     "/assets/networking.png",
      "/assets/gallery/g-5.png",
    ];
  </script>
  
  <main class="">
    <!-- Header -->
    <!-- <div class="mb-6">
      <p class="text-sm font-semibold text-[#FF914C] uppercase tracking-wider">// Previous Gallery</p>
      <h1 class="text-4xl font-bold text-black">Some Memories Shared</h1>
    </div> -->
  
    <!-- Gallery Grid -->
    <div class="grid grid-cols-4 gap-0">
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
  
      <!-- Bottom Row (2 Images + 2023 Box + 1 Image) -->
      {#each images.slice(4, 6) as image}
        <div class="aspect-square overflow-hidden">
          <img 
            src={image} 
            alt="Gallery Image" 
            class="w-full h-full object-cover"
          />
        </div>
      {/each}
  
      <!-- 2023 Events Gallery Box -->
      <div class="bg-[#FF914C] text-white p-6 flex flex-col justify-center items-center">
        <p class="text-sm uppercase tracking-wide mb-2">— Gallery</p>
        <h3 class="text-3xl font-bold mb-2">2023</h3>
        <p class="text-lg mb-4">Our Events Gallery</p>
        <!-- <button 
          class="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          View All Gallery
        </button> -->
      </div>
  
      <!-- Last Image -->
      {#each images.slice(6, 7) as image}
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
  