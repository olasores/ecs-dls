<script>
    const events = [ 

    // Day 1 Events 
        // change image
        {
        date: "February 21",
        time: "5:00PM - 5:30PM",
        title: "Check In",
        location: "TSU",
        speaker: "Summit Councils",
        category: "Ceremony",
        image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&auto=format&fit=crop", // Registration desk
      },
      // change images
      {
        date: "February 21",
        time: "5:30PM - 5:45PM",
        title: "Dean's Welcome",
        location: "Main Conference Hall",
        speaker: "Susan Barura",
        category: "Keynote",
        image: "assets/panel-h.png"
      },

      {
        date: "February 21",
        time: "5:45PM - 6:20PM",
        title: "Sphagetti + Marshmallow activity",
        location: "Main Conference Hall",
        // edit speaker or organizers 
        // edit imaages later
        speaker: "Susan Barura",
        category: "Ceremony",
        image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&auto=format&fit=crop", // Team building activity
      },
      {
        date: "February 21",
        time: "6:20PM - 6:50PM",
        title: "Keynote Speaker 1",
        location: "Main Conference Hall",
        // edit name later
        speaker: "N/A",
        category: "Keynote",
        image: "assets/k-note.png", // Keynote speaker      },
      {
        date: "February 21",
        time: "6:50PM - 8:10PM",
        title: "Dinner",
        location: "Main Conference Hall",
        // edit name later
        speaker: "N/A",
        category: "Keynote",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },
      {
        date: "March 16",
        time: "08:10 PM - 08:30 PM",
        title: "Closing Statement",
        location: "Main Conference Hall",
        speaker: "Summit Councils",
        category: "Ceremony",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },
    
      //Day 2 Events 
      {
        date: "February 22",
        time: "9:00AM - 10:00AM",
        title: "Check In / Breakfast",
        location: "TSU",
        speaker: "Summit Councils",
        category: "Ceremony",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },

      {
        date: "February 22",
        time: "10:00AM - 10:10AM",
        title: "Welcome Back",
        location: "TSU",
        speaker: "Summit Councils",
        category: "Ceremony",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },
      {
        date: "February 22",
        time: "10:10AM - 10:35AM",
        title: "Keynote Speaker 2",
        location: "Main Conference Hall",
        speaker: "Dr. Sarah Johnson",
        category: "Keynote",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },
      {
        date: "February 22",
        time: "10:35AM - 12:00PM",
        title: "Panel Discussion",
        location: "Main Conference Hall",
        speaker: "Tech Industry Leaders",
        category: "Panel",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },

      {
        date: "February 22",
        time: "12:00PM - 01:30PM",
        title: "Lunch",
        location: "Main Conference Hall",
        // edit name later
        speaker: "N/A",
        category: "Keynote",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },


      {
        date: "February 22",
        time: "01:30PM - 02:10PM",
        title: "Workshop 1",
        location: "Workshop Room 1",
        speaker: "Prof. Michael Chen",
        category: "Workshop",
        image: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },
      {
        date: "February 22",
        time: "03:00PM - 04:30PM",
        title: "Speed Mentoring",
        // edit location for this
        location: "Grand Hall",
        speaker: "All Attendees",
        category: "Networking",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },
      {
        date: "February 22",
        time: "04:30PM - 05:00PM",
        title: "Closing Ceremony & Pictures",
        location: "Main Conference Hall",
        speaker: "Conference Committee",
        category: "Ceremony",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      }
    ];
  
    let selectedCategory = "All";
    const categories = ["All", "Ceremony", "Keynote", "Panel", "Workshop", "Networking", ];
  
    $: filteredEvents = selectedCategory === "All" 
      ? events 
      : events.filter(event => event.category === selectedCategory);
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
        <h1 class="text-4xl md:text-6xl font-bold font-judson">2025 Schedule</h1>
        <p class="text-lg md:text-xl mt-4 font-light max-w-2xl">Logistics of the event</p> 
      </div>
    </section>

    <div class="text-center mb-20">
      <p class="text-sm font-semibold text-[#FF914C] uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
        <span class="w-8 h-[1px] bg-[#FF914C]"></span>
          Detailed Schedule
        <span class="w-8 h-[1px] bg-[#FF914C]"></span>
      </p>
      <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
        Our Event Schedule
      </h1>
      <p class="text-gray-600 max-w-2xl mx-auto text-lg">
        Learn about the various sessions, workshops, and networking events happening during the conference.
      </p>
    </div>
  
    <!-- Event Categories Filter -->
    <section class="max-w-7xl mx-auto px-6 mb-12">
      <div class="flex flex-wrap gap-4 justify-center">
        {#each categories as category}
          <button 
            class="px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 {selectedCategory === category ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
            on:click={() => selectedCategory = category}
          >
            {category}
          </button>
        {/each}
      </div>
    </section>
  
    <!-- Events Grid -->
    <section class="max-w-7xl mx-auto px-6 mb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each filteredEvents as event}
          <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="relative">
              <img src={event.image} alt={event.title} class="w-full h-48 object-cover">
              <div class="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
                <div class="text-sm font-bold">{event.date}</div>
                <div class="text-xs">{event.time}</div>
              </div>
              <div class="absolute top-4 right-4 bg-white text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                {event.category}
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
              <div class="space-y-2 text-gray-600">
                <div class="flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>{event.location}</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  <span>{event.speaker}</span>
                </div>
              </div>
              <button class="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        {/each}
      </div>
    </section>
  
    <!-- Schedule Download -->
    <section class="bg-oranbge-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Download Complete Schedule</h2>
        <p class="text-blue-100 mb-8 max-w-2xl mx-auto">Get the detailed schedule with all sessions, workshops, and networking events in one place.</p>
        <button class="bg-white text-blue-600 font-medium px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300">
          Download PDF Schedule
        </button>
      </div>
    </section>
  </main>
  
  <style>
  </style>