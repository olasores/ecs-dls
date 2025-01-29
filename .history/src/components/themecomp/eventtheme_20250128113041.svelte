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
      category: "Artificial Intelligence",
      attendees: 150,
      rating: 4.8
    },
    {
      title: "Web3 Development Fundamentals",
      instructor: "James Wilson",
      date: "September 28, 2023",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Blockchain",
      attendees: 120,
      rating: 4.7
    },
    {
      title: "Data Science in Practice",
      instructor: "Emily Rodriguez",
      date: "August 12, 2023",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Data Science",
      attendees: 200,
      rating: 4.9
    },
    {
      title: "Cloud Architecture Design",
      instructor: "Michael Zhang",
      date: "July 25, 2023",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Cloud Computing",
      attendees: 180,
      rating: 4.6
    },
    {
      title: "UX Research Methods",
      instructor: "Lisa Parker",
      date: "June 18, 2023",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Design",
      attendees: 90,
      rating: 4.8
    },
    {
      title: "Cybersecurity Essentials",
      instructor: "Alex Thompson",
      date: "May 30, 2023",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Security",
      attendees: 160,
      rating: 4.7
    }
    ]
</script> 

<main>
    
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


  past workshops section 
</main>

<style>
    /* Custom styles for the theme section */
</style>