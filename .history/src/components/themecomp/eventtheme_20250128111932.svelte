<script> 
    const themeData = {
    year: "2023",
    title: "Innovating Tomorrow: AI & Human Collaboration",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Join us as we explore the fascinating intersection of artificial intelligence and human creativity. This year's theme celebrates the transformative power of collaboration between human ingenuity and AI capabilities. Through inspiring keynotes, interactive workshops, and engaging panel discussions, we'll discover how this partnership is reshaping industries, sparking innovation, and creating opportunities for a better future. Together, we'll explore practical applications, ethical considerations, and the endless possibilities that emerge when human expertise meets artificial intelligence."
    }
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
          </div>
        </div>
  
        <!-- Description section -->
        <div class="max-w-4xl">
          <p class="text-lg text-gray-600 leading-relaxed">
            {themeData.description}
          </p>
        </div>
      </div>
    </div>
  </section>
</main>