<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</svelte:head>
<script> 

    // this is for your javascrip code
    import EventTheme from "./themecomp/EventTheme.svelte";
    
</script>
    
    
    <main>

      <!-- hero section  -->
        <section class="w-full h-[60vh] relative mb-0">
            <img 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
              alt="Conference Events" 
              class="w-full h-full object-cover"
            >
            <div class="absolute inset-0 flex flex-col items-start justify-center text-white bg-black bg-opacity-50 px-10 md:px-20 lg:px-40">
              <h1 class="text-4xl md:text-6xl font-bold font-judson">2024 ECS SUMMIT</h1>
              <p class="text-lg md:text-xl mt-4 font-light max-w-2xl">February 2024 | Fullerton CA</p> 
            </div>
         </section>


         <!-- theme section   -->
          <section class="">
            <!-- div with image to the left and text to the right  -->
            <EventTheme />
          </section>




          
    
    </main>
    
    <style>
        /* this is the style section  */
    
    </style>