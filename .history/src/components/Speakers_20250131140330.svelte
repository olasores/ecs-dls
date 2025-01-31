<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</svelte:head>
<script>

  const speakers = [
    {
      name: "Olivia Stella",
      image: "assets/olivia.png",
      bio: "Olivia Stella is a Tech Lead, Cybersecurity at Southwest Airlines",
    },
    {
      name: "Yasmeen Ismail",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      bio: "Yasmeen Ismail is an Engineer I at ABS Consulting",
    }
  ];
  

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
      name: "Zeed Jarrah",
      role: "Cloud Architect",
      company: "Campos",
      expertise: ["Cloud Computing", "DevOps", "System Architecture"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      panel: "Future of Cloud Infrastructure"
    }
  ];

  const speedMentors = [
    {
      name: "Michael Riley",
      role: "Blockchain Researcher",
      company: "ABS Consulting",
      expertise: ["Blockchain", "Smart Contracts", "DeFi"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      mentorshipAreas: ["Career Guidance", "Research Direction", "Technology Selection"]
    },
    {
      name: "Alex Martinez",
      role: "Tech Lead",
      company: "Innovation Labs",
      expertise: ["Leadership", "Team Building", "Tech Strategy"],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      mentorshipAreas: ["Career Development", "Technical Leadership", "Project Management"]
    }
  ];

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
  <section class="bg-gray-100 py-16">
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