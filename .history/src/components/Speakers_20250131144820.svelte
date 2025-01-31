<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</svelte:head>
<script>
  import Keynote from "./Speakers/Keynote.svelte";
  // import Panels from "./Speakers/Panels.svelte";
  // import WorkshopHost from "./Speakers/WorkshopHost.svelte";
  // import SpeedMentors from "./Speakers/SpeedMentors.svelte";
</script>

<main class="min-h-screen bg-gray-50">
  <!-- Hero Section -->
  <section class="w-full h-[60vh] relative mb-0">
    <img 
      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
      alt="Conference Events" 
      class="w-full h-full object-cover"
    >
    <div class="absolute inset-0 flex flex-col items-start justify-center text-white bg-black bg-opacity-50 px-10 md:px-20 lg:px-40">
      <h1 class="text-4xl md:text-6xl font-bold font-judson">Industry Professionals</h1>
      <p class="text-lg md:text-xl mt-4 font-light max-w-2xl">Meet our distinguished speakers and industry experts</p> 
    </div>
  </section>

  <!-- <section class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <p class="text-sm font-semibold text-[#FF914C] uppercase tracking-wider mb-2">
        // Featured Presentation
      </p>
      <h1 class="text-4xl font-bold leading-tight mb-4">
        Keynote Speakers
      </h1>
    </div>
  
    <div class="space-y-16">
      {#each speakers as speaker}
        <div 
          class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 hover:transform hover:scale-[1.02] transition-transform duration-300"
        >
          <div class="w-full lg:w-1/3 aspect-square">
            <img
              src={speaker.image}
              alt="{speaker.name} - Keynote Speaker"
              class="rounded-2xl shadow-xl w-full h-full object-cover"
            />
          </div>
  
          <div class="w-full lg:w-2/3 space-y-4">
            <h2 class="text-3xl lg:text-5xl font-bold font-judson text-center lg:text-left">
              {speaker.name}
            </h2>
            <p class="text-base lg:text-lg leading-relaxed text-gray-700">
              {speaker.bio}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </section> -->
  <!-- Keynote Speakers Section -->
  <!-- <Keynote /> -->
  <!-- Panelists Section -->
   <!-- <Panels /> -->

  <!-- Speed Mentors Section -->
  <!-- <SpeedMentors /> -->

  <!-- Workshop Hosts Section -->
  <!-- <WorkshopHost /> -->
 
</main>

<style>
  /* Additional styles will be handled by Tailwind CSS */
</style>