<script> 

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
        
      
        <div class="space-y-32">
          {#each workshops as workshop, index}
            <div class="relative group">
              <!-- Alternating layout for even/odd workshops -->
              <div class="grid lg:grid-cols-2 gap-16 items-center" class:lg:grid-flow-dense={index % 2 === 0}>
                <!-- Image section -->
                <div class="relative" class:lg:col-start-2={index % 2 === 0}>
                  <div class="aspect-[4/3] relative">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#FF914C]/20 to-orange-200/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300 -rotate-2"></div>
                    <img
                      src={workshop.instructorImage}
                      alt={workshop.instructor}
                      class="absolute inset-0 w-full h-full object-cover rounded-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500"
                    />
                  </div>
                  <div class="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                    <p class="font-semibold text-lg">{workshop.instructor}</p>
                    <p class="text-[#FF914C] text-sm">{workshop.instructorRole}</p>
                  </div>
                </div>
        </div>


         <!-- <div class="text-center mb-20">
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
    </div> -->


    
        
    </main>
    
    <style>
        /* this is the style section  */
    
    </style>