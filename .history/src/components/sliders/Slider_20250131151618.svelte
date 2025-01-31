<script>
    let slides = [
        {
            id: 1,
            src: "/assets/herosliderimgone.png",
            title: "ECS Diversity and Leadership Summit",
            description: "This February 21st - 22nd | Fullerton, CA",
        },
        {
            id: 2,
            src: "/assets/heroslidertwo.png",
            title: "ECS Diversity and Leadership Summit",
            description: "This February 21st - 22nd | Fullerton, CA",
        },
        {
            id: 3,
            src: "/assets/heroslidertwo.png",
            title: "ECS Diversity and Leadership Summit",
            description: "This February 21st - 22nd | Fullerton, CA",
        },
    ];

    let currentSlide = 0;
    let slideDirection = 'right';
    let isAnimating = false;
    let animationKey = 0;

    const prevSlide = () => {
        if (isAnimating) return;
        isAnimating = true;
        slideDirection = 'left';
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        animationKey++;
        
        setTimeout(() => {
            isAnimating = false;
        }, 1000);
    };

    const nextSlide = () => {
        if (isAnimating) return;
        isAnimating = true;
        slideDirection = 'right';
        currentSlide = (currentSlide + 1) % slides.length;
        animationKey++;
        
        setTimeout(() => {
            isAnimating = false;
        }, 1000);
    };
</script>
<div class="relative w-full h-screen md:min-h-[500px] overflow-hidden">
    <!-- Desktop Slider -->
    <div class="hidden md:block absolute inset-0">
        {#each slides as { id, src, title, description }, index}
            {#if index === currentSlide}
                <div class="absolute inset-0">
                    <img 
                        {src} 
                        alt={title} 
                        class="w-full h-full object-cover"
                    />
                </div>
            {/if}
        {/each}
    </div>

    <!-- Mobile Background (first image only for mobile) -->
    <div class="md:hidden absolute inset-0">
        <img 
            src={slides[0].src}
            alt={slides[0].title}
            class="w-full h-full object-cover"
        />
    </div>

    <!-- Shared Content Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center text-white p-4 sm:p-6 md:p-8 lg:px-40">
        <div class="w-full max-w-7xl mx-auto">
            <h1 
                key={`title-${animationKey}`}
                class="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
                <span class="block">ECS Diversity and</span>
                <span class="block">Leadership Summit</span>
            </h1>
            
            <p 
                key={`description-${animationKey}`}
                class="mt-2 md:mt-4 text-sm sm:text-base md:text-xl"
            >
                {slides[currentSlide].description}
            </p>
            
            <div 
                key={`buttons-${animationKey}`}
                class="mt-4 md:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
                <button class="px-4 md:px-6 py-2 md:py-3 bg-transparent border border-white text-white text-sm md:text-base font-semibold rounded-lg shadow hover:bg-white hover:text-black transition-all">
                    Professional RSVP
                </button>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdFbj8hFMqYXUwFVdSxzwaee4hSJY6ZEUm8KqyanSdRbm1jzQ/viewform?usp=sf_link">
                
                </a>
                <button class="px-4 md:px-6 py-2 md:py-3 bg-[#FF914C] hover:bg-[#FF7B29] text-white text-sm md:text-base font-semibold rounded-lg transition-all">
                    Student RSVP
                </button>
            </div>
            
            <!-- Navigation Arrows -->
            <div class="hidden md:flex items-center mt-6 space-x-2">
                <button 
                    on:click={prevSlide} 
                    class="p-2 bg-transparent hover:bg-white border-white border rounded-full hover:bg-opacity-75 transition-all"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button 
                    on:click={nextSlide} 
                    class="p-2 bg-transparent hover:bg-white border-white border rounded-full hover:bg-opacity-75 transition-all"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Indicators -->
    <div class="hidden md:flex absolute top-1/2 right-8 transform -translate-y-1/2 flex-col space-y-2">
        {#each slides as _, index}
            <button
                class="w-3 h-3 rounded-full {index === currentSlide ? 'bg-white' : 'bg-gray-400'} hover:bg-white transition-all"
                on:click={() => (currentSlide = index)}
            ></button>
        {/each}
    </div>
</div>

<style>
    @keyframes slide-in-right {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slide-in-left {
        from {
            opacity: 0;
            transform: translateX(-100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .animate-slide-in-right {
        animation: slide-in-right 1s ease-out;
    }

    .animate-slide-in-left {
        animation: slide-in-left 1s ease-out;
    }
</style>
