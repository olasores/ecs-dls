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
        <h3 class="text-white font-semibold mb-4">Quick Links</h3>
        <FooterLinkGroup ulClass="space-y-2">
          <FooterLink href="/" class="hover:text-white transition-colors">Home</FooterLink>
          <FooterLink href="/council" class="hover:text-white transition-colors">About Us</FooterLink>
          <FooterLink href="/services" class="hover:text-white transition-colors">Services</FooterLink>
          <FooterLink href="/contact" class="hover:text-white transition-colors">Contact</FooterLink>
        </FooterLinkGroup>
      </div>

      <!-- Resources Column -->
      <div class="col-span-1">
        <h3 class="text-white font-semibold mb-4">Resources</h3>
        <FooterLinkGroup ulClass="space-y-2">
          <FooterLink href="/blog" class="hover:text-white transition-colors">Blog</FooterLink>
          <FooterLink href="/documentation" class="hover:text-white transition-colors">Documentation</FooterLink>
          <FooterLink href="/support" class="hover:text-white transition-colors">Support</FooterLink>
          <FooterLink href="/faq" class="hover:text-white transition-colors">FAQ</FooterLink>
        </FooterLinkGroup>
      </div>

      <!-- Contact Info Column -->
      <div class="col-span-1">
        <h3 class="text-white font-semibold mb-4">Contact Us</h3>
        <ul class="space-y-2">
          <li class="flex items-center">
            <span class="mr-2">📧</span>
            <a href="mailto:contact@ecsdls.com" class="hover:text-white transition-colors">
              contact@ecsdls.com
            </a>
          </li>
          <li class="flex items-center">
            <span class="mr-2">📱</span>
            <a href="tel:+1234567890" class="hover:text-white transition-colors">
              (123) 456-7890
            </a>
          </li>
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