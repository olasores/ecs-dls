<script>
    const coordinators = [
        { name: 'Lupita Jumenez', role: 'Co-Lead Coordinator', pronouns: '(She/Her)', image: lupita },
        { name: 'Manasi Patil', role: 'Co-Lead Coordinator', pronouns: '(She/Her)', image: manasi },
    ];
  
    const summitCouncilLeads = [
      { name: "Emma Brown", image: "lead1.jpg" }, { name: "Liam Davis", image: "lead2.jpg" }, 
      { name: "Sophia Wilson", image: "lead3.jpg" }, { name: "Noah Martinez", image: "lead4.jpg" },
      { name: "Olivia Taylor", image: "lead5.jpg" }, { name: "William Anderson", image: "lead6.jpg" }
    ];
  
    const summitCouncilMembers = [
      { name: "Mason Lee", image: "member1.jpg" }, { name: "Ethan Clark", image: "member2.jpg" },
      { name: "Ava Lewis", image: "member3.jpg" }, { name: "James Walker", image: "member4.jpg" },
      { name: "Charlotte Hall", image: "member5.jpg" }, { name: "Benjamin Allen", image: "member6.jpg" },
      { name: "Lucas Young", image: "member7.jpg" }, { name: "Henry Hernandez", image: "member8.jpg" },
      { name: "Ella King", image: "member9.jpg" }, { name: "Daniel Wright", image: "member10.jpg" },
      { name: "Scarlett Lopez", image: "member11.jpg" }, { name: "Jack Hill", image: "member12.jpg" },
      { name: "Aria Scott", image: "member13.jpg" }, { name: "Michael Green", image: "member14.jpg" }
    ];
  
    const advisors = [
      { name: "Dr. Susan Parker", image: "advisor1.jpg" },
      { name: "Prof. John Bennett", image: "advisor2.jpg" },
      { name: "Dr. Emily Carter", image: "advisor3.jpg" }
    ];
  </script>
  
  <div class="p-6 min-h-screen flex flex-col items-center">
    <h1 class="text-3xl text-orange-500 font-bold mb-6">Summit Team</h1>
  
    <div class="w-full max-w-3xl">
      <!-- Coordinators Section -->
      <div class=" text-white p-6 rounded-xl shadow-md mb-6">
        <h2 class="text-xl font-bold mb-4">Coordinators</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {#each coordinators as coordinator}
            <div class="bg-orange-500 p-4 rounded-lg shadow-md text-center">
              <img src={coordinator.image} alt={coordinator.name} class="w-20 h-20 rounded-full mx-auto mb-2" />
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
              <img src={lead.image} alt={lead.name} class="w-20 h-20 rounded-full mx-auto mb-2" />
              <p class="font-semibold">{lead.name}</p>
            </div>
          {/each}
        </div>
      </div>
  
      <!-- Summit Council Members Section -->
      <div class="bg-blue-900 text-white p-6 rounded-xl shadow-md mb-6">
        <h2 class="text-xl font-bold mb-4">Summit Council Members</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          {#each summitCouncilMembers as member}
            <div class="bg-orange-500 p-4 rounded-lg shadow-md text-center">
              <img src={member.image} alt={member.name} class="w-20 h-20 rounded-full mx-auto mb-2" />
              <p class="font-semibold">{member.name}</p>
            </div>
          {/each}
        </div>
      </div>
  
      <!-- Advisors Section -->
      <div class="bg-blue-700 text-white p-6 rounded-xl shadow-md">
        <h2 class="text-xl font-bold mb-4">Advisors</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {#each advisors as advisor}
            <div class="bg-orange-500 p-4 rounded-lg shadow-md text-center">
              <img src={advisor.image} alt={advisor.name} class="w-20 h-20 rounded-full mx-auto mb-2" />
              <p class="font-semibold">{advisor.name}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>