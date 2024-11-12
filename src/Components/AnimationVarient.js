export const textLeftSlide = {
    hidden: {
      opacity: 0,
      x: '-100px',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
};
export const textRightSlide = {
    hidden: {
      opacity: 0,
      x: '100px',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
};
export const textDownSlide = {
    hidden: {
      opacity: 0,
      y: '100px',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
};
export const textUpSlide = {
    hidden: {
      opacity: 0,
      y: '100px',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
};
export const ScaleIn = {
    hidden: {
      scale: 0.6,
      opacity:0,
      
    },
    visible: {
        scale:1,
        opacity:1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
};
export const ScaleDown = {
    hidden: {
      scale: 1.4,
      opacity:0,
      
    },
    visible: {
        scale:1,
        opacity:1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
};
