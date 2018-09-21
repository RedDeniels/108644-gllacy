			var link = document.querySelector(".feedback-button");
			var popup = document.querySelector(".modal-feedback");
			var background = document.querySelector(".site-wrapper");
			var close = popup.querySelector(".modal-close");
			var form = document.querySelector(".form-feedback");

			var name = popup.querySelector("[name=name]");
			var email = popup.querySelector("[name=email]");
			var comment = popup.querySelector("[name=comment]");

			var isStorgeSupport = true;
			var name_storage = "";
			var email_storage = "";
			
			try {
				name_storage = localStorage.getItem("name");
			} catch (err) {
				isStorageSupport = false;
			}

			link.addEventListener("click", function (evt) {
				evt.preventDefault();
				popup.classList.add("modal-show");
				background.classList.add("site-wrapper-dark");
				
				if (name_storage || email_storage) {
					name.value = name_storage;
					email.value = email_storage;
					comment.focus();
				} else{
					name.focus();
				}

  			});

  			close.addEventListener("click", function (evt) {
    			evt.preventDefault();
    			popup.classList.remove("modal-show");
    			background.classList.remove("site-wrapper-dark");
    			popup.classList.remove("modal-error");
  			});

  			form.addEventListener("submit", function (evt){
  				if (!name.value || !email.value || !comment.value) {
  					evt.preventDefault();
  					popup.classList.remove("modal-error");
      				popup.offsetWidth = popup.offsetWidth;
  					popup.classList.add("modal-error");
  				} else {
  					if (isStorageSupport) {
  						localStorage.setItem("name", name.value);
  						localStorage.setItem("email", email.value);
  					}
  				}
  			});

  			window.addEventListener("keydown", function (evt) {
    			if (evt.keyCode === 27) {
      				evt.preventDefault();
      				if (popup.classList.contains("modal-show")) {
    					popup.classList.remove("modal-show");
    					popup.classList.remove("modal-error");
    					background.classList.remove("site-wrapper-dark");
      				}
    			}
  			});