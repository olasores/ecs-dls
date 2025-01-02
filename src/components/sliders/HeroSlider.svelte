<script>
    import { Carousel } from 'flowbite-svelte';
    import images from '../../imageData/images.json'
  </script>
  
  <div class="h-screen w-screen">
    <Carousel class ='h-screen w-screen<script>
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
  </script>
  
  <div class="relative w-full h-screen overflow-hidden">
    <!-- Slides -->
    {#each slides as { id, src, title, description }, index}
      <div
        class="absolute inset-0 transition-transform duration-500 ease-in-out"
        style="transform: translateX({(index - currentSlide) * 100}%)"
      >
        <img
          src={src}
          alt={title}
          class="w-full h-full object-cover"
        />
        <!-- Hero Content -->
        <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 class="text-4xl md:text-6xl font-bold">{title}</h1>
          <p class="mt-4 text-lg md:text-xl">{description}</p>
          <div class="mt-6 space-x-4">
            <button class="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-200">
              Learn More
            </button>
            <button class="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black">
              Register Now
            </button>
          </div>
        </div>
      </div>
    {/each}
  
    <!-- Navigation Buttons -->
    <button
      class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
      on:click={prevSlide}
    >
      &#9664;
    </button>
    <button
      class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
      on:click={nextSlide}
    >
      &#9654;
    </button>
  
    <!-- Indicators -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {#each slides as _, index}
        <button
          class="w-3 h-3 rounded-full bg-gray-300 hover:bg-white {index === currentSlide ? 'bg-white' : ''}"
          on:click={() => (currentSlide = index)}
        ></button>
      {/each}
    </div>
  </div>
  '   {images} let:Controls>
      <Controls />
    </Carousel>
  </div>