<script> 
    const themeData = {
    year: "2024",
    title: "Navigating AI's Impact on Leadership & Diversity",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "In recent years, Artificial Intelligence has gained traction due to its advancements and substantial impact on various industries including automotive, cybersecurity, finance, and gaming. Within the workplace, one may consider challenges and opportunities such as job displacement, the creation of new roles, improved productivity through the automation of menial tasks, enhanced business analytics, and the ethical implications associated with the concept of responsible AI."
    }; 

    const pastworkshops24 = [
        {
      title: "AI for Business Innovation",
      instructor: "Dr. Sarah Chen",
      date: "October 15, 2023",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Artificial Intelligence"
    },
    {
      title: "Web3 Development Fundamentals",
      instructor: "James Wilson",
      date: "September 28, 2023",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Blockchain"
    },
    {
      title: "Data Science in Practice",
      instructor: "Emily Rodriguez",
      date: "August 12, 2023",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Data Science"
    },
    ]; 
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
          <div class="p-6 space-y-4">
            <h3 class="text-xl font-bold leading-tight group-hover:text-[#FF914C] transition-colors duration-300">
              {workshop.title}
            </h3>
            
            <div class="flex items-center text-sm text-gray-600 gap-4">
              <div class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#FF914C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {workshop.date}
              </div>
              <div class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#FF914C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {workshop.attendees} attendees
              </div>
            </div>
  
            <div class="flex items-center justify-between">
              <div class="text-sm font-medium text-gray-900">
                By {workshop.instructor}
              </div>
              <div class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span class="text-sm font-medium">{workshop.rating}</span>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>

<style>
    /* Custom styles for the theme section */
</style>