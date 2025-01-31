<script>
    // Array of sponsor images
    let sponsors = [
      { id: 1, src: "/assets/ibm.png", alt: "Sponsor 1" },
      { id: 2, src: "/assets/doordash.png", alt: "Sponsor 2" },
      { id: 3, src: "/assets/accenture.png", alt: "Sponsor 3" },
      { id: 4, src: "/assets/blizzard.png", alt: "Sponsor 4" },
      { id: 5, src: "/assets/ibm.png", alt: "Sponsor 5" },
    ];
  </script>
  <main class="px-6 text-center sm:px-12 lg:px-24 py-10">
    <!-- Centered Sponsors Text -->
    <div class="text-center mb-8">
      <p class="text-sm font-semibold text-[#FF914C] flex justify-center md:justify-start items-center gap-2 uppercase tracking-wider">
        <span class="w-8 h-[1px] bg-[#FF914C]"></span>
        Our Platinum Sponsors
      <span class="w-8 h-[1px] bg-[#FF914C]"></span>
       

      </p>
      <h1 class="text-4xl font-bold text-black">Our Platinum Sponsors</h1>
    </div>
  
    <!-- Sponsors Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
      {#each sponsors as sponsor}
        <div class="flex justify-center items-center">
          <img
            src={sponsor.src}
            alt={sponsor.alt}
            class="w-32 h-32 object-contain"
          />
        </div>
      {/each}
    </div>
  </main>
  
  
  <style>
    /* Add custom styles if needed */
  </style>
  