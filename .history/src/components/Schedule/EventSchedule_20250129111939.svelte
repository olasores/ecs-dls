<script>
    
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
