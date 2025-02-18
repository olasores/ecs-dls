
<script>
    // icons https://feathericons.com/, https://github.com/unplugin/unplugin-icons
    import Grid from "./grids/Grid.svelte";

    // Import Images for the Members
    import blankpfp from "/assets/teamPhotos/blankpfp.jpg";
    import alexia from "/assets/teamPhotos/Alexia.jpg";
    import beth from "/assets/teamPhotos/Beth.png";
    import carrie from "/assets/teamPhotos/Carrie.jpeg";
    import celine from "/assets/teamPhotos/Celine.jpg";
    import demi from "/assets/teamPhotos/demi.jpg";
    import dhara from "/assets/teamPhotos/dhara.jpg";
    import fiona from "/assets/teamPhotos/fiona.jpg";
    import joann from "/assets/teamPhotos/Joann.jpg";
    import julie from "/assets/teamPhotos/julie.jpeg";
    import karina from "/assets/teamPhotos/karina.jpg";
    import keang from "/assets/teamPhotos/Keang.jpg";
    import kristine from "/assets/teamPhotos/Kristine.jpg";
    import kelsey from "/assets/teamPhotos/Kelsey.jpg";
    import khushi from "/assets/teamPhotos/Khushi.jpg";
    import lori from "/assets/teamPhotos/lori.jpg";
    import lupita from "/assets/teamPhotos/Lupita.jpg";
    import manasi from "/assets/teamPhotos/Manasi.jpg";
    import ola from "/assets/teamPhotos/Ola.jpg";
    import suhana from "/assets/teamPhotos/Suhana.jpeg";
    import samantha from "/assets/teamPhotos/samantha.jpg";
    import riya from "/assets/teamPhotos/Riya.jpg";
    import taylor from "/assets/teamPhotos/taylor.png";

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
        { name: 'Toni Miller', role: 'Staff Advisor', pronouns: '(She/Her)', image: blankpfp }, 
    ];

    const councilMembers = [
        { name: 'Keang Zheng Taing', role: 'Operations and Outreach Team Member', pronouns: '(He/Him)', image: "/assets/teamPhotos/keang.jpg" },
        { name: 'Kristine Vergara', role: 'Counsel Member', pronouns: '(She/Her)', image: "/assets/teamPhotos/Kristine.jpg" }, 
        { name: 'Alexia Riley', role: 'Social Media & Outreach Team Member', pronouns: '(They/Them)', image: "/assets/teamPhotos/Alexia.jpg" },
        { name: 'Celine Troung', role: 'Operations Team Member', pronouns: '(She/Her)', image: "/assets/teamPhotos/" }, 
        { name: 'Lori Cha', role: 'Web Development Team Member', pronouns: '(She/Her)', image: lori },
        { name: 'Suhana Natalia', role: 'Operations Team Member', pronouns: '(She/Her)', image: suhana },
        { name: 'Carrie Appelt', role: 'Outreach Team Member', pronouns: '(She/Her)', image: carrie },
        { name: 'Joann Sum', role: 'Operations Team Member', pronouns: '(She/Her)', image: joann },
        { name: 'Dhara Panchal', role: 'Social Media Team Member', pronouns: '(She/Her)', image: dhara },
        { name: 'Demi Chen', role: 'Web Development Team Member', pronouns: '(She/Her)', image: demi },
        { name: 'Julie Yun', role: 'Operations Team Member', pronouns: '(She/Her)', image: julie },
        { name: 'Samantha Rehome', role: 'Outreach Team Member', pronouns: '(She/Her)', image: samantha },
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