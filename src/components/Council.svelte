<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</svelte:head>


<script>
    import HeroSection from "./heroSection/HeroSection.svelte";
    import images from "../imageData/images.json";

    const heroImage = images[0];
    const title = ["The 2025", "Summit Council"];
    const subtitle = " Meet the team that made the ECS Diversity Summit possible.";

    // icons https://feathericons.com/, https://github.com/unplugin/unplugin-icons
    import Grid from "./grids/Grid.svelte";

    // Import Images for the Members
    import coordinatorImage1 from "../teamPhotos/pfp.png";
    import coordinatorImage2 from "../teamPhotos/pfp.png";

    // Lists of Members
    const coordinators = [
        { name: 'John Doe', role: 'Event Coordinator', image: coordinatorImage1 },
        { name: 'Jane Smith', role: 'Lead Coordinator', image: coordinatorImage2 },
        { name: 'John Doe', role: 'Event Coordinator', image: coordinatorImage1 },
        { name: 'Jane Smith', role: 'Lead Coordinator', image: coordinatorImage2 },
        { name: 'John Doe', role: 'Event Coordinator', image: coordinatorImage1 },
        { name: 'Jane Smith', role: 'Lead Coordinator', image: coordinatorImage2 },
        { name: 'John Doe', role: 'Event Coordinator', image: coordinatorImage1 },
        { name: 'Jane Smith', role: 'Lead Coordinator', image: coordinatorImage2 },
        { name: 'John Doe', role: 'Event Coordinator', image: coordinatorImage1 },
        { name: 'Jane Smith', role: 'Lead Coordinator', image: coordinatorImage2 },
    ];

</script>

<main class="min-h-screen">
    <!-- HERO PAGE -->
<section class="bg-orange-300 w-full h-screen flex items-center justify-center">
  <HeroSection {heroImage} {title} {subtitle}/>
</section>   

<!-- COORDINATORS -->
<section class="p-12">
    <Grid teamTitle="Coordinators" team={coordinators} />
</section>

<!-- Team Leads -->
<section class="p-12">
    <Grid teamTitle="Team Leads" team={coordinators} />
</section>

<!-- Faculty Advisors -->
<section class="p-12">
    <Grid teamTitle="Faculty Advisors" team={coordinators} />
</section>

<!-- Council Members -->
<section class="p-12">
    <Grid teamTitle="Council Members" team={coordinators} />
</section>

</main>