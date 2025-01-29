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

<div class="flex flex-wrap justify-center md:gap-4 gap-2 items-center">
  {#each Object.entries(timeRemaining) as [key, value]}
    <div class="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-[#FF914C] rounded-md flex flex-col justify-center items-center">
      <span class="text-3xl md:text-5xl font-bold">{value}</span>
      <span class="text-xs md:text-sm text-gray-600 capitalize">{key}</span>
    </div>
    {#if key !== "seconds"}
      <span class="text-lg md:text-xl font-bold">:</span>
    {/if}
  {/each}
</div>
