<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</svelte:head>
<script>
  // ... (keeping all the existing speaker data unchanged)
  

  const panelists = [
    {
      name: "Dr. Emily Rodriguez",
      role: "Cybersecurity Expert",
      company: "SecureNet Systems",
      expertise: ["Network Security", "Cryptography", "Threat Analysis"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      },
      panel: "Cybersecurity Challenges in Modern Enterprise"
    },
    {
      name: "James Wilson",
      role: "Cloud Architect",
      company: "CloudScale Technologies",
      expertise: ["Cloud Computing", "DevOps", "System Architecture"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      },
      panel: "Future of Cloud Infrastructure"
    }
  ];

  const speedMentors = [
    {
      name: "Dr. Lisa Chang",
      role: "Blockchain Researcher",
      company: "Distributed Systems Inc",
      expertise: ["Blockchain", "Smart Contracts", "DeFi"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      },
      mentorshipAreas: ["Career Guidance", "Research Direction", "Technology Selection"]
    },
    {
      name: "Alex Martinez",
      role: "Tech Lead",
      company: "Innovation Labs",
      expertise: ["Leadership", "Team Building", "Tech Strategy"],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      },
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
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      },
      workshop: "Building IoT Solutions with Edge Computing"
    },
    {
      name: "Diana Lee",
      role: "Full Stack Developer",
      company: "TechEd Solutions",
      expertise: ["Web Development", "Cloud Native", "DevOps"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      },
      workshop: "Modern Web Development Workshop"
    }
  ];
</script>

<main class="min-h-screen bg-gray-50">
  <!-- Hero Section -->
  <section class="w-full h-[60vh] relative mb-16">
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
   <section class="mx-auto "> 
    <div class="text-center mb-12">
      <p class="text-sm font-semibold text-[#FF914C] uppercase tracking-wider mb-2">// Featured Presentation</p>
      <h1 class="text-4xl font-bold leading-tight mb-4">
       Keynote Speakers
      </h1>     
    </div>
    <!-- keynote 1 -->
    <div class="flex flex-col md:flex-row items-center gap-6">
      <!-- Image Section -->
      <div class="w-full md:w-1/3">
        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Keynote-Image" class="rounded-lg shadow-lg w-full">
      </div>
    
      <!-- Text Section -->
      <div class="w-full md:w-2/3">
        <h2 class="text-3xl md:text-5xl font-bold font-judson">Jose Tilapia</h2>
        <p class="mt-4 text-base leading-relaxed">
          Jose Tapia is the CEO and Co-Founder of Meru AI, a company whose mission is to use Artificial Intelligence and Machine Learning (AI/ML) to reduce the barriers of entry while elevating the endless possibilities of solutions to critical problems. In his role, Jose helps Small Medium Enterprise companies embrace AI/ML within diverse industries including Finance, Marketing, Video Games, and Business Infrastructure. Wearing many hats, Jose participates within the full cycle of visionary and technological development.
        </p>
      </div>
        <!-- keynote 2 -->

      <div class="flex flex-col md:flex-row items-center gap-6">
        <!-- Image Section -->
        <div class="w-full md:w-1/3">
          <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Keynote-Image" class="rounded-lg shadow-lg w-full">
        </div>
      
        <!-- Text Section -->
        <div class="w-full md:w-2/3">
          <h2 class="text-3xl md:text-5xl font-bold font-judson">Jose Tilapia</h2>
          <p class="mt-4 text-base leading-relaxed">
            Jose Tapia is the CEO and Co-Founder of Meru AI, a company whose mission is to use Artificial Intelligence and Machine Learning (AI/ML) to reduce the barriers of entry while elevating the endless possibilities of solutions to critical problems. In his role, Jose helps Small Medium Enterprise companies embrace AI/ML within diverse industries including Finance, Marketing, Video Games, and Business Infrastructure. Wearing many hats, Jose participates within the full cycle of visionary and technological development.
          </p>
        </div>
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
                    <a href={speaker.social.twitter} class="text-white hover:text-orange-400 transition-colors">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a href={speaker.social.linkedin} class="text-white hover:text-orange-400 transition-colors">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
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
                  <a href={speaker.social.twitter} class="text-white hover:text-orange-400 transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href={speaker.social.linkedin} class="text-white hover:text-orange-400 transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                  </a>
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
                  <div class="flex gap-3 justify-center">
                    <a href={speaker.social.twitter} class="text-white hover:text-orange-400 transition-colors">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a href={speaker.social.linkedin} class="text-white hover:text-orange-400 transition-colors">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
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