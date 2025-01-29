<script>
    let selectedDay = "Day 1"; // Default to Day 1
    let events = {
      "Day 1": [
        {
          id: 1,
          image: "/assets/networking.png",
          title: "Check In",
          description: "A personal portfolio is a curated collection of an individual's professional work.",
          location: " 01 Road N 12 Dhaka, Bangladesh",
          time: "5:00 PM - 5:30 PM",
          date: "February 21 2025",
        },
        {
          id: 2,
          image: "/assets/panel.png",
          title: "Dean's Welcome",
          description: "A personal portfolio is a curated collection of an individual's professional work.",
          location: "Mirpur 01 Road N 12 Dhaka, Bangladesh",
          time: "5:30PM - 5:45PM",
          date: "16 April 2024",
        },
        {
          id: 3,
          image: "/assets/panel.png",
          title: "Sparkle & Shine on Celebrations",
          description: "A personal portfolio is a curated collection of an individual's professional work.",
          location: "Mirpur 01 Road N 12 Dhaka, Bangladesh",
          time: "10 AM to 10 PM",
          date: "16 April 2024",
        },
        {
          id: 5,
          image: "/assets/panel.png",
          title: "Sparkle & Shine on Celebrations",
          description: "A personal portfolio is a curated collection of an individual's professional work.",
          location: "Mirpur 01 Road N 12 Dhaka, Bangladesh",
          time: "10 AM to 10 PM",
          date: "16 April 2024",
        },
      ],
      "Day 2": [
        {
          id: 6,
          image: "/assets/panel.png",
          title: "Engage and Inspire",
          description: "Discover strategies and innovations to make an impact in professional settings.",
          location: "Mirpur 01 Road N 12 Dhaka, Bangladesh",
          time: "10 AM to 10 PM",
          date: "18 April 2024",
        },
        {
          id: 7,
          image: "/assets/panel.png",
          title: "Celebration of Leadership",
          description: "A celebration of achievements and leadership in various sectors.",
          location: "Mirpur 01 Road N 12 Dhaka, Bangladesh",
          time: "10 AM to 10 PM",
          date: "18 April 2024",
        },
      ],
    };
  </script>
  <section class="px-6 sm:px-12 lg:px-24 py-10">
  <div class="max-w-7xl mx-auto">
    <!-- Heading and Tabs Container -->
    <div class="flex items-center justify-between mb-4">
      <!-- Heading -->
      <div>
        <p class="text-sm font-semibold text-[#FF914C] uppercase tracking-wider">// Event Schedule</p>
        <h1 class="text-4xl font-bold text-black">Information On The Event Schedule</h1>
      </div>
      <!-- Tabs -->
      <div class="flex space-x-4">
        {#each Object.keys(events) as day}
          <button
            on:click={() => (selectedDay = day)}
            class="px-6 py-2 rounded-full font-semibold border-2 text-sm transition-all duration-200
              {selectedDay === day ? 'bg-[#FF914C] text-white border-[#fc8b45]' : 'bg-white border-gray-300 text-gray-600 hover:bg-purple-100 hover:border-purple-500'}"
          >
            {day}
          </button>
        {/each}
      </div>
    </div>
    <!-- Divider -->
    <hr class="border-t-2 border-gray-300 mb-6">
    <!-- Events Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each events[selectedDay] as event}
        <div class="flex bg-white shadow-md rounded-lg overflow-hidden">
          <!-- Image -->
          <div class="w-1/3">
            <img src={event.image} alt={event.title} class="w-full h-full object-cover" />
          </div>
          <!-- Content -->
          <div class="w-2/3 p-6 flex flex-col justify-between">
            <div>
              <h3 class="text-lg font-bold text-pink-500 mb-2">{event.title}</h3>
              <p class="text-sm text-gray-600 mb-4">{event.description}</p>
            </div>
            <div class="text-sm text-gray-500">
              <p class="flex items-center">
                <span class="mr-2">📍</span>{event.location}
              </p>
              <p class="flex items-center mt-2">
                <span class="mr-2">⏰</span>{event.time}
              </p>
              <p class="flex items-center mt-2">
                <span class="mr-2">📅</span>{event.date}
              </p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
