var tl = gsap.timeline({scrollTrigger:{
    trigger: ".about",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#can",{
    top: "95%",
    left: "12%",
    rotate: "30deg"
}, 'choclate')
tl.to("#choclate",{
    top:"160%",
    left: "23%"
}, 'choclate')
tl.to("#choclate2",{
    width: "25%",
    top:"160%",
    right: "10%",
    rotate: "-15deg"
}, 'choclate')
tl.to("#almod",{
    top:"110%",
    rotate: "130deg",
    left: "70%"
}, 'choclate')
tl.to("#almod2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'choclate')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".product",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.to("#choclate",{
    width:"28%",
    left: "42%",
    top: "214%"
}, 'can')
tl2.to("#choclate2",{
    width:"15%",
    left: "35%",
    top: "270%"
}, 'can')
tl2.to("#can",{
    width:"30%",
    top: "218%",
    left: "35%",
    rotate: "0deg"
}, 'can')

gsap.from('.chocolate > .chocoheader > h1', { 
    xPercent: 10 
  }, '<');

  gsap.from('.chocolate > .chocoheader > #can', { 
    xPercent: 10, 
    // rotation: 1, // Small rotation
    duration: 3, // Adjust duration for a slower effect
    ease: "power1.inOut", // Smooth easing
    yoyo: true, // Reverse the animation back
    repeat: -1, // Infinite repeat
  }, '<');

  gsap.from('.chocolate > .chocoheader > #can', { 
    rotation: 10, // Small rotation
    ease: "power1.inOut", // Smooth easing
  }, '<');

  gsap.from('.chocolate > .chocoheader > img:not(#can,#milk,#milk2)', { 
    xPercent: 10,
    yPercent: 20,
    // rotation: 60,
    duration: 3, // Adjust duration for a slower effect
    ease: "power1.inOut", // Smooth easing
    yoyo: true, // Reverse the animation back
    repeat: -1, // Infinite repeat
  }, '<');

  gsap.to("#milk2", {
    y: -10, // Moves up by 10px
    x:0,
    rotation: 2, // Slight tilt
    scale: 1.02, // Slightly enlarges for a fluid effect
    duration: 2, // Total animation time
    ease: "power1.inOut", // Smooth in and out effect
    repeat: -1, // Infinite loop
    yoyo: true, // Reverses the animation back and forth
  });


  function createChocoRain() {
    const leaves = ['#almod', '#almod2','#choclate','#choclate2'];
    const totalLeaves = 1000; // Increase the number of leaves for a dense rain effect
    const timeline = gsap.timeline();
    // Dynamically clone and add leaves to the DOM
    const container = document.querySelector('.chocolate > .chocoheader');
    for (let i = 0; i < totalLeaves; i++) {
      const randomLeaf = leaves[Math.floor(Math.random() * leaves.length)];
      const newLeaf = document.createElement('img');
      newLeaf.src = document.querySelector(randomLeaf).src;
      newLeaf.className = 'falling-leaf';
      newLeaf.style.position = 'absolute';
      newLeaf.style.width = '100px'; // Adjust size if necessary
      newLeaf.style.pointerEvents = 'none';
      newLeaf.style.left = `${Math.random() * window.innerWidth - 105}px`;
      newLeaf.style.top = `-50px`;
      container.appendChild(newLeaf);
    }
    let yval=Math.random() * 2 + 95
    // Animate all the falling leaves
    timeline.to('.falling-leaf', {
      y: () => `${yval}vh`, // Fall to the bottom of the screen
      x:0,
      // x: , // Slightly randomize x during fall
      rotation: () => Math.random() * 360, // Random rotation
      duration: () => Math.random() * 2 + 1, // Faster fall duration (1-3 seconds)
      ease: "power1.out", // Smooth easing
      repeat: 0, // Infinite loop
      delay: () => Math.random() * 0.5, // Very small stagger for parallel rain
      onRepeat: function () {
        // Reset leaf to a random position at the top of the screen
        this.targets().forEach(target => {
          target.style.left = `${Math.random() * window.innerWidth - 105}px`;
          target.style.top = `-50px`; // Start above the visible screen
        });
      }
    });

    timeline.to(".falling-leaf", {
        y: `${yval - 2}vh` , // Moves up by 10px
        x:0,
        scale: 1.02, // Slightly enlarges for a fluid effect
        duration: 1, // Total animation time
        ease: "power1.inOut", // Smooth in and out effect
        repeat: -1, // Infinite loop
        yoyo: true, // Reverses the animation back and forth
      });
  }
function createRepeatingChocoRain() {
    const leaves = ['#almod','#choclate', '#almod2','#choclate2'];
    const repeatingLeavesCount = 20; // Number of leaves that repeat
    const container = document.querySelector('.chocolate > .chocoheader');
  
    // Function to create repeating leaves
    function createRepeatingChoco() {
      const randomLeaf = leaves[Math.floor(Math.random() * leaves.length)];
      const newLeaf = document.createElement('img');
      newLeaf.src = document.querySelector(randomLeaf).src;
      newLeaf.className = 'repeating-leaf';
      newLeaf.style.position = 'absolute';
      newLeaf.style.width = '100px';
      newLeaf.style.pointerEvents = 'none';
      newLeaf.style.left = `${Math.random() * window.innerWidth - 105}px`;
      newLeaf.style.top = `-50px`;
      container.appendChild(newLeaf);
    }
  
    // Create repeating leaves
    for (let i = 0; i < repeatingLeavesCount; i++) {
      createRepeatingChoco();
    }
  
    // Animate repeating leaves
    gsap.to('.repeating-leaf', {
      y: '100vh',
      x:0, // Randomize horizontal sway
      rotation: () => Math.random() * 360, // Random rotation
      duration: 5, // Fall duration
      ease: "power1.out",
      repeat: -1, // Infinite loop
      delay: () => Math.random() * 0.5, // Stagger the start time
      onRepeat: function () {
        // Reset leaf to random position at the top
        this.targets().forEach(target => {
          target.style.left = `${Math.random() * window.innerWidth - 105}px`;
          target.style.top = `-50px`;
        });
      }
    });
  }
  
  // Initialize the leaf rain effect
//   createLeafRain();
createChocoRain();
createRepeatingChocoRain();





