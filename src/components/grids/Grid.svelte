<!-- Grid.svelte -->
<script>
    import TeamMember from './TeamMember.svelte';
    import blankpfp from '../../teamPhotos/pfp.png';

    export let teamTitle = "Default Team"
    export let team = [
      { name: 'Default Name', role: 'Default Role', image: blankpfp },
    ];
</script>

<div class="h-400">
    <div class="team text-center justify-center font-bold text-2xl md:text-4xl lg:text-6xl mb-4">
      <h1 class="text-4xl md:text-6xl font-bold"> {teamTitle} </h1>
    </div>
    <div class="team-grid">
      {#each team as member}
        <div class="team-member">
          <TeamMember name={member.name} role={member.role} image={member.image} />
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    .team-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin: 0 auto; /* Center the grid */
      max-width: 60%; /* Increase margins on the sides by reducing the max width */
    }
  
    @media (min-width: 640px) {
      .team-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  
    @media (min-width: 1024px) {
      .team-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  
    .team-member {
      max-width: 250px; /* Keep individual members compact */
      text-align: center;
    }
  
    .team {
      margin-bottom: 1rem; /* Adjust spacing below title */
    }
  </style>
  