<script>
 const workshopHosts = [
    {
      name: "Robert Taylor",
      role: "IoT Solutions Architect",
      company: "Connected Futures",
      expertise: ["IoT", "Embedded Systems", "Edge Computing"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    
      workshop: "Building IoT Solutions with Edge Computing"
    },
    {
      name: "Diana Lee",
      role: "Full Stack Developer",
      company: "TechEd Solutions",
      expertise: ["Web Development", "Cloud Native", "DevOps"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      workshop: "Modern Web Development Workshop"
    }
  ]; 

</script>

<main> 
    <section class="bg-gray-100 py-16">
      <div class="text-center mb-20">
        <p class="text-sm font-semibold text-[#FF914C] uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
          <span class="w-8 h-[1px] bg-[#FF914C]"></span>
        Our Mentors
          <span class="w-8 h-[1px] bg-[#FF914C]"></span>
        </p>
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
         Speed Mentors
        </h1>
        <p class="text-gray-600 max-w-2xl mx-auto text-lg">
          Get personalized career advice from industry Professionals
        </div>
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-12">
            <span class="text-orange-600 font-medium mb-2">Hands-on Learning</span>
            <h2 class="text-3xl md:text-4xl font-bold font-judson text-gray-800 mb-4">Workshop Hosts</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">Learn practical skills from experienced practitioners</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each workshopHosts as speaker}
              <div class="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div class="relative overflow-hidden h-64">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    class="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                  >
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                     
                    </div>
                  </div>
                </div>
                <div class="p-4">
                  <h3 class="text-lg font-bold text-gray-800 mb-1">{speaker.name}</h3>
                  <p class="text-orange-600 font-medium text-sm mb-1">{speaker.role}</p>
                  <p class="text-gray-600 text-sm mb-2">{speaker.company}</p>
                  <p class="text-gray-800 font-medium text-sm mb-2">Workshop: {speaker.workshop}</p>
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
        </div>
      </section>
    
</main>