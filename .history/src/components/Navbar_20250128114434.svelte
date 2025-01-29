<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</svelte:head>
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