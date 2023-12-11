console.info("Запуск модуля поиска по смайлам GG");

import {smilesCategories} from './smiles.category';
import {smilesTags} from './smiles.tags'
import {createElement} from './create.element'

class GGSmileHelper extends HTMLElement {
	/**
	 * @type {string?}
	 */
	_category = null;
	get category() {
		return this._category;
	}
	set category(v) {
		if (v === this._category) return;
		this.tabsContainer
			.querySelector(".active")
			?.classList.remove("active");
		this.tabsContainer
			.querySelector(`[data-category="${v ?? "all"}"]`)
			?.classList.add("active");
		this._category = v;
		this.filter();
	}

	_searchText = "";
	get searchText() {
		return this._searchText;
	}
	set searchText(v) {
		if (v === this._searchText) return;
		this.searchWrapper
			.querySelector("form")
			.classList.toggle("active", v !== "");
		this._searchText = v;
		this.filter();
	}

	smileBtn: HTMLButtonElement = document.querySelector('[ng-click="vm.toggleSmiles()"]');
	chatInput: HTMLInputElement = document.querySelector(".textarea[chat-input]");

	searchInput = createElement("input", {
		className: "search-input",
		id: "smile-search",
		onkeydown: (e) => {
			if (e.key === "Escape") {
				this.searchInput.value = "";
				this.searchText = "";
				return;
			}
			if (e.key === "Tab") {
				this.smileBtn.click();
				setTimeout(() => {
					this.chatInput.focus();
					this.chatInput.click();
				}, 100);
			}
			setTimeout(() => (this.searchText = this.searchInput.value), 0);
		},
		placeholder: "Поиск смайлов",
		type: "text",
	});

	searchWrapper = createElement(
		"div",
		{ className: "search-block" },
		createElement(
			"form",
			{
				onsubmit(e) {
					e.preventDefault();
				},
			},
			createElement("label", {
				className: "icon icon-search",
				for: "smile-search",
			}),
			createElement("span", {
				className: "icon icon-close2",
				onclick: () => {
					this.searchInput.value = "";
					this.searchText = "";
				},
			}),
			this.searchInput,
		),
	);

	tabsContainer = createElement("div", {
		className: "gg-smile-helper_tabs-container",
		onwheel: (e) => {
			e.preventDefault();
			if (e.deltaY > 0) this.tabsContainer.scrollLeft += 100;
			else this.tabsContainer.scrollLeft -= 100;
		},
	});

	header = createElement(
		"header",
		{ className: "gg-smile-helper_header" },
		this.searchWrapper,
		this.tabsContainer,
	);

	wasConnected = false;

	connectedCallback() {
		if (this.wasConnected) {
			this.prepend(this.header);
			return;
		}
		this.wasConnected = true;
		console.info("Модуль поиска по смайлам GG запущен");

		const favouritesStr = localStorage.getItem("fav");
		if (favouritesStr !== null) {
			smilesCategories.set("fav", favouritesStr.split(","));
		}

		this.tabsContainer.append(
			...Array.from(smilesCategories.keys())
				.sort((a, b) => {
					if (a === "all" && b === "fav") return 0;
					else if (a === "fav" && b === "all") return 1;
					else if (a === "all" || a === "fav") return -1;
					else if (
						a.startsWith("https") &&
						b !== "all" &&
						b !== "fav"
					) {
						if (b.startsWith("https")) return 0;
						else return -1;
					} else if (b.startsWith("https")) {
						if (a.startsWith("https")) return 0;
						else return 1;
					} else return 0;
				})
				.map((key) => {
					const container = createElement("div", {
						attributes: { "data-category": key },
						className:
							"gg-smile-helper_tab" +
							(key === "all" ? " active" : ""),
						onclick: () => {
							this.category = key === "all" ? null : key;
						},
					});
					if (key !== "all" && key !== "fav") {
						container.append(
							createElement("img", {
								src: key.startsWith("https")
									? key
									: `https://static.goodgame.ru/images/smiles/${key}.png`,
							}),
						);
					} else {
						container.classList.add(
							"icon",
							key === "all"
								? "icon-smilemenu-icon"
								: "icon-star",
						);
					}
					return container;
				}),
		);

		this.prepend(this.header);

		this.chatInput.addEventListener("keydown", (e) => {
			if (e.key === "Tab") {
				this.focusInput();
			}
		});
		this.smileBtn.addEventListener("click", () => {
			this.focusInput();
		});

		this.smileBtn.addEventListener("click", () => this.hookSmiles(), {
			once: true,
		});
	}

	hookSmiles(): void {
		const favourites = smilesCategories.get("fav");
		const streamerSmiles =
			window.Utils.rootScope().chat.smiles.ChannelSmiles;

		this.querySelectorAll(".smiles-list-block").forEach((e) => {
			let name: string;
        try {
			name = e
				.querySelector(".streamer-name").textContent;
				//.textContent.toLowerCase();
				//console.log(name);
        }catch(error){
	     return;
        }

			if (name === "любимые" || name === "общие") return;
			const smiles: string[] = Array.from(
				e.querySelectorAll(".smile-block>.smile"),
			).map((s: HTMLElement) => s.title);
			const categoryKey = streamerSmiles.find((s)=> s.name === smiles[0].replace(/:/g, "")).img;
			//console.log(streamerSmiles.find((s)=> s.name === smiles[0].replace(/:/g, "")).img);
			/*const categoryKey = streamerSmiles.find(
				(s) =>
					s.channel.toLowerCase() === name &&
					s.name.toLowerCase() ===
						smiles[0].replace(/:/g, "").toLowerCase(),
			).img;*/
			smilesCategories.set(categoryKey, smiles);
			smilesTags.set(name, smiles);
			if (
				this.tabsContainer.querySelector(
					`[data-category="${categoryKey}"]`,
				) === null
			) {
				const before = this.tabsContainer.querySelector(
					"[data-category='metal']",
				).nextElementSibling;
				this.tabsContainer.insertBefore(
					createElement(
						"div",
						{
							attributes: { "data-category": categoryKey },
							className: "gg-smile-helper_tab",
							onclick: () => {
								this.category = categoryKey;
							},
						},
						createElement("img", {
							src: categoryKey,
						}),
					),
					before,
				);
			}
	});

		this.querySelectorAll(".smile-block").forEach((element) => {
			element.append(
				createElement("div", {
					className:
						"gg-smile-helper_favourite-icon icon icon-star",
				}),
			);
			const smile: string = element.querySelector<HTMLElement>(".smile").title;
			element.classList.toggle("favourite", favourites.includes(smile));
			element.addEventListener("contextmenu", (e) => {
				e.preventDefault();
				this.toggleFavourite(smile);
			});
		});
	}

	toggleFavourite(smile) {
		const favourites = smilesCategories.get("fav");
		if (favourites.includes(smile))
			favourites.splice(favourites.indexOf(smile), 1);
		else favourites.push(smile);
		this.querySelector(
			`.smile-block:has(.smile[title="${smile}"])`,
		)?.classList.toggle("favourite", favourites.includes(smile));
		localStorage.setItem("fav", favourites.join(","));
	}

	focusInput = () =>
		setTimeout(() => {
			this.searchInput.focus();
			this.searchInput.select();
		}, 100);

	filterByCategory(smiles) {
		if (this.category === null) {
			return smiles;
		} else {
			return smilesCategories.get(this.category);
		}
	}

	filterBySearch(smiles) {
		if (this.searchText === "") return smiles;
		const pass = [];
		const tags = Array.from(smilesTags.keys()).filter((t) =>
			t.toLowerCase().includes(this.searchText.toLowerCase()),
		);
		tags.forEach((t) => {
			const taggedSmiles = smilesTags.get(t);
			taggedSmiles.forEach((s) => {
				if (smiles.includes(s) && !pass.includes(s)) pass.push(s);
			});
		});
		smiles.forEach((s) => {
			if (
				s.toLowerCase().includes(this.searchText.toLowerCase()) &&
				!pass.includes(s)
			)
				pass.push(s);
		});
		return pass;
	}

	filter() {
		const elements: HTMLElement[] = Array.from(
			this.querySelectorAll(".smile-block .smile"),
		);
		let smiles = elements
			.map((e) => e.title)
			.filter((e, i, a) => i === a.indexOf(e));
		const ogLength = smiles.length;
		smiles = this.filterByCategory(smiles);
		smiles = this.filterBySearch(smiles);
		const wasFiltered = smiles.length !== ogLength;
		elements.forEach((e) => {
			if (!wasFiltered) e.parentElement.classList.remove("hide");
			else if (smiles.includes(e.title))
				e.parentElement.classList.toggle("hide", false);
			else e.parentElement.classList.toggle("hide", true);
		});
		this.querySelectorAll(".smile-list").forEach((list) => {
			Array.from(list.children).forEach((e) =>
				e.classList.toggle(
					"hide",
					e.classList.contains("favorite-smiles")
						? wasFiltered
						: e.querySelectorAll(".smile-block:not(.hide)")
								.length === 0,
				),
			);
		});
	}
}

customElements.define("gg-smiles2", GGSmileHelper);
