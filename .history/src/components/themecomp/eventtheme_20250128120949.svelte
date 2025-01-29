<script> 
  import EventSchedule from "../Schedule/EventSchedule.svelte";
import EventSchedule24 from "./EventSchedule24.svelte";
    const themeData = {
    year: "2024",
    title: "Navigating AI's Impact on Leadership & Diversity",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "In recent years, Artificial Intelligence has gained traction due to its advancements and substantial impact on various industries including automotive, cybersecurity, finance, and gaming. Within the workplace, one may consider challenges and opportunities such as job displacement, the creation of new roles, improved productivity through the automation of menial tasks, enhanced business analytics, and the ethical implications associated with the concept of responsible AI."
    }; 

    const pastworkshops24 = [
        {
        title: "Finding A Community at Work",
        instructor: "Jennifer  Felton",
        date: "October 15, 2023",
        
        // image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        image: "/assets/jen-work.png",

        category: "Artificial Intelligence"
        },
        {
        title: "Adaptive Learning Techniques",
        instructor: "Brandon Bailey",
        date: "September 28, 2023",
        image: "/assets/bran-work.png",
        category: "Blockchain"
        },
        {
        title: "AI Allyship: Crafting Future Solutions Together",
        instructor: "John Louis-Strakes Lopez",
        date: "August 12, 2023",
        image: "/assets/john-work.png",
        category: "Data Science"
        },
    ]; 

    const pastschedule24 = [

    ]
</script> 

<main>
    <!-- theme section  -->
    
<section class="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
    <div class="relative">
      <!-- Background gradient decoration -->
      <div class="absolute -inset-4 bg-gradient-to-r from-[#FF914C]/10 to-orange-200/10 rounded-3xl blur-3xl"></div>
      
      <!-- Main content -->
      <div class="relative">
        <!-- Upper section with image and title -->
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
          <!-- Image container -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-br from-[#FF914C]/20 to-orange-200/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <img 
              src={themeData.image} 
              alt="Convention Theme" 
              class="relative w-full aspect-[4/3] object-cover rounded-2xl shadow-xl group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
  
          <!-- Title container -->
          <div class="lg:pl-6">
            <p class="text-sm font-semibold text-[#FF914C] uppercase tracking-wider mb-3 flex items-center gap-2">
              <span class="w-8 h-[1px] bg-[#FF914C]"></span>
              Convention Theme {themeData.year}
            </p>
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              {themeData.title}
            </h2>
            <!-- Description section -->
        <div class="max-w-4xl">
            <p class="text-lg text-gray-600 leading-relaxed">
              {themeData.description}
            </p>
          </div>
          </div>
        </div>
  
        
      </div>
    </div>
  </section>


  <!-- past workshops section  -->
  <section class="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <p class="text-sm font-semibold text-[#FF914C] uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
        <span class="w-8 h-[1px] bg-[#FF914C]"></span>
        2023 Highlights
        <span class="w-8 h-[1px] bg-[#FF914C]"></span>
      </p>
      <h2 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Past Workshops
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto text-lg">
        Explore our successful workshops from 2023 that inspired and educated hundreds of participants
      </p>
    </div>
  
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each pastworkshops24 as workshop}
        <div class="group relative bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
          <!-- Image Container -->
          <div class="relative aspect-[16/9] overflow-hidden">
            <img 
              src={workshop.image} 
              alt={workshop.title}
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <span class="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800">
                {workshop.category}
              </span>
            </div>
          </div>
  
          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold leading-tight group-hover:text-[#FF914C] transition-colors duration-300 mb-4">
              {workshop.title}
            </h3>
            
            <div class="flex items-center justify-between text-sm text-gray-600">
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#FF914C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {workshop.date}
              </div>
              <div class="font-medium text-gray-900">
                {workshop.instructor}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
  <!-- past schedule section -->
   <EventSchedule24 />
</main>

<style>
    /* Custom styles for the theme section */
</style>