<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</svelte:head>


<script>
  import { onMount } from 'svelte';

  const targetDate = "2025-02-21T00:00:00";

  let timeRemaining = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
  };

  let interval;

  function calculateTimeRemaining() {
      const now = new Date();
      const target = new Date(targetDate);
      const diff = target - now;

      if (diff <= 0) {
          clearInterval(interval);
          timeRemaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };
          return;
      }

      timeRemaining = {
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
      };
  }

  onMount(() => {
      calculateTimeRemaining();
      interval = setInterval(calculateTimeRemaining, 1000);
      return () => clearInterval(interval);
  });
</script>


<div class=" flex flex-col md:flex-row gap-2 w-full max-w-6xl mx-auto px-4">
  <!-- Title -->
   <div class="flex items-center">
    <h2 class="text-2xl md:text-3xl font-bold text-center mb-0 ">The Countdown</h2> <span class="text-orange-300 text-3xl">begins</span>

   </div>
  
  <!-- Countdown Container -->
  <div class="block md:flex md:gap-4 md:items-center md:justify-center">
      <!-- Days -->
      <div class="mb-4 md:mb-0">
          <div class="bg-[#FF914C] rounded-md flex flex-col justify-center items-center p-4 h-32 w-full md:w-40 md:h-40">
              <span class="text-4xl md:text-5xl font-bold text-white">{timeRemaining.days}</span>
              <span class="text-sm text-white/80">Days</span>
          </div>
      </div>

      <!-- Separator (hidden on mobile) -->
      <span class="hidden md:block text-xl font-bold">:</span>

      <!-- Hours -->
      <div class="mb-4 md:mb-0">
          <div class="bg-[#FF914C] rounded-md flex flex-col justify-center items-center p-4 h-32 w-full md:w-40 md:h-40">
              <span class="text-4xl md:text-5xl font-bold text-white">{timeRemaining.hours}</span>
              <span class="text-sm text-white/80">Hours</span>
          </div>
      </div>

      <!-- Separator (hidden on mobile) -->
      <span class="hidden md:block text-xl font-bold">:</span>

      <!-- Minutes -->
      <div class="mb-4 md:mb-0">
          <div class="bg-[#FF914C] rounded-md flex flex-col justify-center items-center p-4 h-32 w-full md:w-40 md:h-40">
              <span class="text-4xl md:text-5xl font-bold text-white">{timeRemaining.minutes}</span>
              <span class="text-sm text-white/80">Minutes</span>
          </div>
      </div>

      <!-- Separator (hidden on mobile) -->
      <span class="hidden md:block text-xl font-bold">:</span>

      <!-- Seconds -->
      <div class="mb-4 md:mb-0">
          <div class="bg-[#FF914C] rounded-md flex flex-col justify-center items-center p-4 h-32 w-full md:w-40 md:h-40">
              <span class="text-4xl md:text-5xl font-bold text-white">{timeRemaining.seconds}</span>
              <span class="text-sm text-white/80">Seconds</span>
          </div>
      </div>
  </div>
</div>