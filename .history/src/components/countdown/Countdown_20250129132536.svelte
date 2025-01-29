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

<div class="grid grid-cols-1 gap-4 items-center justify-center w-full max-w-sm mx-auto">
  {#each Object.entries(timeRemaining) as [key, value]}
    <div class="w-40 h-40 bg-[#FF914C] rounded-md flex flex-col justify-center items-center shadow-lg">
      <span class="text-5xl font-bold">{value}</span>
      <span class="text-sm text-gray-600 uppercase">{key}</span>
    </div>
  {/each}
</div>
