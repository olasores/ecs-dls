
<script>

  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  import { page } from '$app/stores';
  $: activeUrl = $page.url.pathname; 
    




    // pages need 
    // Home 
    // Council 
    // Venue 
    // Scehedule - workshop/speakers
    // 2024/2023




</script>


<Navbar class="bg-[#1A2939] text-white">
    <NavBrand  href="/" class="text-white">
      <img src="/assets/ecsdlslogo.png" class="me-3 h-6 sm:h-11" alt="Flowbite Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold">ECS SUMMIT 2025</span>
    </NavBrand>
    <NavHamburger />
    <NavUl {activeUrl}>
      <NavLi href="/"> <span class="text-black md:text-white">Home</span></NavLi>
      <NavLi href="/council"> <span class="text-black md:text-white"> Council </span ></NavLi>
      <NavLi href="/venue"> <span class="text-black md:text-white"> Venue</span></NavLi>
      <NavLi class="cursor-pointer" href="/schedule"> <span class="text-black md:text-white">Schedule</span>
        <ChevronDownOutline class="w-6 h-6 ms-2 text-primary-800  inline" />
      </NavLi>
    

      <Dropdown class="w-44 z-20">
        <DropdownItem href="/speakers">Speakers</DropdownItem>
        <DropdownItem href="/workshops"> Workshops</DropdownItem>
      </Dropdown>

      <NavLi href="/24"> <span class="text-black md:text-white">2024</span></NavLi>
      <NavLi href="/23"> <span class="text-black md:text-white">2023</span> </NavLi>
      <!-- <NavLi href="/contact">Contact</NavLi> -->
    </NavUl>
  </Navbar>





<style>
  /* span {
    color: white; 
    
  } */
  span:hover {
    color: #FF914C;
  }


</style>