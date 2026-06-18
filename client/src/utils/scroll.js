/**
 * Smoothly scrolls to a given DOM element selector, accounting for sticky navbar offsets.
 * @param {string} selector - The CSS selector of the target element.
 * @param {number} offset - The pixel height of the sticky navbar (default: 80).
 */
export const smoothScrollTo = (selector, offset = 80) => {
  const targetElement = document.querySelector(selector);
  if (targetElement) {
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
    return true;
  }
  return false;
};
