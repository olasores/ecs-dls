<script> 
     const speakers = [
    {
      name: "Olivia Stella",
      image: "assets/olivia.png",
      bio: "Olivia Stella is a Tech Lead, Cybersecurity at Southwest Airlines",
    },

    
    // {
    //   name: "Yasmeen Ismail",
    //   image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    //   bio: "Yasmeen Ismail is an Engineer I at ABS Consulting",
    // }
  ];
</script>


<main>

<section class="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 ">
    <div class="text-center mb-20">
      <p class="text-sm font-semibold text-[#FF914C] uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
        <span class="w-8 h-[1px] bg-[#FF914C]"></span>
        Featured Presentation
        <span class="w-8 h-[1px] bg-[#FF914C]"></span>
      </p>
      <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
        Keynote Speakers
      </h1>
      <p class="text-gray-600 max-w-2xl mx-auto text-lg">
        Join us for inspiring talks from industry leaders who are shaping the future of technology
      </p>
    </div>
  
    <div class="space-y-24">
      {#each speakers as speaker, index}
        <div 
          class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 group"
        >
          <div class="w-full lg:w-2/5 relative">
            <!-- Decorative background -->
            <div class="absolute -inset-4  rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
            
            <img
              src={speaker.image}
              alt="{speaker.name} - Keynote Speaker"
              class="rounded-2xl shadow-xl w-full aspect-[4/5] object-cover relative z-10 group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
  
          <div class="w-full lg:w-3/5 space-y-6">
            <div class="space-y-3">
              <h2 class="text-4xl lg:text-6xl font-bold font-judson text-center lg:text-left bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                {speaker.name}
              </h2>
              <p class="text-[#FF914C] font-medium text-lg text-center lg:text-left">{speaker.role}</p>
            </div>
            
            <p class="text-lg leading-relaxed text-gray-700">
              {speaker.bio}
            </p>
  
            <div class="pt-4">
              <p class="text-sm text-gray-500 mb-3">Speaking Topics: N/A</p>
              <div class="flex flex-wrap gap-2">
                {#each speaker.topics as topic}
                  <span class="px-4 py-2 bg-orange-50 text-[#FF914C] rounded-full text-sm font-medium">
                    {topic}
                  </span>
                {/each}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>