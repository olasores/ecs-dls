<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</svelte:head>


<script>
    
    import Slider from "./sliders/Slider.svelte";
    import EventSchedule from "./Schedule/EventSchedule.svelte";
    import Sponsors from "./sponsors/Sponsors.svelte";
    import HGallery from "./Gallery/HGallery.svelte";
    import Countdown from "./countdown/Countdown.svelte";
    import NewGal from "./Gallery/NewGal.svelte";
    

    // icons https://feathericons.com/, https://github.com/unplugin/unplugin-icons
    import { ComputerSpeakerSolid } from "flowbite-svelte-icons";
	import Gallery from "./Gallery/HGallery.svelte";


</script>
<main class="min-h-screen">
    <!-- HERO PAGE -->
   <section class="bg-orange-300 w-full h-screen flex items-center justify-center">
  <Slider />
</section>
  
    <!-- Countdown Section with Curved Top -->
    <section class="bg-white w-full rounded-t-[100px] rounded-b-[100px] p-10  overflow-hidden relative -mt-[100px]">
      <div class="flex justify-center items-center">
        <h1 class="text-3xl font-bold mb-8 mr-20">
          The Countdown <span class="text-orange-300 text-3xl">begins</span>
        </h1>
        <Countdown />
      </div>

    </section>


    <section class="w-full pr-5 md:flex flex-col md:flex-row pb-5 items-center bg-gray-50 px-4 md:px-5">
      <!-- Image Section -->
      <div class="w-full md:w-1/2 flex justify-center py-6 md:py-0">
        <img
          src="/assets/about.png"
          alt="About the event"
          class="object-cover w-[300px] md:w-[400px] h-[300px] md:h-[400px]"
        />
      </div>
    
      <!-- Text Section -->
      <div class="w-full md:w-1/2 text-center md:text-left">
        <p class="text-sm font-semibold text-[#FF914C] uppercase tracking-wider mb-3 flex items-center justify-center md:justify-start gap-2">
          <span class="w-8 h-[1px] bg-[#FF914C]"></span>
          About the Event
          <span class="w-8 h-[1px] bg-[#FF914C]"></span>
        </p>
        <h1 class="text-3xl md:text-4xl font-bold leading-tight mb-4">
          A two-day summit of talks, activities, and workshops
        </h1>
        <p class="text-base md:text-lg leading-relaxed text-gray-700">
          The inaugural ECS Diversity & Leadership Summit aims to help emerging student leaders navigate the evolving landscape of various sectors impacted by artificial intelligence. By cultivating a space that encourages diverse voices, we empower participants to harness the potential of AI and explore new career opportunities.
        </p>
      </div>
    </section>

    <!-- bottom design -->

    <section class="w-full px-5 py-10 flex flex-col md:flex-row items-center bg-gray-50 gap-6">
      <div class="w-full md:w-1/2 flex justify-center">
        <img
          src="/assets/about.png"
          alt="About the event"
          class="object-cover w-[90%] sm:w-[80%] md:w-[400px] h-auto"
        />
      </div>
    
      <div class="w-full md:w-1/2 text-center md:text-left">
        <p class="text-sm font-semibold text-[#FF914C] uppercase tracking-wider mb-3 flex justify-center md:justify-start items-center gap-2">
          <span class="w-8 h-[1px] bg-[#FF914C]"></span>
          About the Event
          <span class="w-8 h-[1px] bg-[#FF914C]"></span>
        </p>
        <h1 class="text-3xl md:text-4xl font-bold leading-tight mb-4">
          A two-day summit of talks, activities, and workshops
        </h1>
        <p class="text-base md:text-lg leading-relaxed text-gray-700">
          The inaugural ECS Diversity & Leadership Summit aims to help emerging student leaders navigate the evolving landscape of various sectors impacted by artificial intelligence. By cultivating a space that encourages diverse voices, we empower participants to harness the potential of AI and explore new career opportunities.
        </p>
      </div>
    </section>
    


    <!-- Event Theme Section -->
<section
class="rounded-[100px] relative p-10 flex flex-col justify-center items-center text-center bg-cover bg-center"
style="background-image: url('/assets/background.png');">
<div class="absolute inset-0"></div>

<!-- Content Wrapper -->
<div class="relative w-full max-w-6xl">
  <!-- Event Theme Title -->
  <div class="mb-12">
    
    <p class="text-sm font-semibold text-[#FF914C] uppercase tracking-wider mb-2">
      Event Theme
    </p>
    <h1 class="text-4xl font-bold leading-tight text-white">
      <span class="block">Building Bridges:</span>
      Innovations in Leadership and Diversity
    </h1>
  </div>

  <!-- Event Features Grid -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <!-- Card Component -->
    <div class="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <img src="/assets/k-note.png" alt="Keynote Speaker" class="w-full h-60 object-cover" />
      <div class="p-6 flex-1 flex flex-col justify-between">
        <h3 class="text-xl font-bold mb-2">Keynote Speaker</h3>
        <p class="text-sm text-gray-700 flex-1">
          Join us to hear from industry leaders who are shaping the future of AI and diversity.
        </p>
      </div>
    </div>

    <div class="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <img src="/assets/p-new.png" alt="Engaging Panelists" class="w-full h-60 object-cover" />
      <div class="p-6 flex-1 flex flex-col justify-between">
        <h3 class="text-xl font-bold mb-2">Engaging Panelists</h3>
        <p class="text-sm text-gray-700 flex-1">
          Participate in discussions with professionals across various sectors.
        </p>
      </div>
    </div>

    <div class="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <img src="/assets/n-new.png" alt="Networking Opportunities" class="w-full h-60 object-cover" />
      <div class="p-6 flex-1 flex flex-col justify-between">
        <h3 class="text-xl font-bold mb-2">Networking Opportunities</h3>
        <p class="text-sm text-gray-700 flex-1">
          Connect with peers and professionals to expand your career opportunities.
        </p>
      </div>
    </div>
  </div>
</div>
</section>

    
      
      
      
<!-- Event Schedule -->
    <section class="px-4 py-8">
    
        <EventSchedule />

    </section>
    <!-- speakers -->

    <!-- our partners  -->
    <section>
            <Sponsors />
    </section>

    <!-- gallery  -->

    <section class="mt-5">
        <!-- <HGallery /> -->
        <NewGal />
    </section>
        


  </main>
  