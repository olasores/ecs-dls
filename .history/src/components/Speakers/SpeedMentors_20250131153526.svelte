<script> 
    const speedMentors = [

    // not filled out google form yet
    // {
    //   name: "Patrick  Babb",
    //   role: "Blockchain Researcher",
    //   company: "ABS Consulting",
    //   expertise: ["Blockchain", "Smart Contracts", "DeFi"],
    //   image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    //   mentorshipAreas: ["Career Guidance", "Research Direction", "Technology Selection"]
    // },

    {
      name: "Lauren DuCharme",
      role: "Fault Protection Systems Engineer",
      company: "NASA Jet Propulsion Laboratory",
      image: "assets/lauren.png",
    }, 
    {
      name: "Marco Ramirez",
      company: "Mercury Systems",
      role: "Mechanical Engineer II",
      image: "assets/Marco.png",
    }, 
    
    {
      name: "Arthur Guzman",
      role: "Pathway Project Coordinator",
      company: "California State University Fullerton ",
      image: "assets/guz.jpg",
    
    }, 
    {
      name: "Hilary Arocho",
      role: "Pathway Project Coordinator",
      company: "Campos   Fullerton ",
      image: "assets/guz.jpg",
    
    }, 
  ];

</script>

<main>
    <section class="max-w-7xl mx-auto px-6 py-16">
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
               
                
               
              </div>
            </div>
          {/each}
        </div>
      </section>
</main>