const sliderItems = document.querySelectorAll(".slider__item");
const nextBtn = document.querySelector(".cars__slider-arrow--next");
const prevBtn = document.querySelector(".cars__slider-arrow--prev");
const tabs = document.querySelectorAll(".tabs__input"); // (если табы реализованы с помощью <input type="radio">)
// const tabs = document.querySelectorAll(".tabs__btn"); // (если табы реализованы с помощью <button></button>)

let index = 0;

// Активный слайд
const activeSlide = (index) => {
  // Через for
  for (let i = 0; i < sliderItems.length; i++) {
    sliderItems[i].classList.remove("active");
  }
  sliderItems[index].classList.add("active");

  // Через for in (тоже самое)
  // for (let slide of sliderItems) {
  //   slide.classList.remove("active");
  // }
  // sliderItems[index].classList.add("active");

  // Через forEach (тоже самое)
  // sliderItems.forEach((slide) => {
  //   slide.classList.remove("active");
  // });
  // sliderItems[index].classList.add("active");
};

// Переключение слайда (вперёд)
const nextSlide = () => {
  index++;
  index = index > sliderItems.length - 1 ? 0 : index;
  activeSlide(index);
  activeTab(index);

  //  (тоже самое)
  // index = index + 1; // index = index + 1; index += 1; index++; - одно и тоже
  // if (index > sliderItems.length - 1) {
  //   index = 0;
  // }
  // activeSlide(index);
  // activeTab(index);
};
// Переключение слайда (назад)
const prevSlide = () => {
  // index--;
  // index = index < 0 ? sliderItems.length - 1 : index;
  // activeSlide(index);
  // activeTab(index);

  //  (тоже самое)
  index = index - 1; // index = index - 1; index -= 1; index--; - одно и тоже
  if (index < 0) {
    index = sliderItems.length - 1;
  }
  activeSlide(index);
  activeTab(index);
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Активный таб
// Через добавление checked (если табы реализованы с помощью <input type="radio">)
const activeTab = (index) => {
  // Через for
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].checked = false;
  }
  tabs[index].checked = true;

  // Через for in (тоже самое)
  // for (let tab of tabs) {
  //   tab.checked = false;
  // }
  // tabs[index].checked = true;

  // Через forEach (тоже самое)
  // tabs.forEach((tab) => {
  //   tab.checked = false;
  // });
  // tabs[index].checked = true;
};

// Активный таб
// Через добавление класса active(если табы реализованы с помощью <button></button>)
// const activeTab = (index) => {
//   // Через for
//   for (let i = 0; i < tabs.length; i++) {
//     tabs[i].classList.remove("active");
//   }
//   tabs[index].classList.add("active");

//   // Через for in (тоже самое)
//   // for (let tab of tabs) {
//   //   tab.classList.remove("active");
//   // }
//   // tabs[index].classList.add("active");

//   // Через forEach (тоже самое)
//   // tabs.forEach((tab) => {
//   //   tab.classList.remove("active");
//   // });
//   // tabs[index].classList.add("active");
// };

// Вешаем обаботчик события клик на наши табы. Делаем и таб и слайдактивным
// Через forEach
// tabs.forEach((tab, tabIndex) => {
//   tab.addEventListener("click", () => {
//     index = tabIndex;
//     activeTab(index);
//     activeSlide(index);
//   });
// });

// Через for (тоже самое)
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    index = i;
    activeTab(index);
    activeSlide(index);
  });
}
