<script>
    import { onMount } from 'svelte';

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
            src: "/assets/herosliderthree.png",
            title: "ECS Diversity and Leadership Summit",
            description: "This February 21st - 22nd | Fullerton, CA",
        },
    ];

    let currentSlide = 0;
    let slideDirection = 'right';
    let isAnimating = false;
    let animationKey = 0;
    let autoplayInterval;

    const startAutoplay = () => {
        autoplayInterval = setInterval(() => {
            nextSlide();
        }, 3000);
    };

    const stopAutoplay = () => {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    };

    onMount(() => {
        startAutoplay();
        return () => stopAutoplay();
    });

    const prevSlide = () => {
        if (isAnimating) return;
        isAnimating = true;
        slideDirection = 'left';
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        animationKey++;
        
        stopAutoplay();
        startAutoplay();
        
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
        
        stopAutoplay();
        startAutoplay();
        
        setTimeout(() => {
            isAnimating = false;
        }, 1000);
    };

    const handleMouseEnter = () => {
        stopAutoplay();
    };

    const handleMouseLeave = () => {
        startAutoplay();
    };

    // Add touch support
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
        touchStartX = e.touches[0].clientX;
        stopAutoplay();
    };

    const handleTouchMove = (e) => {
        touchEndX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const touchDiff = touchStartX - touchEndX;
        if (Math.abs(touchDiff) > 50) { // minimum swipe distance
            if (touchDiff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        startAutoplay();
    };
</script>

<div 
    class="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:h-screen overflow-hidden"
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    on:touchstart={handleTouchStart}
    on:touchmove={handleTouchMove}
    on:touchend={handleTouchEnd}
>
    <!-- Slider (now visible on all devices) -->
    <div class="absolute inset-0">
        {#each slides as { id, src, title, description }, index}
            {#if index === currentSlide}
                <div class="absolute inset-0 transition-opacity duration-500">
                    <img 
                        {src} 
                        alt={title} 
                        class="w-full h-full object-cover"
                    />
                </div>
            {/if}
        {/each}
    </div>

    <!-- Content Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center">
        <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-40">
            <h1 
                key={`title-${animationKey}`}
                class="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl"
            >
                <span class="block mb-2">ECS Diversity and</span>
                <span class="block">Leadership Summit</span>
            </h1>
            
            <p 
                key={`description-${animationKey}`}
                class="text-white mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-xl max-w-2xl"
            >
                {slides[currentSlide].description}
            </p>
            
            <div 
                key={`buttons-${animationKey}`}
                class="mt-4 sm:mt-5 md:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
                <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfDnw6jFl7pngQb1J3axQHJ0m3cr2bDUbuq7vLBDrtQnmrdtg/viewform?usp=sf_link" 
                    target="_blank"
                    class="w-full sm:w-auto"
                >
                    <button class="w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 bg-transparent border border-white text-white text-sm md:text-base font-semibold rounded-lg shadow hover:bg-white hover:text-black transition-all">
                        Professional RSVP
                    </button>
                </a>
                
                <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdFbj8hFMqYXUwFVdSxzwaee4hSJY6ZEUm8KqyanSdRbm1jzQ/viewform?usp=sf_link" 
                    target="_blank"
                    class="w-full sm:w-auto"
                >
                    <button class="w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 bg-[#FF914C] hover:bg-[#FF7B29] text-white text-sm md:text-base font-semibold rounded-lg transition-all">
                        Student RSVP
                    </button>
                </a>
            </div>
        </div>
    </div>

    <!-- Navigation Arrows - Now visible on tablets and up -->
    <div class="hidden sm:flex justify-between absolute inset-x-4 top-1/2 transform -translate-y-1/2">
        <button 
            on:click={prevSlide} 
            class="p-2 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full transition-all"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        </button>
        <button 
            on:click={nextSlide} 
            class="p-2 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full transition-all"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </button>
    </div>

    <!-- Indicators - Now at bottom on mobile, side on larger screens -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:hidden">
        {#each slides as _, index}
            <button
                class="w-2 h-2 rounded-full transition-all {index === currentSlide ? 'bg-white' : 'bg-gray-400'}"
                on:click={() => {
                    currentSlide = index;
                    stopAutoplay();
                    startAutoplay();
                }}
            ></button>
        {/each}
    </div>

    <div class="hidden sm:flex absolute top-1/2 right-8 transform -translate-y-1/2 flex-col space-y-2">
        {#each slides as _, index}
            <button
                class="w-3 h-3 rounded-full transition-all {index === currentSlide ? 'bg-white' : 'bg-gray-400'}"
                on:click={() => {
                    currentSlide = index;
                    stopAutoplay();
                    startAutoplay();
                }}
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