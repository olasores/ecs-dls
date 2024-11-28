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
    let animationKey = 0; // Used to trigger re-render of animations

    const prevSlide = () => {
        if (isAnimating) return;
        isAnimating = true;
        slideDirection = 'left';
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        animationKey++; // Trigger new animation
        
        setTimeout(() => {
            isAnimating = false;
        }, 1000);
    };

    const nextSlide = () => {
        if (isAnimating) return;
        isAnimating = true;
        slideDirection = 'right';
        currentSlide = (currentSlide + 1) % slides.length;
        animationKey++; // Trigger new animation
        
        setTimeout(() => {
            isAnimating = false;
        }, 1000);
    };
</script>

<div class="relative w-full h-screen overflow-hidden">
    {#each slides as { id, src, title, description }, index}
        {#if index === currentSlide}
            <div class="absolute inset-0">
                <img src={src} alt={title} class="w-full h-full object-cover" />
                
                <!-- Hero Content with Animation -->
                <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center text-left text-white p-8 px-40">
                    <h1 
                        key={`title-${animationKey}`}
                        class="
                            text-4xl md:text-6xl font-bold
                            transform transition-all duration-1000 ease-out
                            {slideDirection === 'right' 
                                ? 'animate-slide-in-right' 
                                : 'animate-slide-in-left'}
                        "
                    >
                        <span class="block">ECS Diversity and</span>
                        <span class="block">Leadership Summit</span>
                    </h1>
                    <p 
                        key={`description-${animationKey}`}
                        class="
                            mt-4 text-lg md:text-xl
                            transform transition-all duration-1000 delay-300 ease-out
                            {slideDirection === 'right' 
                                ? 'animate-slide-in-right' 
                                : 'animate-slide-in-left'}
                        "
                    >
                        {description}
                    </p>
                    
                    <!-- Buttons with Animation -->
                    <div 
                        key={`buttons-${animationKey}`}
                        class="
                            mt-6 space-x-4
                            transform transition-all duration-1000 delay-500 ease-out
                            {slideDirection === 'right' 
                                ? 'animate-slide-in-right' 
                                : 'animate-slide-in-left'}
                        "
                    >
                        <button class="px-6 py-3 bg-transparent border border-white hover:border-black text-white font-semibold rounded-lg shadow hover:bg-white hover:text-black">
                            Professional RSVP
                        </button>
                        <button class="px-6 py-3 bg-[#FF914C] hover:bg-[#FF7B29] border border-white text-white font-semibold rounded-lg">
                            Student RSVP
                        </button>
                    </div>
                    
                    <!-- Navigation Buttons -->
                    <div class="flex items-center mt-6 space-x-2">
                        <button 
                            on:click={prevSlide} 
                            class="p-2 bg-transparent hover:bg-white border-white border bg-opacity-50 rounded-full hover:bg-opacity-75"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button 
                            on:click={nextSlide} 
                            class="p-2 bg-transparent hover:bg-white border-white border bg-opacity-50 rounded-full hover:bg-opacity-75"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        {/if}
    {/each}

    <!-- Indicators -->
    <div class="absolute top-1/2 right-8 transform -translate-y-1/2 flex flex-col space-y-2">
        {#each slides as _, index}
            <button
                class="w-3 h-3 rounded-full {index === currentSlide ? 'bg-white' : 'bg-gray-400'} hover:bg-white"
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