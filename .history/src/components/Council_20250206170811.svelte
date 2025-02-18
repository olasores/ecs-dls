<script> 

 import Grid from "./grids/Grid.svelte";
   
</script>

<main>
    <!-- hero section  -->
    <section class="w-full h-[60vh] relative mb-16">
        <img 
          src="assets/tsu6.jpeg" 
          alt="Conference Venue" 
          class="w-full h-full object-cover"
        >
        <div class="absolute inset-0 flex flex-col items-start justify-center text-white bg-black bg-opacity-50 px-10 md:px-20 lg:px-40">
          <h1 class="text-4xl md:text-6xl font-bold font-judson">The 2025 Summit Council</h1>
          <p class="text-lg md:text-xl mt-4 font-light max-w-2xl">Meet the team that made the ECS Diversity Summit possible.</p>
        </div>
      </section> 


    
<!-- COORDINATORS -->
<section class="justify-center p-8 px-24 md:px-32 lg:px-48">
    <Grid teamTitle="Coordinators" team={coCoordinators} />
</section>

<!-- Team Leads -->
<section class="p-8 px-24 md:px-32 lg:px-48">
    <Grid teamTitle="" team={coordinators} />
</section>

<!-- Faculty Advisors -->
<section class="p-8 px-24 md:px-32 lg:px-48">
    <Grid teamTitle="Faculty Advisors" team={advisors} />
</section>

<!-- Council Members -->
<section class="p-8 px-24 md:px-32 lg:px-48">
    <Grid teamTitle="Council Members" team={councilMembers} />
</section>





</main>

