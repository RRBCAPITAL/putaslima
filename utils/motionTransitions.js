export const transitionVariantPage = {
    initial: {
        x: "100%",
        width: "100%"
    },
    animate: {
        x: "0%",
        width: "0%"
    },
    exit: {
        x: ["0%", "100%"],
        width: ["0%", "100%"]
    }
};

export const motionTransitionsAbout = {
    initial: {
        opacity: 0,
        bottom: "5rem",
        transform: "translateY(200px)",
    },
    transition: {
        duration: 2.3,
        type: "tween",
        ease: [0.25, 0.6, 0.3, 0.8],
    }
}

export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
            opacity: 0,
            x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
            transition: {
                type: "tween",
                duration: 0.3,
                delay: delay,
                // ease: [0.25, 0.6, 0.3, 0.8]
                ease: [0.10, 0.45, 0.15, 0.25]
            },
        },
        show: {
            y: 0, 
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 0.3,
                delay: delay,
                // ease: [0.25, 0.25, 0.25, 0.75],
                ease: [0.10, 0.10, 0.10, 0.25],
            },
        },
    };
};

export const changeIn = (delay) => {
    return {
        hidden: {
            opacity: 0, // Inicialmente completamente transparente
            transition: {
                type: "tween",
                duration: 1,
                delay: delay,
                ease: [0.25, 0.6, 0.3, 0.8]
            },
        },
        show: {
            opacity: 1, // Se desvanece en completamente visible
            transition: {
                type: "tween",
                duration: 1,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};
