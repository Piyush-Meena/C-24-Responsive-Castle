gsap.config({
  trialWarn: false
});

var assetVerticalBreakPoints = [
  {
    selector: ".blason",
    large: {
      scale: 1,
      transformOrigin: "center bottom",
      duration: 0.3
    },
    medium: {
      scale: 1,
      transformOrigin: "center bottom",
      duration: 0.3
    },
    narrow: {
      scale: 0.5,
      transformOrigin: "center bottom",
      duration: 0.3
    }
  },
  {
    selector: ".small-tower",
    large: {
      y: 0,
      duration: 0.3
    },
    medium: {
      y: 300,
      duration: 0.3
    },
    narrow: {
      y: 300,
      duration: 0.3
    }
  },
  {
    selector: ".big-tower",
    large: {
      y: 0,
      duration: 0.3
    },
    medium: {
      y: 0,
      duration: 0.3
    },
    narrow: {
      y: 200,
      duration: 0.3
    }
  },
  {
    selector: ".house",
    large: {
      y: 0,
      duration: 0.3
    },
    medium: {
      y: 120,
      duration: 0.3
    },
    narrow: {
      y: 400,
      duration: 0.3
    }
  },
  {
    selector: ".tree",
    large: {
      y: 0,
      duration: 0.3
    },
    medium: {
      y: 150,
      duration: 0.3
    },
    narrow: {
      y: 400,
      duration: 0.3
    }
  },
  {
    selector: ".one",
    large: {
      y: 0,
      duration: 0.3
    },
    medium: {
      y: 100,
      duration: 0.3
    },
    narrow: {
      y: 300,
      duration: 0.3
    }
  },
  {
    selector: ".big-tower-left",
    large: {
      y: 0,
      duration: 0.3
    },
    medium: {
      y: 400,
      duration: 0.3
    },
    narrow: {
      y: 400,
      duration: 0.3
    }
  },
  {
    selector: ".big-tower-left-2",
    large: {
      y: 0,
      duration: 0.3
    },
    medium: {
      y: -60,
      duration: 0.3
    },
    narrow: {
      y: 190,
      duration: 0.3
    }
  },
  {
    selector: ".double-tower-left",
    large: {
      y: 0,
      duration: 0.3
    },
    medium: {
      y: 90,
      duration: 0.3
    },
    narrow: {
      y: 90,
      duration: 0.3
    }
  },
  {
    selector: ".double-tower-center",
    large: {
      y: 0,
      duration: 0.3
    },
    medium: {
      y: 250,
      duration: 0.3
    },
    narrow: {
      y: 400,
      duration: 0.3
    }
  },
  {
    selector: ".tower-left, .tower-right",
    large: {
      y: 0,
      duration: 0.3
    },
    medium: {
      y: 0,
      duration: 0.3
    },
    narrow: {
      y: 110,
      duration: 0.3
    }
  },
  {
    selector: ".tower-roof-left, .tower-roof-right",
    large: {
      y: 0,
      duration: 0.3
    },
    medium: {
      y: 0,
      duration: 0.3
    },
    narrow: {
      y: 60,
      duration: 0.3
    }
  },
  {
    selector: ".top-back, .roof-tower-side, .tower-windows",
    large: {
      opacity: 1,
      duration: 0.3
    },
    medium: {
      opacity: 1,
      duration: 0.3
    },
    narrow: {
      opacity: 0,
      duration: 0.3
    }
  },
  {
    selector: ".horizontal-bottom-general",
    large: {
      y: 0,
      duration: 0.3
    },
    medium: {
      y: -160,
      duration: 0.3
    },
    narrow: {
      y: -280,
      duration: 0.3
    }
  },
  {
    selector: ".horizontal-bottom-1",
    large: {
      y: 0,
      duration: 0.3
    },
    medium: {
      y: -120,
      duration: 0.3
    },
    narrow: {
      y: -210,
      duration: 0.3
    }
  }
];
var assetHorizontalBreakPoints = [
  {
    selector: ".tree-right, .tree-right-2",
    large: {
      x: 0,
      rotate: 0,
      transformOrigin: "center",
      opacity: 1,
      duration: 0.3
    },
    medium: {
      x: -240,
      rotate: -5,
      transformOrigin: "center",
      opacity: 1,
      duration: 0.3
    },
    narrow: {
      x: -240,
      rotate: -5,
      transformOrigin: "center",
      opacity: 0,
      duration: 0.3
    }
  },
  {
    selector: ".tree-left, .tree-left-2",
    large: {
      x: 0,
      rotate: 0,
      transformOrigin: "center",
      opacity: 1,
      duration: 0.3
    },
    medium: {
      x: 240,
      rotate: 5,
      transformOrigin: "center",
      opacity: 1,
      duration: 0.3
    },
    narrow: {
      x: 240,
      rotate: 5,
      transformOrigin: "center",
      opacity: 0,
      duration: 0.3
    }
  },
  {
    selector: ".light-radius",
    large: {
      y: 0,
      duration: 0.3
    },
    medium: {
      y: 0,
      duration: 0.3
    },
    narrow: {
      y: 50,
      duration: 0.3
    }
  },
  {
    selector: ".main-castle-center",
    large: {
      opacity: 1,
      duration: 0
    },
    medium: {
      opacity: 1,
      duration: 0
    },
    narrow: {
      opacity: 0,
      duration: 0
    }
  },
  {
    selector: ".big-tower-left",
    large: {
      x: 0,
      duration: 0.3
    },
    medium: {
      x: 0,
      duration: 0.3
    },
    narrow: {
      x: 300,
      duration: 0.3
    }
  },
  {
    selector: ".torsh",
    large: {
      opacity: 1,
      duration: 0
    },
    medium: {
      opacity: 1,
      duration: 0
    },
    narrow: {
      opacity: 0,
      duration: 0
    }
  },
  {
    selector: ".one",
    large: {
      opacity: 1,
      duration: 0.3
    },
    medium: {
      opacity: 1,
      duration: 0.3
    },
    narrow: {
      opacity: 0,
      duration: 0.3
    }
  },
  {
    selector: ".two",
    large: {
      x: 0,
      duration: 0.3
    },
    medium: {
      x: 334,
      duration: 0.3
    },
    narrow: {
      x: 334,
      duration: 0.3
    }
  },
  {
    selector: ".tree",
    large: {
      x: 0,
      opacity: 1,
      duration: 0.3
    },
    medium: {
      x: 60,
      opacity: 1,
      duration: 0.3
    },
    narrow: {
      x: 60,
      opacity: 0,
      duration: 0.3
    }
  },
  {
    selector: ".four",
    large: {
      x: 0,
      duration: 0.3
    },
    medium: {
      x: -130,
      duration: 0.3
    },
    narrow: {
      x: -350,
      duration: 0.3
    }
  },
  {
    selector: ".inner-small-tower",
    large: {
      y: 0,
      duration: 0.3
    },
    medium: {
      y: 0,
      duration: 0.3
    },
    narrow: {
      y: 450,
      duration: 0.3
    }
  },
  {
    selector: ".inner-house",
    large: {
      x: 0,
      y: 0,
      transformOrigin: "center bottom",
      transform: "scale(1)",
      duration: 0.3
    },
    medium: {
      x: -180,
      y: 0,
      transformOrigin: "center bottom",
      transform: "scale(1)",
      duration: 0.3
    },
    narrow: {
      x: -280,
      y: 0,
      transformOrigin: "center bottom",
      transform: "scale(0.6)",
      duration: 0.3
    }
  },
  {
    selector: ".inner-big-tower",
    large: {
      x: 0,
      y: 0,
      transformOrigin: "center top",
      transform: "scale(1)",
      duration: 0.3
    },
    medium: {
      x: -180,
      y: 0,
      transformOrigin: "center top",
      transform: "scale(1)",
      duration: 0.3
    },
    narrow: {
      x: -280,
      y: 0,
      transformOrigin: "center top",
      transform: "scale(0.6)",
      duration: 0.3
    }
  },
  {
    selector: ".wall-right",
    large: {
      x: 0,
      opacity: 1,
      duration: 0.3
    },
    medium: {
      x: -235,
      opacity: 1,
      duration: 0.3
    },
    narrow: {
      x: -235,
      opacity: 0,
      duration: 0.3
    }
  },
  {
    selector: ".wall-left",
    large: {
      x: 0,
      opacity: 1,
      duration: 0.3
    },
    medium: {
      x: 235,
      opacity: 0,
      duration: 0.3
    },
    narrow: {
      x: 235,
      opacity: 0,
      duration: 0.3
    }
  },
  {
    selector: ".tower-roof-left, .left-roof-tower-base",
    large: {
      x: 0,
      duration: 0.3
    },
    medium: {
      x: 360,
      duration: 0.3
    },
    narrow: {
      x: 360,
      duration: 0.3
    }
  },
  {
    selector: ".tower-left, .left-tower-base",
    large: {
      x: 0,
      opacity: 1,
      duration: 0.3
    },
    medium: {
      x: 0,
      opacity: 1,
      duration: 0.3
    },
    narrow: {
      x: 200,
      opacity: 0,
      duration: 0.3
    }
  },
  {
    selector: ".tower-roof-right, .right-roof-tower-base",
    large: {
      x: 0,
      duration: 0.3
    },
    medium: {
      x: -360,
      duration: 0.3
    },
    narrow: {
      x: -360,
      duration: 0.3
    }
  },
  {
    selector: ".tower-right, .right-tower-base",
    large: {
      x: 0,
      opacity: 1,
      duration: 0.3
    },
    medium: {
      x: 0,
      opacity: 1,
      duration: 0.3
    },
    narrow: {
      x: -200,
      opacity: 0,
      duration: 0.3
    }
  },
  {
    selector: ".double-tower-left",
    large: {
      x: 0,
      scale: 1,
      transformOrigin: "center",
      duration: 0.3
    },
    medium: {
      x: 180,
      scale: 1,
      transformOrigin: "center",
      duration: 0.3
    },
    narrow: {
      x: 350,
      scale: 0.8,
      transformOrigin: "center",
      duration: 0.3
    }
  },
  {
    selector: ".double-tower-center",
    large: {
      x: 0,
      duration: 0.3
    },
    medium: {
      x: 103,
      duration: 0.3
    },
    narrow: {
      x: 103,
      duration: 0.3
    }
  },
  {
    selector: ".big-tower-left-2",
    large: {
      x: 0,
      duration: 0.3
    },
    medium: {
      x: 150,
      duration: 0.3
    },
    narrow: {
      x: 220,
      duration: 0.3
    }
  }
];

function applySVGResponsiveness_horizontal(width) {
  assetHorizontalBreakPoints.forEach((asset) => {
    if (width < 360) {
      gsap.to(asset.selector, asset.narrow);
    } else if (width < 620) {
      gsap.to(asset.selector, asset.medium);
    } else {
      gsap.to(asset.selector, asset.large);
    }
  });
}

function applySVGResponsiveness_vertical(height) {
  assetVerticalBreakPoints.forEach((asset) => {
    if (height < 300) {
      gsap.to(asset.selector, asset.narrow);
    } else if (height < 485) {
      gsap.to(asset.selector, asset.medium);
    } else {
      gsap.to(asset.selector, asset.large);
    }
  });
}

const draw = document.getElementById("draw");

window.addEventListener("resize", function () {
  draw.setAttribute(
    "style",
    "width:" + window.innerWidth + "px;height:" + window.innerHeight + "px;"
  );

  applySVGResponsiveness_horizontal(draw.offsetWidth);
  applySVGResponsiveness_vertical(draw.offsetHeight);
});

var ro = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const cr = entry.contentRect;
    applySVGResponsiveness_horizontal(cr.width);
    applySVGResponsiveness_vertical(cr.height);
  }
});
ro.observe(document.getElementById("draw"));

window.onload = function () {
  gsap.to("#fade", {
    opacity: 0,
    duration: 5
  });
};

document.addEventListener("mousedown", function () {
  gsap.to("#instructions", {
    opacity: 0,
    duration: 0.4
  });
});
