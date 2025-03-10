<!-- <script> 

    const workshops = [
        {
        title: "Introduction to Machine Learning",
        instructor: "Sarah Johnson",
        instructorRole: "AI Research Lead, TechCorp",
        instructorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        date: "March 15, 2025",
        time: "9:00 AM - 12:00 PM",
        location: "Workshop Room A",
        capacity: 30,
        level: "Beginner",
        description: "Get started with machine learning fundamentals in this hands-on workshop. You'll learn about data preprocessing, model selection, and practical implementation using popular ML frameworks.",
        topics: ["Data Preprocessing", "Model Training", "Neural Networks"],
        requirements: ["Basic Python knowledge", "Laptop with Python installed"]
        },
        {
        title: "Advanced Web Development with Svelte",
        instructor: "Michael Chen",
        instructorRole: "Senior Developer, WebTech",
        instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        date: "March 16, 2025",
        time: "1:00 PM - 5:00 PM",
        location: "Workshop Room B",
        capacity: 25,
        level: "Intermediate",
        description: "Dive deep into Svelte development. Learn about stores, animations, server-side rendering, and best practices for building scalable applications.",
        topics: ["State Management", "Animations", "SSR", "Performance Optimization"],
        requirements: ["JavaScript knowledge", "Basic Svelte experience"]
        }
    ]    
</script>
    
    
    <main>
      <!-- Hero Section -->
    <section class="w-full h-[60vh] relative mb-16">
        <img 
        src="assets/tsu6.jpeg" 
        alt="Conference Venue" 
        class="w-full h-full object-cover"
        >
        <div class="absolute inset-0 flex flex-col items-start justify-center text-white bg-black bg-opacity-50 px-10 md:px-20 lg:px-40">
        <h1 class="text-4xl md:text-6xl font-bold font-judson">The Venue</h1>
        <p class="text-lg md:text-xl mt-4 font-light max-w-2xl">Experience world-class facilities in the heart of the city</p>
        </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div class="text-center mb-20">
          <p class="text-sm font-semibold text-[#FF914C] uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
            <span class="w-8 h-[1px] bg-[#FF914C]"></span>
            Interactive Sessions
            <span class="w-8 h-[1px] bg-[#FF914C]"></span>
          </p>
          <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Hands-on Workshops
          </h1>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">
            Join our expert-led workshops to gain practical experience and enhance your skills
          </p>
        </div>
      
        <div class="grid grid-cols-1 gap-12">
          {#each workshops as workshop}
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div class="grid md:grid-cols-3 gap-6">
                <!-- Instructor Column -->
                <div class="bg-gradient-to-br from-gray-50 to-orange-50 p-8 flex flex-col items-center text-center">
                  <div class="relative mb-6">
                    <div class="absolute -inset-2 bg-gradient-to-r from-[#FF914C]/20 to-orange-200/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <img
                      src={workshop.instructorImage}
                      alt={workshop.instructor}
                      class="w-32 h-32 rounded-full object-cover relative z-10 ring-4 ring-white"
                    />
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900">{workshop.instructor}</h3>
                  <p class="text-[#FF914C] text-sm mt-1">{workshop.instructorRole}</p>
                </div>
      
                <!-- Workshop Details -->
                <div class="md:col-span-2 p-8">
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="px-3 py-1 bg-orange-100 text-[#FF914C] rounded-full text-sm font-medium">
                      {workshop.level}
                    </span>
                    <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                      {workshop.capacity} seats
                    </span>
                  </div>
      
                  <h2 class="text-2xl font-bold text-gray-900 mb-4">{workshop.title}</h2>
                  
                  <div class="space-y-4 mb-6">
                    <p class="text-gray-600 leading-relaxed">
                      {workshop.description}
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
                      <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#FF914C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {workshop.date}
                      </div>
                      <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#FF914C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {workshop.time}
                      </div>
                      <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#FF914C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {workshop.location}
                      </div>
                    </div>
                  </div>
      
                  <div class="space-y-4">
                    <div>
                      <h4 class="text-sm font-semibold text-gray-900 mb-2">Topics Covered:</h4>
                      <div class="flex flex-wrap gap-2">
                        {#each workshop.topics as topic}
                          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                            {topic}
                          </span>
                        {/each}
                      </div>
                    </div>
      
                    <div>
                      <h4 class="text-sm font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {#each workshop.requirements as requirement}
                          <li>{requirement}</li>
                        {/each}
                      </ul>
                    </div>
                  </div>
      
                  <button class="mt-8 bg-[#FF914C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#E87F3A] transition-colors duration-300">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </section>

    
        
    </main>
    
    <style>
        /* this is the style section  */
    
    </style> -->