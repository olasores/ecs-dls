<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</svelte:head>
<script>
  import Keynote from "./Speakers/Keynote.svelte";
  import Panels from "./Speakers/Panels.svelte";
  import WorkshopHost from "./Speakers/WorkshopHost.svelte";
  import SpeedMentors from "./Speakers/SpeedMentors.svelte";
  


  


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

  <!-- Keynote Speakers Section -->
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

  <Keynote />



  <!-- Panelists Section -->
   <Panels />
 

  <!-- Speed Mentors Section -->
  <section class="max-w-7xl mx-auto px-6 py-16">
    <div class="text-center mb-12">
      <span class="text-orange-600 font-medium mb-2">One-on-One Guidance</span>
      <h2 class="text-3xl md:text-4xl font-bold font-judson text-gray-800 mb-4">Speed Mentors</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">Get personalized career advice from industry veterans</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each speedMentors as speaker}
        <div class="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="relative overflow-hidden h-64">
            <img 
              src={speaker.image} 
              alt={speaker.name} 
              class="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <div class="flex gap-3 justify-center">
                  
                 
                </div>
              </div>
            </div>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-bold text-gray-800 mb-1">{speaker.name}</h3>
            <p class="text-orange-600 font-medium text-sm mb-1">{speaker.role}</p>
            <p class="text-gray-600 text-sm mb-2">{speaker.company}</p>
            <h4 class="text-gray-800 font-medium text-sm mb-1">Mentorship Areas:</h4>
            <ul class="list-disc list-inside mb-2 text-gray-600 text-sm">
              {#each speaker.mentorshipAreas as area}
                <li>{area}</li>
              {/each}
            </ul>
            <div class="flex flex-wrap gap-1">
              {#each speaker.expertise as skill}
                <span class="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">
                  {skill}
                </span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Workshop Hosts Section -->
  <WorkshopHost />
 

  <!-- Call to Action -->
  <section class="bg-orange-600 text-white py-16">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Want to Share Your Expertise?</h2>
      <p class="text-orange-100 mb-8 max-w-2xl mx-auto">Join our distinguished lineup of speakers, mentors, and workshop hosts.</p>
      <button class="bg-white text-orange-600 font-medium px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors duration-300">
        Submit Your Proposal
      </button>
    </div>
  </section>
</main>

<style>
  /* Additional styles will be handled by Tailwind CSS */
</style>