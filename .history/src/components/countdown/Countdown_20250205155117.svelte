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
  
  <div class="grid grid- gap-4 items-center">
    <!-- Days -->
    <div class="w-40 h-40 bg-[#FF914C] rounded-md flex flex-col justify-center items-center">
      <span class="text-5xl font-bold">{timeRemaining.days}</span>
      <span class="text-2xs text-gray-600">Days</span>
    </div>
  
    <!-- Separator -->
    <span class="text-xl font-bold">:</span>
  
    <!-- Hours -->
    <div class="w-40 h-40 bg-[#FF914C] rounded-md flex flex-col justify-center items-center">
      <span class="text-5xl font-bold">{timeRemaining.hours}</span>
      <span class="text-2xs text-gray-600">Hours</span>
    </div>
  
    <!-- Separator -->
    <span class="text-xl font-bold">:</span>
  
    <!-- Minutes -->
    <div class="w-40 h-40 bg-[#FF914C] rounded-md flex flex-col justify-center items-center">
      <span class="text-5xl font-bold">{timeRemaining.minutes}</span>
      <span class="text-2xs text-gray-600">Minutes</span>
    </div>
  
    <!-- Separator -->
    <span class="text-xl font-bold">:</span>
  
    <!-- Seconds -->
    <div class="w-40 h-40 bg-[#FF914C]  rounded-md flex flex-col justify-center items-center">
      <span class="text-5xl font-bold">{timeRemaining.seconds}</span>
      <span class="text-2xs text-gray-600">Seconds</span>
    </div>
  </div>
  