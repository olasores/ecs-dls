<script>
  import TeamMember from './TeamMember.svelte';
  import blankpfp from "/assets/teamPhotos/blankpfp.jpg";

  export let teamTitle = "Default Team";
  export let team = [
    { name: 'Default Name', role: 'Default Role', pronouns: 'she/her', image: blankpfp },
  ];
</script>

<div>
  <div class="team justify-center text-center font-bold text-xl md:text-2xl lg:text-4xl mb-4">
    <h1>{teamTitle}</h1>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mx-auto max-w-7xl"> 
    {#each team as member}
      <div class="team-member flex flex-col items-center"> 
        <TeamMember name={member.name} role={member.role} pronouns={member.pronouns} image={member.image} />
      </div>
    {/each}
  </div>
</div>

<style>
  .team-member {
    text-align: center;
    @apply p-4; /* Added padding for better spacing */
  }

  .team {
    margin-bottom: 1rem;
  }
</style>