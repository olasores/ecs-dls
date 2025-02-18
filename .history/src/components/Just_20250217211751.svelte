
<script>
    // icons https://feathericons.com/, https://github.com/unplugin/unplugin-icons
    import Grid from "./grids/Grid.svelte";

    // Import Images for the Members
    import blankpfp from "/assets/teamPhotos/blankpfp.jpg";
  

    const coCoordinators = [
        { name: 'Lupita Jumenez', role: 'Co-Lead Coordinator', pronouns: '(She/Her)', image: "/assets/teamPhotos/Lupita.jpg" },
        { name: 'Manasi Patil', role: 'Co-Lead Coordinator', pronouns: '(She/Her)', image: "/assets/teamPhotos/Manasi.jpg" },
    ]

    const coordinators = [
        { name: 'Taylor Livingston', role: 'Lead Student Advisor', pronouns: '(She/Her)', image: "/assets/teamPhotos/taylor.png" },
        { name: 'Oyinkansola Olayinka', role: 'Web Development Team Lead', pronouns: '(She/Her)', image: "/assets/teamPhotos/Ola.jpg" },
        { name: 'Riya Jain', role: 'Industry Outreach Team Lead', pronouns: '(She/Her)', image: "/assets/teamPhotos/Riya.jpg" },
        { name: 'Khushi Kaushik', role: 'Student Outreach Team Lead', pronouns: '(She/Her)', image: "/assets/teamPhotos/Khushi.jpg" },
        { name: 'Fiona Keaney', role: 'Social Media Team Lead', pronouns: '(She/Her)', image: "/assets/teamPhotos/fiona.jpg" },
        { name: 'Kelsey Tang', role: 'Operations Team Lead', pronouns: '(She/Her)', image: "/assets/teamPhotos/Kelsey.jpg" },
    ];

    const advisors = [
        { name: 'Beth Harnick-Shapiro', role: 'Faculty Advisor', pronouns: '(She/Her)', image: "/assets/teamPhotos/Beth.png" },
        { name: 'Karina Vega', role: 'Staff Advisor & Operations Team Member', pronouns: '(She/Her)', image: "/assets/teamPhotos/karina.jpg" }, 
        { name: 'Toni Miller', role: 'Staff Advisor', pronouns: '(She/Her)', image:  }, 
    ];

    const councilMembers = [
        { name: 'Keang Zheng Taing', role: 'Operations and Outreach Team Member', pronouns: '(He/Him)', image: "/assets/teamPhotos/keang.jpg" },
        { name: 'Kristine Vergara', role: 'Counsel Member', pronouns: '(She/Her)', image: "/assets/teamPhotos/Kristine.jpg" }, 
        { name: 'Alexia Riley', role: 'Social Media & Outreach Team Member', pronouns: '(They/Them)', image: "/assets/teamPhotos/Alexia.jpg" },
        { name: 'Celine Troung', role: 'Operations Team Member', pronouns: '(She/Her)', image: "/assets/teamPhotos/Celine.jpg" }, 
        { name: 'Lori Cha', role: 'Web Development Team Member', pronouns: '(She/Her)', image: "/assets/teamPhotos/lori.jpg" },
        { name: 'Suhana Natalia', role: 'Operations Team Member', pronouns: '(She/Her)', image: "/assets/teamPhotos/Suhana.jpeg" },
        // change carrie image later 
        { name: 'Carrie Appelt', role: 'Outreach Team Member', pronouns: '(She/Her)', image: "/assets/teamPhotos/Carrie.jpeg" },
        { name: 'Joann Sum', role: 'Operations Team Member', pronouns: '(She/Her)', image: "/assets/teamPhotos/Joann.jpg" },
        { name: 'Dhara Panchal', role: 'Social Media Team Member', pronouns: '(She/Her)', image: "/assets/teamPhotos/dhara.jpg" },
        { name: 'Demi Chen', role: 'Web Development Team Member', pronouns: '(She/Her)', image: "/assets/teamPhotos/demi.jpg" },
        { name: 'Julie Yun', role: 'Operations Team Member', pronouns: '(She/Her)', image: "/assets/teamPhotos/julie.jpeg" },
        { name: 'Samantha Rehome', role: 'Outreach Team Member', pronouns: '(She/Her)', image: "/assets/teamPhotos/samantha.jpg" },
    ];

</script>

<main class="min-h-screen">
    <!-- HERO PAGE -->
    <section class="w-full h-[60vh] relative mb-16">
        <img 
          src="assets/tsu6.jpeg" 
          alt="Conference Venue" 
          class="w-full h-full object-cover"
        >
        <div class="absolute inset-0 flex flex-col items-start justify-center text-white bg-black bg-opacity-50 px-10 md:px-20 lg:px-40">
          <h1 class="text-4xl md:text-6xl font-bold font-judson">The 2025, Summit Council</h1>
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