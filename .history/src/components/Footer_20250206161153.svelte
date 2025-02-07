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
          <FooterLink href="https://linktr.ee/ecssummit2023" target="" class="hover:text-white transition-colors flex items-center">
            <div class="flex ">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn

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

          <FooterLink href="https://linktr.ee/" class="hover:text-white transition-colors flex items-center">
            <div class="flex">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.162.08.323.16.404.08.162.24.242.4.242.24.08.4 0 .56-.081.08-.081.16-.243.16-.405.08-.161.08-.323.08-.404-.08-.162-.08-.324-.16-.405-.08-.162-.24-.242-.4-.242-.16-.08-.4 0-.48.081-.08.082-.16.243-.24.324zM16.688 2c-1.12 0-2.4.242-3.6.646-1.16.404-2.24 1.051-3.12 1.778-.96.807-1.76 1.698-2.32 2.789-.64 1.051-.96 2.183-.96 3.315 0 .565.08 1.131.24 1.616-.24.323-.4.646-.48 1.05-.16.404-.24.889-.24 1.293 0 .646.16 1.293.4 1.859.24.566.64 1.051 1.12 1.455.48.404 1.04.727 1.68.889.64.162 1.28.243 1.92.243.16 0 .32 0 .48-.081.4.162.8.243 1.2.243.72 0 1.36-.162 1.92-.485.56-.323 1.04-.727 1.44-1.212.4-.485.68-1.051.88-1.697.16-.566.24-1.132.24-1.778v-.162c.72-.404 1.36-.97 1.84-1.616.48-.646.8-1.374 1.04-2.142.24-.809.32-1.617.32-2.466-.08-2.183-.96-4.123-2.48-5.498C20.288 2.728 18.608 2 16.688 2zM8.593 13.693c-.08-.081-.24-.162-.32-.162-.08 0-.16.081-.24.162l-.72.647c-.08.08-.16.161-.16.242 0 .081.08.162.16.242l.08.081c.32.324.72.566 1.12.728.4.161.88.242 1.36.242.4 0 .8-.081 1.12-.162.32-.081.64-.243.88-.404.24-.162.48-.404.64-.647.16-.242.24-.566.24-.889 0-.242-.08-.485-.16-.727-.08-.242-.24-.404-.48-.566-.16-.08-.32-.161-.56-.242-.16-.081-.4-.081-.64-.162-.16 0-.32-.081-.48-.081-.16-.081-.24-.081-.32-.162-.08-.081-.16-.162-.16-.242 0-.081 0-.162.08-.243.08-.081.16-.161.32-.161.16-.081.32-.081.48-.081.16 0 .32 0 .4.081.16.081.32.162.4.242.08.081.16.162.24.162.08 0 .16 0 .24-.081l.72-.566c.08-.081.16-.162.16-.243 0-.081-.08-.162-.16-.242-.24-.243-.56-.485-.96-.647-.4-.161-.8-.242-1.28-.242-.4 0-.8.081-1.12.162-.32.081-.64.242-.88.404-.24.161-.4.404-.56.646-.16.243-.16.485-.16.728 0 .242.08.485.16.727.08.242.24.404.4.485.16.081.32.162.48.243.16.08.4.08.56.161.16 0 .32.081.48.081.16.081.32.081.4.162.08.081.16.162.16.242 0 .081 0 .162-.08.243-.08.08-.16.161-.32.161-.16.081-.32.081-.48.081-.24 0-.4 0-.6-.081-.24-.243-.4-.324-.48-.405zm6.235-4.526c-.08-.162-.24-.242-.4-.242-.16-.081-.32 0-.48.081-.08.08-.16.242-.16.404-.08.162-.08.323-.08.404.08.162.08.323.16.404.08.162.24.242.4.242.16.081.32 0 .48-.081.08-.081.16-.242.16-.404.08-.162.08-.323.08-.404-.08-.162-.08-.323-.16-.404zm-1.52 2.668c-.08.081-.08.162-.08.243 0 .081.08.161.16.242l.72.566c.08.081.16.081.24.081.08 0 .16-.081.24-.162.24-.242.56-.404.88-.485.32-.081.72-.161 1.04-.161.16 0 .32 0 .48.081.16.081.32.162.48.323.08.081.16.162.24.162h.24l.72-.647c.08-.081.16-.162.16-.242 0-.081-.08-.162-.16-.243-.24-.242-.56-.404-.88-.485-.32-.081-.72-.161-1.12-.161-.4 0-.8.08-1.2.161-.4.081-.8.323-1.12.566-.24.081-.4.162-.48.162-.16.081-.24.162-.32.162z"/>
              </svg>
              Linktree
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