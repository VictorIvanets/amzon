import "./style.sass"

const items = [
  {
    logo: "src/img/photo_2025-05-14_09-00-06 (5).jpg",
    text: "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
    photo: "src/img/photo_2025-05-14_09-00-06.jpg",
    name: "Ethan Morgan",
    title: "Founder and CEO, Serene Living Products",
  },
  {
    logo: "src/img/photo_2025-05-14_09-00-06 (6).jpg",
    text: "Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",
    photo: "src/img/photo_2025-05-14_09-00-06 (3).jpg",
    name: "Olivia Haye",
    title: "Owner, Starlight Creations",
  },
  {
    logo: "src/img/photo_2025-05-14_09-00-06 (4).jpg",
    text: "Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.",
    photo: "src/img/photo_2025-06-08_08-35-34.jpg",
    name: "Alexander Reed",
    title: "Co-Founder, Opulent Living Group",
  },
  {
    logo: "src/img/photo_2025-05-14_09-00-06 (5).jpg",
    text: "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
    photo: "src/img/photo_2025-05-14_09-00-06.jpg",
    name: "Ethan Morgan",
    title: "Founder and CEO, Serene Living Products",
  },
  {
    logo: "src/img/photo_2025-05-14_09-00-06 (6).jpg",
    text: "Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",
    photo: "src/img/photo_2025-05-14_09-00-06 (3).jpg",
    name: "Olivia Haye",
    title: "Owner, Starlight Creations",
  },
  {
    logo: "src/img/photo_2025-05-14_09-00-06 (4).jpg",
    text: "Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.",
    photo: "src/img/photo_2025-06-08_08-35-34.jpg",
    name: "Alexander Reed",
    title: "Co-Founder, Opulent Living Group",
  },
]

function renderItems() {
  const sliderBox = document.querySelector(".sliderbox") as HTMLElement
  sliderBox.innerHTML = ""

  const cards = items.map(
    (item) => `
    <div class="sliderbox__item">
      <div class="sliderbox__item__logobox">
        <img src="${item.logo}" alt="Logo" />
      </div>
      <div class="sliderbox__item__reviewsbox">
        <h3 class="sliderbox__item__reviewsbox__review">
          ${item.text}
        </h3>
        <h3 class="sliderbox__item__reviewsbox__after">“</h3>
      </div>
      <div class="sliderbox__item__autorbox">
        <div class="sliderbox__item__wrapper">
          <div class="sliderbox__item__wrapper__photo">
            <img src="${item.photo}" alt="${item.name}" />
          </div>
          <h3 class="sliderbox__item__wrapper__info">
            ${item.name} <br />
            <span>${item.title}</span>
          </h3>
        </div>
      </div>
    </div>
  `
  )

  sliderBox.insertAdjacentHTML("beforeend", cards.join(""))
}

document.addEventListener("DOMContentLoaded", () => {
  renderItems()
  const sliderBox = document.querySelector(".sliderbox") as HTMLElement
  const leftArrow = document.querySelector(".arrow__left") as HTMLElement
  const rightArrow = document.querySelector(".arrow__right") as HTMLElement
  const dotPrev = document.getElementById("prew") as HTMLElement
  const dotNext = document.getElementById("next") as HTMLElement

  const getScrollAmount = () => {
    const firstCard = sliderBox.querySelector(".sliderbox__item") as HTMLElement
    if (!firstCard) return 0

    const cardStyles = window.getComputedStyle(firstCard)
    const cardWidth = firstCard.offsetWidth
    const marginRight = parseFloat(cardStyles.marginRight) || 0

    return cardWidth + marginRight - 1
  }

  rightArrow.addEventListener("click", () => {
    sliderBox.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth",
    })
  })

  leftArrow.addEventListener("click", () => {
    sliderBox.scrollBy({
      left: -getScrollAmount(),
      behavior: "smooth",
    })
  })

  dotPrev.addEventListener("click", () => {
    sliderBox.scrollTo({
      left: 0,
      behavior: "smooth",
    })
  })

  dotNext.addEventListener("click", () => {
    sliderBox.scrollTo({
      left: sliderBox.scrollWidth,
      behavior: "smooth",
    })
  })
})
