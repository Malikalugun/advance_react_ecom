  document.addEventListener("DOMContentLoaded", function () {
     const toggles = document.querySelectorAll('[data-bs-toggle="collapse"]');
     toggles.forEach(toggle => {
       toggle.addEventListener("click", function (e) {
         const targetId = toggle.getAttribute("href") || toggle.dataset.bsTarget;
         const targetEl = document.querySelector(targetId);
   
         toggles.forEach(otherToggle => {
           const otherId = otherToggle.getAttribute("href") || otherToggle.dataset.bsTarget;
           const otherEl = document.querySelector(otherId);
   
           // Only hide unrelated collapses (not parent or child)
           if (
             otherEl !== targetEl &&
             !otherEl.contains(targetEl) &&
             !targetEl.contains(otherEl) &&
             otherEl.classList.contains("show")
           ) {
             new bootstrap.Collapse(otherEl, { toggle: true }).hide();
           }
         });
       });
     });
     // Mobile close button
     const closeBtn = document.getElementById("close-sidebar");
     if (closeBtn) {
       closeBtn.addEventListener("click", function () {
         document.getElementById("sidebar").classList.remove("show");
       });
     }
     // Hamburger toggle (optional if used)
     const toggleBtn = document.getElementById("menu-toggle");
     if (toggleBtn) {
       toggleBtn.addEventListener("click", function () {
         document.getElementById("sidebar").classList.toggle("show");
       });
     }
   });
    function toggleClearBtn() {
    const input = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearBtn');
    clearBtn.style.display = input.value.length > 0 ? 'block' : 'none';
  }

  function clearSearch() {
    const input = document.getElementById('searchInput');
    input.value = '';
    toggleClearBtn();
    input.focus();
  }

  function handleSearch(event) {
    event.preventDefault();
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
      // Replace below with actual search action
      alert("Searching for: " + query);
    }
    return false;
  }
  