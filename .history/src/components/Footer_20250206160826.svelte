<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</svelte:head>

<script>
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
  const currentYear = new Date().getFullYear();
</script>

<Footer class="bg-[#1A2939] text-gray-300">
  <div class="max-w-7xl mx-auto px-4 py-8">
    <!-- Main Footer Content -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Logo and Description Column -->
      <div class="col-span-1 md:col-span-1">
        <div class="flex items-center mb-4 gap-2">
          <!-- Replace with your actual logo -->
          <img src="/assets/ecsdlslogo.png" alt="ECS DLS Logo" class="h-12" />
          <span class="text-xl font-bold text-white">ECS DLS</span>
        </div>
        <p class="text-sm text-gray-400">
          Empowering digital learning solutions for tomorrow's challenges.
        </p>
      </div>

      <!-- Quick Links Column -->
      <div class="col-span-1">
        <h3 class="text-white text-xs md:text-xl font-semibold mb-4">Quick Links</h3>
        <FooterLinkGroup ulClass="space-y-2">
          <FooterLink href="/" class="hover:text-white transition-colors">Home</FooterLink>
          <FooterLink href="/council" class="hover:text-white transition-colors">Council</FooterLink>
          <FooterLink href="/venue" class="hover:text-white transition-colors">Venue</FooterLink>
          <FooterLink href="/schedule" class="hover:text-white transition-colors">Schedule</FooterLink>
        </FooterLinkGroup>
      </div>

       <!-- Social Media Column -->
      <div class="col-span-1">
        <h3 class="text-white text-xs md:text-xl font-semibold mb-4">Connect With Us</h3>
        <FooterLinkGroup ulClass="space-y-2">
          <FooterLink href="https://linkedin.com" class="hover:text-white transition-colors flex items-center">
            <div class="flex ">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn

            </div>
            
          </FooterLink>
          <FooterLink href="https://twitter.com" class="hover:text-white transition-colors flex items-center">
            <div class="flex">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
              </svg>
              Twitter
            </div>
           
          </FooterLink>
          <FooterLink href="https://www.instagram.com/csufecssummit/" target="_blank" class="hover:text-white transition-colors flex items-center">
            <div class="flex">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram

            </div>
           
          </FooterLink>
          <FooterLink href="https://youtube.com" class="hover:text-white transition-colors flex items-center">
            <div class="flex">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </div>
           
          </FooterLink>
        </FooterLinkGroup>
      </div>

      <!-- Contact Info Column -->
      <div class="col-span-1">
        <h3 class="text-white font-semibold text-xs md:text-xl  mb-4">Contact Us</h3>
        <ul class="space-y-2">
          <li class="flex items-center">
            <span class="mr-2">📧</span>
            <a href="mailto:ecs.summit@gmail.com" class="hover:text-white transition-colors">
              ecs.summit@gmail.com
            </a>
          </li>
          <!-- <li class="flex items-center">
            <span class="mr-2">📱</span>
            <a href="tel:+1234567890" class="hover:text-white transition-colors">
              (123) 456-7890
            </a>
          </li> -->
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="mt-8 pt-8 border-t border-gray-700">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <FooterCopyright 
          href="/" 
          by="ECS DLS" 
          year={currentYear} 
          class="text-gray-400"
        />
        <FooterLinkGroup ulClass="flex space-x-6 mt-4 md:mt-0">
          <FooterLink href="/privacy" class="text-sm text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </FooterLink>
          
          <FooterLink href="/terms" class="text-sm text-gray-400 hover:text-white transition-colors">
            Terms of Service
          </FooterLink>
          <FooterLink href="/cookies" class="text-sm text-gray-400 hover:text-white transition-colors">
            Cookie Policy
          </FooterLink>
        </FooterLinkGroup>
      </div>
    </div>
  </div>
</Footer>