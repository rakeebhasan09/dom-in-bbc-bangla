const loadBBCBangla = () => {
	// Menu Item Load
	fetch("https://news-api-fs.vercel.app/api/categories")
		.then((menuRes) => menuRes.json())
		.then((menuData) => menuCategories(menuData.categories));

	// Display Menu Item
	const menuCategories = (categories) => {
		const menuParent = document.getElementById("menu-parent");

		// Clear old items
		menuParent.innerHTML = "";

		categories.forEach((category, index) => {
			const li = document.createElement("li");
			li.innerHTML = `
	            <button
                    id='${category.id}'
	                class="menu-item text-[#141414] text-[17px] font-normal cursor-pointer pt-3 pb-1 border-b-[4px] border-transparent hover:border-b-[#B80000] transition-all duration-300"
	            >
	                ${category.title}
	            </button>
	        `;

			const buttons = li.children;
			if (index === 0) {
				for (const button of buttons) {
					button.classList.add("border-b-[#B80000]");
				}
			}
			menuParent.appendChild(li);
		});

		menuParent.addEventListener("click", (e) => {
			if (e.target.classList.contains("menu-item")) {
				const allButtons = menuParent.querySelectorAll("button");

				allButtons.forEach((btn) => {
					btn.classList.remove("border-b-[#B80000]");
				});

				e.target.classList.add("border-b-[#B80000]");
			}
		});
	};
};

loadBBCBangla();
