<script>
    let slides = [
      {
        id: 1,
        src: "/assets/herosliderimgone.png",
        title: "ECS Diversity and Leadership Summit",
        description: "This February 21st - 22nd | Fullerton, CA",
      },
      {
        id: 2,
        src: "/assets/heroslidertwo.png",
        title: "ECS Diversity and Leadership Summit",
        description: "This February 21st - 22nd | Fullerton, CA",
      },
      {
        id: 3,
        src: "/assets/heroslidertwo.png",
        title: "ECS Diversity and Leadership Summit",
        description: "This February 21st - 22nd | Fullerton, CA",
      },
    ];
  
    let currentSlide = 0;
  
    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    };
  
    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
    };
  
    import { ChevronLeftOutline, ChevronRightOutline } from "flowbite-svelte-icons";
  </script>
  
  <div class="relative w-full h-screen overflow-hidden">
    <!-- Slides -->
    {#each slides as { id, src, title, description }, index}
      <div
        class="absolute inset-0 transition-transform duration-500 ease-in-out"
        style="transform: translateX({(index - currentSlide) * 100}%)"
      >
        <img src={src} alt={title} class="w-full h-full object-cover" />
  
        <!-- Hero Content -->
        <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center text-left text-white p-8 px-40">
          <h1 class="text-4xl md:text-6xl font-bold">
            <span class="block">ECS Diversity and</span>
            <span class="block">Leadership Summit</span>
          </h1>
          <p class="mt-4 text-lg md:text-xl">{description}</p>
  
          <!-- Buttons -->
          <div class="mt-6">
            <button class="px-6 py-3 bg-transparent border border-white hover:border-black text-white font-semibold rounded-lg shadow hover:bg-white hover:text-black">
              Professional Rsvp
            </button>
            <button class="px-6 py-3 bg-[#FF914C] hover:bg-[#FF7B29] border border-white text-white font-semibold rounded-lg ">
             Student Rsvp
            </button>
  
            <!-- Chevron Buttons -->
            <div class="flex items-center mt-6">
              <button on:click={prevSlide} class="p-2 bg-transparent hover:bg-white border-white border bg-opacity-50 rounded-full hover:bg-opacity-75">
                <ChevronLeftOutline class="w-6 h-6 text-white" />
              </button>
              <button on:click={nextSlide} class="ml-2 p-2 bg-transparent hover: border-white border bg-opacity-50 rounded-full hover:bg-opacity-75">
                <ChevronRightOutline class="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    {/each}
  
    <!-- Indicators (Right Side Column) -->
    <div class="absolute top-1/2 right-8 transform -translate-y-1/2 flex flex-col space-y-2">
      {#each slides as _, index}
        <button
          class="w-3 h-3 rounded-full {index === currentSlide ? 'bg-white' : 'bg-gray-400'} hover:bg-white"
          on:click={() => (currentSlide = index)}
        ></button>
      {/each}
    </div>
  </div>
  