<script>
  
  const panelists = [
    {
      name: "Nicole Traboulsi",
      role: "Senior Vulnerability Management Automation Engineer ",
      company: "Dell Technologies",
      expertise: ["Network Security", "Cryptography", "Threat Analysis"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      panel: "Cybersecurity Challenges in Modern Enterprise"
    },
    {
      name: "Hilary Arocho",
      role: "Cloud Architect",
      company: "Campos",
      expertise: ["Cloud Computing", "DevOps", "System Architecture"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      panel: "Future of Cloud Infrastructure"
    }, 
    {
      name: "Zeed Jarrah",
      role: "Cloud Architect",
      company: "Campos",
      expertise: ["Cloud Computing", "DevOps", "System Architecture"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      panel: "Future of Cloud Infrastructure"
    }, 
    {
      name: "Lauren DuCharme",
      role: "Cloud Architect",
      company: "NASA Jet Propulsion Laboratory",
      expertise: ["Cloud Computing", "DevOps", "System Architecture"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      panel: "Future of Cloud Infrastructure"
    }, 
    {
      name: "Feli Michaca",
      role: "Cloud Architect",
      company: "Campos",
      expertise: ["Cloud Computing", "DevOps", "System Architecture"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      panel: "Future of Cloud Infrastructure"
    }
]
</script>


<main> 
      <!-- Panelists Section -->
  <section class="bg-gray-100 py-16">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-12">
        <span class="text-orange-600 font-medium mb-2">Expert Discussions</span>
        <h2 class="text-3xl md:text-4xl font-bold font-judson text-gray-800 mb-4">Panel Speakers</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">Join engaging discussions with industry experts</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each panelists as speaker}
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
              <p class="text-gray-800 font-medium text-sm mb-2">Panel: {speaker.panel}</p>
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