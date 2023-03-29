// throttle
function throttle(func, delay = 1000) {
  let wait = false;
  let storedArgs = null;

  function checkStoredArgs() {
    if (storedArgs == null) {
      wait = false;
    } else {
      func(...storedArgs);
      storedArgs = null;
      setTimeout(checkStoredArgs, delay);
    }
  }
  return (...args) => {
    if (wait) {
      return;
    }
    func(...args);
    wait = true;
    setTimeout(checkStoredArgs, delay);
  };
}


// horizontal scrolling for md and lg screen

// function scrollHorizontally(evt, scrollContainer){
//     evt.preventDefault();
//     scrollContainer.scrollLeft += (evt.deltaY * 300);
// }

// if(window.screen.width >= 900){
//   // horizontalScrollingReq
//   const aboutContainer = document.getElementById("horizontalScrolling");
//   const requirementContainer = document.getElementById("horizontalScrollingReq");

//   aboutContainer.addEventListener("wheel", throttle(
//     (e) => scrollHorizontally(e, aboutContainer))
//   );
//   requirementContainer.addEventListener("wheel", throttle(
//     (e) => scrollHorizontally(e, requirementContainer)));

// }

// apply modal
const modalButton = document.getElementById("apply");
const modalBox = document.getElementById("apply-modal");
const closeBtn = document.getElementById("close-modal");
const body = document.getElementById("body");

if (modalButton) {
  modalButton.addEventListener("click", () => {
    modalBox.style.display = "flex";
    body.style.overflow = "hidden";
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    modalBox.style.display = "none";
    body.style.overflow = "auto";
  });
}

// profile card click for lg and sm screen
const profileCards = document.querySelectorAll(".profile-card");
const mobileContainer = document.getElementById("mobile-profile");
const profileContainer = document.getElementById("profile-modal");

function collapseAllCards() {
  profileCards.forEach((card) => {
    if (!card.classList.contains("profile-collapsed")) {
      card.classList.add("profile-collapsed");
    }
  });
}
if (profileCards) {
  profileCards.forEach((card, i) => {
    collapseAllCards();

    card.addEventListener("click", (e) => {
      // lg screen
      if (window.screen.width > 750) {
        let bgColor = card.getAttribute("data-color");
        if (card.classList.contains("profile-collapsed")) {
          collapseAllCards();
          card.classList.remove("profile-collapsed");
          return updatePageColor(bgColor);
        }
        card.classList.add("profile-collapsed");
        return updatePageColor();
      }
      // sm screen
      const clonedCard = card.cloneNode(true);
      clonedCard.classList.remove("profile-collapsed");
      profileContainer.append(clonedCard);
      mobileContainer.style.display = "flex";
      body.style.overflow = "hidden";
    });
  });
}

if(mobileContainer){
  collapseAllCards();

  mobileContainer.addEventListener("click", () => {
    mobileContainer.style.display = "none";
    profileContainer.innerHTML = null;
    body.style.overflow = "auto";
  });
}

function updatePageColor(color) {
  let successStoriesContainer = document.getElementById("success-stories");
  let nav = document.getElementById("wit-nav");
  let defaultStoriesColor = "#FFF7DE";

  if (color) {
    nav.style.backgroundColor = color;
    successStoriesContainer.style.backgroundColor = color;
  } else {
    nav.style.backgroundColor = defaultStoriesColor;
    successStoriesContainer.style.backgroundColor = defaultStoriesColor;
  }
}

const navLinks = document.querySelectorAll(".nav-link");

function removeActiveClass(elemArr, activeClass = "active") {
  elemArr.forEach((link) => {
    if (link.classList.contains(activeClass)) {
      link.classList.remove(activeClass);
    }
  });
}

function handleActiveNavLink(selected) {
  navLinks.forEach((link) => {
    let current = link.getAttribute("href");
    if (current === `#${selected}`) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

const sections = document.querySelectorAll("section");

document.addEventListener(
  "scroll",
  throttle(() => {
    sections.forEach((section) => {
      let id = section.getAttribute("id");
      if(id){
        
      let isVisible = isElementXPercentInViewport(section, 55);
      if (isVisible && navLinks) {
        removeActiveClass(navLinks);
        history.replaceState(null, null, `#${id}`);
        if (id !== "success-stories") {
          document.getElementById("wit-nav").style.backgroundColor = "#FFFFFF";
        }
        handleActiveNavLink(id);
      } 
      }
    });
  }, 300)
);

const isElementXPercentInViewport = function (el, percentVisible) {
  let rect = el.getBoundingClientRect(),
    windowHeight = window.innerHeight || document.documentElement.clientHeight;

  return !(
    Math.floor(100 - ((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100) <
      percentVisible ||
    Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) <
      percentVisible
  );
};

const homeScrollIcons = document.querySelectorAll(".home-link");
const homeWrap = document.getElementById("home-wrap");
const pageChange = document.getElementById("page-wrap");

homeScrollIcons.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    if (homeWrap.classList.contains("page-change")) {
      homeWrap.classList.remove("page-change");
    } else {
      homeWrap.classList.add("page-change");
      setTimeout(() => {
        pageChange.style.display = "none";
      }, 400);

      setTimeout(() => {
        window.location.href = elem.getAttribute("data-url");
      }, 1000);
    }
  });
});

if(AOS){
  AOS.init();
}

document.getElementById("scroll-up").addEventListener("click", () => {
  window.scrollTo(0, 0);
});
