<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap" rel="stylesheet">
</svelte:head>

<script>
  const venues = [
    {
      title: "TSU Pavillon A",
      description: "One of two of the main conference will be located at TSU Pavillon A ",
      image: "assets/tsup1.webp"
    },
    {
      title: "TSU Pavillon B",
      description: "Two of two of the main conference hall will be located at TSU Pavillon B just right next to A",
      image: "assets/tsu4.png"
    },
    {
      title: "Workshop Rooms",
      description: "Spacious workshop rooms for hands on engaging workshops",
      image: "assets/tsuw.jpg"
    }
  ];
</script>

<main class="min-h-screen bg-gray-50">
  <!-- Hero Section -->
  <section class="w-full h-[60vh] relative mb-16">
    <img 
      src="assets/tsu6.jpeg" 
      alt="Conference Venue" 
      class="w-full h-full object-cover"
    >
    <div class="absolute inset-0 flex flex-col items-start justify-center text-white bg-black bg-opacity-50 px-10 md:px-20 lg:px-40">
      <h1 class="text-4xl md:text-6xl font-bold font-judson">The Venue</h1>
      <p class="text-lg md:text-xl mt-4 font-light max-w-2xl">Experience world-class facilities in the heart of the city</p>
    </div>
  </section>

  <!-- Venue Overview -->
  <section class="max-w-7xl mx-auto px-6 mb-16">
    <p class="text-sm font-semibold text-[#FF914C] uppercase tracking-wider mb-2">// Spaces</p>
    <h2 class="text-3xl md:text-4xl font-judson font-bold text-gray-800 mb-8">Conference Spaces</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each venues as venue}
        <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
          <img src={venue.image} alt={venue.title} class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-judson font-bold text-gray-800 mb-2">{venue.title}</h3>
            <p class="text-gray-600">{venue.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Location & Directions -->
  <section class="bg-gray-100  rounded-[100px]py-16" style="background-image: url('/assets/background.png');">    >
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-judson font-bold text-gray-800 mb-8">Location & Directions</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-judson font-bold mb-4">Address</h3>
          <p class="text-gray-600 mb-4">
            SCPS,  
            1222N N State College Blvd<br>
           Fullerton <br>
           CA, 92831
          </p>
          <h3 class="text-xl font-judson font-bold mb-4">Getting Here</h3>
          <ul class="space-y-2 text-gray-600">
            <li>• Free parking located at State College Parking Structure</li>
            <li>• After parking, walk to the Titan Student Union Pavillions</li>
          </ul>
        </div>
        
        <div class="bg-gray-300 h-[300px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3304.683634127453!2d-117.88858262336548!3d33.88303809102812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x80dcd5cf48ba4fa1%3A0xddc3381082e4be41!2sSCPS%20N%20State%20College%20Blvd%20Fullerton%2C%20CA%2092831!3m2!1d33.8830381!2d-117.8885826!4m5!1s0x80dcd5cf48ba4fa1%3A0xddc3381082e4be41!2sSCPS%20N%20State%20College%20Blvd%20Fullerton%2C%20CA%2092831!3m2!1d33.8830381!2d-117.8885826!5e0!3m2!1sen!2sus!4v1675804739038!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
       
      </div>
    </div>
  </section>
</main>