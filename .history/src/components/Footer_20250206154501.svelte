<script>
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
</script>

<Footer class="bg-[#1A2939] text-white py-8">
<div class="max-w-6xl mx-auto px-4">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
    
    <!-- Logo Section -->
    <div class="flex items-center justify-center md:justify-start">
      <img src="/assets/ecsdlslogo.png" alt="ECS DLS Logo" class="h-12" />
    </div>

    <!-- Navigation Links -->
    <div class="flex flex-col text-center md:text-left">
      <FooterLinkGroup ulClass="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-400">
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/events">Events</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
      </FooterLinkGroup>
    </div>

    <!-- Copyright Section -->
    <div class="flex justify-center md:justify-end">
      <FooterCopyright href="/" by="ECS DLS" year={2025} class="text-gray-400 text-sm" />
    </div>

  </div>
</div>
</Footer>
