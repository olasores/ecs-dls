<script>
    let selectedDay = "Day 1"; // Default to Day 1
let events = {
  "Day 1": [
    {
      id: 1,
      image: "assets/check-in.png", // Registration desk
      title: "Check In",
      description: "A personal portfolio is a curated collection of an individual's professional work.",
      location: "TSU",
      time: "5:00 PM - 5:30 PM",
      date: "February 21 2025",
    },
    {
      id: 2,
      image: "assets/panel-h.png", // Keeping dean's image as requested
      title: "Dean's Welcome",
      description: "Welcome the College of Computer Science and Engineering Dean, Susan Barura.",
      location: "Mirpur 01 Road N 12 Dhaka, Bangladesh",
      time: "5:30PM - 5:45PM",
      date: "February 21 2025",
    },
    {
      id: 3,
      image: "assets/spagh.png", // Team building activity
      title: "Sphagetti + Marshmallow activity",
      description: "Ice breaker activity to get to know your fellow participants.",
      location: "Main Conference Hall",
      time: "5:45PM - 6:20PM",
      date: "February 21 2025",
    },
    {
      id: 5,
      image: "assets/k-note.png", // Keynote speaker
      title: "Keynote Speaker 1",
      description: "Our keynote speaker will share insights on the future of technology.",
      location: "Main Conference Hall",
      time: "6:20PM - 6:50PM",
      date: "February 21 2025",
    },
    {
      id: 6,
      image: "assets/din.png", // Dinner setup
      title: "Dinner",
      description: "Time to feast .",
      location: "Main Conference Hall",
      time: "6:50PM - 8:10PM",
      date: "February 21 2025",
    },
    {
      id: 7,
      image: "assets/close.png", // Conference closing
      title: "Closing Statement",
      description: "End of Day 1 activities.",
      location: "Main Conference Hall",
      time: "08:10 PM - 08:30 PM",
      date: "February 21 2025",
    },
  ],
  "Day 2": [
    {
      id: 8,
      image: "assets/check-in.png", // Registration desk
      title: "Check In",
      description: "A personal portfolio is a curated collection of an individual's professional work.",
      location: "TSU",
      time: "9:00AM - 10:00AM",
      date: "February 22 2025",
    },
    {
      id: 9,
      image: "assets/welcomimg.png", // Conference welcome
      title: "Welcome Back",
      description: "A celebration of achievements and leadership in various sectors.",
      location: "Main Conference Hall",
      time: "10:00AM - 10:10AM",
      date: "February 22 2025",
    },
    {
      id: 10,
      date: "February 22",
      time: "10:10AM - 10:35AM",
      description: "A celebration of achievements and leadership in various sectors.",
      title: "Keynote Speaker 2",
      location: "Main Conference Hall",
      speaker: "Dr. Sarah Johnson",
      image: "assets/knote.png" // Keynote speaker
    },
    {
      id: 11,
      date: "February 22",
      time: "10:35AM - 12:00PM",
      title: "Panel Discussion",
      location: "Main Conference Hall",
      speaker: "Tech Industry Leaders",
      description: "Our Pannelist will go ahead and answer some questions.",
      image: "assets/p-2.png" // Panel discussion
    },
    {
      id: 12,
      date: "February 22",
      time: "12:00PM - 01:30PM",
      title: "Lunch",
      location: "Main Conference Hall",
      description: "Enjoy Our Lunch Menu.",
      speaker: "N/A",
      image: "assets/lun.png" // Lunch setup
    },
    {
      id: 13,
      date: "February 22",
      time: "01:30PM - 02:10PM",
      title: "Workshop 1",
      location: "Workshop Room 1",
      description: "Our first engaging workshop.",
      speaker: "Prof. Michael Chen",
      image: "assets/gallery/w-1.png" // Workshop
    },
    {
      id: 13,
      date: "February 22",
      time: "02:15PM - 02:55PM",
      title: "Workshop 2",
      location: "Workshop Room 1",
      description: "Our first engaging workshop.",
      speaker: "Prof. Michael Chen",
      image: "assets/w1.png" // Workshop
    },
    {
      id: 14,
      date: "February 22",
      time: "03:00PM - 04:30PM",
      title: "Speed Mentoring",
      location: "Grand Hall",
      description: "Ask our professionals questions one on one.",
      speaker: "All Attendees",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop" // Mentoring
    },
    {
      id: 15,
      date: "February 22",
      time: "04:30PM - 05:00PM",
      title: "Closing Ceremony & Pictures",
      location: "Main Conference Hall",
      speaker: "Conference Committee",
      description: "Ending the conference with a bang.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop" // Closing ceremony
    }
  ],
};
  </script>

  
<section class="px-6 sm:px-12 lg:px-24 py-10">
  <div class="max-w-7xl mx-auto">
    <!-- Heading and Tabs Container -->
    <div class="flex items-center justify-between mb-4">
      <!-- Heading -->
      <div>
        <p class="text-sm font-semibold text-[#FF914C] flex justify-center md:justify-start items-center gap-2 uppercase tracking-wider">
          <span class="w-8 h-[1px] bg-[#FF914C]"></span>
          Event Schedule
          <span class="w-8 h-[1px] bg-[#FF914C]"></span>

        </p>
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
              <h3 class="text-lg font-bold text-orange-500 mb-2">{event.title}</h3>
              <p class="text-sm text-gray-600 mb-4">{event.description}</p>
            </div>
            <div class="text-sm text-gray-500">
              <p class="flex items-center">
                <svg class="w-4 h-4 text-[#FF914C] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a6 6 0 00-6 6c0 4.418 6 10 6 10s6-5.582 6-10a6 6 0 00-6-6zM8 8a2 2 0 114 0 2 2 0 01-4 0z" clip-rule="evenodd"></path></svg>
                {event.location}
              </p>
              <p class="flex items-center mt-2">
                <svg class="w-4 h-4 text-[#FF914C] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 8H9V5h2v5z" clip-rule="evenodd"></path></svg>
                {event.time}
              </p>
              <p class="flex items-center mt-2">
                <svg class="w-4 h-4 text-[#FF914C] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-2 0v1H7V3a1 1 0 00-1-1zM4 8h12v8H4V8z"></path></svg>
                {event.date}
              </p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
