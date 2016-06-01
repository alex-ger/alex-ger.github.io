      var link = document.querySelector(".btn-search-hotels");
      var searchForm = document.querySelector(".map-form");

      link.addEventListener("click", function(event) {
          event.preventDefault();
          if (searchForm.classList.contains("map-form-show")) {
              searchForm.classList.add("map-form-close");
              searchForm.classList.remove("map-form-show");
          } else {
              searchForm.classList.add("map-form-show");
              searchForm.classList.remove("map-form-close");
          };
      });
