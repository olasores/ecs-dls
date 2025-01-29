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
              <h1 class="text-4xl md:text-6xl font-bold font-judson">2023 ECS SUMMIT</h1>
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