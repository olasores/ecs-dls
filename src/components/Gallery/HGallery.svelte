<script>
    // Gallery Images
    let images = [
      "/assets/networking.png",
      "/assets/panel.png",
      "/assets/gallery3.jpg",
      "/assets/gallery4.jpg",
      "/assets/gallery5.jpg",
      "/assets/gallery6.jpg",
    ];
  
    // State to track the current start index
    let currentIndex = 0;
  
    // Function to move to the previous set of images
    function previousImages() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
  
    // Function to move to the next set of images
    function nextImages() {
      currentIndex = (currentIndex + 1) % images.length;
    }
  </script>
  
  <main class="px-6 sm:px-12 lg:px-24 py-10">
    <!-- Header with Arrows -->
    <div class="flex items-center justify-between mb-6">
      <div>
        <p class="text-sm font-semibold text-[#FF914C] uppercase tracking-wider">// Previous Gallery</p>
        <h1 class="text-4xl font-bold text-black">Some Memories Shared</h1>
      </div>
      <!-- Arrows -->
      <div class="flex items-center space-x-2">
        <button 
          on:click={previousImages} 
          class="p-2 bg-transparent hover:bg-white border border-gray-400 rounded-full hover:bg-opacity-75 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          on:click={nextImages} 
          class="p-2 bg-transparent hover:bg-white border border-gray-400 rounded-full hover:bg-opacity-75 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  
    <!-- Gallery Carousel -->
    <div class="relative flex overflow-x-scroll items-center space-x-6">
      <!-- Images -->
      {#each images.slice(currentIndex, currentIndex + 2) as image, i}
        <div
          class="w-[500px] h-[500px] rounded-lg shadow-lg flex-shrink-0 transform transition-transform duration-500"
          style="margin-right: {i === 1 ? '0' : '2rem'}"
        >
          <img 
            src={image} 
            alt="Gallery Image" 
            class="w-full h-full object-cover rounded-lg"
          />
        </div>
      {/each}
    </div>
  
    <!-- View All Button -->
    <div class="text-center mt-8">
      <button 
        class="px-6 py-3 bg-[#FF914C] text-white font-semibold rounded-lg shadow hover:bg-[#FF7B29] transition"
      >
        View All
      </button>
    </div>
  </main>
  