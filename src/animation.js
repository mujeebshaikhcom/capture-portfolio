export const pageAnim = {
    hidden: {
        opacity: 0, 
        y: 300
    },
    shown: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.25,
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        }
    }
}

export const titleAnim = {
    hidden: {y:200},
    shown: {
        y:0,
        transition: {duration: 0.5, ease: 'easeOut'}
    }
}

export const fade = {
    hidden: {opacity: 0},
    shown: {
        opacity:1,
        transition: {duration: 0.75, ease: 'easeOut'}
    }
}

export const scrollReveal = {
    hidden: {
        opacity: 0,
        scale: 1.1,
        transition: {
            duration: 0.6,
        },
    },
    shown: {
        opacity:1,
        scale: 1,
        transition: {duration: 0.6, ease: 'easeOut'}
    }
}

export const photoAnim = {
    hidden: {scale: 1.5, opacity: 0},
    shown: {
        scale: 1,
        opacity: 1,
        transition: {ease: 'easeOut', duration: 0.75}
    }
}

export const lineAnim = {
    hidden: {width: '0%'},
    shown: {
        width: '100%',
        transition: {duration: 0.85, }
    }
}

export const slidAnim = {
    hidden: {x: '-130%', skew: '55deg'},
    shown: {
        x: '100%',
        skew: '0deg',
        transition: {ease: 'easeOut', duration: 1}
    }
}
export const slidAnimContainer = {
    hidden: {opacity: 1},
    shown: {opacity: 1, transition:{staggerChildren: 0.1, ease: 'easeOut'}},
}