<script>
    const coordinators = [
      { name: "Alice Johnson", role: "Lead Coordinator" },
      { name: "Bob Smith", role: "Co-Coordinator" }
    ];
  
    const summitCouncilLeads = [
      "Emma Brown", "Liam Davis", "Sophia Wilson", "Noah Martinez", "Olivia Taylor", "William Anderson"
    ];
  
    const summitCouncilMembers = [
      "Mason Lee", "Ethan Clark", "Ava Lewis", "James Walker", "Charlotte Hall", "Benjamin Allen",
      "Lucas Young", "Henry Hernandez", "Ella King", "Daniel Wright", "Scarlett Lopez", "Jack Hill",
      "Aria Scott", "Michael Green"
    ];
  </script>
  
  <div class="p-6 bg-black min-h-screen flex flex-col items-center">
    <h1 class="text-3xl text-orange-500 font-bold mb-6">Summit Team</h1>
  
    <div class="w-full max-w-3xl">
      <!-- Coordinators Section -->
      <div class="bg-blue-600 text-white p-6 rounded-xl shadow-md mb-6">
        <h2 class="text-xl font-bold mb-4">Coordinators</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {#each coordinators as coordinator}
            <div class="bg-orange-500 p-4 rounded-lg shadow-md text-center">
              <p class="font-semibold">{coordinator.name}</p>
              <p class="text-sm">{coordinator.role}</p>
            </div>
          {/each}
        </div>
      </div>
  
      <!-- Summit Council Leads Section -->
      <div class="bg-blue-800 text-white p-6 rounded-xl shadow-md mb-6">
        <h2 class="text-xl font-bold mb-4">Summit Council Leads</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          {#each summitCouncilLeads as lead}
            <div class="bg-orange-500 p-4 rounded-lg shadow-md text-center">
              <p class="font-semibold">{lead}</p>
            </div>
          {/each}
        </div>
      </div>
  
      <!-- Summit Council Members Section -->
      <div class="bg-blue-900 text-white p-6 rounded-xl shadow-md">
        <h2 class="text-xl font-bold mb-4">Summit Council Members</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          {#each summitCouncilMembers as member}
            <div class="bg-orange-500 p-4 rounded-lg shadow-md text-center">
              <p class="font-semibold">{member}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
  